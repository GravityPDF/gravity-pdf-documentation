---
title: "gfpdf_mpdf_post_init_class"
sidebar_label: "gfpdf_mpdf_post_init_class"
description: "Modify the mPDF settings when the object is initialised. Use this filter to change the default configuration settings for mPDF."
---

## Description 

This filter gives you access to the mPDF object after the initial PDF setup code has finished running, and before the template HTML has been generated/loaded.

:::caution
If using a Core or Universal PDF template, writing content directly to the PDF using this filter can break the Header and Footer display.
:::

## Version 

This filter was introduced in Gravity PDF 5.1.5.

## Parameters 

### $mpdf | object
*  The initialised `mPDF` class that handles the PDF generation

### $form | array
*  The current Gravity Forms array

### $entry | array 
*  The raw Gravity Forms Entry array.

### $settings | array
*  The current PDF settings being processed

### $Helper_PDF | object
*  The initialised `\GFPDF\Helper\Helper_PDF` class

## Usage 

Write content directly to the PDF:

``` 
add_filter( 'gfpdf_mpdf_init_class', function( $mpdf, $form, $entry, $settings, $Helper_PDF ) {
    $mpdf->WriteHTML( 'This is included right at the beginning of the document...' );

	return $mpdf;

}, 10, 5 );
```

## Source Code 

This filter is located in the `Helper_PDF::begin_pdf()` method of `/src/helper/Helper_PDF.php`.