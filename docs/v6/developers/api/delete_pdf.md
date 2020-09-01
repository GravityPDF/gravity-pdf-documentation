---
title: "Gravity PDF API – delete_pdf()"
sidebar_label: "delete_pdf()"
description: "This method will permanently delete an existing PDF's settings. This cannot be undone so use it carefully."
---

## Description 

This method will permanently delete an existing PDF's settings. **This cannot be undone so use it carefully**.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $form\_id \| integer
* The Gravity Form ID

### $pdf\_id \| string
* The PDF internal identifier (found in the `pid` URL parameter when viewing individual PDF settings in the admin area)

## Return 

### boolean
* True on success, false on failure

## Usage 

The following snippet shows you how to delete an existing PDF:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Delete the PDF on form #2 */
        if( GPDFAPI::delete_pdf( 2, '56c14c955d989' ) ) {
            //PDF deleted successfully
        }
    }
} );
```

## Source Code 

This method is located in `api.php`.
