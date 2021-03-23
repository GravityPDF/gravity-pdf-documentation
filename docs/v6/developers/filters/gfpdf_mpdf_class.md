---
title: "gfpdf_mpdf_class"
sidebar_label: "gfpdf_mpdf_class"
description: "This filter can be used to include additional content directly in your PDF, or override an existing PDF settings Gravity PDF defaults to."
---

## Description 

This filter can be used to include additional content directly in your PDF, or override any existing PDF settings Gravity PDF defaults to. This filter is run after the PDF template's HTML is loaded into mPDF and right before the document is generated. If you want to change any of mPDF's rendering settings, you should use the [`gfpdf_mpdf_init_class`](gfpdf_mpdf_init_class.md) filter instead, as it gives you access to the class right after being initialised.

## Parameters 

### $mpdf | object
*  The initialised `mPDF` class that handles the PDF generation

### $form | array
*  The current Gravity Form array

### $entry | array 
*  The raw Gravity Form Entry array.

### $settings | array
*  The current PDF settings being processed

### $Helper_PDF | object
*  The initialised `\GFPDF\Helper\Helper_PDF` class

## Usage 

The snippet below will output additional debugging information to the end of the PDF when WordPress has debugging mode enabled:

```
add_filter( 'gfpdf_mpdf_class', function( $mpdf, $form, $entry, $settings, $Helper_PDF ) {

	/* You might want to include additional debugging information if WP_DEBUG is true */
	if( defined( 'WP_DEBUG' ) && true === WP_DEBUG ) {
		$mpdf->WriteHTML( 'Debug Information: ...' );
	}

	return $mpdf;

}, 10, 5 );
```

You might also like to change the display mode from the 'fullpage' setting we default to:

```
add_filter( 'gfpdf_mpdf_class', function( $mpdf, $form, $entry, $settings, $Helper_PDF ) {

	/**
	 * Let's change the PDF display mode from fullpage to fullwidth
	 *
	 * We could have called $mpdf->SetDisplayMode( 'fullwidth', 'continuous' ); directly, but since we have a public
	 * method available in $Helper_PDF that does just that we'll use it instead.
	 */
	$Helper_PDF->set_display_mode( 'fullwidth' );

	return $mpdf;

}, 10, 5 );
```

## Source Code 

This filter is located in the `Helper_PDF::generate()` method of `/src/helper/Helper_PDF.php`.