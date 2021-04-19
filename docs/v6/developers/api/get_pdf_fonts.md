---
title: "Gravity PDF API – get_pdf_fonts()"
sidebar_label: "get_pdf_fonts()"
description: "This function allows you to retrieve an associative PHP array with all available fonts. It returns a multi-dimensional array grouped together."
---

## Description 

This function allows you to retrieve an associative PHP array with all available fonts.

## Version 

This method was introduced in Gravity PDF 4.3.

## Parameters 

This method accepts no parameters.

## Return 

### array
* A multi-dimensional array, with the list of installed fonts grouped together.

## Usage 

```
$fonts_list = GPDFAPI::get_pdf_fonts();

foreach( $fonts_list as $group_name => $group ) {
   foreach( $group as $font_id => $font_name ) {
       //do something with the font name / ID
   }
}
```

## Source Code 

This method is located in `api.php`.
