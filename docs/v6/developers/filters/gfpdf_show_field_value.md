---
title: "gfpdf_show_field_value"
sidebar_label: "gfpdf_show_field_value"
description: ""
---



## Description 

Checkboxes, Multiselect, Radio, Select and Product fields allow both labels and values to be set in the form Editor. By default, all core PDF templates will display a field's label instead of the value. Use this filter to show the field value instead.

## Version 

This action was introduced in Gravity PDF 4.1.

## Parameters 

### $show_value | boolean
*  Return true to display the value of radio, select, multiselect, checkbox and product fields in the core PDFs

### $field | Helper_Abstract_Fields object
*  The current field being processed
*  Added in Gravity PDF 5.1

### $items | array
*  The current field values
*  Added in Gravity PDF 5.1

## Usage 

Show value for all selected field types:

```
add_action( 'gfpdf_show_field_value', '__return_true' );
```

Show value for select field types only:

```
add_action( 'gfpdf_show_field_value', function( $show_value, $field = null, $items = null ) {
	if ( $field !== null && $field->get_input_type() === 'select' ) {
		return true;
	}

	return $show_value;
}, 10, 3 );

```

## Source Code 

This filter is located in the `Field_Checkbox.php`, `Field_Multiselect.php`, `Field_Radio.php`, `Field_Select.php` and `Field_Products.php` files in the `/src/helper/fields/` directory.