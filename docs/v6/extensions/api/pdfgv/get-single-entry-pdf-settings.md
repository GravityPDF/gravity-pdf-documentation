---
title: "PDF for GravityView API – get_single_entry_pdf_settings()"
sidebar_label: "get_single_entry_pdf_settings()"
description: ""
---

## Description

This method allows you to fetch the Single Entry PDF settings for a specific View.

## Version

This method was introduced in _PDF for GravityView_ 0.8.

## Parameters

### $view_id | integer
* The GravityView ID (aka Post ID) for the View

## Return

### array | WP_Error
* An array containing the Single Entry View PDF settings, or a WP_Error object.

## Usage

The following snippet shows you how to get a specific View's PDF settings

```
add_action( 'init', function () {
    $view_id  = 50;
	$settings = PDFGV_API::get_single_entry_pdf_settings( $view_id );

	if ( is_wp_error( $settings ) ) {
		// handle error

		return;
	}

	// do something with settings
} );
```

## Source Code

This method is located in `api.php` of the _PDF for GravityView_ extension.
