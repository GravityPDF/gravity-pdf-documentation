---
title: "Barot Universal Template: How to Install and Configure"
sidebar_label: "Barot"
description: "A business-ready PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Barot.](https://resources.gravitypdf.com/uploads/2017/06/cover-image-v2-12.jpg)

*Barot* is a business-orientated premium PDF template with full-width header. You can [purchase it from our PDF Template Shop](https://gravitypdf.com/shop/barot/). This guide will walk you through installing and configuring *Barot* to its full potential.

## Introduction

As a *Universal* PDF template, *Barot* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields.

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md) that provides instructions for setting up and configuring your premium template.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section and below you'll find detailed information about each option available in *Barot*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.

### Logo / Image
* This image is centre-aligned in the header of each page of the PDF. The height of the image will be no greater than 280px (25 millimetres or about 1 inch).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small we recommend using an image under 1MB.

### Header Background Color
* This is the background color used in the header of each page of the PDF. It's a full-width header that spans the entire paper size selected.
* Pick a suitable contrasting color for your [logo](#logo).
* The default header background color used in *Barot* is Alpine (hex `#b39c2b`).

### First Page Header
* By default the header is shown on every page of the PDF. Enabling this option will limit the header to the first page of your PDF.

### Footer Background Color
* The footer background color is used if you've entered content into the [Footer Content](#footer-content) section. It's a full-width footer that spans the entire paper size selected.
* The default footer background color used in *Barot* is a Gallery (hex `#eeeeee`).

### Footer Font Color
* This setting controls the color of the [footer text / content](#footer-content) independent of the [font color selected in the Appearance section](../users/setup-pdf.md#font-colour).
* Pick a suitable contrasting color for the [Footer Background Color](#footer-background-color).

### Footer Content
* The footer in *Barot* is designed for a single line of text (company name, phone number, email address), but can accommodate additional information or a logo. If you do insert an image, its height will be no greater than 280px (25 millimetre,s or about 1 inch).

## Additional Settings

Along with the options specific to *Barot*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font

*Barot* comes bundled with *Droid Serif*, an open source licensed font (Apache License, Version 2.0). *Droid Serif* is a highly readable font that works great at 10pt with Sabre. Set the PDF font in the [Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).
