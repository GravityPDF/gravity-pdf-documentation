---
title: "gfpdf_post_html_fields"
sidebar_label: "gfpdf_post_html_fields"
description: "This filter can be used to insert HTML mark up after the entry HTML markup has been generated."
---

**Jump To Section**

* [Description](#description)
* [Version](#version)
* [Parameters](#parameters)
* [Usage](#usage)
* [Source Code](#source-code)

### Description

This filter can be used to insert HTML mark up after the entry HTML markup has been generated.

### Version

This action was introduced in Gravity PDF 4.1.

### Parameters

$entry | array
:    The Gravity Form entry array

$config | array
:    The current Gravity PDF settings array

### Usage

This snippet will display a message after the PDF field HTML markup:

```
add_action( 'gfpdf_post_html_fields', function( $entry, $config ) {
   echo 'This is a notice that is displayed after the PDF content';
}, 10, 2 );
```

If you want to display a message when a particular value is entered into the form use the `$entry` array:

```
add_action( 'gfpdf_post_html_fields', function( $entry, $config ) {
    if ( $entry[1] === 'Yes' ) {
        echo 'This is a notice that is displayed after the PDF content';
    }
}, 10, 2 );
```

### Source Code

This filter is located in the `process_html_structure()` method of `/src/view/View_PDF.php`.