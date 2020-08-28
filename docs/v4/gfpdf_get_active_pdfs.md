---
title: "gfpdf_get_active_pdfs"
sidebar_label: "gfpdf_get_active_pdfs"
description: ""
---

**Jump To Section**

* [Description](#description)
* [Version](#version)
* [Parameters](#parameters)
* [Usage](#usage)
* [Source Code](#source-code)

### Description 

This filter can be used to programically enable or disable a PDF configured on the form. By default, Gravity PDF will check if the PDF status is active and the conditional logic is valid. This hook allows you to filter PDFs with advanced logic. 

### Version 

This filter was introduced in Gravity PDF 4.2.

### Parameters 

$filtered | array
:    The filtered list of PDF settings

$pdfs | array
:    The unfiltered list of PDF settings

$entry | array
:    The raw Gravity Form Entry array.

$form | array
:    The Gravity Forms array

### Usage 

Use the following code to enable the form's PDFs if two sets of conditions are true (something you cannot do with standard Gravity Forms conditional logic), otherwise disable the documents:

```.language-php
add_filter( 'gfpdf_get_active_pdfs', function( $filtered, $pdfs, $entry, $form ) {

	if ( ( $entry[1] === 'Australia' || $entry[1] === 'New Zealand' ) && $entry[2] === 'Married' ) {
		return $pdfs;
	}

	return [];
}, 10, 3 );
```

### Source Code 

This filter is located in the `Model_PDF::get_active_pdfs()` method in `/src/model/Model_PDF.php`.