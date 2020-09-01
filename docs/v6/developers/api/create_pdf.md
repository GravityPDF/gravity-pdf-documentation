---
title: "Gravity PDF API – create_pdf()"
sidebar_label: "create_pdf()"
description: ""
---

## Description 

When provided the Gravity Form entry ID and PDF ID, this method will correctly generate the PDF, save it to disk, [trigger the `gpdf_post_save_pdf` action](gfpdf_post_save_pdf.md) and return the absolute path to the PDF.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $entry\_id \| integer
* The Gravity PDF Entry ID

### $pdf\_id \| string
* The PDF internal identifier (found in the pid URL parameter when viewing individual PDF settings in the admin area)

## Return 

### string \| WP\_Error
* The full path to the generated PDF on success, or a WP\_Error on failure

## Usage 

The following snippet shows you how to generate a PDF and test that it was successful:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        $pdf_path = GPDFAPI::create_pdf( 171, '56d5338fae865');

        if ( ! is_wp_error( $pdf_path ) && is_file( $pdf_path ) ) {
            //Do something with your PDF
        }
    }
} );
```

## Source Code 

This method is located in `api.php`.
