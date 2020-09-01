---
title: "gfpdf_post_generate_and_save_pdf_notification"
sidebar_label: "gfpdf_post_generate_and_save_pdf_notification"
description: ""
---



## Description 

This action can be used to a task or clean-up settings changes after the PDF is generated and saved for notifications. [Usually used in conjunction with `gfpdf_pre_generate_and_save_pdf_notification`](gfpdf_pre_generate_and_save_pdf_notification.md)

## Version 

This action was introduced in Gravity PDF 4.5.

## Parameters 

### $form | array
*  The Gravity Forms form array

### $entry | array
*  The Gravity Form entry array

### $settings | array
*  The current Gravity PDF settings array

### #notification | array
*  The current notification being sent

## Usage 

```
add_action( 'gfpdf_post_generate_and_save_pdf_notification', function( $form, $entry, $settings, $notifications ) {
   remove_filter( 'gfpdf_mpdf_class', 'prefix_modify_the_mpdf_object' );
}, 10, 4 );

add_action( 'gfpdf_pre_generate_and_save_pdf_notification', function( $form, $entry, $settings, $notifications ) {
   add_filter( 'gfpdf_mpdf_class', 'prefix_modify_the_mpdf_object' );
}, 10, 4 );
```

## Source Code 

This action is located in the `notifications()` method of `/src/model/Model_PDF.php`.