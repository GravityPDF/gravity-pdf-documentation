---
title: "gfpdf_template_location_uri"
sidebar_label: "gfpdf_template_location_uri"
description: "By default, the PDF working directory is found in your http://example.com/wp-content/uploads/PDF_EXTENDED_TEMPLATES folder."
---

## Description 

By default, the [PDF working directory](developer-first-custom-pdf.md#working-directory) is found in your `http://example.com/wp-content/uploads/PDF_EXTENDED_TEMPLATES` folder. This filter allows you to change that location. 

The working directory **MUST be accessible via a URL** and **MUST be used in conjunction with the [`gfpdf_template_location`](gfpdf_template_location.md) filter**. Both the `gfpdf_template_location` and `gfpdf_template_location_uri` filters should point to the same directory – one is the path and one is the URL.

*Note:* your web server needs write access to the folder you move the working directory to.

## Parameters 

### $url | string
*  The URL to your [PDF working directory](developer-first-custom-pdf.md#working-directory)

### $working_folder | string
*  The working directory folder name. By default this is `PDF_EXTENDED_TEMPLATES`.

### $upload_url | string
*  The URL to your uploads directory (where the PDF working directory is stored by default).

## Usage 

The following snippet shows you how you can move the PDF working directory to your `wp-content` directory (instead of its original location in your uploads folder):

```
add_filter( 'gfpdf_template_location_uri', function( $url, $working_folder, $upload_url ) {
    /* Make sure you include the forward slash! */
	return WP_CONTENT_URL . '/' . $working_folder . '/';
}, 10, 3 );

/**
 * You must use the `gfpdf_template_location` filter in conjunction with the `gfpdf_template_location_uri` filter
 * Both filters should point to the same directory (one is the path and one is the URL)
 */
add_filter( 'gfpdf_template_location', function( $directory, $working_folder, $upload_path ) {
	/* Make sure you include the forward slash! */
	return WP_CONTENT_DIR . '/' . $working_folder . '/';
}, 10, 3 );

```

## Source Code 

This filter is located in the `Model_Install::setup_template_location()` method of `/src/model/Model_Install.php`.