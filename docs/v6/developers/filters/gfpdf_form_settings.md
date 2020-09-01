---
title: "gfpdf_form_settings"
sidebar_label: "gfpdf_form_settings"
description: "This filter is used to add new fields to the General tab of the contextual PDF form settings. It handles validation, sanitising and saving automatically."
---

## Description 

This filter can be used to add new fields to the [General settings tab for individual PDFs](../../users/setup-pdf.md#general-tab). It's basically a Fields API and all validation, sanitising and saving is handled automatically for you.

## Parameters 

### $fields | array
*  An associative array that includes a breakdown of the field information. We go into more detail about what each field configuration setting does [in our custom PDF configuration guide](../template-configuration-and-image.md#custom-fields).

## Usage 

The following sample shows you how to add two new fields to the General tab of the contextual PDF settings pages:

```
add_filter( 'gfpdf_form_settings', function( $fields ) {

   /**
    * Ensure you prefix the array key and ID to prevent any conflicts
    */

    /* Add a colour picker to the General PDF Settings page */
    $fields['prefix_border_colour'] = array(
        'id'   => 'prefix_border_colour',
        'name' => __('Field Border Colour', 'prefix-text-domain' ),
        'type' => 'color',
        'desc' => __('Control the colour of the field border.', 'prefix-text-domain' ),
        'std'  => '#CCCCCC'
    );

    /* Add a Radio button to the General PDF Settings page */
    $fields['prefix_my_custom_radio'] = array(
        'id'      => 'prefix_my_custom_radio',
        'name'    => 'My Custom Radio',
        'desc'    => 'This is my field description',
        'type'    => 'radio',
        'options' => array(
            'Yes'     => __( 'Yes', 'prefix-text-domain' ),
            'No'      => __( 'No', 'prefix-text-domain' ),
        ),
        'std'     => __( 'No', 'prefix-text-domain' ),
    );

	return $fields;
} );

```

The following snippet shows you how to change the label of an existing field:

```
add_filter( 'gfpdf_form_settings', function( $fields ) {

	if ( isset( $fields['name'] ) ) {
		$fields['name']['name'] = __( 'PDF Name', 'prefix-text-domain' );
	}

	return $fields;
} );
```

## Source Code 

This filter is located in the `Helper_Options_Fields::get_registered_fields()` method of `/src/helper/Helper_Options_Fields.php`.