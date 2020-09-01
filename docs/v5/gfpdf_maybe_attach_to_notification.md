---
title: "gfpdf_maybe_attach_to_notification"
sidebar_label: "gfpdf_maybe_attach_to_notification"
description: ""
---



## Description 

Use this filter to dynamically attach or exclude a PDF from the notification being processed.

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $attach | boolean
*  Return `true` to attach the PDF to the current notification, or `false` otherwise.

### $notification | array
*  The current Gravity Forms notification being processed

### $settings | array
*  The current PDF settings being processed

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The Gravity Forms array

## Usage 

The following will include all generated PDFs with all Gravity Forms notifications:

```
add_filter( 'gfpdf_maybe_attach_to_notification', function( $attach, $notification, $settings, $entry, $form ) {
	return true;
}, 10, 5 );
```

The above isn't really useful though. The below sample will attach any PDF with a name containing the word 'Submission' to any Gravity Form notification on form #5:

```
add_filter( 'gfpdf_maybe_attach_to_notification', function( $attach, $notification, $settings, $entry, $form ) {
	if ( $form['id'] === 5 && strpos( $settings['name'], 'Submission' ) !== false ) {
		return true;
	}

	return $attach;
}, 10, 5 );
```

## Source Code 

This filter is located in the `Model_PDF::maybe_attach_to_notification()` method in `/src/model/Model_PDF.php`.