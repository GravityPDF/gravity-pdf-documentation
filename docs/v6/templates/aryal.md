---
title: "Aryal Premium Template: How to Install and Configure"
sidebar_label: "Aryal"
description: "Aryal is a colourful, stylish Universal template with a focus on design. It's a great fit for businesses with a creative focus."
---

![Aryal is a colourful, stylish Universal template with a focus on design](https://resources.gravitypdf.com/uploads/edd/2018/10/aryal-standard.png)

*Aryal* is a premium PDF template with a colourful, vibrant and stylish look and feel. You can purchase it from our [PDF Template Shop](https://gravitypdf.com/shop/aryal/). This guide will walk you through installing and configuring *Aryal* to its full potential.

## Installation 

[Please follow our installation guide](shop-installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template, *Aryal* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields.

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](user-setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Aryal*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is left-aligned and included on first page of your PDF, [below the Logo](#logo) (if present), and before any of your Gravity Forms fields. Merge tags are supported.
* Leave the field blank to disable.
* This option replaces the "Show Form Title" setting. To replicate, use the `{form_title}` merge tag.

### Logo / Image 
* This image is positioned in the top-left of the first page of the PDF (above the [Main Heading](#main-heading)). The height of the image will be no greater than 283px (24 millimetres or about 0.94 inches).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small we recommend using an image under 1MB.

### Primary Color 
* The Primary Color is used to calculate a spread of colours for the background triangles. The List and Likert fields, as well as the Product Table, make use of this colour in their table layout. 
* The default colour is Fall Green (hex `#ededb8`).

### Secondary Color 
* The Secondary Color is used to calculate an alternate spread of colours for the background triangles. 
* The default colour is 
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

-   [Show Page Names](user-setup-pdf.md#show-page-names)
-   [Show HTML Fields](user-setup-pdf.md#show-html-fields)
-   [Show Section Break Description](user-setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](user-setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](user-setup-pdf.md#show-empty-fields)
-   [Footer](user-setup-pdf.md#footer)

## Recommended Font 

*Aryal* comes packaged with the open source sans-serif font, [Roboto](https://fonts.google.com/specimen/Roboto), which was designed by Christian Robertson, an interface designer for Google. Roboto features friendly and open curves and has a natural reading rhythm. For the best results we recommend using Roboto at 10pt.

## Viewing PDF 

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](user-viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
