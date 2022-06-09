---
title: "gfpdf_mpdf_tmp_location"
sidebar_label: "gfpdf_mpdf_tmp_location"
description: "By default mPDF temporary files are stored in the system temporary directory. Change the path with this filter."
---

## Description 

By default the mPDF temporary files are stored in a folder called `mpdf` [inside the Gravity PDF temporary directory]([url](https://docs.gravitypdf.com/v6/developers/filters/gfpdf_tmp_location)). This filter allows you to change this directory independent of where the Gravity PDF temporary directory is.

## Parameters 

### $path | string
*  The path to the `tmp` folder.

## Usage 

The following snippet shows you how you can move the directory to a different location:

```
add_filter( 'gfpdf_mpdf_tmp_location', function( $path ) {
     return get_temp_dir() . 'GravityPDF-mpdf';
}, 10 );

```

Once you've verified the filter works correctly, you should manually remove the old directory.

## Source Code 

This filter is located in the `Model_Install::setup_template_location()` method of `/src/model/Model_Install.php`.
