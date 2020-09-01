---
title: "Sabre Premium Template: How to Install and Configure"
sidebar_label: "Sabre"
description: ""
---

![Sabre works great with business letters, invoices, etc](https://resources.gravitypdf.com/uploads/edd/2017/03/sabre-2.png)

*Sabre* is a universal PDF template that integrates seamlessly into any Gravity Form you might create. You can [purchase from our PDF Template Shop](https://gravitypdf.com/shop/sabre/). It provides functionality to include both the submitted user info and your important business details through the a highly customisable full-height sidebar.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md) that provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template, *Sabre* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields.

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Sabre*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.
* This option replaces the "Show Form Title" setting. To replicate, use the `{form_title}` merge tag.

### Sidebar Position 
* The sidebar spans the full height of the document and can be positioned either on the left or right-hand-side of the page.
* As the sidebar is included on all pages, it’s an excellent design for shorter forms.

### Sidebar Logo / Image 
* This image is centre-aligned in the header of each page of the PDF. The height of the image will be no greater than 280px (25 millimetres or about 1 inch).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small we recommend using an image under 1MB.

### Sidebar Content 
* The main content of your sidebar where you can include information such as contact details, instructions, social media links or opening hours, etc.
* For optimal display use Headings and Horizontal Lines to split up the sidebar content into easy-to-read blocks.
* **Note:** All heading tags (h1 – h6) will be displayed identically in the sidebar.

### Secondary Sidebar Content 
* Essentially a footer that appears at the very bottom of your sidebar.
* For best results keep this short and sweet.

### Sidebar Font 
* Set the font type used in the sidebar. This overrides the font set in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

### Sidebar Font Size 
* Set the font size used in the sidebar. The default font size is 11pt. This overrides the font set in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

### Sidebar Font Color 
* Set the font colour used in the sidebar. This overrides the font set in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

Only Display Sidebar on First Page? 
* When enabled the sidebar will only show on page 1 of the PDF. The content area margins will remain unchanged on subsequent pages. Defaults to display on all pages.
* Added in version 1.2

### Sidebar Background Color 
* This is the background colour used in the sidebar. The default sidebar background colour used in *Sabre* is a Denim (hex `#1e73be`).
* Pick a suitable contrasting colour for your [logo](#logo).

## Additional Settings 

Along with the options specific to *Sabre*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font 

*Sabre* comes bundled with *Lato*, an open source Google font (SIL Open Font License 1.1). *Lato* is a highly readable sans serif font that works great at 11pt with *Sabre*. Set the PDF font in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
