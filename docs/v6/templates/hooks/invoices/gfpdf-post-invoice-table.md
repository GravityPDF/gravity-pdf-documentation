---
title: "PDF Invoice Hooks – gfpdf_post_invoice_table"
sidebar_label: "gfpdf_post_invoice_table"
description: "Use this action to dynamically insert content into the PDF Invoice just after the Invoice Table."
---

## Description

Use this action to dynamically insert content into the PDF Invoice just after the Invoice Table.

## Arguments

The following arguments are passed to functions that use this hook:

### $args | `array`
* Contains an array of all variables passed into the PDF template, including 'form' 'entry' 'form_data' 'settings' 'fields' 'config'

## Usage

Add HTML just after the Invoice Table in every PDF Invoice across every form:

```php
add_action( 'gfpdf_post_invoice_table', function( $args ) {
	?>
	<p>A paragraph of text to be included just after the invoice table in all PDF Invoice for all forms.</p>
	<?php
} );
```

Add HTML just after the Invoice Table in every PDF Invoice on a specific form:

```php
add_action( 'gfpdf_post_invoice_table', function( $args ) {
    if ( (int) ( $args['form']['id'] ?? 0 ) !== 20 ) {
        return;
    }

	?>
	<p>A paragraph of text to be included just after the invoice table in all PDF Invoice for a specific form.</p>
	<?php
} );
```

## Source Code

This hook can be found in the associated Invoice PDF template file, which is located in the [PDF Working Directory](../../../developers/first-custom-pdf.md#pdf-working-directory).
