---
title: "Invoice Modern Premium Template: How to Install and Configure"
sidebar_label: "Invoice Modern"
description: ""
---

![Invoice Modern is a modern take on the invoice](https://resources.gravitypdf.com/uploads/edd/2017/03/cover-image-5.png)
*Invoice Modern* is an invoice template on steroids and [can be purchased from our PDF Template Shop](https://gravitypdf.com/shop/invoice-modern/). This guide will walk you through installing and configuring *Invoice Modern* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides instructions for setting up and configuring your premium template.

## Limitations 

As an *Invoice* PDF template, *Invoice Modern* can be used with any Gravity Forms that **include Product fields**. You have access to your form data through Gravity Forms Merge Tags. For more information, see the [Gravity Forms Merge Tags documentation](https://www.gravityhelp.com/documentation/article/merge-tags/).

## Configuring 

All PDF templates have common settings that can be configured, such as font, security and PDF attachments. We recommend [reviewing the PDF setup guide](../users/setup-pdf.md) to get a better understanding on all the available settings. All template-specific configuration is done from the *Template* tab, and below you'll find detailed information about each option available in *Invoice Modern*, what it does and how it alters the generated PDF.

The invoice PDF configuration is split up into six sections:

-   [Company Info](#company-information)
-   [Invoice Settings](#invoice-settings)
-   [Buyer Info](#buyer-information)
-   [Tax Settings](#tax-settings)
-   [Extras](#additional-details)
-   [Labels](#labels)

### Company Information 

![The company info guide](https://resources.gravitypdf.com/uploads/2017/04/business-info-1.png)

#### Logo (1) 
* This image is included at the top of the generated PDF invoice. It can be positioned left or right using the [Logo Position](#logo-position) option.
* An image 500px wide will be a suitable resolution in most cases. To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB.

#### Logo Position 
* Change the logo positioning in the PDF. Supported positions are Top Left and Top Right of the document.
* By default, logos are positioned on the left-hand side of the invoice.

#### Business Name (2) 
* Enter your business or trading name that should get displayed in the invoice

#### Business Address (3) 
* The business address is split into three separate fields for each line it takes up in the invoice.
* There's no need to enter your company name in the address. The [Business Name](#business-name-2) field is automatically included just above it.

#### Registration Number (4) 
* Include your business registration number here (if any). In the US this is your EIN, in Australia, your ABN and the UK your CRN.

#### Contact Information (5) 
* There are two contact fields where you can include your phone number, email address, fax or website.

#### Additional Information (6) 
* There are two fields where you can include additional information about your company.

### Invoice Settings 

![The invoice settings info guide](https://resources.gravitypdf.com/uploads/2017/04/invoice-settings-3.png)

#### Invoice Number Prefix (1) 
* This is an optional field that is included before the [Invoice Number](#invoice-number-2) on the PDF.

#### Invoice Number (2) 
* By default, the invoice number uses the Gravity Forms entry ID. Be aware, this number is NOT sequential.
* If you need a sequential invoice number, we recommend [the Gravity Perks Unique ID add-on](https://gravitywiz.com/documentation/gp-unique-id/?ref=78).

#### Invoice Number Suffix (3) 
* This is an optional field that is included after the [Invoice Number](#invoice-number) on the PDF.

#### Date Format (4) 
* Select the date format that is shown on the invoice. The date shown on the PDF is taken from the entry submission date.
* We support four date formats out of the box:
    -   29/11/2019 (dd/mm/yyyy)
    -   11/29/2019 (mm/dd/yyyy)
    -   2016-11-29 (yyyy-mm-dd)
    -   November 29, 2016 (Month Day, Year)

#### Invoice Due Date (5) 
* Added in version 1.2, you can now set the due date in the PDF a specific number of days from the entry submission date.
* Set the due date to "0" to remove from invoice.

### Buyer Information 

![The buyers info guide](https://resources.gravitypdf.com/uploads/2017/04/buyer-info-1.png)

The buyer information will usually be included using [Merge Tags](https://www.gravityhelp.com/documentation/article/merge-tags/).

#### Buyer Name (1) 
* Enter the name of the individual or the company making the purchase.

#### Buyer Address (2) 
* The buyer address is split into three separate fields for each line it takes up in the invoice.

#### Buyer Registration Number (3) 
* Include the buyer's registration number (if any). In the US this is an EIN, in Australia an ABN and the UK a CRN.

#### Contact Information (4) 
* There are two contact fields where you can include the buyer's phone number, email address, fax or website.

### Tax Settings 

![The tax settings info guide](https://resources.gravitypdf.com/uploads/2017/04/tax-settings.png)

Because Gravity Forms has no product fields specifically for tax, we've implemented basic tax support in the invoice. There are restrictions, and these include:

1.  All products are classified as taxable
2.  All products use the same tax rate
3.  All prices in Gravity Forms are to be tax inclusive

With that said, you can take advantage of [Gravity PDF's Conditional Logic](../users/setup-pdf.md#conditional-logic) to set different tax rates based on a buyer's address.

#### Enable Basic Tax Calculations 
* By default, basic tax is disabled in the invoices. Tick this checkbox to enable tax.

#### Tax Name (1) 
* Enter the name of the tax being applied. For example, Sales Tax in the US, VAT in Europe and GST in Australia.
* This label is included next to the calculated tax in the invoice.

#### Tax Rate (2) 
* The percentage of tax that should be applied to the invoice. For example, in Australia, it's 10%.

#### Tax Rate Label (3) 
* This is the label that will be shown next to the [Tax Rate](#tax-rate-2).

#### Enable Tax on Shipping 
* By default, tax on shipping is disabled in the invoices. Tick this checkbox to enable shipping tax.

#### Hide Tax in Summary (4) 
* By default, the total tax is shown in the invoice summary section (the top right of the PDF). Tick this box to remove the tax amount from the summary.

#### Hide Tax Column in Table (5) 
* By default, a new column is added to the invoice table, which shows the calculated tax for each line item. Tick this box to remove the column.

#### Tax Number (6) 
* Enter your company's tax number (if applicable). For example, VAT-registered companies have a Tax Identification number, which should be included.

#### Tax Number Label (7) 
* The label to be shown next to the [Tax Number](#tax-number). This won't be shown if the Tax Number is left blank.

### Additional Details 

![The additional details info guide](https://resources.gravitypdf.com/uploads/2017/04/other-info.png)

#### Watermark (1) 
* Optionally include a text watermark diagonally across the PDF.

#### Additional Info (2) 
* This content is displayed below the product table. This is the perfect place to include payment terms, thank you note, or delivery instructions.

#### Footer (3) 
* This content is centre-aligned at the bottom of the invoice.

### Labels 

![The labels info guide](https://resources.gravitypdf.com/uploads/2017/04/labels-v1.2.png)

All text in the PDF can easily be changed below. By default, the labels are displayed in English, but you can easily translate them. Many elements in the PDF can be disabled by saving a blank label.

#### Title (1) 
* The invoice title that is displayed in the top right corner of the invoice by default. If the [Logo Position](#logo-position) is set to “Right”, the label will be displayed on the left instead.
* Australian businesses registered for GST should change this to "Tax Invoice"

#### Date (2) 
* The label displayed next to the [Invoice Date](#date-format-4). Leave blank to disable.

#### Invoice Number (3) 
* The label displayed next to the [Invoice Number](#invoice-number-2). Leave blank to disable.

#### Invoice Total Cost Summary (4) 
* The label displayed next to the Invoice Total in the summary section. Leave blank to disable.

#### Currency (5) 
* The label displayed next to the form's currency in the summary section (eg. USD, AUD, Euro). Leave blank to disable.

#### Buyer Details (6) 
* The label displayed above the buyer name and contact details.

#### Product Table Quantity (7) 
* The label shown in the Product table header for the Quantity column (i.e the number of products purchased for each line item).

#### Product Table Description (8) 
* The label shown in the Product table header for the Description column (i.e the name of the product purchased for each line item).

#### Product Table Unit Price (9) 
* The label shown in the Product table header for the Unit Price column (i.e the cost of a single product for each line item).

#### Product Table Total (10) 
* The label shown in the Product table header for the Total column (i.e the total cost for each line item).

#### Subtotal (11) 
* The total cost for all products, excluding shipping. If tax is enabled the subtotal will also exclude tax.

#### Overall Total (12) 
* The overall invoice total including shipping, and tax (if applicable).

#### Due Date (13) 
* The payment should be made by this date.

:::note
The Shipping Label is taken from the Gravity Forms Shipping Field.
:::

## Recommended Font 

*Roboto* is an open source sans-serif font (Apache License, Version 2.0) that is easy to read and works well with *Invoice Modern* at 10pt. Set the PDF font in the [Appearance tab](../users/setup-pdf.md#appearance-tab).

## Viewing PDF 

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). Just remember to fill out and submit your form if the entry list is empty.
