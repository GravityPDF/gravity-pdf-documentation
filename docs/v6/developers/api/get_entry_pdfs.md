---
title: "Gravity PDF API – get_entry_pdfs()"
sidebar_label: "get_entry_pdfs()"
description: "This method will return an array containing all the PDFs available to a particular Gravity Forms entry."
---

## Description 

This method will return an array containing all the PDFs available to a particular Gravity Forms entry. It's [similar to `GPDFAPI::get_form_pdfs()`](get_form_pdfs.md), but it filters out any PDFs that don't pass [conditional logic checks](../../users/setup-pdf.md#conditional-logic) for the current entry.

## Version 

This method was introduced in Gravity PDF 6.0.

## Parameters 

### $entry\_id \| integer
* The Gravity Forms Entry ID

## Return 

### array \| WP\_Error
* An array of the PDFs will be returned on success, otherwise a [WP\_Error object](https://codex.wordpress.org/Class_Reference/WP_Error) on failure

## Usage 

This snippet will show you how to get the current list of PDFs setup on a particular Gravity Forms entry and loop through the results:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {

        /* Get a list of PDFs assigned to entry 821 */
        $pdfs = GPDFAPI::get_entry_pdfs( 821 );

        if ( ! is_wp_error( $pdfs ) && count( $pdfs ) > 0 ) {
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
