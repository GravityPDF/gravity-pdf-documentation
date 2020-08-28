---
title: "Gravity PDF API – add_pdf_font()"
sidebar_label: "add_pdf_font()"
description: "This function allows you to add custom fonts to Gravity PDF using code. It accepts an associative array and only the `font_name` and `regular` array keys are required."
---

## Description 

This function allows you to add custom fonts to Gravity PDF using code. It accepts an associative array and only the `font_name` and `regular` array keys are required.

The `font_name` can only contain alphanumeric characters, or a space. Only `.ttf` font files are supported and all fonts should be referenced with the full server path.

## Version 

This method was introduced in Gravity PDF 4.1.

## Parameters 

### font \| array \| required
* An associative array with information about the font. Only the `font_name` and `regular` array keys are required.

    font\_name \| string \| required
    * The name of the custom font

    regular \| string \| required
    * The full path to the regular variant of the font.

    italics \| string \| optional
    * The full path to the italic variant of the font.

    bold \| string \| optional
    * The full path to the bold variant of the font.

    bolditalics \| string \| option
    * The full path to the bold-italic variant of the font.

## Return 

### boolean \| WP\_Error
* Returns `true` if the font is installed correctly, or `WP_Error` on failure

## Usage 

This sample shows the simplest usage of `add_pdf_font()`:

```
/* This should be used in a one-time filter or action */
$font_data =  [
    'font_name'   => 'Brandon Grotesque',
    'regular'     => '/path/to/ttf/font/file/BrandonGrotesqueLight.ttf',
];

$results = GPDFAPI::add_pdf_font( $font_data );

if ( ! is_wp_error( $results ) ) {
   /* Successfully installed */
}
```

If you want to install the italic, bold and bold italic variants pass all the associative key options:

```
/* This should be used in a one-time filter or action */
$font_data =  [
    'font_name'   => 'Brandon Grotesque',
    'regular'     => '/path/to/ttf/font/file/BrandonGrotesqueLight.ttf',
    'italics'     => '/path/to/ttf/font/file/BrandonGrotesqueLight-i.ttf',
    'bold'        => '/path/to/ttf/font/file/BrandonGrotesque-b.ttf',
    'bolditalics' => '/path/to/ttf/font/file/BrandonGrotesqueLight-bi.ttf',
];

$results = GPDFAPI::add_pdf_font( $font_data );

if ( ! is_wp_error( $results ) ) {
   /* Successfully installed */
}
```

## Source Code 

This method is located in `api.php`.
