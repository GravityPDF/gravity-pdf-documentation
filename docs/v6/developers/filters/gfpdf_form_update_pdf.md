---
title: "gfpdf_form_update_pdf"
sidebar_label: "gfpdf_form_update_pdf"
description: "This filter can be used to add or edit settings when a PDF is updated – either via the UI or using the GPDFAPI::update_pdf() method."
---

## Description 

This filter can be used to add or edit settings when a PDF is updated – either via the UI or using the [`GPDFAPI::update_pdf()`](../api/update_pdf.md) method. Any changes made to the PDF settings using this filter will be permanently stored in the database. 

You also have the option to use the `gfpdf_form_update_pdf_$form_id` filter.

## Parameters 

### $pdf | array
*  The PDF settings

### $form_id | integer 
*  The current Gravity Form ID the PDF is being added to

### $pdf_id | string
*  The ID of the current PDF being processed

## Usage 

In this snippet we're first checking if the setting exists and, if it doesn't, adding it to our settings array:

```
add_action( 'gfpdf_form_update_pdf', function( $pdf, $form_id, $pdf_id ) {
	/* If the PDF doesn't contain this setting yet we'll set a default */
	if ( ! isset( $pdf['prefix_custom_setting'] ) ) {
		$pdf['prefix_custom_setting'] = 'My Custom Setting';
	}
	return $pdf;
}, 10, 3 );
```

You can also specifically target a form: 

```
add_action( 'gfpdf_form_update_pdf_2', function( $pdf, $form_id, $pdf_id ) { }, 10, 3 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::update_pdf()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.