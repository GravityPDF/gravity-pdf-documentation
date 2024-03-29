---
title: "gfpdf_form_settings_sanitize"
sidebar_label: "gfpdf_form_settings_sanitize"
description: "Gravity PDF does standard sanitization of form fields but you might like to include your own special processing for any form PDF fields you add. "
---

## Description

Gravity PDF does standard sanitization of form fields, but you might like to include your own special processing for any form PDF fields you add.

You can also use the `gfpdf_form_settings_sanitize_$type` filter, where `$type` refers to the field type – checkbox, select, etc.

## Parameters

### $value | mixed
*  The new value of the current field being processed

### $key | string
*  The ID of the field currently being processed

### $input | array
*  An array containing all the current fields that should be updated

### $field | mixed
*  The settings for the current field being processed

## Usage

This snippet shows you how to correctly sanitize your custom Gravity PDF field:

```
add_filter( 'gfpdf_form_settings_sanitize', function( $value, $key, $input, $field ) {

	/* Check if it's our custom field and return a blank array if the variable type isn't currently an array */
	if ( 'prefix_custom_field' === $key ) {
		if ( ! is_array( $value ) ) {
			return array();
		}
	}

	return $value;

}, 10, 4 );
```

## Source Code

This filter is located in the `Model_Form_Settings::settings_sanitize()` method of `/src/model/Model_Form_Settings.php`.
