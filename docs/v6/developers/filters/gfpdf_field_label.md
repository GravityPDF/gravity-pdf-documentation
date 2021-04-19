---
title: "gfpdf_field_label"
sidebar_label: "gfpdf_field_label"
description: ""
---



## Description 

Use this filter to dynamically change field labels in the Core and Universal PDF templates.

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $label | string
*  The current label to be displayed in the PDF

### $field | array
*  The current field being processed

### $entry | array
*  The Gravity Forms entry array

## Usage 

The following code will display a field's admin label if it exists, otherwise fall back to the standard label:

```
add_filter( 'gfpdf_field_label', function( $label, $field, $entry ) {
	return ( strlen( $field->adminLabel ) > 0 ) ? $field->adminLabel : $label;
}, 10, 3 );
```

You can also target specific field types:

```
add_filter( 'gfpdf_field_label', function( $label, $field, $entry ) {
	if( $field->type === 'text' ) {
		return 'Text Label';
	}

	return $label;
}, 10, 3 );
```

Or an individual field:

```
add_filter( 'gfpdf_field_label', function( $label, $field, $entry ) {
	if( $field->id === 20 ) {
		return 'Field #20 Label';
	}

	return $label;
}, 10, 3 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Fields.php` files in the `/src/helper/abstract/` directory.