---
title: "PDF for GravityView Hooks – gfpdf_gv_show_label"
sidebar_label: "gfpdf_gv_show_label"
description: ""
---

## Description

Use this filter to disable the field labels in the List, Table, or Map views. It also has two aliases, so you can apply the changes to a specific Views or View Layouts:

**Alias**

* `gfpdf_gv_show_label_{$view_id}`: Replace `{$view_id}` with a valid View ID
* `gfpdf_gv_show_label_{$layout}`: Valid values for `{$layout}` include: table, map, list

## Arguments

The following arguments are passed to functions that use this hook:

### $show_label | `bool`
* Whether to show or hide the field labels

### $view | `\GV\View`
* The current GravityView object

### $view_entry | `\GV\Entry`
* The current GravityView Entry object

### $layout | `string`
* The current template layout used by the View. 
* Valid values include: `table` `list` `map`

## Usage

Hide the field labels in all PDFs:

```php 
add_filter( 'gfpdf_gv_show_label', '__return_false' );
```

Hide the field labels in a specific View's PDF only:

```php 
add_filter( 'gfpdf_gv_show_label_885', '__return_false' );
```

Hide the field labels in any PDFs generated for a Table Layout View:

```php 
add_filter( 'gfpdf_gv_show_label_table', '__return_false' );
```

## Source Code

This hook is run in all templates located in the `/src/Pdf/Templates/` directory of the _PDF for GravityView_ extension.
