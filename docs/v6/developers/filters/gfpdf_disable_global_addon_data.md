---
title: "gfpdf_disable_global_addon_data"
sidebar_label: "gfpdf_disable_global_addon_data"
description: ""
---



## Description 

By default, Gravity PDF will include the aggregate data for Survey / Poll / Quiz fields for all entries in your Gravity Form. When you have a lot of entries this can take considerable time to process. This filter allows you to disable this functionality.

## Version 

This filter was added in Gravity PDF 5.1.

## Parameters 

### $disable | bool
*  Set to "true" to disable global add-on data

### $form | array
*  The current Gravity Forms form array

### $options | array
*  The global query options to poll for the data

### $fields | array 
*  The Gravity Forms fields we are polling data for

## Usage 

This snippet will show you how to disable the aggregate data for all PDFs:

```
add_filter( 'gfpdf_disable_global_addon_data', '__return_true' );
```

This snippet will show you how to disable the aggregate data for all PDFs of a particular Gravity Form:

```
add_filter( 'gfpdf_disable_global_addon_data', function( $disable, $form, $options, $fields ) {
    if ( $form['id'] === 5 ) {
        return true;
    }

    return $disable;
}, 10, 4 );
```

## Source Code 

This filter is located in the `Model_PDF:get_addon_global_data()` method of `/src/model/Model_PDF.php`.