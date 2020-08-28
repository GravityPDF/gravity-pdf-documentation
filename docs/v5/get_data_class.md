---
title: "Gravity PDF API – get_data_class()"
sidebar_label: "get_data_class()"
description: "The Gravity PDF data class is a simple storage device for Gravity Forms data during the current PHP call – it's not persistent like a database."
---

## Description 

The Gravity PDF data class is a simple storage device for Gravity PDF data during the current PHP call – it's not persistent like a database. It uses [PHP's class overloading feature](http://php.net/manual/en/language.oop5.overloading.php) to dynamically set and get variables that we can access throughout all classes in our plugin.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### \\GFPDF\\Helper\\Helper\_Data \| object
* The data class

## Usage 

This snippet shows how to access any data Gravity PDF stored in our data class:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF data class */
        $data = GPDFAPI::get_data_class();

        /* Access the PDF working directory (i.e where the user template files are stored) */
        $working_directory_path = $data->template_location;
        $working_directory_url  = $data->template_location_url;
    }
} );
```

You can also store your own data and use it later:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF data class */
        $data = GPDFAPI::get_data_class();

        /* Set our own plugin data */
        $data->prefix_custom_field       = 'My Custom Field Info';
        $data->prefix_custom_field_array = array( 1, 2, 3 );
        $data->prefix_custom_field_class = new StdClass();
    }
} );
```

## Source Code 

This method is located in `api.php` and the data class can be found in `src/helper/Helper_Data.php`
