---
title: "gfpdf_get_pdf_display_list"
sidebar_label: "gfpdf_get_pdf_display_list"
description: ""
---



## Description 

Use this filter to remove (or add) links to the list of PDFs shown on [the Entry List and Entry Details pages](../../users/viewing-pdfs.md).

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $args | array
*  An associative array containing the keys `name`, `view` and `download` which signify the name of the PDF and the URLs to view or download the document.

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The Gravity Forms array

## Usage 

Use the following code to remove a PDF with the ID `5886dcb38f30b`:

```
add_filter( 'gfpdf_get_pdf_display_list', function( $args, $entry, $form ) {
	return array_filter( $args, function( $pdf ) {
		return strpos( $pdf['url'], '5886dcb38f30b' );
	} );
}, 10, 3 );
```

Or, add your own link to the PDF list with the following:

```
add_filter( 'gfpdf_get_pdf_display_list', function( $args, $entry, $form ) {
	$args[] = [
		'name'     => 'Additional PDF',
		'view'     => 'https://example.com/document.pdf',
		'download' => 'https://example.com/document.pdf',
	];

	return $args;
}, 10, 3 );
```

## Source Code 

This filter is located in the `Model_PDF::get_pdf_display_list()` method in `/src/model/Model_PDF.php` .