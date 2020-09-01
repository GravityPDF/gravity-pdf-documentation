---
title: "gfpdf_form_data"
sidebar_label: "gfpdf_form_data"
description: ""
---



## Description 

Use this filter to include additional information in the `$form_data` array (which is [used extensively in custom PDF templates](developer-php-form-data-array.md)). While you can remove information added to this array we **strongly recommend against this**. Instead, only use it to add new information.

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $form_data | array
*  The processed Gravity Forms data in array format

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The Gravity Forms array

## Usage 

The following will include a new piece of data in the `['misc']` key:

```
add_filter( 'gfpdf_form_data', function( $form_data, $entry, $form ) {

	$form_data['misc']['custom_key'] = 'Information';

	return $form_data;
}, 10, 3 );
```

## Source Code 

This filter is located in the `Model_PDF::get_form_data()` method in `/src/model/Model_PDF.php`.