---
title: "Sabre Universal Template: How to Install and Configure"
sidebar_label: "Sabre"
description: "A business-orientated PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Sabre.](https://resources.gravitypdf.com/uploads/2017/06/cover-image-v2-8.jpg)

*Sabre* is a universal PDF template that integrates seamlessly into any Gravity Forms you might create. You can [purchase from our PDF Template Shop](https://gravitypdf.com/shop/sabre/). It provides functionality to include both the submitted user info and your important business details through a highly customisable full-height sidebar.

## Introduction

As a *Universal* PDF template, *Sabre* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields.

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md) that provides instructions for setting up and configuring your premium template.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section and below you'll find detailed information about each option available in *Sabre*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.

### Sidebar Position
* The sidebar spans the full height of the document and can be positioned either on the left or right-hand-side of the page.
* As the sidebar is included on all pages, it’s an excellent design for shorter forms.

### Sidebar Logo / Image
* This image is centre-aligned in the header of each page of the PDF. The height of the image will be no greater than 280px (25 millimetres or about 1 inch).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

### Sidebar Content
* The main content of your sidebar where you can include information such as contact details, instructions, social media links or opening hours, etc.
* For optimal display use Headings and Horizontal Lines to split up the sidebar content into easy-to-read blocks.
* **Note:** All heading tags (h1 – h6) will be displayed identically in the sidebar.

### Secondary Sidebar Content
* Essentially a footer that appears at the very bottom of your sidebar.
* For best results, keep this short and sweet.

### Sidebar Font
* Set the font type used in the sidebar. This overrides the font set in the [Appearance section](../users/setup-pdf.md#appearance-section).

### Sidebar Font Size
* Set the font size used in the sidebar. The default font size is 11pt. This overrides the font set in the [Appearance section](../users/setup-pdf.md#appearance-section).

### Sidebar Font Color
* Set the font color used in the sidebar. This overrides the font set in the [Appearance section](../users/setup-pdf.md#appearance-section).

### Only Display Sidebar on First Page?
* When enabled the sidebar will only show on page 1 of the PDF. The content area margins will remain unchanged on subsequent pages. Defaults to display on all pages.

### Sidebar Background Color
* This is the background color used in the sidebar. The default sidebar background color used in *Sabre* is a Denim (hex `#1e73be`).
* Pick a suitable contrasting color for your [logo](#sidebar-logo--image).

## Additional Settings

Along with the options specific to *Sabre*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font

*Sabre* comes bundled with *Lato*, an open source Google font (SIL Open Font License 1.1). *Lato* is a highly readable sans serif font that works great at 11pt with *Sabre*. Set the PDF font in the [Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).
