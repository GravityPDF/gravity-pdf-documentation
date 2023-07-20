---
title: "gfpdf_field_product_value"
sidebar_label: "gfpdf_field_product_value"
description: ""
---

## Description

This filter allows the default Product table displayed at the bottom of Core and Universal templates to be modified.

## Version

This filter was introduced in Gravity PDF 5.1.0

## Parameters

### $html | string
* The default HTML mark-up generated for the product table

### $products | array
* An array containing two keys:
  1. `products`: an array of the purchased products/options for this entry
  2. `products_totals`: an array with the subtotal, shipping, and grand totals

### $field | \GF_Field
* N/A: there isn't one specific field associated with the product table and this value can be ignored

### $form | array
*  The current Gravity Forms array

### $entry | array
*  The raw Gravity Forms Entry array.

## Usage

The following snippet will remove the total rows from the order table:

```php
add_filter( 'gfpdf_field_product_value', function( $html, $products, $field, $form, $entry ) {
	$qp   = new \GFPDF\Helper\Helper_QueryPath();
	$html = $qp->html5($html)
		->find('.totals')
		->parent()
		->remove()
		->top( 'html' )
		->innerHTML5();

	return $html;
}, 10, 5 );
```

This snippet removes all prices from the product table and the totals, leaving only the product name and quantity:

```php
add_filter( 'gfpdf_field_product_value', function( $html, $products, $field, $form, $entry ) {
	$qp   = new \GFPDF\Helper\Helper_QueryPath();
	$html = $qp->html5( $html )
	           ->find( 'tr > *:nth-child(3), tr > *:nth-child(4)' )
	           ->remove()
	           ->top( 'html' )
	           ->find( '.totals' )
	           ->parent()
	           ->remove()
	           ->top( 'html' )
	           ->innerHTML5();

	return $html;
}, 10, 5 );
```

## Source Code

This filter is located in the `Field_Products.php` file in the `/src/Helper/Fields/` directory.
