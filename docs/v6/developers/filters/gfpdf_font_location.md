---
title: "gfpdf_font_location"
sidebar_label: "gfpdf_font_location"
description: "By default, custom fonts are stored in the fonts folder inside the PDF working directory. This filter allows you to change that location. "
---

## Description 

By default custom fonts are stored in the `fonts` folder inside the [PDF working directory](first-custom-pdf.md#working-directory). This filter allows you to change that location. 

Unlike the PDF working directory, the `fonts` folder does not need to be in a public directory.

*Note:* your web server needs write access to the folder you move this directory to.

## Parameters 

### $path | string
*  The path to the custom fonts folder.

### $working_folder | string
*  The working directory folder name. By default this is `PDF_EXTENDED_TEMPLATES`.

### $upload_path | string
*  The path to your uploads directory (where the PDF working directory is stored by default).

## Usage 

The following snippet shows you how you can move the PDF fonts directory to a private folder that's not accessible through a browser:

```
add_filter( 'gfpdf_font_location', function( $path, $working_folder, $upload_url ) {
    /**
     * On a standard WordPress installation the ABSPATH directory refers to the top-level directory on your web server
     * where WordPress is located. When that's the case, going up a directory and creating the fonts folder usually means it becomes private.
     *
     * Depending on your web server setup you may need to modify this path to ensure it's not accessible through your browser.
     *
     * Make sure you include the forward slash on the end!
     */
     return ABSPATH . '../GravityPDF/fonts/';

}, 10, 3 );

```

Once you've verified the filter works correctly you should manually remove the old directory.

## Source Code 

This filter is located in the `Model_Install::setup_template_location()` method of `/src/model/Model_Install.php`.