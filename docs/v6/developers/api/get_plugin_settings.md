---
title: "Gravity PDF API – get_plugin_settings()"
sidebar_label: "get_plugin_settings()"
description: "When called this method returns the existing global PDF plugins settings. "
---

## Description 

When called this method [returns the existing global PDF plugins settings](global-settings.md).

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### array
* Returns an array of the global PDF plugin settings

## Usage 

This following snippet retrieves the global PDF settings and read the `default_pdf_size` option:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        $settings         = GPDFAPI::get_plugin_settings();
        $default_pdf_size = ( isset( $settings['default_pdf_size'] ) ) ? $settings['default_pdf_size'] : '';
    }
} );
```

## Source Code 

This method is located in `api.php`.
