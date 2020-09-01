---
title: "gfpdf_field_value"
sidebar_label: "gfpdf_field_value"
description: "Use this filter to non-permanently manipulate the entry information that's provided to your PDF."
---

## Description 

Use this filter to non-permanently manipulate the entry information that's provided to your PDF.

## Parameters 

### $value | mixed
*  The user's response to the current field

### $field | array
*  The Gravity Form field currently being processed

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The raw Gravity Form form array.
*  Added in Gravity PDF 4.4

### $class | array
*  The current PDF field class (see `/src/helper/fields/`)
*  Added in Gravity PDF 4.4

## Usage 

This snippet will show you how to target a specific field type and make changes to the user's response:

```
add_action( 'gfpdf_field_value', function( $value, $field, $entry, $form, $class ) {

	/* Check for textarea fields and indent the first line */
	if( 'textarea' == $field->type ) {
		$value = '     ' . $value;
	}

	return $value;

}, 10, 5 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Fields::get_value()` method of `/src/helper/abstract/Helper_Abstract_Fields.php`.