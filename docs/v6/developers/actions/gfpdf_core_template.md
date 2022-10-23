---
title: "gfpdf_core_template"
sidebar_label: "gfpdf_core_template"
description: "This hook allows you to inject custom CSS or HTML code dynamically into a Core or Universal PDF template."
---

## Description 

This hook allows you to inject custom CSS or HTML code dynamically into a Core or Universal PDF template. It's useful to tweak an existing style or add a new one without having to specifically create a custom template.

From Gravity PDF 6.5+, you can also use the `gfpdf_core_template_$form_id` to target PDFs on a specific Gravity Form.

## Parameters

### $form | array
*  The Gravity Forms form array
*  Added in Gravity PDF 6.5

### $entry | array
*  The Gravity Forms entry array
*  Added in Gravity PDF 6.5

### $settings | array
*  The current Gravity PDF settings array
*  Added in Gravity PDF 6.5

## Usage 

This snippet will force text on all PDFs to be display as the colour red:

``` 
add_action( 'gfpdf_core_template', function( $form, $entry, $settings ) {
	?>
		<style>
			body div, body table td, body table th {
				color: red !important;
			}
		</style>
	<?php
}, 10, 3 );
```

You can also add custom classes that you can [apply selectively to individual fields in the form editor](https://docs.gravityforms.com/css-ready-classes/#how-to-use-ready-classes). The below snippet adds support for aligning individual fields in the PDF:

```
add_action( 'gfpdf_core_template', function( $form, $entry, $settings ) {
	?>
		<style>
	        .field-left {
		        text-align: left;
	        }
	
	        .field-middle {
		        text-align: center;
	        }
	
	        .field-right {
		        text-align: right;
	        }
		</style>
	<?php
}, 10, 3 );
```

If you want to target a specific form and/or PDF you can add conditional checks at the start of the hook:

```
add_action( 'gfpdf_core_template', function( $form, $entry, $settings ) {
    
    /* If not Form ID20 and PDF ID 632a587a231ae do NOT inject CSS into template */
    if ( (int) $form['id'] !== 20 && $settings['id'] !== '632a587a231ae' ) {
        return;
    } 

	?>
		<style>
	        .field-left {
		        text-align: left;
	        }
	
	        .field-middle {
		        text-align: center;
	        }
	
	        .field-right {
		        text-align: right;
	        }
		</style>
	<?php
}, 10, 3 );
```

## Source Code 

This filter is located in `/src/view/html/PDF/core_template_styles.php`.