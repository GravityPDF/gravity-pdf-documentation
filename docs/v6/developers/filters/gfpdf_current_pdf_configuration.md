---
title: "gfpdf_current_pdf_configuration"
sidebar_label: "gfpdf_current_pdf_configuration"
description: ""
---

## Description 

The Core and Universal have additional configuration options that can be modified with this filter. Usually, these should be modified at a higher level, but it can be necessary to dynamically change them at runtime. 

Special meta options specific to these templates and accessed via `$config['meta']` include:

* `echo | boolean`: Whether to output the generated PDF or return it. Default `true`.
* `exclude | boolean`: Whether to exclude fields with a CSS value containing 'exclude'. Default `true`.
* `empty | boolean`: Whether to show empty fields in the PDF. Default `false`.
* `conditional | boolean`: Whether we should skip fields that don't pass conditional logic. Default `true`.
* `show_title | boolean`: Whether the form title should be shown in the PDF. Default `true`.
* `section_content | boolean`: Whether to include a Section field's content. Default `false`.
* `page_names | boolean`: Whether Page fields should be included in the PDF. Default `false`.
* `html_field | boolean`: Whether to show HTML fields in the PDF. Default `false`.
* `individual_products | boolean`: Whether to group products at the end of the PDF. Default `true`.
* `enable_css_ready_classes | boolean`: Whether to enable column support with special Gravity Form CSS classes. Default `true`

Alone with the meta options, the standard PDF settings can be manipulated via `$config['settings']`.

## Version 

This filter was introduced in Gravity PDF 4.2.

## Parameters 

### $config | array
*  The full configuration for Core and Universal PDF templates. Data is stored in the `$config['meta']` and `$config['settings']` keys.

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The Gravity Forms array

## Usage 

The following will dynamically force empty fields to be displayed in Core or Universal templates:

```
add_filter( 'gfpdf_current_pdf_configuration', function( $config, $entry, $form ) {
	$config['meta']['empty'] = true;

	return $config;
}, 10, 3 );
```

## Source Code 

This filter is located in the `View_PDF::generate_html_structure()` method in `/src/view/View_PDF.php`.