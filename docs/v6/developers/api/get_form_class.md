---
title: "Gravity PDF API – get_form_class()"
sidebar_label: "get_form_class()"
description: "While Gravity Forms provides its own API, we wanted to abstract that functionality and really fine tune the methods we needed."
---

## Description 

While [Gravity Forms provides its own API](https://docs.gravityforms.com/api-functions/), we wanted to abstract that functionality and really fine tune the methods we needed (we don't implement everything in the Gravity Forms API). We recommend reviewing the `src/helper/Helper_Form.php` file for full details.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### \\GFPDF\\Helper\\Helper\_Form \| object
* The form class

## Usage 

This snippet shows how to access our form class and get a Gravity Form:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF form class */
        $gform = GPDFAPI::get_form_class();

        /* You could use GFAPI::get_form() but we found performance problems when called multiple times */
        $form = $gform->get_form( 10 ); /* 10 is the form ID we want to get */
    }
} );
```

## Source Code 

This method is located in `api.php`, and the misc class can be found in `src/helper/Helper_Form.php`.
