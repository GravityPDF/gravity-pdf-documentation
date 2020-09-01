---
title: "gfpdf_enable_master_password_field"
sidebar_label: "gfpdf_enable_master_password_field"
description: ""
---



## Description 

Use this filter to enable the PDF Master Password in the Advanced tab when the [Security option is enabled](setup-pdf.md#pdf-security).

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $enable | boolean
*  Return true to show the Master Password field in the UI

## Usage 

Use the following code to enable the field:

```
add_filter( 'gfpdf_enable_master_password_field', function( $enable, $settings ) {
	return true;
}, 10, 2 );
```

## Source Code 

This filter is located in the `Helper_Options_Field.php` files in the `/src/helper/` directory.