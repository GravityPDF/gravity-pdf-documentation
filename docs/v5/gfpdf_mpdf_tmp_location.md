---
title: "gfpdf_mpdf_tmp_location"
sidebar_label: "gfpdf_mpdf_tmp_location"
description: "By default mPDF temporary files are stored in the system temporary directory. Change the path with this filter."
---

## Description 

By default mPDF temporary files are stored in the system temporary directory. This location was chosen to work around restrictions preventing the font cache being saved to disk in public folders on some hosting providers. 

## Parameters 

### $path | string
*  The path to the `tmp` folder.

## Usage 

The following snippet shows you how you can move the directory to a different location:

```
add_filter( 'gfpdf_mpdf_tmp_location', function( $path ) {
     $data = GPDFAPI::get_data_class();
     return $data->template_tmp_location . 'mpdf';
}, 10 );

```

Once you've verified the filter works correctly you should manually remove the old directory.

## Source Code 

This filter is located in the `Model_Install::setup_template_location()` method of `/src/model/Model_Install.php`.