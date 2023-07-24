---
title: "PDF Invoice Hooks – gfpdf_invoice_number"
sidebar_label: "gfpdf_invoice_number"
description: "Use this filter to override the invoice number (including prefix and suffix) displayed in PDF Invoices."
---

## Description

Use this filter to override the invoice number (including prefix and suffix) displayed in PDF Invoices.

:::info
This hook allows you to modify the invoice number on-demand, and would not normally be used to generate a unique ID ([use a hook like gform_entry_created](https://docs.gravityforms.com/gform_entry_created/)).
:::

## Arguments

The following arguments are passed to functions that use this hook:

### $formatted_invoice_number | `string`
* The concatenated prefix, invoice number, and suffix

### $invoice_prefix | `string`
* The value of the Invoice Prefix PDF setting

### $invoice_suffix | `string`
* The value of the Invoice Suffix PDF setting

### $invoice_number | `string`
* The value of the Invoice Number PDF setting

### $settings | `array`
* The PDF Invoice settings

### $entry | `array`
* The current Gravity Forms Entry

### $form | `array`
* The current Gravity Forms form

## Usage

Change the Invoice Suffix entry submission year across all PDF invoices on all forms:

```php
add_filter( 'gfpdf_invoice_number', function( $formatted_invoice_number, $invoice_prefix, $invoice_suffix, $invoice_number, $settings, $entry, $form ) {
	return $invoice_prefix . $invoice_number . '-' . wp_date( 'Y', strtotime( $entry['date_created'] ) );
}, 10, 7 );
```

Change the Invoice Suffix entry submission year across all PDF invoices for a specific form:

```php
add_filter( 'gfpdf_invoice_number', function( $formatted_invoice_number, $invoice_prefix, $invoice_suffix, $invoice_number, $settings, $entry, $form ) {
    if ( (int) $form['id'] === 20 ) {
	    return $invoice_prefix . $invoice_number . '-' . wp_date( 'Y', strtotime( $entry['date_created'] ) );
	}
	
	return $formatted_invoice_number;
}, 10, 7 );
```

## Source Code

This hook can be found in the `Gpdf_Invoice_Base::get_invoice_number()` method, which is located in the `/config/gpdf-invoice-base.php` file in the [PDF Working Directory](../../developers/first-custom-pdf.md#pdf-working-directory).
