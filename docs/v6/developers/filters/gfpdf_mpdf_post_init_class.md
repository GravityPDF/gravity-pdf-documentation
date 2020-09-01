---
title: "gfpdf_mpdf_post_init_class"
sidebar_label: "gfpdf_mpdf_post_init_class"
description: "This filter can be used to modify the mPDF settings before any HTML has been processed, but after Gravity PDF sets up the initial object."
---



## Description 

This filter can be used to modify the mPDF settings before any HTML has been processed, but after Gravity PDF sets up the initial object. 

## Version 

This filter was introduced in Gravity PDF 5.1.5.

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

Use this filter to override any of the Gravity PDF default mPDF settings.

Below is a snippet to override the text direction in mPDF:

``` 
add_filter( 'gfpdf_mpdf_init_class', function( $mpdf, $form, $entry, $settings, $Helper_PDF ) {
	$mpdf->SetDirectionality( 'ltr' );

	return $mpdf;
}, 10, 5 );
```

## Source Code 

This filter is located in the `Helper_PDF::begin_pdf()` method of `/src/helper/Helper_PDF.php`.