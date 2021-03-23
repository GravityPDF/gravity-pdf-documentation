---
title: "Gravity PDF API – get_mvc_class()"
sidebar_label: "get_mvc_class()"
description: "If you need direct access to our Model, View or Controller classes this method will allow you to get the original class."
---

## Description 

If you need direct access to our Model, View or Controller classes, this method will allow you to get the original class. This is useful when you want to remove any action or filters we set, or to call a method we don't provide through the API.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### object \| boolean
* Will return your object if found, otherwise false.

## Usage 

This snippet will show you how to use our method to remove an action we set in the controller:

```
add_action( 'admin_init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get the Controller_Settings class so we can remove the  */
        $controller = GPDFAPI::get_mvc_class( 'Controller_Settings' );

        /* Remove the uninstaller HTML from our tools tab */
        remove_action( 'gfpdf_post_tools_settings_page', array( $controller->view, 'uninstaller' ), 5 );
    }
} );
```

## Source Code 

This method is located in `api.php`, model classes are found in `src/model/`, view classes are in `src/view/` and controller classes are in `src/controller/`.
