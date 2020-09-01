---
title: "Colossus Premium Template: How to Install and Configure"
sidebar_label: "Colossus"
description: ""
---

![Colossus allows your fields to automatically be displayed in two, three and four column layouts.](https://resources.gravitypdf.com/uploads/edd/2017/03/four-columns.png)
*Colossus* is a a column-based premium PDF template with the option to automatically display two, three or four-column layouts – no CSS-Ready Classes required! You can [purchase from our PDF Template Shop](https://gravitypdf.com/shop/colossus/). This guide will walk you through installing and configuring *Colossus* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template, *Colossus* can be used with all Gravity Forms and will correctly display most official Gravity Forms fields. **To ensure the layout stays consistent Page and Hidden fields are removed from the PDF.**

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Colossus*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.
* This option replaces the "Show Form Title" setting. To replicate, use the `{form_title}` merge tag.

### Columns 
* Controls the number of columns to use in the PDF. Choose between two, three or four column layout. The default layout is 3 columns.
* The more columns used the more condensed the PDF will be. If using List or Likert fields we recommend two columns.

### Logo / Image 
* This image is left-aligned in the header of each page of the PDF. The height of the image will be no greater than 280px (25 millimetres or about 1 inch).
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small we recommend using an image under 1MB.

### Show Section Break Title 
* You can enable or disable the Section Break fields in the PDF. Defaults to disabled.
* When enabled, the Section Break fields will be displayed in a new row spanning the width of the PDF.
* Added in version 2.0.

### Show Section Break Description 
* You can enable or disable the Section Break field description in the PDF. Defaults to disabled.
* The [Show Section Break Title](#show-section-break-title) option must be enabled to display the Section Break field description.
* Added in version 2.0.

### Show HTML Fields 
* You can enable or disable HTML fields in the PDF. Defaults to disabled.
* When enabled, the HTML fields will be displayed in a new row spanning the width of the PDF.
* Added in version 2.0.

## Additional Settings 

Along with the options specific to *Colossus*, the following core settings are also supported:

-   [Footer](setup-pdf.md#footer)

## CSS Ready Classes 

[While this template ignores the standard CSS Ready Classes](https://docs.gravityforms.com/css-ready-classes/), in version 2.0 the following CSS Ready Classes can be used to give you more control over the rows and columns:

-   `row-break` – When a field has this CSS class added, the PDF will always display that field in the first column of a row (creating a new row if necessary).
-   `full-width` – When a field has this CSS class added, the PDF will allways display that field in a new row that spans the full-width of the PDF (i.e columns get disabled for this field).

## Recommended Font 

*Colossus* comes bundled with *Arimo*, an open source Google web font (Apache License, Version 2.0). *Arimo* is a innovative, refreshing sans serif font that works great at 10pt with *Colossus*. Set the PDF font [in the Appearance tab](setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
