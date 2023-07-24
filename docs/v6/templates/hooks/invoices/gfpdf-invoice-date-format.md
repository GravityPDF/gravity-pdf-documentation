---
title: "PDF Invoice Hooks – gfpdf_invoice_date_format"
sidebar_label: "gfpdf_invoice_date_format"
description: "Use this filter to override the date format used for the Invoice Date and Due Date settings."
---

## Description

Use this filter to override the date format used for the Invoice Date and Due Date settings.

## Arguments

The following arguments are passed to functions that use this hook:

### $format | `string`
* The format of the outputted date string. For valid options, [refer to the format parameter in the PHP documentation](https://www.php.net/manual/en/datetime.format.php).

### $settings | `array`
* The PDF Invoice settings

### $entry | `array`
* The current Gravity Forms Entry

### $form | `array`
* The current Gravity Forms form

## Usage

Change the date format for all PDF Invoices across all forms:

```php
add_filter( 'gfpdf_invoice_date_format', function( $format, $settings, $entry, $form ) {
    /* Format: Monday, 22nd January 2024 */
	return 'l, jS F Y';
}, 10, 4 );
```

Change date format for all PDF Invoices on an individual form:

```php
add_filter( 'gfpdf_invoice_date_format', function( $format, $settings, $entry, $form ) {
    if ( (int) $form['id'] === 20 ) {
        /* Format: Monday, 22nd January 2024 */
        return 'l, jS F Y';
	}
	
	return $format;
}, 10, 4 );
```

## Source Code

This hook can be found in the `Gpdf_Invoice_Base::get_date_format()` method, which is located in the `/config/gpdf-invoice-base.php` file in the [PDF Working Directory](../../../developers/first-custom-pdf.md#pdf-working-directory).
