---
title: "gfpdf_multisite_template_location_uri"
sidebar_label: "gfpdf_multisite_template_location_uri"
description: "For multisite installations we create a subdirectory inside the PDF_EXTENDED_TEMPLATES folder using each multisite's ID."
---

**Jump To Section**

* [Description](#description)
* [Parameters](#parameters)
* [Usage](#usage)
* [Source Code](#source-code)

### Description

By default, the [PDF working directory](developer-first-custom-pdf.md#working-directory) is found in your `http://example.com/wp-content/uploads/PDF_EXTENDED_TEMPLATES` folder. For multisite installations we also create a subdirectory inside the `PDF_EXTENDED_TEMPLATES` folder using each multisite's ID. This filter allows you to change that location (but you'll normally want to use the [`gfpdf_template_location_uri` filter](gfpdf_template_location_uri.md) instead). .

The multisite working directory **MUST be accessible by your web browser** and **MUST be used in conjunction with the [`gfpdf_multisite_template_location`](gfpdf_multisite_template_location.md) filter**. Both the `gfpdf_multisite_template_location` and `gfpdf_multisite_template_location_uri` filters should point to the same directory – one is the path and one is the URL.

*Note:* your web server needs write access to the folder you move the working directory to.

You can also use this filter by targeting the multisite ID directly: `gfpdf_multisite_template_location_uri_$blog_id`.

### Parameters

$url | string
:    The URL of the multisite [PDF working directory](developer-first-custom-pdf.md#working-directory)

$working_folder | string
:    The working directory folder name. By default this is `PDF_EXTENDED_TEMPLATES`.

$upload_path | string
:    The URL to your uploads directory (where the PDF working directory is stored by default).

$blog_id | integer
:    The current ID of the multisite being processed

### Usage

The following snippet shows you how you can move the multisite PDF working directory for site #3 to your `wp-content` directory (instead of its original location in your uploads folder):

```
add_filter( 'gfpdf_template_location_uri', function( $url, $working_folder, $upload_url, $blog_id ) {
	if ( 3 == $blog_id ) {
		/* Make sure you include the forward slash! */
		return WP_CONTENT_URL . '/' . $working_folder . '/';
	}

	return $url;
}, 10, 4 );

/**
 * You must use the `gfpdf_multisite_template_location_uri` filter in conjunction with the `gfpdf_multisite_template_location` filter
 * Both filters should point to the same directory (one is the path and one is the URL)
 */
add_filter( 'gfpdf_multisite_template_location', function( $directory, $working_folder, $upload_path, $blog_id ) {
	if ( 3 == $blog_id ) {
		/* Make sure you include the forward slash! */
		return WP_CONTENT_DIR . '/' . $working_folder . '/';
	}

	return $directory;
}, 10, 4 );
```

### Source Code

This filter is located in the `Model_Install::setup_multisite_template_location()` method of `/src/model/Model_Install.php`.