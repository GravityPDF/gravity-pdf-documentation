---
title: "gfpdf_pdf_field_content"
sidebar_label: "gfpdf_pdf_field_content"
description: ""
---



## Description 

Use this filter to dynamically change a field's value in Core and Universal templates before it gets wrapped in the final HTML markup. In the majority of cases this filter will be more useful than [`gfpdf_field_html_value`](gfpdf_field_html_value.md). Be aware, section fields, page fields and the product table are not run through this filter.

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $value | string
*  The field's content to be included in the PDF

### $field | array
*  The current field being processed

### $entry | array
*  The Gravity Forms entry array

### $form | array
*  The Gravity Forms array

### $pdf_field | object
*  The current field helper class. See `/src/helper/fields`

## Usage 

The following code will prefix all values with a bullet point:

```
add_filter( 'gfpdf_pdf_field_content', function( $value, $field, $entry, $form ) {
	return '• ' . $value;
}, 10, 4 );
```

You can also target specific field types:

```
add_filter( 'gfpdf_pdf_field_content_text', function( $value, $field, $entry, $form ) {
	return '• ' . $value;
}, 10, 4 );
```

Or an individual field, targeted by ID:

```
add_filter( 'gfpdf_pdf_field_content', function( $value, $field, $entry, $form ) {
	if( $field->id === 20 ) {
		return '• ' . $value;
	}

	return $value;
}, 10, 4 );
```

Display each sub-field in an address field on a new line:

```
add_filter( 'gfpdf_pdf_field_content', function( $value, $field, $entry, $form, $pdf_field ) {
        if( $field->type === 'address' ) {
	    $content = $pdf_field->value();

            return implode( '<br>', array_filter( $content ) );
        }

	return $value;
}, 10, 5 );
```

Remove the links from the Upload File fields so that only the filename will be shown:

```
add_filter( 'gfpdf_pdf_field_content', function( $value, $field, $entry, $form, $pdf_field ) {
	if ( $field->type === 'fileupload' ) {
		return wp_kses( $value, [ 'ul' => [], 'li' => [] ] );
	}

	return $value;
}, 10, 5 );
```

Remove the links from Slim Image Cropper fields so that only the image will be shown:

```
add_filter( 'gfpdf_pdf_field_content', function( $value, $field, $entry, $form, $pdf_field ) {
	if ( $field->type === 'slim' ) {
		return wp_kses( $value, [ 'img' => [ 'src' => [] ] ] );
	}

	return $value;
}, 10, 5 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Fields.php` files in the `/src/helper/abstract/` directory.