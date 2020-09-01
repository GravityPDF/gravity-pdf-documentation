---
title: "gfpdf_gravityforms_shortcode_attributes"
sidebar_label: "gfpdf_gravityforms_shortcode_attributes"
description: "Use this filter to modify the [gravitypdf] shortcode attribute properties before they are processed."
---

## Description 

Use this filter to modify the `[gravitypdf]` shortcode attribute properties before they are processed.

## Parameters 

### $attributes | array
*  The current shortcode attributes being processed. By default these include: `id`, `text`, `type`, `class`, `entry` and `print`. [See our shortcode documentation](user-shortcodes.md#shortcode-attributes) for more details on what each of these attributes do. 

## Usage 

This snippet shows you how to target a specific PDF's shortcode and include a custom class name:

```
add_filter( 'gfpdf_gravityforms_shortcode_attributes', function( $attributes ) {

	/* Only modify the shortcode attributes from a specific PDF */
	if ( '51281289afj212' == $attributes['id'] ) {
		$attributes['class'] .= ' prefix-custom-css-class-name';
	}

	return $attributes;
} );
```
 
## Source Code 

This filter is located in the `Model_Shortcodes::gravitypdf()` method of `/src/model/Model_Shortcodes.php`.