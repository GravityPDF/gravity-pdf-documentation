---
title: "gfpdf_update_option"
sidebar_label: "gfpdf_update_option"
description: "This option allows you to override individual global PDF settings when they are updated in the database. "
---

## Description 

This option allows you to override individual global PDF settings when they are updated in the database. 

You also have the option to use the `gfpdf_update_option_$option` filter, where `$option` is the global setting ID.

## Parameters 

### $value | mixed
*  The PDF settings

### $key | string
*  The current Gravity Form ID the PDF is being added to

## Usage 

The following snippet shows how you can change a global PDF setting option:

```
add_action( 'gfpdf_update_option', function( $value, $key ) {
	/* Let's change the default template value when it's requested */
	if( 'default_template' == $key ) {
		$value = 'rubix';
	}

	return $value;
}, 10, 2 );
```


You can also specifically target an option: 

```
add_action( 'gfpdf_update_option_default_template', function( $value, $key ) {
	$value = 'rubix';
	return $value;
}, 10, 2 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::update_option()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.