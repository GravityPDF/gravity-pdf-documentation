---
title: "gfpdf_field_middleware"
sidebar_label: "gfpdf_field_middleware"
description: ""
---

## Description 

Middleware is a term used to define a bridge between two operations. In this case, our middleware is used as the bridge between our form fields and whether they should show up in our Core or Universal PDF templates. If a middleware filter returns `true` the field will be skipped.

By default we have five tests in place to determine if a field should be skipped. These include if the CSS class 'exclude' is added to the field, if the conditional logic passes, if the field is a product or HTML field or if it's apart of our blacklist – by default that is Captchas, Password and Page fields (Page fields are handled separately). 

This filter allows you to remove any of the existing middleware or add new conditions to determine if a field should be displayed. The important part to remember about working with the field middleware is that filters should only return `true` if the field should be skipped. If it should not be skipped you just return the `$action` to let the middleware process continue.

## Parameters 

### $action | boolean
*  Return `true` if the field should be skipped, `$action` otherwise.

### $field | GF_Field
*  The current field being processed

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The Gravity Forms array

### $config | array
*  The current settings for the PDF being generated

### $products | Field_Products
*  The special products object that handles the processing of product fields

### $blacklisted | array
*  A list of fields that should be skipped (handled in its own middleware)

## Usage 

This snippet shows you can how can remove existing field middleware. In this case we are removing the conditional logic checks we do on each field in the PDF:

```
add_action( 'init', function() {

	/* Get the Controller_PDF class so we can remove middleware filters */
	$pdf = GPDFAPI::get_mvc_class( 'Model_PDF' );

	remove_filter( 'gfpdf_field_middleware', [ $pdf, 'field_middle_conditional_fields' ], 10 );
} );
```

This snippet shows you how you can add your own restrictions and prevent Paragraph fields from being displayed:

```
add_filter( 'gfpdf_field_middleware', function( $action, $field, $entry, $form, $config, $products, $blacklisted ) {
	if ( $action === false ) {
		if ( $field->get_input_type() === 'textarea' ) {
			return true;
		}
	}

	return $action;
}, 10, 7 );
```

## Source Code 

This filter is located in the `generate_html_structure()` method of `/src/view/View_PDF.php`.