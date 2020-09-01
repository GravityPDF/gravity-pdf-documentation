---
title: "gfpdf_registered_fields"
sidebar_label: "gfpdf_registered_fields"
description: "This filter contains the full array of all our different Gravity PDF sections and their associative field information. "
---

## Description 

This filter contains the full array of all our different Gravity PDF sections and their associative field information. It combines the output from filters like [`gfpdf_settings_general`](gfpdf_settings_general.md) and [`gfpdf_settings_tools`](gfpdf_settings_tools.md) into a single array. This filter is very useful if you want to make changes to multiple section fields at the same time or need to add multiple fields to different sections. 

## Parameters 

### $gfpdf_settings | array
*  An associative array that includes a breakdown of each section available in Gravity PDF. These sections contain another associative array which lists of the fields for a section. For more details about how fields are structured in the configuration [review our custom PDF configuration guide](template-configuration-and-image.md#custom-fields).

## Usage 

This snippet shows how you can output fields to multiple sections of the Gravity PDF UI:

```
add_filter( 'gfpdf_registered_fields', function( $gfpdf_settings ) {

   /**
    * Ensure you prefix the array key and ID to prevent any conflicts
    */

   if ( isset( $gfpdf_settings['general'] ) ) {
   		$gfpdf_settings['general']['prefix_border_colour'] = array(
	        'id'   => 'prefix_border_colour',
	        'name' => __('Field Border Colour', 'prefix-text-domain' ),
	        'type' => 'color',
	        'desc' => __('Control the colour of the field border.', 'prefix-text-domain' ),
	        'std'  => '#CCCCCC'
    	);
   }

   if ( isset( $gfpdf_settings['form_settings'] ) ) {
		$gfpdf_settings['form_settings']['prefix_my_custom_radio'] = array(
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
    }

    return $gfpdf_settings;
} );

```

## Source Code 

This filter is located in the `Helper_Options_Fields::get_registered_fields()` method of `/src/helper/Helper_Options_Fields.php`.