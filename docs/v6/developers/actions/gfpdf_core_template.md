---
title: "gfpdf_core_template"
sidebar_label: "gfpdf_core_template"
description: ""
---

## Description 

This filter is triggered for all Gravity PDF templates. You can add custom CSS or HTML code to control the look and feel of all PDF templates.

## Usage 

This snippet will force text on all PDFs to be display as the colour red:

``` 
add_action( 'gfpdf_core_template', function() {
	?>
		<style>
			body div, body table td, body table th {
				color: red !important;
			}
		</style>
	<?php
} );
```

You can also add custom classes that you can [apply selectively to inidividual fields in the form editor](https://docs.gravityforms.com/css-ready-classes/#how-to-use-ready-classes). The below snippet adds support for aligning individual fields in the PDF:

```
add_action( 'gfpdf_core_template', function() {
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
} );
```

## Source Code 

This filter is located in `/src/view/html/PDF/core_template_styles.php`.