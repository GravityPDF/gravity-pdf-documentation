---
title: "Formialt Universal Template: How to Install and Configure"
sidebar_label: "Formialt"
description: "A sleek PDF design which dynamically generates using Gravity Forms data using Gravity PDF."
---

![Two A4 pieces of paper stacked on top of each other. Both are printed copies of PDFs generated using Gravity PDF and Formialt.](https://resources.gravitypdf.com/uploads/2018/10/formialt-cover-image-v2.jpg)

*Formialt* is a premium PDF template with rounded corners, robust color control, and compact design. You can purchase it from our [PDF Template Shop](https://gravitypdf.com/shop/formialt/). This guide will walk you through installing and configuring *Formialt* to its full potential.

## Introduction

As a *Universal* PDF template, *Formialt* can be used with all Gravity Forms and will correctly display any official Gravity Forms fields. Because the design is a fixed two-column layout, [Drag and Drop columns are not supported](../users/columns.md).

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* section and below you'll find detailed information about each option available in *Formialt*, what it does and how it alters the generated PDF.

### Main Heading
* The main heading is left-aligned and included on the first page of your PDF, before any of your Gravity Forms fields. Merge tags are supported.
* The Main Heading background will use the [Heading Background Color](#heading-background-color), while the font color will be set to black or white, depending on the best contrast.
* Leave the field blank to disable.

### Heading Background Color
* The Heading Background Color is used for the Main Heading and Section Break Title.
* The default color is Mountbatten Pink (hex `#9e7b9b`).

### Field Background Color
* The Field Background Color is used for all Gravity Forms fields except the HTML and Page fields, as well as the Section Break Description (which don't have a background).
* The field font color will be set to black or white, depending on the best contrast.
* The default color is Dove Gray (hex `#666666`).

### Color Schemes
The following Heading / Field Background Colors were used in Formialt's shop screenshots:
   
* [Yellow and Jet](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-yellow-jet.png): #f5cb5c / #333533
* [Tart Orange and White Smoke](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-tart-orange-white-smoke.png): #fe4a49 / #f0eff4
* [Lapis Blue and Azure White](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-lapis-blue-azure-white.png): #255c99 / #e3ecf4
* [Raspberry and Yankees Blue](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-raspberry-yankees-blue.png): #89043d / #1c3041
* [Brown and Medium Spring](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-brown-medium-spring.png): #918868 / #d2e59e
* [Tundora and Frosted Mint](https://resources.gravitypdf.com/uploads/edd/2018/10/formialt-tundora-frosted-mint.png): #494949 / #d8ffee

## Additional Settings

Along with the options specific to *Formialt*, the following core settings are also supported:

-   [Show Page Names](../users/setup-pdf.md#show-page-names)
-   [Show HTML Fields](../users/setup-pdf.md#show-html-fields)
-   [Show Section Break Description](../users/setup-pdf.md#show-section-break-description)
-   [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)
-   [Show Empty Fields](../users/setup-pdf.md#show-empty-fields)
-   [Header](../users/setup-pdf.md#header)
-   [First Page Header](../users/setup-pdf.md#first-page-header)
-   [Footer](../users/setup-pdf.md#footer)
-   [First Page Footer](../users/setup-pdf.md#first-page-footer)

## Recommended Font

*Formialt* comes packaged with the open source sans-serif font, [Roboto](https://fonts.google.com/specimen/Roboto), which was designed by Christian Robertson, an interface designer for Google. For the best results, we recommend using Roboto at 10pt. Set the PDF font [in the Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md).