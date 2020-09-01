---
title: "gfpdf_pdf_list_columns"
sidebar_label: "gfpdf_pdf_list_columns"
description: "Use this filter to add additional columns to the PDF list view table, or change the names of existing columns."
---

## Description 

Use this filter to add additional columns to the [PDF list view](managing-pdfs.md) table, or change the names of existing columns. 

By default the software will look in the Gravity PDF settings array for the column content. It searches for an array key which matches the column ID and outputs that value. If you want to customise the output of the column you should use the [`gfpdf_pdf_list_column_$id` action](gfpdf_pdf_list_column_id.md).

## Parameters 

### $columns | array
*  An associative array which uses the column ID as the array key and the column name as the value.

## Usage 

The following snippet shows you how to add a new column to the PDF list table. 

```
add_filter( 'gfpdf_pdf_list_columns', function( $columns ) {
    /* Add a new column called Stats */
	$columns['stats'] = __( 'Stats', 'prefix-text-domain' );
	return $columns;
} );
```

If you want to change the name of an existing column you can easily do so with this snippet:

```
add_filter( 'gfpdf_pdf_list_columns', function( $columns ) {
	/* Change the 'name' column text to 'Title' */
	$columns['name'] = __( 'Title', 'prefix-text-domain' );
	return $columns;
} );
```

## Source Code 

This filter is located in the `Helper_PDF_List_Table::get_columns()` method of `/src/helper/Helper_PDF_List_Table.php`.