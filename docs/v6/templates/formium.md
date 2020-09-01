---
title: "Formium Premium Template: How to Install and Configure"
sidebar_label: "Formium"
description: ""
---

![When you need a PDF that looks just like your form layout, Formium is the best template for the job.](https://resources.gravitypdf.com/uploads/edd/2017/03/light-blue-field-background.png)
*Formium* is a premium PDF template designed to replicate the layout of your form. You can be [purchased from our PDF Template Shop](https://gravitypdf.com/shop/formium/). This guide will walk you through installing and configuring *Formium* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

As a *Universal* PDF template, *Formium* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields. *Formium* does not support [CSS Ready Class columns](css-ready-classes.md).

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Formium*, what it does and how it alters the generated PDF.

### Main Heading 
* The main heading is included at the very start of your PDF, before any other content. Merge tags are supported.
* Leave the field blank to disable.
* This option replaces the "Show Form Title" setting. To replicate, use the `{form_title}` merge tag.

### Field Background Color 
* Set the background colour used in the form data blocks. The default colour is Gallery (hex `#EEEEEE`).

### Field Color 
* Control the font colour of the form data blocks. This overrides the font colour set in the [Appearance tab](setup-pdf.md#appearance-tab).

## Additional Settings 

Along with the options specific to *Formium*, the following core settings are also supported:

-   [Show Page Names](setup-pdf.md#show-page-names)
-   [Show HTML Fields](setup-pdf.md#show-html-fields)
-   [Show Section Break Description](setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](setup-pdf.md#show-empty-fields)
-   [Header](setup-pdf.md#header)
-   [First Page Header](setup-pdf.md#first-page-header)
-   [Footer](setup-pdf.md#footer)
-   [First Page Footer](setup-pdf.md#first-page-footer)

## Recommended Font 

*Formium* comes bundled with *Arimo*, an open source Google web font (Apache License, Version 2.0). *Arimo* is an innovative, refreshing sans serif font that works great with *Formium* at 10pt. Set the PDF font [in the Appearance tab](setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
