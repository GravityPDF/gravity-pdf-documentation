---
title: "gfpdf_working_folder_name"
sidebar_label: "gfpdf_working_folder_name"
description: "By default, the PDF working directory is called PDF_EXTENDED_TEMPLATES. Using this filter you can easily change the name. "
---

**Jump To Section**

* [Description](#description)
* [Parameters](#parameters)
* [Usage](#usage)
* [Source Code](#source-code)

### Description 

By default, the [PDF working directory](developer-first-custom-pdf.md#working-directory) is called `PDF_EXTENDED_TEMPLATES`. Using this filter you can easily change the name. 

### Parameters 

$folder | array
*  The folder name of the [PDF working directory](developer-first-custom-pdf.md#working-directory)

### Usage 

This snippet shows how to change the PDF working directory name:

```.language-php
add_action( 'gfpdf_working_folder_name', function( $folder ) {
	return 'PDF_Templates';
} );
```

### Source Code 

This filter is located in the `Model_Install::get_working_directory()` method of `/src/model/Model_Install.php`.