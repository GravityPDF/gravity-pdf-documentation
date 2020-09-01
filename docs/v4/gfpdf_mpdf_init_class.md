---
title: "gfpdf_mpdf_init_class"
sidebar_label: "gfpdf_mpdf_init_class"
description: "Modify the mPDF settings before any HTML has been processed. Usually you'll want to use this filter to change the default configuration settings for mPDF."
---

**Jump To Section**

* [Description](#description)
* [Parameters](#parameters)
* [Usage](#usage)
* [Source Code](#source-code)

### Description 

This filter can be used to modify the mPDF settings before any HTML has been processed. Usually you'll want to use this filter to change the default configuration settings for mPDF (found in `/vendor/blueliquiddesigns/mpdf/config.php`. We don't recommend writing directly to the PDF during this filter (`$pdf->WriteHTML()`) as in some cases it can break the automated header/footer support feature. 

### Parameters 

$mpdf | object
:    The initialised `mPDF` class that handles the PDF generation

$form | array
:    The current Gravity Form array

$entry | array 
:    The raw Gravity Form Entry array.

$settings | array
:    The current PDF settings being processed

$Helper_PDF | object
:    The initialised `\GFPDF\Helper\Helper_PDF` class

### Usage 

Gravity PDF has some very sane defaults for mPDF, but you may want to utilise one of their more advanced features or change the default settings. If so, this is the filter to use. 

Below is a snippet to enable the use of active form fields in PDFs. Keep in mind Gravity PDF does NOT support this feature and our support team will not be able to assist you with any problems you encounter.

``` 
add_filter( 'gfpdf_mpdf_init_class', function( $mpdf, $form, $entry, $settings, $Helper_PDF ) {

	/**
	 * Due to the large number of compatibility problems with active form fields in mPDF,
	 * Gravity PDF does not support them and they are disabled by default.
	 *
	 * Below is how you can turn this feature back on. Keep in mind our support team will not
	 * be able to assist if with any problems when this setting is active.
	 *
	 * For more information about active form fields in mPDF review the documentation
	 * http://mpdf.github.io/what-else-can-i-do/forms.html
	 */
	$mpdf->useActiveForms = true;

	return $mpdf;

}, 10, 5 );
```

### Source Code 

This filter is located in the `Helper_PDF::begin_pdf()` method of `/src/helper/Helper_PDF.php`.