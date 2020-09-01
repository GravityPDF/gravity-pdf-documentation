---
title: "gfpdf_capabilities"
sidebar_label: "gfpdf_capabilities"
description: ""
---



## Description 

This filter can be used to add new capabilities to the [user restrictions global setting](../../users/global-settings.md#user-restriction). By default all Gravity Form capabilities and all active WordPress capabilities are included.

## Parameters 

### $capabilities \| array
* The multidimensional associative array that holds the list of capabilities.

## Usage 

This snippet adds a new group to our *User Restrictions* global setting which includes three capabilities:

```
    add_action( 'gfpdf_capabilities', function( $capabilities ) {

        /* Ensure your capabilities are correctly registered with WordPress */
        $capabilities[ __( '3rd Party Plugin', 'prefix-text-domain' ) ] = array(
            'capability_1',
            'capability_2',
            'capability_3',
        );

        return $capabilities;
    } );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::get_capabilities()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.
