---
title: "Gravity PDF API – delete_pdf_font()"
sidebar_label: "delete_pdf_font()"
description: "This function allows you to delete any installed custom PDF fonts using code. It accepts a single argument: the font name."
---

## Description 

This function allows you to delete any installed custom PDF fonts using code. It accepts a single argument: the font name.

## Version 

This method was introduced in Gravity PDF 4.1.

## Parameters 

### font\_name \| string \| required
* The name of the custom PDF font to delete

## Return 

### boolean \| WP\_Error
* Returns `true` if the font is installed correctly, or `WP_Error` on failure

## Usage 

```
/* This should be used in a one-time filter or action */
$results = GPDFAPI::delete_pdf_font( 'Brandon Grotesque' );

if ( ! is_wp_error( $results ) ) {
   /* Successfully deleted */
}
```

## Source Code 

This method is located in `api.php`.
