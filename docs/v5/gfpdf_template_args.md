---
title: "gfpdf_template_args"
sidebar_label: "gfpdf_template_args"
description: "This filter can be used to add to or modify the variables passed directly to PDF templates."
---

## Description 

This filter can be used to add to or modify [the variables passed directly to PDF templates](developer-first-custom-pdf.md#variables-available). It can be useful if you want to ensure custom data is available to all Gravity PDF templates, or all templates assigned to a particular Gravity Form.

## Parameters 

### $data | array
*  An associative array that includes all variables passed to PDF templates. The array gets passed to the PHP `extract()` function when your template is included so they are available as standard variables. 

### $entry | array
*  The raw Gravity Form Entry array.

### $settings | array
*  The current PDF configuration array.

### $form | array
*  The current Gravity Form array

## Usage 

The following snippet can be used to include new data to all our PDF templates:

```
add_filter( 'gfpdf_template_args', function( $data, $entry, $settings, $form ) {

	/* Add a new data record which can be accessed directly via $prefix_key from PDF templates */
	$data['prefix_key'] = 'my_value';

	return $data;
}, 10, 4 );
```

The following snippet can be used to include new data to a specific Gravity Forms's PDF templates:

```
add_filter( 'gfpdf_template_args', function( $data, $entry, $settings, $form ) {

	/* Only include this data on templates loaded on form #5 */
	if( 5 == $form['id'] ) {
		/* Add a new data record which can be accessed directly via $prefix_key from PDF templates */
		$data['prefix_key'] = 'my_value';
	}

	return $data;
}, 10, 4 );
```

## Source Code 

This filter is located in the `Helper_Misc::get_template_args()` method of `/src/helper/Helper_Misc.php`.