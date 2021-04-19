---
title: "Custom Template Text and Image-based Watermarks"
sidebar_label: "Watermarks"
description: "A watermark is a semi-transparent element added to your PDF. Both text and image watermarks are supported, and you have full control over transparency."
---

## Introduction 

A watermark is a semi-transparent element overlaid on each page of your PDF. Both text and image watermarks are supported, and you have full control over the transparency.
![Example of text watermark](https://resources.gravitypdf.com/uploads/2015/11/watermark.png)
Two unique HTML tags are used to output watermarks (one for text watermarks and one for images):

-   `<watermarktext content [ alpha ] />`
-   `<watermarkimage src [ alpha ] [ size ] [ position ] />`

**Watermarks cannot be used when [setting the PDF format](../../users/setup-pdf.md#format) to PDF/A-1b or PDF/X-1a.**

## Text Watermarks 

`<watermarktext content [ alpha ] />`

Text watermarks can be enabled by including the following HTML in your PDF template:

```html
<watermarktext content="PRIVATE" />
```

### content 
* The text you want watermarked on the PDF. This is a required attribute.
* If `content` is set to blank, it will disable watermarking in the document from that page onwards.
* The `content` attribute **must have special characters encoded correctly**. This includes the `<`, `>`, `'`, `"` and `&` symbols. To prevent unexpected behaviour, use the PHP function `htmlspecialchars`.

```
    <watermarktext content="<?= htmlspecialchars( '<CONFIDENTIAL>', ENT_QUOTES ); ?>" />
```

### alpha 
* Controls the text transparency and should be a number between 0-1. This field is optional.

```html
    <watermarktext content="PRIVATE" alpha="0.3" />
```

## Image Watermarks 

`<watermarkimage src [ alpha ] [ size ] [ position ] />`

The image watermark only requires the `src` attribute. The `alpha`, `size` and `position` attributes are all optional.

### src 
* The URL or path to the image. We recommend using the path as it has better support across a range of hosting environments.

### alpha 
* Controls the image transparency and should be a number between 0-1

### size 
* Controls the image size that your watermark should be displayed at. By default, the image will display at its original size (depending on the PDF DPI settings)
* **Values:**
    `D` – Display at original image size (default)
    `P` – Resize image to fit the full page
    `F` – Resize to fit the PDF print area, respecting page margins
    `width,height` – Two comma-separated numbers specifying the width and height of the image in millimetres

### position 
* Specifies where the image should be positioned on the page
* **Values:**
    `P` – Vertically and horizontally centred on the page
    `F` – Vertically and horizontally centred on the print area with respect to page margins
    `width,height` – Specify the `x` and `y` position (in millimetres) of where the image should be placed

```
<!-- Basic Image Watermark -->
<watermarkimage src="<?= __DIR__ ?>/images/gravityformspdfextended.jpg" />

<pagebreak />

<!-- Image watermark with 50% transparency -->
<watermarkimage src="<?= __DIR__ ?>/images/gravityformspdfextended.jpg" alpha="0.5" />

<pagebreak />

<!-- Image watermark resized to fit the full page -->
<watermarkimage src="<?= __DIR__ ?>/images/gravityformspdfextended.jpg" size="P" />

<pagebreak />

<!-- Image watermark with default size positioned 10mm x 10mm from the top left corner -->
<watermarkimage src="<?= __DIR__ ?>/images/gravityformspdfextended.jpg" position="10,10" />

<pagebreak />

<!-- Image watermark resized to 50x50mm image -->
<watermarkimage src="<?= __DIR__ ?>/images/gravityformspdfextended.jpg" size="50,50" />
```

## Example 

[We’ve put together a sample showing off the text and image watermark capabilities in Gravity PDF](https://gist.github.com/jakejackson1/02040fce628eb4750498).
