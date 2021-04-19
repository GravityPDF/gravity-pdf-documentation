---
title: "Gravity PDF API – delete_plugin_option()"
sidebar_label: "delete_plugin_option()"
description: "This method allows you to delete a global Gravity PDF setting. This is permanent and cannot be undone."
---

## Description 

This method allows you to deleted a global Gravity PDF setting. **This is permanent and cannot be undone**.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $key \| string
* The global PDF setting ID.

## Return 

### boolean
* True on success, false if database failed to update.

## Usage 

The following snippet shows you how to remove a PDF global option and correctly handle any errors:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        if( GPDFAPI::delete_plugin_option( 'prefix_option_name' ) ) {
            // Option Deleted
        } else {
            // There was a problem removing the option from the database
        }
    }
} );
```

## Source Code 

This method is located in `api.php`.
