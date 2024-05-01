---
title: "Colossus Universal Template: How to Install and Configure"
sidebar_label: "Colossus"
description: "A multi-column PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Colossus.](https://resources.gravitypdf.com/uploads/2017/06/cover-image-v2-11.jpg)

*Colossus* is a a column-based premium PDF template with the option to automatically display two, three or four-column layouts – no CSS-Ready Classes required! You can [purchase from our PDF Template Shop](https://gravitypdf.com/shop/colossus/). This guide will walk you through installing and configuring *Colossus* to its full potential.

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Introduction

As a *Universal* PDF template, *Colossus* can be used with all Gravity Forms and will correctly display all official Gravity Forms fields. Because the design offers fixed columns that are defined in the PDF settings, [Drag and Drop columns are not supported](../users/columns.md).

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section, and below you'll find detailed information about each option available in *Colossus*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.

### Columns
* Controls the number of columns to use in the PDF. Choose between two, three or four column layout. The default layout is 3 columns.
* The more columns used, the more condensed the PDF will be. If using List or Likert fields, we recommend [adding the full-width CSS Ready Class to those fields](#css-ready-classes).

### Logo / Image
* This image is left-aligned in the header of each page of the PDF. The height of the image will be no greater than 280px (25 millimetres or about 1 inch).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

### Show Section Break Title
* You can enable or disable the Section Break fields in the PDF. Defaults to disabled.
* When enabled, the Section Break fields will be displayed in a new row spanning the width of the PDF.

### Show Section Break Description
* You can enable or disable the Section Break field description in the PDF. Defaults to disabled.
* The [Show Section Break Title](#show-section-break-title) option must be enabled to display the Section Break field description.


## Additional Settings

Along with the options specific to *Colossus*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)
-   [Footer](../users/setup-pdf.md#footer)

## CSS Ready Classes

[While this template ignores the standard CSS Ready Classes](https://docs.gravityforms.com/css-ready-classes/), the following can be added to individual fields in the form editor to give you more control over the rows and columns:

-   `row-break` – When a field has this CSS class added, the PDF will always display that field in the first column of a row (creating a new row if necessary).
-   `full-width` – When a field has this CSS class added, the PDF will always display that field in a new row that spans the full-width of the PDF (i.e columns get disabled for this field).

## Recommended Font

*Colossus* comes bundled with *Arimo*, an open source Google web font (Apache License, Version 2.0). *Arimo* is an innovative, refreshing sans serif font that works great at 10pt with *Colossus*. Set the PDF font [in the Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).
