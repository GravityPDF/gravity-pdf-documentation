---
title: "Tritan Premium Template: How to Install and Configure"
sidebar_label: "Tritan"
description: ""
---

![Tritan is a fancy template](https://resources.gravitypdf.com/uploads/edd/2018/02/tritan-cover-image-v2.jpg)

*Tritan* is a fancy Universal PDF template that integrates seamlessly into any Gravity Form you might create. You can [purchase from our PDF Template Shop](https://gravitypdf.com/shop/tritan/). It's ideally suited for short forms with a limited number of pages (resumès instantly come to mind), but can be scaled to larger forms by disabling the first-page sidebar.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md) that provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template *Tritan* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields. **Header text is not supported in Tritan**.

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Tritan*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.
* To include the form title, use the `{form_title}` merge tag.

### Primary Colour 
* This colour is used in the top-left header triangle and bottom-right footer triangle. The List and Likert fields also make use of this colour in their table layout.

### Secondary Colour 
* This colour is used in the top-right header triangle and the bottom-left footer triangle. The HTML and Product fields also make use of this colour in their layout.

### Left Footer 
* This content will be displayed in the bottom left triangle on each page of your document
* The footer colour will be set to black or white automatically based on the best background contrast.
* There is limited space for text, so best keep it short.

### Right Footer 
* This content will be displayed in the bottom right triangle on each page of your document.
* The footer colour will be set to black or white automatically based on the best background contrast.
* There is limited space for text, so best keep it short.

### Sidebar Image 
* This image is included in the first-page sidebar. The width of the image will be 15% of the overall document width (that's roughly 120px on A4 / Letter sized documents).
* An image 500px wide will be a suitable resolution. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.
* The File Upload field merge tag can be used to display a user-uploaded image. It's recommended you limit the maximum upload size to under 1MB.

### Sidebar Content 
* The main content of your sidebar where you can include information such as contact details, instructions, social media links or opening hours, etc.
* Alternatively, you can add user-supplied content with merge tags and [hide those fields from the main content area](../users/hide-form-fields.md).
* For optimal display, use Headings and Horizontal Lines to split up the sidebar content into easy-to-read blocks. **Note:** All heading tags (h1 – h6) will be displayed identically in the sidebar.

### Sidebar Font Color 
* This is the font colour used in the sidebar. The default sidebar font colour is dark grey (hex `#1e73be`).

## Additional Settings 

Along with the options specific to *Tritan*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)

## Recommended Font 

*Tritan* comes bundled with both *Fira Sans Regular* and *Fira Sans Light* which are both open source fonts (SIL Open Font License 1.1). *Fira Sans* is a highly legible sans serif font that works great at 10pt with *Tritan*. Set the PDF font in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
