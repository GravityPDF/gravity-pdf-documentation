---
title: "Montgomery Certificate Template: How to Install and Configure"
sidebar_label: "Montgomery"
description: "Montgomery is a premium certificate PDF that is dynamically generated using Gravity Forms data and has been built specifically for use with Gravity PDF."
---

![A look at the Montgomery certificate in A4 Portrait and Landscape mode](https://resources.gravitypdf.com/uploads/2022/05/Montgomery.png)

*Montgomery* is a single-page PDF certificate for Gravity PDF and Gravity Forms. Fine gold accents, clean lines, and crisp color create an air of refinement that ensures *Montgomery* is suitable for use across a range of industries or occasions. *Montgomery* is a premium Gravity PDF template and can be [purchased from the PDF Template Shop](https://gravitypdf.com/shop/certificate-montgomery/). This guide will walk you through installing and configuring *Montgomery* to its full potential.

## Installation

[Please follow our installation guide](../installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations

*Montgomery* can be used with all Gravity Forms and you can display your form data in the certificate [using Gravity Forms Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/). All paper sizes are supported out of the box, but for the best results you will need to adjust the [Font Size](../../users/setup-pdf.md#font-size) up or down to suit the size of the paper you choose ([refer to the Recommended Font section](#recommended-font) for the best font and size to use with A4 or Letter paper). The certificate design and color scheme are fixed and cannot be changed.

## Configuring

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../../users/setup-pdf.md) to get a better understanding of all the available settings. All template-specific configuration is done from the *Template* tab, and below you'll find detailed information about each option available in *Montgomery*, what it does and how it alters the generated PDF.

![The Montgomery PDF Certificate with numbers from 1-11 that represent the corresponding PDF setting](https://resources.gravitypdf.com/uploads/2022/05/Montgomery-with-numbering.png)
*The position of each PDF setting in the certificate (see below)*

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
For the best results it is recommended you use ALLCAPS for the [Title](#title-3), [Subtitle](#subtitle-4), and [Introduction](#introduction-5) settings. 
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

#### Signature (10)
* Upload an image of your signature in JPG, PNG, or GIF format (a transparent PNG will give the best results)
* An image 250px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 200kb.
* Defaults to an empty value

#### Signature Label (11)
* The [Signature setting](#signature-10) label to be used in the certificate. It is recommended to use the full name of the signatory (i.e the person who is signing the certificate).
* Defaults to "SIGNATURE"

## Recommended Font

[*Open Sans L Li B Bi*, or Open Sans for short](https://fonts.google.com/specimen/Open+Sans), is a free sans serif typeface created by Steve Matteson from Ascender Corp. It is highly legible and includes characters for Latin, Greek and Cyrillic alphabets. The font works best at 14pt when using A4 or Letter paper. Set the PDF font and size in the [Appearance tab](../../users/setup-pdf.md#appearance-section).

### Other Fonts

_Montgomery_ [makes use of the open source font Amiri](https://fonts.google.com/specimen/Amiri) for the [Business Name](#business-name-2), [Title](#title-3), and [Subtitle](#subtitle-4), while [Alex Brush](https://fonts.google.com/specimen/Alex+Brush) (with a [fallback to Charm](https://fonts.google.com/specimen/Charm) for unsupported characters) is used for the [Awardee Name](#awardee-name-6). These fonts cannot be changed via the UI.

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.