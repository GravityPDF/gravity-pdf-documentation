---
title: "PDF Invoice Hooks – gfpdf_pre_invoice_html"
sidebar_label: "gfpdf_pre_invoice_html"
description: "Use this action to dynamically insert content into the PDF Invoice before all other content."
---

## Description

Use this action to dynamically insert content into the PDF Invoice before all other content.

## Arguments

The following arguments are passed to functions that use this hook:

### $args | `array`
* Contains an array of all variables passed into the PDF template, including 'form' 'entry' 'form_data' 'settings' 'fields' 'config'

## Usage

Add HTML to the start of every PDF Invoice across every form:

```php
add_action( 'gfpdf_pre_invoice_html', function( $args ) {
	?>
	<p>A paragraph of text to be included at the start of every PDF Invoice for all forms.</p>
	<?php
} );
```

Add HTML to the start of every PDF Invoice on a specific form:

```php
add_action( 'gfpdf_pre_invoice_html', function( $args ) {
    if ( (int) ( $args['form']['id'] ?? 0 ) !== 20 ) {
        return;
    }

	?>
	<p>A paragraph of text to be included at the start of every PDF Invoice for a specific form.</p>
	<?php
} );
```

## Source Code

This hook can be found in the associated Invoice PDF template file, which is located in the [PDF Working Directory](../../../developers/first-custom-pdf.md#pdf-working-directory).
