---
title: "PDF Invoice Hooks – gfpdf_invoice_currency_format"
sidebar_label: "gfpdf_invoice_currency_format"
description: "Use this filter to override the currency used in the invoice, and format all prices in the PDF invoice using the new currency."
---

## Description

Use this filter to override the currency used in the invoice, and format all prices in the PDF invoice using the new currency.

## Arguments

The following arguments are passed to functions that use this hook:

### $currency | `string`
* The three-letter ISO 4217 currency code assigned to the entry 

### $settings | `array`
* The PDF Invoice settings

### $entry | `array`
* The current Gravity Forms Entry

### $form | `array`
* The current Gravity Forms form

## Usage

Change the currency for all PDF Invoices across all forms:

```php
add_filter( 'gfpdf_invoice_currency_format', function( $currency, $settings, $entry, $form ) {
	return 'EUR';
}, 10, 4 );
```

Change currency for all PDF Invoices on an individual form:

```php
add_filter( 'gfpdf_invoice_currency_format', function( $currency, $settings, $entry, $form ) {
    if ( (int) $form['id'] === 20 ) {
	    return 'EUR';
	}
	
	return $currency;
}, 10, 4 );
```

## Source Code

This hook can be found in the `Gpdf_Invoice_Base::get_currency()` method, which is located in the `/config/gpdf-invoice-base.php` file in the [PDF Working Directory](../../developers/first-custom-pdf.md#pdf-working-directory).
