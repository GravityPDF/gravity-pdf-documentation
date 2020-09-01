---
title: "Gravity PDF API – get_form_pdfs()"
sidebar_label: "get_form_pdfs()"
description: "This method will return an array containing all the PDFs configured on a particular Gravity Form."
---

## Description 

This method will return an array containing all the PDFs configured on a particular Gravity Form. If you want an individual PDF settings [see `GPDFAPI::get_pdf()`](get_pdf.md).

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $form\_id \| integer
* The Gravity Form ID

## Return 

### array \| WP\_Error
* An array of the PDFs will be returned on success, otherwise a [WP\_Error object](https://codex.wordpress.org/Class_Reference/WP_Error) on failure

## Usage 

This snippet will show you how to get the current list of PDFs setup on a particular Gravity Form and loop through the results:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        /* Get a list of PDFs assigned to form #2 */
        $pdfs  = GPDFAPI::get_form_pdfs( 2 );

        if ( ! is_wp_error( $pdfs ) && sizeof( $pdfs ) > 0 ) {
            echo '<ul>';

            /* Loop through and output the PDF name field in a list */
            foreach ( $pdfs as $pdf ) {
                echo '<li>' . $pdf['name'] . '</li>';
            }

            echo '</ul>';
        }
    }
} );
```

## Source Code 

This method is located in `api.php`.
