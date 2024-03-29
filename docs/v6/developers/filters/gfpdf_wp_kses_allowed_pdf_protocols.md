---
title: "gfpdf_wp_kses_allowed_pdf_protocols"
sidebar_label: "gfpdf_wp_kses_allowed_pdf_protocols"
description: ""
---

## Description

To improve security, [in Gravity PDF 6.4 we introduced a number of changes to how templates get rendered](https://gravitypdf.com/news/gravity-pdf-6-4-a-focus-on-security/). To that end, all HTML mark-up generated by Gravity PDF in Core and Universal templates is now sanitizing by a customized `wp_kses()` function.

Use this filter to modify the allowed file protocols supported in PDFs eg. `http://` or `data`.

## Version

This filter was introduced in Gravity PDF 6.4.2

## Parameters

### $tags | array
* An array of allowed protocols used in links or images

## Usage

Remove support for the `ftp` protocol:

```
add_filter( 'gfpdf_wp_kses_allowed_pdf_protocols', function( $protocols ) {
    $match = array_search( 'ftp', $protocols, true );
    if ( $match !== false ) {
        unset( $protocols[ $match ] );
    }
	
	return $protocols;
} );
```

## Source Code

This filter is located in the `Kses.php` files in the `/src/Statics/` directory.
