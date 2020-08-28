---
title: "Gravity PDF API – add_pdf()"
sidebar_label: "add_pdf()"
description: "This method allows you to create a new PDF on a Gravity Form. Just ensure you sanitise and validate any user input."
---

## Description 

This method allows you to create a new PDF on a Gravity Form. If you are inserting data provided by the user **ensure you validate and sanitize everything** as we don't do it for you.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $form\_id \| integer
* The Gravity Form ID

### $settings \| array
* The PDF settings that should be added

## Return 

### string \| boolean
* The new PDF ID on success, false on failure

## Usage 

This snippet shows the minimum settings that should be passed when adding a new PDF:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        /* Set up PDF settings */
        $settings = array(
            'name'     => 'API PDF',
            'template' => 'zadani',
            'filename' => 'Custom_Filename_{:2}',
        );

        /* Create a new PDF on form #2 */
        $pdf = GPDFAPI::add_pdf( 2, $settings );

        /* Check if PDF was successfully created */
        if( false !== $pdf ) {
            //Success! $pdf references the new PDF ID
        }
    }
} );
```

For the full list of settings available see the `form_settings`, `form_settings_appearance` and `form_settings_advanced` arrays in the `Helper_Options_Fields::get_registered_fields()` method.

## Source Code 

This method is located in `api.php`.
