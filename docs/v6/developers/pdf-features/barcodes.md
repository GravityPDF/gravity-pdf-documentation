---
title: "Using Barcodes and QR Codes in PDFs"
sidebar_label: "Barcodes"
description: ""
---

import ResponsiveEmbed from 'react-responsive-embed'

## Introduction

[A large array of barcodes (and QR Codes) are supported right out of the box](http://mpdf.github.io/what-else-can-i-do/barcodes.html) using the [special `<barcode>` HTML tag](http://mpdf.github.io/reference/html-control-tags/barcode.html).

At its most basic, you include the `<barcode>` HTML markup in your PDF template or [a HTML field in the Form Editor](../../users/add-custom-content.md):

```html
<barcode code="Your message here" type="QR" />
```

Gravity Forms merge tags are supported in the `code` attribute. You will need to keep in mind that each barcode require a specific format to be used otherwise it won't be generated.

## Barcodes and QR Codes using HTML

If you enjoy video tutorials, watch this 7-minute video with Gravity PDF’s lead developer as he takes you through to adding barcodes and QR codes in Gravity PDF Core and Universal PDF templates.

<ResponsiveEmbed src="https://player.vimeo.com/video/671780077?dnt=1" allowfullscreen />

## Supported CSS
The following CSS can be set on the `<barcode>` element:

* `vertical-align`
* `border`
* `margin`
* `padding`
* `color`
* `background-color`

## Examples

```html
<!-- Basic Barcode Usage -->
<barcode code="A34698735B" type="CODABAR" />
<barcode code="54321068" type="I25" />
<barcode code="978-0-9542246-0" type="ISBN" height="0.66" text="1" />
<barcode code="01234567094987654321-01234567891" type="IMB" />

<!-- QR Code Usage -->
<barcode code="Your message here" type="QR" />
<barcode code="http://test.com" type="QR" size="0.8" error="M" />
<barcode code="tel:+61 2 600 000" type="QR" disableborder="1" />

<!-- You can use the \n and \r characters and they will be converted to new line (LF) and tab (CRLF) characters -->
<barcode code="Your message\ngoes here" type="QR" class="barcode" size="0.8" error="M" />

<!-- Using a barcode with custom styles -->
<style>
.barcode {
    padding: 1.5mm;
    margin: 0;
    vertical-align: top;
    color: #000044;
}
.barcodecell {
    text-align: center;
    vertical-align: middle;
}
</style>

<div class="barcodecell"><barcode code="54321068" type="I25" class="barcode" /></div>
```
