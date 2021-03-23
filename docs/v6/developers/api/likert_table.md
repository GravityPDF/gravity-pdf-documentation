---
title: "Gravity PDF API – likert_table()"
sidebar_label: "likert_table()"
description: "This function will output (or return) the Survey Add-on Likert table."
---

## Description 

This function will output (or return) the Survey Add-on Likert table.

## Version 

This method was introduced in Gravity PDF 4.0.

## Parameters 

### $entry \| array
* The raw Gravity PDF Entry

### $field\_id \| integer
* The field ID of the likert field you want to output

### $return \| boolean \| optional
* Set to true to have the likert table HTML returned. By default, this is false and will automatically be echoed.

## Return 

### string \| void
* Returns the HTML string when `$return` is true

## Usage 

The following snippet shows you how to output the likert table from your Gravity PDF template:

```
/* The raw $entry array is available to all Gravity PDF templates automatically */
GPDFAPI::likert_table( $entry, 20 );
```

## Source Code 

This method is located in `api.php`.
