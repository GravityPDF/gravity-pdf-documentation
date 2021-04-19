---
title: "Gravity PDF API – get_plugin_option()"
sidebar_label: "get_plugin_option()"
description: "This method allows you to retrieve a single global Gravity PDF setting, or return a default if it's non-existent."
---

## Description 

This method allows you to retrieve a single global Gravity PDF setting, or return a default if it's non-existent (much like WordPress's `get_option()` function).

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $key \| string
* The global PDF setting name

### $default \| mixed \| optional
* What's returned if the `$key` doesn't exist. Defaults to an empty string.

## Return 

### mixed
* The PDF setting value (if any), otherwise the `$default` value.

## Usage 

The following snippet shows you how to retrieve the `default_pdf_size` global PDF option:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        $default_pdf_size = GPDFAPI::get_plugin_option( 'default_pdf_size' );
    }
} );
```

## Source Code 

This method is located in `api.php`.
