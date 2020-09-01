---
title: "gfpdf_pdf_actions"
sidebar_label: "gfpdf_pdf_actions"
description: "This filter allows you to add to the action links on the PDF list page. Keep in mind you still need to write the logic that handles the action. "
---

## Description 

This filter allows you to add to the action links on the [PDF list page](../../users/managing-pdfs.md). Keep in mind this is only half the process. You still need to write the logic that handles the action. 

## Parameters 

### $actions | array
*  A list of the current PDF actions. By default these include `edit`, `duplicate` and `delete`.

### $item | array
*  The current PDF configuration array.

## Usage 

The following snippet adds a *View* link to the PDF list:

``` 
add_filter( 'gfpdf_pdf_actions', function( $actions, $item ) {

	/**
	 * Add our own action to the PDF list
	 *
	 * You'll need to add an event listener to process the action later.
	 *
	 * In this example you would listen for $_GET['prefix_view'] and check there's a valid $_GET['pid'],
	 * then verify the user has the correct capabilities to run your action before finally checking the $_GET['_nonce'] is valid.
	 * If all that was successful you can then process your action and redirect them back to the PDF list page
	 */
	$nonce    = wp_create_nonce( 'prefix_view_nonce_' . $item['id'] );
	$view_url = add_query_arg( array( 'pid' => $item['id'], 'prefix_view' => '1', '_nonce' => $nonce ) );

	$actions['view'] = '<a href="' . $view_url . '" title="' . __( 'View this PDF', 'prefix-text-domain' ) . '">' . __( 'View', 'prefix-text-domain' ) . '</a>';

	return $actions;

}, 10, 2 );
```

## Source Code 

This filter is located in the `Helper_PDF_List_Table::column_name()` method of `/src/helper/Helper_PDF_List_Table.php`.