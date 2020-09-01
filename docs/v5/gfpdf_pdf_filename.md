---
title: "gfpdf_pdf_filename"
sidebar_label: "gfpdf_pdf_filename"
description: ""
---

## Description 

Use this filter to dynamically change the name of your saved PDF file. This is useful if you cannot accomplish the filename you want using Gravity Forms merge tags alone, or if you need to conditionally change the filename based on a user's response. 

## Parameters 

### $name | string
*  The current PDF filename

### $form | array
*  The current Gravity Form array

### $entry | array
*  The raw Gravity Form Entry array.

### $settings | array
*  The current PDF settings being processed

## Usage 

This snippet will change the PDF name using a custom date format:

```
add_action( 'gfpdf_pdf_filename', function( $name, $form, $entry, $settings ) {

	/* Only change the name of a specific PDF (we don't want all of them to use this new name ) */
	if( '56c14c955d989' == $settings['id'] ) {
		/* Pull the first 10 characters from the $entry['date_created'] string which contains the yyyy-mm-dd format we want */
		$year_month_date = substr( $entry['date_created'], 0, 10 );

		/**
		 * Do NOT include the .pdf extension
		 * Note: Mergetags will not be processed if included at this stage. Use the $entry array instead.
		 */
		return "Filename_{$entry[1]}_{$year_month_date}";
	}

	return $name;
}, 10, 4 );
```

You might also like to dynamically change the PDF name based on a response the user provided:

```
add_action( 'gfpdf_pdf_filename', function( $name, $form, $entry, $settings ) {

	/* Only change the name of a specific PDF (we don't want all of them to use this new name ) */
	if( '56c14c955d989' == $settings['id'] ) {

		/* Let's assume field #1 is a select box and check for appropriate responses */
		switch( $entry[1] ) {
			case 'New York':
				return 'New York, New York';
			break;

			case 'California':
				return 'California, Sacramento';
			break;

			default:
				return 'The Road to Nowhere';
			break;
		}
	}

	return $name;
}, 10, 4 );
```

## Source Code 

This filter is located in the `Model_PDF::get_pdf_name()` method of `/src/model/Model_PDF.php`.