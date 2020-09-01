---
title: "gfpdf_form_add_pdf"
sidebar_label: "gfpdf_form_add_pdf"
description: "This filter can be used to add additional settings when a new PDF is created on a form. You can also change the existing user-selected settings if you wish."
---

## Description 

This filter can be used to add or edit settings when a new PDF is created using the [`GPDFAPI::add_pdf()`](api_add_pdf.md) method. Due to the way the software is architected this filter doesn't fire when a PDF is created via the UI. See the update PDF filters [see `gfpdf_form_update_pdf`](gfpdf_form_update_pdf.md) instead.

You also have the option to use the `gfpdf_form_add_pdf_$form_id` filter.

## Parameters 

### $pdf | array
*  The PDF settings

### $form_id | integer 
*  The current Gravity Form ID the PDF is being added to

## Usage 

In this snippet we're adding a new custom setting to the PDF settings:

```
add_action( 'gfpdf_form_add_pdf', function( $pdf, $form_id ) {
	$pdf['prefix_custom_setting'] = 'My Custom Setting';
	return $pdf;
}, 10, 2 );
```

You can also specifically target a form: 

```
add_action( 'gfpdf_form_add_pdf_2', function( $pdf ) { }, 10 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::add_pdf()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.