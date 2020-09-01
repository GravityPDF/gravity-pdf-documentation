---
title: "gfpdf_pre_generate_and_save_pdf"
sidebar_label: "gfpdf_pre_generate_and_save_pdf"
description: ""
---



## Description 

This action can be used to run a task or change a setting prior to the PDF being generated and saved [using the API](create_pdf.md). If you change the PDF settings on the fly, [you should use the `gfpdf_post_generate_and_save_pdf` action](gfpdf_post_generate_and_save_pdf.md) to clean up your filter(s). 

## Version 

This action was introduced in Gravity PDF 4.5.

## Parameters 

### $form | array
*  The Gravity Forms form array

### $entry | array
*  The Gravity Form entry array

### $settings | array
*  The current Gravity PDF settings array

## Usage 

```
add_action( 'gfpdf_pre_generate_and_save_pdf', function( $form, $entry, $settings ) {
   add_filter( 'gfpdf_mpdf_class', 'prefix_modify_the_mpdf_object' );
}, 10, 3 );

add_action( 'gfpdf_post_generate_and_save_pdf', function( $form, $entry, $settings ) {
   remove_filter( 'gfpdf_mpdf_class', 'prefix_modify_the_mpdf_object' );
}, 10, 3 );
```

## Source Code 

This action is located in the `create_pdf()` method of `/api.php`.