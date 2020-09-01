---
title: "gfpdf_pre_view_or_download_pdf"
sidebar_label: "gfpdf_pre_view_or_download_pdf"
description: ""
---



## Description 

This action can be used to run a task or change a setting prior to the PDF being generated for viewing or downloading, either [via a shortcode, merge tag](user-shortcodes.md) or [from the admin area](user-viewing-pdfs.md).

## Version 

This action was introduced in Gravity PDF 4.5.

## Parameters 

### $entry_id | int
*  The Gravity Forms Entry ID 

### $pdf_id | string
*  The Gravity PDF Settings ID

### $action | string
*  Either `view` or `download`

## Usage 

```
add_action( 'gfpdf_pre_view_or_download_pdf', function( $entry_id, $pdf_id, $action ) {
   add_filter( 'gfpdf_mpdf_class', 'prefix_modify_the_mpdf_object' );
}, 10, 3 );
```

## Source Code 

This action is located in the `process_pdf_endpoint()` method of `/src/controller/Controller_PDF.php`.