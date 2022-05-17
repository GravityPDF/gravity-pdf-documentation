---
title: "Charlie Certificate Template: How to Install and Configure"
sidebar_label: "Charlie"
description: "Charlie is a premium certificate PDF that is dynamically generated using Gravity Forms data and has been built specifically for use with Gravity PDF."
---

*Charlie* is single-page PDF certificate for Gravity PDF and Gravity Forms. It offers a clean, subtle design that's perfectly suited for business or medical professionals. It is a premium Gravity PDF template and can be [purchased from the PDF Template Shop](https://gravitypdf.com/shop/certificate-charlie/). This guide will walk you through installing and configuring *Charlie* to its full potential.

## Installation 

[Please follow our installation guide](../installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

*Charlie* can be used with all Gravity Forms and you can display your form data in the certificate [using Gravity Forms Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/). All paper sizes are supported out of the box, but for the best results you will need to adjust the [Font Size](../../users/setup-pdf.md#font-size) up or down to suit the size of the paper you choose ([refer to the Recommended Font section](#recommended-font) for the best font and size to use with A4 or Letter paper). The certificate design and color scheme are fixed and cannot be changed.

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../../users/setup-pdf.md) to get a better understanding of all the available settings. All template-specific configuration is done from the *Template* tab, and below you'll find detailed information about each option available in *Charlie*, what it does and how it alters the generated PDF.

### Organization Details

#### Logo (1) 
* This image is positioned in the top-center of the certificate.
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB (the smaller the better).
* If a [Business Name](#business-name-2) is not provided, the available space for the logo will be slightly increased
* Defaults to an empty value

#### Business Name (2) 
* Enter the name of the company or establishment to be displayed in the area just below the Logo
* If a [Logo](#logo-1) is not provided, the Business Name will use a larger font size and weight to make it stand out
* Defaults to an empty value

### Certificate Configuration

:::info
For the best results it is recommended you use ALLCAPS for the [Title](#title-3), [Subtitle](#subtitle-4), and [Introduction](#introduction-5) settings in *Charlie*.  
:::

#### Title (3) 
* The title of the certificate that is displayed below the [Business Name](#business-name-2). [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported.
* Defaults to "CERTIFICATE"

#### Subtitle (4) 
* This text is displayed below the [Title](#title-3). It describes what type of certificate is being used in the document eg. appreciation, excellence, honor
* Defaults to "OF APPRECIATION"

#### Introduction (5) 
* This text is displayed below the [Subtitle](#subtitle-5). It is the introduction line for the [Awardee Name](#awardee-name-6).
* Defaults to "THIS CERTIFICATE IS PROUDLY AWARDED TO"

#### Awardee Name (6) 
* This text is displayed below the [Introduction](#introduction-5). It displays the name of the person receiving the certificate. [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported.
* Defaults to an empty value and in 99% of cases you will use merge tags to add the awardee name.

#### Additional Information (7) 
* This text is displayed below the [Awardee Name](#awardee-name-6). Use the full-featured Rich Text Editor to supply/format a brief description of why the recipient is receiving the certificate. [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported.
* Defaults to an empty value

#### Date (8) 
* The date to be included in the certificate. [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported.
* Defaults to "{date\_created}" which outputs the entry submission date in the format _April 21, 2022_. [You can use the `:format` modifier](https://docs.gravityforms.com/entry-date-merge-tags/#h-format) to change the date format. Define a custom format [using the WordPress and PHP date/time formatting characters](https://wordpress.org/support/article/formatting-date-and-time/). Examples include:
  * `{date_created:format:m/d/Y} = 04/21/2022`
  * `{date_created:format:d/m/Y} = 04/21/2022`
  * `{date_created:format:Y-m-d} = 2022-04-21`

#### Date Label (9) 
* The [Date setting](#date-8) label to be used in the certificate. 
* Defaults to "DATE"

### Signatory Details 

#### Signature (13) 
* Upload an image of your signature in JPG, PNG, or GIF format
* An image 250px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 200kb.
* Defaults to an empty value

#### Signature Label (14) 
* The [Signature setting](#signature-13) label to be used in the certificate. It is recommended to use the full name of the signatory (i.e the person who is signing the certificate).
* Defaults to "SIGNATURE"

## Recommended Font 

*Open Sans L Li Sb Sbi*, or Open Sans for short, is a free sans serif typeface created by Steve Matteson from Ascender Corp. It is highly legible and includes characters for Latin, Greek and Cyrillic alphabets. The font works best at 16pt when using A4 or Letter paper. Set the PDF font and size in the [Appearance tab](user-setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](user-viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.