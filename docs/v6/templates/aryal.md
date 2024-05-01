---
title: "Aryal Universal Template: How to Install and Configure"
sidebar_label: "Aryal"
description: "A colorful and stylish PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Aryal.](https://resources.gravitypdf.com/uploads/2018/10/aryal-cover-image-a1.jpg)

*Aryal* is a premium PDF template with a colorful, vibrant and stylish look and feel. You can purchase it from our [PDF Template Shop](https://gravitypdf.com/shop/aryal/). This guide will walk you through installing and configuring *Aryal* to its full potential.

## Introduction

As a *Universal* PDF template, *Aryal* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields.

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section, and below you'll find detailed information about each option available in *Aryal*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is left-aligned and included on the first page of your PDF, [below the Logo](#logo--image) (if present), and before any of your Gravity Forms fields. Merge tags are supported.
* Leave the field blank to disable.

### Logo / Image
* This image is positioned in the top-left of the first page of the PDF (above the [Main Heading](#main-heading)). The height of the image will be no greater than 283px (24 millimetres or about 0.94 inches).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

### Primary Color
* The Primary Color is used to calculate a spread of colors for the background triangles. The List and Likert fields, as well as the Product Table, make use of this color in their table layout.
* The default color is Fall Green (hex `#ededb8`).

### Secondary Color
* The Secondary Color is used to calculate an alternate spread of colors for the background triangles.
* The default color is
Aqua Island (hex `#acd4e0`).

### Color Schemes
The following Primary and Secondary Colors were used in Aryal's shop screenshots:
   
 * [Saltpan and Wheat](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-steel-orange.png): #edf4ee / #f6dcb0
 * [Kournikova and Panache](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-honey-steel.png): #fff07c / #f0f7ee
 * [Aquamarine and Mid Gray](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-cyan-gun-metal.png): #44ffd2 / #616163
 * [Pale Oyster and Sea Mist](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-brown-light-green.png): #9c9583 / #cadbc8
 * [Red Violet and Jaffa](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-pink-orange.png): #bf1363 / #f39237
 * [Burnt Sienna and Sidecar](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-red-yellow.png): #ed6a5a / #f4f1bb
 * [Cosmic and Watusi](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-purple-pink.png): #75456f / #ffe0d2

## Additional Settings

Along with the options specific to *Aryal*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)
-   [Footer](../users/setup-pdf.md#footer)

## Recommended Font

*Aryal* comes packaged with the open source sans-serif font, [Roboto](https://fonts.google.com/specimen/Roboto), which was designed by Christian Robertson, an interface designer for Google. Roboto features friendly and open curves and has a natural reading rhythm. For the best results, we recommend using Roboto at 10pt. Set the PDF font in the [Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).
