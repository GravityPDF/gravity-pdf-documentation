---
title: "gfpdf_container_skip_fields"
sidebar_label: "gfpdf_container_skip_fields"
description: ""
---



## Description 

Field types that are included will be automatically placed on a new row in Core and Universal PDFs. If you'd like to enable/disable column support for a field, include it in this list. 

By default `page`, `section`, and `html` fields are skipped.

## Version 

This filter was introduced in Gravity PDF 4.4.

## Parameters 

### $skipped_fields | array
*  A list of Gravity Forms field types to skip

## Usage 

Enable column support for HTML field types:

```language-php
add_filter( 'gfpdf_container_skip_fields', function( $items ) {
	return [ 'page', 'section' ];
} );
```

Prevent Name fields from being displayed in a column:

```language-php
add_filter( 'gfpdf_container_skip_fields', function( $items ) {
	$items[] = 'name';

        return $items;
} );
```

## Source Code 

This filter is located in the `Helper_Field_Container::__construct()` method of `/src/helper/Helper_Field_Container.php`.