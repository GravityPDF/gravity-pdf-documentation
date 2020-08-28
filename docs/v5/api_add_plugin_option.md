---
title: "Gravity PDF API – add_plugin_option()"
sidebar_label: "add_plugin_option()"
description: "This method allows you to add a new global Gravity PDF setting. Usually you'll want to call GPDFAPI::update_plugin_option() instead. "
---

## Description 

This method allows you to add a new global Gravity PDF setting. If the option key already exists [a `WP_Error` is returned](https://codex.wordpress.org/Class_Reference/WP_Error). Usually you'll want to call [`GPDFAPI::update_plugin_option()`](/v5/api_update_plugin_option) instead.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $key \| string
* The global PDF setting ID. Best to prefix this value to prevent conflict.

### $value \| mixed
* What ever value you want to store

## Return 

### boolean \| WP\_Error
* True on success, false if database failed to update and [`WP_Error`](https://codex.wordpress.org/Class_Reference/WP_Error) if the `$key` already exists.

## Usage 

The following snippet shows you how to add a new PDF global option and correctly handle any errors:

```
    add_action( 'init', function() {
        if ( class_exists( 'GPDFAPI' ) ) {
            $option = GPDFAPI::add_plugin_option( 'prefix_option_name', 'My Value' );

            if( true === $option ) {
                // Option Successfully Added
            } elseif( is_wp_error( $option ) ) {
                // Option key already exists 
            } else {
                // There was a problem updating the database with your new option
            }
        }
    } );
```

## Source Code 

This method is located in `api.php`.
