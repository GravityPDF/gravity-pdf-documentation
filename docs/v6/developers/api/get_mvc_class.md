---
title: "Gravity PDF API – get_mvc_class()"
sidebar_label: "get_mvc_class()"
description: "If you need direct access to our Model, View or Controller classes this method will allow you to get the original class."
---

## Description 

If you need direct access to our Model, View or Controller classes, this method will allow you to get the original class. This is useful when you want to remove any action or filters set, or to call a method not provided through the API.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### object \| boolean
* Will return your object if found, otherwise false.

## Usage 

This snippet shows you how to remove an action or filter registered by Gravity PDF:

```
add_action( 'admin_init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        $model = GPDFAPI::get_mvc_class( 'Model_PDF' );
        remove_filter( 'gfpdf_pdf_middleware', [ $model, 'middle_public_access' ] );
    }
} );
```

## Source Code 

This method is located in `api.php`, model classes are found in `src/model/`, view classes are in `src/view/` and controller classes are in `src/controller/`.
