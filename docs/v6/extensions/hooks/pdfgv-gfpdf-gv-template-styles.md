---
title: "PDF for GravityView Hooks – gfpdf_gv_template_styles"
sidebar_label: "gfpdf_gv_template_styles"
description: ""
---

## Description

This filter allows you to add your own CSS into a PDF template. It also has two aliases so you can inject CSS into PDFs for specific Views or View Layouts:

**Alias**

* `gfpdf_gv_template_styles_{$view_id}`: Replace `{$view_id}` with a valid View ID
* `gfpdf_gv_template_styles_{$layout}`: Valid values for `{$layout}` include: table, map, list, diy

## Arguments

The following arguments are passed to functions that use this hook:

### $view | `\GV\View`
* The current GravityView object

### $view_entry | `\GV\Entry`
* The current GravityView Entry object

## Usage

Add a large header and footer margin to all PDFs:

```php 
add_action( 'gfpdf_gv_template_styles', function( $view, $view_entry ) {
	?>
	@page {
		margin-header: 2in;
		margin-footer: 2in;
	}
	<?php
}, 10, 2 );
```

Add CSS to a specific View's PDF only:

```php 
add_action( 'gfpdf_gv_template_styles_885', function( $view, $view_entry ) {
	?>
	@page {
		margin-header: 2in;
		margin-footer: 2in;
	}
	<?php
}, 10, 2 );
```

Add CSS to any PDFs generated for a Table Layout View:

```php 
add_action( 'gfpdf_gv_template_styles_table', function( $view, $view_entry ) {
	?>
	@page {
		margin-header: 2in;
		margin-footer: 2in;
	}
	<?php
}, 10, 2 );
```

## Source Code

This hook is run in all templates located in the `/src/Pdf/Templates/` directory of the _PDF for GravityView_ extension.
