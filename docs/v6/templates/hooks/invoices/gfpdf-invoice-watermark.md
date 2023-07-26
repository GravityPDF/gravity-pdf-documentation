---
title: "PDF Invoice Hooks – gfpdf_invoice_watermark"
sidebar_label: "gfpdf_invoice_watermark"
description: "Use this filter to dynamically override the text watermark displayed in the PDF Invoices."
---

## Description

Use this filter to dynamically override the text watermark displayed in the PDF Invoices.

## Arguments

The following arguments are passed to functions that use this hook:

### $watermark | `string`
* The text watermark to display in the PDF.

### $settings | `array`
* The PDF Invoice settings

### $entry | `array`
* The current Gravity Forms Entry

### $form | `array`
* The current Gravity Forms form

## Usage

Change the text watermark for all PDF Invoices across all forms:

```php
add_filter( 'gfpdf_invoice_watermark', function( $watermark, $settings, $entry, $form ) {
	return 'CONFIDENTIAL';
}, 10, 4 );
```

Change the text watermark for all PDF Invoices on an individual form:

```php
add_filter( 'gfpdf_invoice_watermark', function( $watermark, $settings, $entry, $form ) {
    if ( (int) $form['id'] === 20 ) {
        return 'CONFIDENTIAL';
	}
	
	return $watermark;
}, 10, 4 );
```

## Source Code

This hook can be found in the `Gpdf_Invoice_Base::get_watermark()` method, which is located in the `/config/gpdf-invoice-base.php` file in the [PDF Working Directory](../../../developers/first-custom-pdf.md#pdf-working-directory).
