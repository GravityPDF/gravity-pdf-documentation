---
title: "gfpdf_wp_kses_allowed_html"
sidebar_label: "gfpdf_wp_kses_allowed_html"
description: ""
---

## Description

To improve security, [in Gravity PDF 6.4 we introduced a number of changes to how templates get rendered](https://gravitypdf.com/news/gravity-pdf-6-4-a-focus-on-security/). To that end, all HTML mark-up generated by Gravity PDF in Core and Universal templates is now sanitizing by a customized `wp_kses()` function. 

Use this filter to modify the allowed HTML tags in any Core/Universal template.  

## Version

This filter was introduced in Gravity PDF 6.4.2

## Parameters

### $tags | array
* An array of allowed HTML tags and attributes for use in Core / Universal PDF templates. The correct format for `$tags` [can be found in the WordPress.org developer documentation on `wp_kses()`](https://developer.wordpress.org/reference/functions/wp_kses/#comment-694).

## Usage

Add support [for the `<formfeed>` mPDF control tag](https://mpdf.github.io/reference/html-control-tags/formfeed.html):

```
add_filter( 'gfpdf_wp_kses_allowed_html', function( $tags ) {

    $tags['formfeed'] = [
        'orientation'      => true,
        'type'             => true,
        'resetpagenum'     => true,
        'pagenumstyle'     => true,
        'suppress'         => true,
        'page-selector'    => true,
        'margin-left'      => true,
        'margin-right'     => true,
        'margin-top'       => true,
        'margin-bottom'    => true,
        'odd-header-name'  => true,
        'odd-footer-name'  => true,
        'odd-header-value' => true,
        'odd-footer-value' => true,
    ];
	
	return $tags;
} );
```

## Source Code

This filter is located in the `Kses.php` files in the `/src/Statics/` directory.