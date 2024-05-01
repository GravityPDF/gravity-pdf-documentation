---
title: "Gravity PDF API – create_pdf()"
sidebar_label: "create_pdf()"
description: ""
---

## Description

When provided the Gravity Forms entry ID and PDF ID, this method will correctly generate the PDF, save it to disk, [trigger the `gfpdf_post_save_pdf` action](../actions/gfpdf_post_save_pdf.md) and return the absolute path to the PDF.

:::note
When using this method, the PDF will be cached in the temporary directory for up to 12 hours and the cached copy used for sending future notifications. To prevent this behaviour you should delete the PDF from the temporary location when you've finished with it.
:::

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
            // Do something with your PDF
           
            // Cleanup the PDF from the tmp path
            unlink( $pdf_path );
        }
    }
} );
```

## Source Code

This method is located in `api.php`.
