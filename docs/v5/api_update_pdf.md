---
title: "Gravity PDF API – update_pdf()"
sidebar_label: "update_pdf()"
description: "This method allows you to update an existing PDF's settings. If you are using data provided by the user ensure you validate and sanitize everything."
---

## Description 

This method allows you to update an existing PDF's settings. If you are using data provided by the user **ensure you validate and sanitize everything** as we don't do it for you.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $form\_id \| integer
* The Gravity Form ID

### $pdf\_id \| string
* The PDF internal identifier (found in the `pid` URL parameter when viewing individual PDF settings in the admin area)

### $settings \| array
* The PDF settings you are updating to. This settings array will replace ALL current PDF settings.

## Return 

### boolean
* True on success, false on failure

## Usage 

The following snippet shows you how to retrieve a PDF's existing settings and update the name:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        /* Get the individual PDF config */
        $pid = '56c14c955d989';
        $pdf  = GPDFAPI::get_pdf( 2, $pid );

        $pdf['name'] = 'New PDF Name';

        if( GPDFAPI::update_pdf( 2, $pid, $pdf ) ) {
            //PDF updated successfully
        }
    }
} );
```

For the full list of settings available see the `form_settings`, `form_settings_appearance` and `form_settings_advanced` arrays in the `Helper_Options_Fields::get_registered_fields()` method.

## Source Code 

This method is located in `api.php`.
