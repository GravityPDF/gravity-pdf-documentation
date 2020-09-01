---
title: "Formal Letter Template: How to Install and Configure"
sidebar_label: "Formal Letter"
description: ""
---

![\*Formal Letter\* is used to generate a concise and succinct document in traditional letter format.](https://resources.gravitypdf.com/uploads/edd/2017/03/cover-image-6.png)
*Formal Letter* is a premium PDF template used to generate a concise and succinct document in traditional letter format. It can be [purchased from our PDF Template Shop](https://gravitypdf.com/shop/formal-letter/). This guide will walk you through installing and configuring *Formal Letter* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

*Formal Letter* can be used with all Gravity Forms. You'll have access to your form data for use in the letter through Gravity Forms Merge Tags. For more information see the [Gravity Forms Merge Tags documentation](https://www.gravityhelp.com/documentation/article/merge-tags/).

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab and below you'll find detailed information about each option available in *Formal Letter*, what it does and how it alters the generated PDF.

### Standard Information

![The letter field positions](https://resources.gravitypdf.com/uploads/2017/04/field-positions-1-1.png)

#### Greeting Salutation (1) 
* The opening greeting for your letter. If you've set the [Recipient's Name](#recipient-name) the following Merge Tags are available for use: `{prefix}`, `{firstname}`, `{surname}`, `{suffix}`.
* Instead of using the recipient's full name you can also use `Dear {prefix} {surname}`.
* If you don't know the recipient's name use `To whom it may concern` or `Dear Sir or Madam`.
* Note: American English usually uses a colon instead of a comma at the end of the greeting.

#### Letter Subject (2) 
* Include a brief summary about your letter. The Subject will be included below your [Greetings Salutation](#greeting-salutation) and above your [Letter Body](#letter-body).
* You might like to append your subject with "Re:" or "Subject:" and/or write it in capital letters.
* If you leave this setting blank it won't be included in the PDF.

#### Letter Body (3) 
* The main body of your letter. Use the full-featured rich text editor to format the letter how you want. You can easily integrated data captured from your users by using Merge Tags.
* You should excludes salutations, addresses and signatures as they are handled by other settings.

#### Closing Salutation (4) 
* This text appears right after the body of your letter.
* `Yours sincerely` is a common closing salutation. Outside the US, if you don't know the recipient's name `Yours faithfully` should be used.

#### Date Format (5) 
* Select the date format that is shown in the letter. The date shown on the PDF is taken from the entry submission date.
* We support date formats out of the box:
    -   November 29, 2018 (Month Day, Year)
    -   29/11/2018 (dd/mm/yyyy)
    -   11/29/2018 (mm/dd/yyyy)
    -   2018-11-29 (yyyy-mm-dd)
    -   Disable Date

#### Indent Paragraphs 
* When checked the first line of each paragraph of the [Body](#letter-body) text is indented.

![You can optionally indent the body text](https://resources.gravitypdf.com/uploads/2017/04/indent-text-2.png)

### Sender Information 

![The letter field positions](https://resources.gravitypdf.com/uploads/2017/04/field-positions-2-1.png)

#### Sender Address (6) 
* The sender address is split into three separate fields for each line it takes up in the letter.
* You are usually the sender and your address should be used, but you can also use Merge Tags to include that information from the form.

### Recipient Information 

#### Recipient Name (7) 
* Use Gravity Forms merge tags to include the letter recipient's name. In the settings this is split up between four fields: Prefix, First Name, Last Name and Suffix.

#### Recipient Business/Position (8) 
* If applicable, include the recipient business and/or position in the company using Merge Tags

#### Recipient Address (9) 
* The recipient address is split into three separate fields for each line it takes up in the letter.

### Signatory Details 

![The letter field positions](https://resources.gravitypdf.com/uploads/2017/04/field-positions-3-2.png)

#### Blank Signature (10) 
* Tick this checkbox if the letter is to be printed and signed by hand. The PDF will leave a gap between the [Closing Salutation](#closing-salutation) and the Signatory Name.

#### Signature (10) 
* Upload an image of your signature. If no image is set a faux signature will be used instead, generated using the [Signatory Name](#signature-name).
* This templates comes bundled with *Dancing Script*, an open source Google script font (SIL Open Font License, Version 1.1), used for the faux signature.

#### Signatory Name (11) 
* The full name of the signatory (i.e the person who is signing the letter)

#### Signatory Business/Position (12) 
* You can include the signatory's business and/or position. This is optional.

## Recommended Font 

*Merriweather* is an open source Google serif font (SIL Open Font License, Version 1.1) that is pleasant to read on screens and works well with *Formal Letter* at 10pt. You can set the PDF font in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
