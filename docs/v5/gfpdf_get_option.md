---
title: "gfpdf_get_option"
sidebar_label: "gfpdf_get_option"
description: ""
---

## Description 

This option allows you to override individual global PDF settings when they are accessed. 

You also have the option to use the `gfpdf_get_option_$option` filter, where `$option` is the global setting ID.

## Parameters 

### $value | mixed
*  The PDF settings

### $key | string
*  The current Gravity Form ID the PDF is being added to

### $default | mixed
*  The ID of the current PDF being processed

## Usage 

The following snippet shows how you can change a global PDF setting option:

```
add_action( 'gfpdf_get_option', function( $value, $key, $default ) {
	/* Let's change the default template value when it's requested */
	if( 'default_template' == $key ) {
		$value = 'rubix';
	}

	return $value;
}, 10, 3 );
```


You can also specifically target an option: 

```
add_action( 'gfpdf_get_option_default_template', function( $value, $key, $default ) {
	$value = 'rubix';
	return $value;
}, 10, 3 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::get_option()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.