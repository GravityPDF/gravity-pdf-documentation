---
title: "gfpdf_tmp_location"
sidebar_label: "gfpdf_tmp_location"
description: "By default temporary files Gravity PDF creates are stored in the tmp folder inside the PDF working directory. Change the path with this filter."
---

## Description 

By default temporary files Gravity PDF creates are stored in the `tmp` folder inside the [PDF working directory](../first-custom-pdf.md#working-directory). As we discussed [in the PDF security documentation](../../users/pdf-security.md#filesystem) this directory is protected from direct access by a `.htaccess` file. However, this only works for web servers running Apache or Litespeed. This filter allows you to move this folder to a private directory that isn't accessible from the web, ensuring your PDFs stay private.

:::info
Your web server needs write access to the folder you move this directory to.
:::

:::note
**Do you host with WP Engine?** Instead of using the filter below, to protect your PDFs you will need to [setup a Redirect Rule](https://wpengine.com/support/redirect/) in your control panel. Set the *Source* to `^/wp-content/uploads/PDF_EXTENDED_TEMPLATES/tmp/.*` and the *Destination* to your home page.
::: 

## Parameters 

### $path | string
*  The path to the `tmp` folder.

### $working_folder | string
*  The working directory folder name. By default this is `PDF_EXTENDED_TEMPLATES`.

### $upload_path | string
*  The path to your uploads directory (where the PDF working directory is stored by default).

## Usage 

The following snippet shows you how you can move the PDF temporary directory to a private folder that's not accessible through a browser:

```
add_filter( 'gfpdf_tmp_location', function( $path, $working_folder, $upload_url ) {
   /*
	 * On a standard WordPress installation the ABSPATH directory refers to the top-level directory where WordPress
	 * is located. Going up a directory and creating the tmp folder there usually means it becomes private (but not always)
	 *
	 * Note: your hosting may prevent the ability to write to folders outside the WordPress top-level directory and this
	 * will not work. Make sure you test PDF Notifications still function after adding this code.
	 */
	return dirname( ABSPATH ) . '/GravityPDF/tmp/'; /* <-- make sure you include the foward slash */
	/*
	 * If the above doesn't work, you can try use the get_temp_dir() function instead
	 */
	return get_temp_dir() . 'GravityPDF/'; /* <-- make sure you include the foward slash */

}, 10, 3 );

```

Once you've verified the filter works correctly, you should manually remove the old directory.

## Source Code 

This filter is located in the `Model_Install::setup_template_location()` method of `/src/model/Model_Install.php`.