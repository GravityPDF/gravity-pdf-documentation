---
title: "gfpdf_form_data_key_order"
sidebar_label: "gfpdf_form_data_key_order"
description: "Use this filter to change the order of array keys in the $form_data array."
---



## Description 

Use this filter to change the order of array keys in the `$form_data` array. 

## Version 

This filter was introduced in Gravity PDF 4.4.

## Parameters 

### $order | array
*  The array of `$form_data` keys in the exact order they should get displayed

## Usage 

This snippet will re-order the `misc` and `field` keys in the `$form_data` array.

```
add_filter( 'gfpdf_form_data_key_order', function( $order ) {
	/* Get the array key for the matching values */
	$search_key  = array_search( 'field', $order );
	$search_key2 = array_search( 'misc', $order );

	/* Remove the field array item from the $order */
	$fields      = array_splice( $order, $search_key, 1 );

	/* Insert the field array before the misc array item in the $order */
	array_splice( $order, $search_key2, 0, $fields );

	return $order;
} );
```

## Source Code 

This filter is located in the `Model_PDF::get_form_data()` method of `/src/model/Model_PDF.php`.