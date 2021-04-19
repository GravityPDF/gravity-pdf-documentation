---
title: "gfpdf_include_list_styles"
sidebar_label: "gfpdf_include_list_styles"
description: "Gravity PDF includes a global stylesheet which applies to all PDFs. This filter allows you to remove the list field styles for all or some of your PDFs."
---

## Description 

Gravity PDF includes a global stylesheet which applies to all PDFs. This filter allows you to remove the list field styles for all or some of your PDFs.

## Parameters 

### $active | boolean
*  Whether to show or remove the default list field styles

### $settings | array
*  The current PDF settings being processed.

## Usage 

This snippet shows you how to display the default list field CSS for all PDFs:

```
add_filter( 'gfpdf_include_list_styles', function( $active, $settings ) {
	return false;
}, 10, 2 );
```

This snippet shows you how to display the default list field CSS for a particular PDF:

```
add_filter( 'gfpdf_include_list_styles', function( $active, $settings ) {

	/* Display the list field styles for a specific PDF */
	if ( '51281289afj212' == $settings['id'] ) {
		$active = false;
	}

	return $active;
}, 10, 2 );
```
 
## Source Code 

This filter is located in the `/src/view/html/PDF/core_template_styles.php` file.