---
title: "gfpdf_core_template_fields_list"
sidebar_label: "gfpdf_core_template_fields_list"
description: ""
---

## Description 

This field can be used to create [new core PDF template fields](template-configuration-and-image.md#core-fields) and make them available to the PDF configuration.

## Parameters 

### $fields | array
*  The associative array which holds the field ID in the array key and the method/function which will get passed to PHP's `call_user_func` function. 

### $template_settings | array
*  The current template settings being run. [Read more about template configurations here](template-configuration-and-image.md#core-fields).

### $class | object
*  The current template's configuration class being processed.

## Usage 

This snippet shows how to leverage this filter to create a new core field and define that core field's settings:

```
add_action( 'gfpdf_core_template_fields_list', function( $fields, $template_settings, $class ) {
	$fields['prefix_custom_core_field'] = 'prefix_custom_core_field_function'; /* the value references our callback. Anything PHP's `call_user_func` function accepts can be passed here */

	return $fields;
}, 10, 3 );

/**
 * This is our callback function which includes our new field details
 * If a PDF template configuration passes `prefix_custom_core_field` as true in it's core array this field will now show on the PDF template tab
 */
function prefix_custom_core_field_function() {
	return array(
		'id' => 'prefix_custom_core_field',
		'name'    => __( 'Custom Field', 'prefix-text-domain' ),
		'type'    => 'radio',
		'options' => array(
			'Yes' => __( 'Yes', 'gravity-forms-pdf-extended' ),
			'No'  => __( 'No', 'gravity-forms-pdf-extended' ),
		),
		'std'     => __( 'No', 'gravity-forms-pdf-extended' ),
	);

	return $fields;
}
```

While this adds a new core field you still need to process the value when set. Use the [`gfpdf_core_template`](gfpdf_core_template.md) action to do this. 

## Source Code 

This filter is located in the `Model_Form_Settings::setup_core_custom_appearance_settings()` method of `/src/model/Model_Form_Settings.php`.