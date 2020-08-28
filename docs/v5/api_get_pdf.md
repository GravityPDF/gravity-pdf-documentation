---
title: "Gravity PDF API – get_pdf()"
sidebar_label: "get_pdf()"
description: "This method will return an array containing an individual PDF's settings on a particular Gravity Form. "
---

## Description 

This method will return an array containing an individual PDF's settings on a particular Gravity Form.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $form\_id \| integer
* The Gravity Form ID

### $pdf\_id \| string
* The PDF internal identifier (found in the `pid` URL parameter when viewing individual PDF settings in the admin area)

## Return 

### array \| WP\_Error
* An array of the PDF settings will be returned on success, otherwise a [WP\_Error object](https://codex.wordpress.org/Class_Reference/WP_Error) on failure

## Usage 

This snippet shows you how to get an individual PDF configuration and do an active if it's currently active:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        /* Get the individual PDF config */
        $pdf  = GPDFAPI::get_pdf( 2, '56c14c955d989' );

        if( true === $pdf['active'] ) {
            //Do something if PDF is active
        } else {
            //Do something else if PDF is inactive
        }
    }
} );
```

## Source Code 

This method is located in `api.php`.
