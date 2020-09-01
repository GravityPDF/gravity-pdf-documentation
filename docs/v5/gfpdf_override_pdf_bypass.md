---
title: "gfpdf_override_pdf_bypass"
sidebar_label: "gfpdf_override_pdf_bypass"
description: ""
---



## Description 

Currently, if a PDF has been generated during the PHP execution it won't be generated a second time ([refer to our security policy for more information on how and when PDFs are saved to the filesystem](user-pdf-security.md#filesystem)). This occurs most often when sending the PDF via email to multiple parties. Use this filter to disable this cache and regenerate the PDF each time. **Warning: This could cause long page load times for the end user, or timeouts.**

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $enable | boolean
*  Return true to bypass the PDF cache

### $pdf | Helper_PDF
*  This class does the heavy lifting for PDF generation

## Usage 

Use the following code to enable the field:

```
add_filter( 'gfpdf_override_pdf_bypass', function( $enable, $pdf ) {
	return true;
}, 10, 2 );
```

## Source Code 

This filter is located in the `Model_PDF::process_and_save_pdf()` method in `/src/model/Model_PDF.php` .