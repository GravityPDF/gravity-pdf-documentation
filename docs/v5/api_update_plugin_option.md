---
title: "Gravity PDF API – update_plugin_option()"
sidebar_label: "update_plugin_option()"
description: "This method allows you to update a global Gravity PDF setting. If the option doesn't exist it will be added. "
---

**Jump To Section**

-   [Description](#description)
-   [Version](#version)
-   [Parameters](#parameters)
-   [Return](#return)
-   [Usage](#usage)
-   [Source Code](#source-code)

### Description [\#description](#description){#description}

This method allows you to update a global Gravity PDF setting. If the option doesn't exist it will be added.

### Version [\#version](#version){#version}

This method was introduced in Gravity PDF 4.0.

### Parameters [\#parameters](#parameters){#parameters}

$key \| string
* The global PDF setting ID. Best to prefix this value to prevent conflict.

$value \| mixed
* What ever value you want to store.

### Return [\#return](#return){#return}

boolean
* True on success, false if database failed to update.

### Usage [\#usage](#usage){#usage}

The following snippet shows you how to update a PDF global option and correctly handle any errors:

```
    add_action( 'init', function() {
        if ( class_exists( 'GPDFAPI' ) ) {
            $option = GPDFAPI::update_plugin_option( 'prefix_option_name', 'My Value' );

            if( true === $option ) {
                // Option Successfully Added
            } else {
                // There was a problem updating the database with your new option
            }
        }
    } );
```

### Source Code [\#source-code](#source-code){#source-code}

This method is located in `api.php`.
