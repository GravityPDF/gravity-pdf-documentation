---
title: "Cellulose Premium Template: How to Install and Configure"
sidebar_label: "Cellulose"
description: ""
---

![Cellulose displays your form data in a slim two-column table-based layout](https://resources.gravitypdf.com/uploads/2017/03/black-border_R1.png)

*Cellulose* is a business-orientated premium PDF template that displays your form data in a slim two-column table-based layout. You can purchase it from our [PDF Template Shop](https://gravitypdf.com/shop/cellulose/). This guide will walk you through installing and configuring *Cellulose* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template, *Cellulose* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields. However, [columns using CSS Ready Classes](../users/css-ready-classes.md) are not compatible.

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Cellulose*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.
* This option replaces the "Show Form Title" setting. To replicate, use the `{form_title}` merge tag.

### Logo / Image 
* This image is positioned in the top-left of the first page of the PDF. The height of the image will be no greater than 175px (15 millimetres or about 0.6 inches).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

### Cell Border Color 
* Set the cell border colour for the field label and user response. The default colour is Alto (hex `#d4d4d4`).

### Cell Border 
* Cell borders are shown by default. When this checkbox is ticked, the PDF will not show any borders around the field label or user response.

### First Page Header 
* The header is displayed in the top-right corner of page 1 in your PDF. The header is not displayed on any other pages (this matches the functionality of the logo).
* The header is right-aligned in the document, and this cannot be changed.
* Added in version 1.3.

### Footer 
* The footer is displayed in the bottom-left corner of all pages in your PDF.
* The footer is left-aligned in the document, and this cannot be changed.
* Added in version 1.3.

### Page Numbers 
* Page numbers are shown by default. When this checkbox is ticked the PDF will not show the current page number in the bottom right corner of the document.

## Additional Settings 

Along with the options specific to *Cellulose*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font 

*Cellulose* comes bundled with *Arimo*, an open source Google web font (Apache License, Version 2.0). *Arimo* is an innovative, refreshing sans serif font that works great at 10pt with *Cellulose*. Set the PDF font [in the Appearance tab](../users/setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
