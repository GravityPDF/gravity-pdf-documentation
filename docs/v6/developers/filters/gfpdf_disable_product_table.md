---
title: "gfpdf_disable_product_table"
sidebar_label: "gfpdf_disable_product_table"
description: ""
---



## Description 

By default, Gravity PDF will group products in a table at the end of a PDF. This filter allows you hide that table in the PDF.

## Version 

This filter was added in Gravity PDF 5.1.

## Parameters 

### $disable | bool
*  Set to "true" to disable global add-on data

### $entry | array
*  The current Gravity Forms entry array

### $form | array
*  The current Gravity Forms form array

### $config | array
*  The current PDF configuration

### $products | array 
*  The Field_Products object

## Usage 

This snippet will show you how to disable the Product table in PDFs:

```
add_filter( 'gfpdf_disable_product_table', '__return_true' );
```

This snippet will show you how to disable the Product table in PDFs for a particular Gravity Form:

```
add_filter( 'gfpdf_disable_product_table', function( $disable, $entry, $form, $config, $products ) {
    if ( $form['id'] === 5 ) {
        return true;
    }

    return $disable;
}, 10, 5 );
```

## Source Code 

This filter is located in the `View_PDF:generate_html_structure()` method of `/src/view/View_PDF.php`.