---
title: "Leo Universal Template: How to Install and Configure"
sidebar_label: "Leo"
description: "A charismatic PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Leo.](https://resources.gravitypdf.com/uploads/2018/10/leo-cover-image-v2a.jpg)

*Leo* is a premium PDF template that displays your form data with both professionalism and charisma. You can purchase it from our [PDF Template Shop](https://gravitypdf.com/shop/leo/). This guide will walk you through installing and configuring *Leo* to its full potential.

## Introduction

As a *Universal* PDF template, *Leo* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields. Because the design is a fixed two-column layout, [Drag and Drop columns are not supported](../users/columns.md).

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section, and below you'll find detailed information about each option available in *Leo*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is included on the first page of your PDF, before any other content, on the top-left side (adjacent to the [Logo](#logo)). Merge tags are supported.
* Leave the field blank to disable.

### Sub Heading
* The sub heading is included below the Main Heading. Merge tags are supported.
* Leave the field blank to disable.

### Logo / Image
* This image is positioned in the top-right of the first page of the PDF (adjacent to the [Main Heading](#main-heading)). The height of the image will be no greater than 235px (20 millimetres or about 0.78 inches).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

### Footer
* The footer is displayed in the bottom of all pages in your PDF.
* The footer text is center-aligned in the document, and this cannot be changed.
* The footer background color is set using the [Secondary Color](#secondary-color) Setting. The text color will use black or white (whichever has the best contrast).

### Primary Color
* Used for the top-bar background color that is displayed on every page. The default color is Azure Radiance (hex `#098FFE`).

### Secondary Color
* Used for the bottom-bar background color that is displayed on every page. The default color is Tundora (hex `#4C4C4C`).

## Additional Settings

Along with the options specific to *Leo*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font

*Leo* comes bundled with *Montserrat*, an open source Google web font (SIL Open Font License Version 1.1). *Montserrat* is an ode to the old posters and signs in the traditional Montserrat neighbourhood of Buenos Aires and works great at 10pt with *Leo*. Set the PDF font [in the Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).
