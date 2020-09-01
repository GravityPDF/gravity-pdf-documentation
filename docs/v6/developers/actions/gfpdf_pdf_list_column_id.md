---
title: "gfpdf_pdf_list_column_$id"
sidebar_label: "gfpdf_pdf_list_column_$id"
description: "Customise the content for new columns added to the PDF list view table. This action should be used in conjunction with the gfpdf_pdf_list_columns` filter."
---

## Description 

Use this filter to customise the content for new columns added to the [PDF list view](managing-pdfs.md) table. This action should be used in conjunction with the [`gfpdf_pdf_list_columns` filter](gfpdf_pdf_list_columns.md), which actually adds the new column to the table.

The `$id` in the action name refers to the column ID you set in the `gfpdf_pdf_list_columns` filter (the array key).

## Parameters 

### $settings | array
*  The Gravity PDF Settings

## Usage 

The following snippet shows you how to customise the output of new columns. In this case we added a new column with the *stats* ID using the `gfpdf_pdf_list_columns` filter.

```
add_action( 'gfpdf_pdf_list_column_stats', function( $settings ) {
	/**
	 * Display the current stats which are being stored in the options table.
	 * 
	 * In retrospect, stats should be stored with the Gravity PDF settings directly,
	 * but this example shows you how you can manipulate the column output. 
	 *
	 * Don't forget to change the prefix_ to something unique to your application
	 */
	echo get_option( 'prefix_gfpdf_stats_' . $settings['id'], 0 );
} );
```

## Source Code 

This filter is located in the `Helper_PDF_List_Table::column_default()` method of `/src/helper/Helper_PDF_List_Table.php`.