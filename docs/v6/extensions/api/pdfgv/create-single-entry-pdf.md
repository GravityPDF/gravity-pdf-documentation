---
title: "PDF for GravityView API – create_single_entry_pdf()"
sidebar_label: "create_single_entry_pdf()"
description: ""
---

## Description

This method generates a temporary Single Entry View PDF and either saves it to disk (returning the absolute path to the file), or it will stream to the current user's browser.

:::note
When using this method with the "save" output type, the PDF will be cached in the temporary directory for up to 12 hours. To prevent this behaviour you should delete the PDF from the temporary location when you've finished with it.
:::

:::info
You can only use this method **after** the WordPress `init` hook has run.
:::

## Version

This method was introduced in _PDF for GravityView_ 0.8.

## Parameters

### $view_id | integer
* The GravityView ID (aka Post ID) for the View

### $entry_id | string | integer
* A Gravity Forms entry ID valid for the current View. It's only valid if the entry is linked to the same form used by the View.
* GravityView's Multiple Forms Extension is supported, provided you pass a comma-separated string of valid entry IDs. Be aware this extension uses very specific logic for joining forms together, and you cannot just pass in any old set of IDs. It has to be the same set of IDs used in the View.

### $output_type | string
* Valid values include: `download` `display` `save`
* Defaults to `save`

## Return

### string | WP_Error
* The full path to the generated PDF on success, or WP_Error on failure
* If `$output_type` is set to `download` or `display` the PDF will be streamed to the current user's browser, and the current PHP execution will exit.

## Usage

The following snippet shows you how to save a Single Layout View PDF to disk:

```
add_action( 'wp', function() {
    if ( ! class_exists( '\PDFGV_API' ) ) {     
        // handle the error
        return;
    }
   
   $view_id  = 120;
   $entry_id = 20;

   $temporary_pdf_path = \PDFGV_API::create_single_entry_pdf( $view_id, $entry_id );
   if ( is_wp_error( $temporary_pdf_path ) ) {
       // handle the error
       return;
   }   
  
   // do something with the PDF
  
   // clean up   
   unlink( $temporary_pdf_path );
} );
```

You can pass the third parameter to stream the PDF to the current user:

```
add_action( 'wp', function() {
    if ( ! class_exists( '\PDFGV_API' ) ) {  
        // handle the error  
        return;
    }
   
    if ( headers_sent() ) {
        // handle the error
        return;
    }
   
   $view_id  = 120;
   $entry_id = 20;

   $maybe_error = \PDFGV_API::create_single_entry_pdf( $view_id, $entry_id, 'view' );
   if ( is_wp_error( $maybe_error ) ) {
       // handle the error
       return;
   }     
} );
```

If you have GravityView's Multiple Forms extension enabled and configured on your View, you can generate a PDF that contains data from multiple _valid_ entries by passing a comma-separated string of entry IDs.

```
add_action( 'wp', function() {
    if ( ! class_exists( '\PDFGV_API' ) ) {     
        // handle the error
        return;
    }
   
   $view_id  = 1025;
   $entry_id = '20,32,52';

   $temporary_pdf_path = \PDFGV_API::create_single_entry_pdf( $view_id, $entry_id );
   if ( is_wp_error( $temporary_pdf_path ) ) {
       // handle the error
       return;
   }   
  
   // do something with the PDF
  
   // clean up   
   unlink( $temporary_pdf_path );
} );
```

## Source Code

This method is located in `api.php` of the _PDF for GravityView_ extension.
