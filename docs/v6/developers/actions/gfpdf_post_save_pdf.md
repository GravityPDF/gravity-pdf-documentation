---
title: "gfpdf_post_save_pdf"
sidebar_label: "gfpdf_post_save_pdf"
description: "This action is fired right after a PDF is saved to disk. It allows you to copy the generated PDF to another location."
---

## Description

This action is run right after a PDF is saved to disk. It allows you to **copy the PDF** to another location (*do not move the PDF otherwise you'll break the PDF notifications*).

The action is triggered during form submission, when Notification emails are sent, when the [`GPDFAPI::create_pdf( $entry_id, $pdf_id )`](../api/create_pdf.md) API is used, or when the [Previewer add-on](http://gravitypdf.com/shop/previewer-add-on/) is used.

You can also use the `gfpdf_post_save_pdf_$form_id` action if needed.

## Parameters

### $pdf_path | string
*  The full path to the generated PDF

### $filename | string
*  The filename of the generated PDF

### $settings | array
*  The current PDF's settings

### $entry | array
*  The raw Gravity Forms Entry array.

### $form | array
*  The current Gravity Forms array

## Usage

This snippet shows you how to copy the generated PDF to a separate directory on your server. Keep in mind that unless the folder you copy to is placed outside the root website directory your PDFs will be publicly accessible from this new folder:

```
add_action( 'gfpdf_post_save_pdf', function( $pdf_path, $filename, $settings, $entry, $form ) {

	/* Only move PDFs from form #2 */
	if ( '2' == $form['id'] ) {
		/* The directory we want to copy our PDF to */
		$copy_to_dir = ABSPATH . 'PDFs/';

	        /* Create the directory if it doesn't exist */
	        if( ! is_dir( $copy_to_dir ) ) {
	        	wp_mkdir_p( $copy_to_dir );
	        }

		/* Ensure we get a unique filename for the directory we are copying to */
		$filename = wp_unique_filename( $copy_to_dir, $filename );

		/* Copy the PDF to the new directory */
		copy( $pdf_path, $copy_to_dir . $filename );
	}

}, 10, 5 );
```

You can also use the form-specific action and remove the IF statement:

```
add_action( 'gfpdf_post_save_pdf_2', function( $pdf_path, $filename, $settings, $entry, $form ) {
	/* The directory we want to copy our PDF to */
	$copy_to_dir = ABSPATH . 'PDFs/';

	/* Create the directory if it doesn't exist */
	if( ! is_dir( $copy_to_dir ) ) {
		wp_mkdir_p( $copy_to_dir );
	}

	/* Ensure we get a unique filename for the directory we are copying to */
	$filename = wp_unique_filename( $copy_to_dir, $filename );

	/* Copy the PDF to the new directory */
	copy( $pdf_path, $copy_to_dir . $filename );
}, 10, 5 );
```

You might also like to copy all PDFs to another directory and group them by their forms:

```
add_action( 'gfpdf_post_save_pdf', function( $pdf_path, $filename, $settings, $entry, $form ) {
	/* The directory we want to copy our PDF to */
	$copy_to_dir = ABSPATH . 'PDFs/' . $form['title'] . '/';

	/* Create the directory if it doesn't exist */
	if( ! is_dir( $copy_to_dir ) ) {
		wp_mkdir_p( $copy_to_dir );
	}

	/* Ensure we get a unique filename for the directory we are copying to */
	$filename = wp_unique_filename( $copy_to_dir, $filename );

	/* Copy the PDF to the new directory */
	copy( $pdf_path, $copy_to_dir . $filename );
}, 10, 5 );

```

If you don't want to run the action when the Previewer add-on is triggered, you can skip over it with the following:

```
add_action( 'gfpdf_post_save_pdf', function( $pdf_path, $filename, $settings, $entry, $form ) {

    /* Don't copy the PDF when the PDF Previewer is being used */
    if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
        return;
    }

	/* Only move PDFs from form #2 */
	if ( '2' == $form['id'] ) {
		/* The directory we want to copy our PDF to */
		$copy_to_dir = ABSPATH . 'PDFs/';

	        /* Create the directory if it doesn't exist */
	        if( ! is_dir( $copy_to_dir ) ) {
	        	wp_mkdir_p( $copy_to_dir );
	        }

		/* Ensure we get a unique filename for the directory we are copying to */
		$filename = wp_unique_filename( $copy_to_dir, $filename );

		/* Copy the PDF to the new directory */
		copy( $pdf_path, $copy_to_dir . $filename );
	}

}, 10, 5 );
```

## Source Code

This action is located in the `Model_PDF::generate_and_save_pdf()` method of `/src/model/Model_PDF.php`.
