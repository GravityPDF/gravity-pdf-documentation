---
title: "Watermark: How to Install and Configure"
sidebar_label: "Watermark"
description: "Watermark is a premium plugin for Gravity PDF that allows you to easily add a text or image watermark to any Gravity PDF-generated document."
---

![Watermark add-on](https://resources.gravitypdf.com/uploads/edd/2019/03/watermark-cover-artwork.png)

*Watermark* is a premium plugin for Gravity PDF that allows you to easily add a watermark to any Gravity PDF-generated document. You can include a text- or image-based watermark, control the watermark opacity, as well as the font.

You can purchase the *Watermark* plugin from our [Extension Shop](https://gravitypdf.com/shop/watermark-add-on/). This guide will walk you through installing and configuring *Watermark* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Configuring 

This extension adds a number of new settings to all non-legacy PDF templates (any template designed for Gravity PDF v4 or higher), and [they can be found in the *Appearance* tab](../users/setup-pdf.md#appearance-tab) when [adding/editing the PDF settings](../users/setup-pdf.md#locating-pdf-settings).

### Watermark Settings
![Watermark settings](https://resources.gravitypdf.com/uploads/edd/2019/03/settings1.png)

Below is the list of settings added by *Watermark*, with a brief description about what each is for:

#### Enable Watermark 
*  Toggle to enable the Watermark feature.
*  When enabled, the PDF/A-1b and PDF/X-1a formats are automatically disabled due to not supporting transparency.

#### Image Watermark 
*  Display an image watermark on each page of your PDF, vertically and horizontally centred.
*  For the best results, use a transparent PNG image the same dimensions as the [PDF Paper Size](../users/setup-pdf.md#paper-size).
*  To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB. [Try run the image through a compression tool like TinyPNG](https://tinypng.com/).

#### Text Watermark 
*  Display a text watermark diagonally-centred on each page of your PDF.
*  Valid UTF-8 character can be displayed, provided the [Font](#font) supports it.
*  Text and Image Watermarks can be used concurrently.
*  Merge tags are supported (v1.1+)

#### Font 
*  Select the font to use for the [Text Watermark](#text-watermark).
*  Additional fonts can be installed [via the Font Manager](../users/custom-fonts.md).

#### Opacity 
*  Control the transparency of both the Image and Text Watermarks by selecting a value between 0 and 100%.
*  A 0% opacity is completely transparent, while 100% opacity is not transparent at all.

### Previewer 

The *Watermark* plugin settings are supported [with the *Previewer* add-on](previewer-add-on.md), so you can display image watermarks when previewing the PDF. 

The [*Previewer* Text Watermark setting](previewer-add-on.md#watermark) takes precedent over the *Watermark* setting when the PDF is displayed before form submission. For example, if you were to:

* Set the *Watermark* Text Watermark to "Sample"
* Set the *Previewer* Field's Text Watermark to "Preview"

When viewing the PDF preview, the watermark "Preview" will be displayed. And when viewing after form submission, the watermark "Sample" will be displayed.