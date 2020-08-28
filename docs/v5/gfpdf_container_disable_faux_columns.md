---
title: "gfpdf_container_disable_faux_columns"
sidebar_label: "gfpdf_container_disable_faux_columns"
description: ""
---

## Description 

When using columns with conditional logic, and it's determined a field should be hidden, Gravity PDF will put a placeholder column in its place. This works in most cases, but it does cause its own problems for some users. The `gfpdf_container_disable_faux_columns` filter will allow you to disable Faux Columns in the PDF.

## Version 

This filter was introduced in Gravity PDF 4.4.

## Parameters 

### $enable_faux_column | boolean
*  Set to `false` to disable Faux Columns

## Usage 

```language-php
add_filter( 'gfpdf_container_disable_faux_columns', '__return_false' );
```

## Source Code 

This filter is located in the `Helper_Field_Container::__construct()` method of `/src/helper/Helper_Field_Container.php`.