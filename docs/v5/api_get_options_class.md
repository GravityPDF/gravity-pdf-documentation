---
title: "Gravity PDF API – get_options_class()"
sidebar_label: "get_options_class()"
description: "Our options class handles all the settings registration and display, as well as providing a full CRUD for our stored global and individual PDF settings."
---

## Description 

Our options class handles all the settings registration and display, as well as providing a full CRUD (create, read, update, delete) for our stored global and individual PDF settings. All the CRUD functionality is available directly through our API so you won't need to call it from the options class directly. For full details about utilising the options class, we recommend reviewing the `src/helper/abstract/Helper_Abstract_Options.php` file.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### \\GFPDF\\Helper\\Helper\_Options\_Fields \| object
* The options class

## Usage 

This snippet shows how to access our options class and get a list of Gravity PDF's supported paper size:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF options class */
        $options    = GPDFAPI::get_options_class();
        $paper_size = $options->get_paper_size();
        //Do what ever you want with the paper size array
    }
} );
```

## Source Code 

This method is located in `api.php`, and the options class can be found in `src/helper/abstract/Helper_Abstract_Options.php`.
