---
title: "Gravity PDF API – product_table()"
sidebar_label: "product_table()"
description: "This method will output (or return) a correctly formatted Gravity Forms product table for use in your PDF. "
---

## Description 

This method will output (or return) a correctly formatted Gravity Forms product table for use in your PDF.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $entry \| array
* The raw Gravity PDF Entry

### $return \| boolean \| optional
* Set to true to have the product table HTML returned. By default, this is false and will automatically be echoed.

## Return 

### string \| void
* Returns the HTML string when `$return` is true

## Usage 

The following snippet shows you how to output the product table from your Gravity PDF template:

```
/* The raw $entry array is available to all Gravity PDF templates automatically */
GPDFAPI::product_table( $entry );
```

## Source Code 

This method is located in `api.php`.
