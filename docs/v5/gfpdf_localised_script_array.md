---
title: "gfpdf_localised_script_array"
sidebar_label: "gfpdf_localised_script_array"
description: ""
---

## Description 

The array returned by this filter gets passed directly to `wp_localize_script()`. You can use it to pass in additional values or modify existing values in the `GFPDF` JavaScript object which gets automatically included when the `gfpdf_js_settings` script is loaded.

## Parameters 

### $localised | array
*  An associative array that gets output in our `GFPDF` JavaScript object.

## Usage 

The following snippet can be used to change output of an existing record:

```language-php
add_filter( 'gfpdf_localised_script_array', function( $localised ) {

	/* Change the text of our successful update message */
	$localised['update_success'] = __( 'The update went well!', 'prefix-text-domain' );

	return $localised;
} );
```

You can also add new data to the array:

```language-php
add_filter( 'gfpdf_localised_script_array', function( $localised ) {

	/* Add a new record. Make sure you prefix it to prevent any conflict with existing array keys */
	$localised['prefix_alert_problem'] = __( 'Something went wrong with the custom functionality...', 'prefix-text-domain' );

	return $localised;
} );
```

## Source Code 

This filter is located in the `Helper_Data::get_localised_script_data()` method of `/src/helper/Helper_Data.php`.