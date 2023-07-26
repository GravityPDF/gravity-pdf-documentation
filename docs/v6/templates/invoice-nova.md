---
title: "Invoice Nova Premium Template: How to Install and Configure"
sidebar_label: "Nova"
description: "Invoice Nova is a elegant PDF invoice template for Gravity PDF and Gravity Forms."
---

![A stack of Invoice Nova documents printed on A4 paper, leaning against a wall at a 10-degree angle.](https://resources.gravitypdf.com/uploads/2023/07/Invoice-Nova-Featured-Image.jpg)

_Invoice Nova_ is an elegant invoice template that [can be purchased from the Gravity PDF Template Shop](https://gravitypdf.com/shop/invoice-nova/). This guide walks you through the process of installing and configuring _Nova_ to its full potential.

## Installation

[Please follow our installation guide](installing-upgrading-premium-templates.md), which provides initial instructions for setting up and configuring your premium template.

## Limitations

Invoice templates can only be used with forms that [include a Gravity Forms Product field](https://docs.gravityforms.com/product/). If you try to use the invoice on a form without any products (or conditional products where no product is included for a specific entry) an error message will be shown in the PDF. If you do have conditional Products, [enable PDF Conditional Logic to match](../users/setup-pdf.md#enable-conditional-logic).

If you have the [Gravity Wiz eCommerce Fields perk](#gravity-forms-ecommerce-fields) and the form includes the Tax field, [tax-inclusive pricing in the PDF invoice](#enable-tax-inclusive-pricing) is automatically disabled. You cannot use tax-inclusive and tax-exclusive pricing together.

The 2.x invoice templates require Gravity PDF version 6.0 or higher to correctly function.

## Configuring

All PDF templates have common settings – such as font, security, and notification attachments – and we recommend you [review the PDF setup guide](../users/setup-pdf.md) to familiarize yourself. Common settings are found in the [_General_](../users/setup-pdf.md#general-section), [_Appearance_](../users/setup-pdf.md#appearance-section), and [_Advanced_](../users/setup-pdf.md#advanced-section) panels. All invoice-specific settings can be found in the _Template_ panel.

Below you'll find detailed information about each Template setting available to _Nova_. The invoice PDF configuration is split up into six sections:

-   [Company Information](#company-information)
-   [Invoice Settings](#invoice-settings)
-   [Buyer Information](#buyer-information)
-   [Tax Settings](#tax-settings)
-   [Extras](#extras)
-   [Labels](#labels)

_Nova_ also has these additional template-specific settings:

#### Primary Color
* The border color used in the Summary Section, Product Table column titles, and [Overall Total](#overall-total-label-14).
* The default value is `#1228b7`

#### Secondary Color
* The background color used in the Summary Section, Product Table column titles, and [Overall Total](#overall-total-label-14).
* The default value is `#F3F4FA`

### Company Information

![A close-up screenshot of the header section of Nova, with numbers one through seven positioned on the invoice area, and controlled by the numbered settings documented in the Company Information section.](https://resources.gravitypdf.com/uploads/2023/07/1-Company-Information-Nova.png)

#### Logo (1)
* This image is included at the top of the generated PDF invoice.
* To ensure your PDF generates quickly, and the PDF file size stays small, we recommend using an image under 250kb (run it through an image optimizer to get it as small as possible).
* The image will be positioned on the left-hand or right-hand side of the invoice, and is determined by the [Logo Position](#logo-position) setting.

#### Logo Position
* Control the position of the [Logo](#logo-1) image in the PDF. The Logo can be positioned _Left_ or _Right_ at the top of the invoice.
* If the Logo is positioned _Right_, the [Invoice Title](#invoice-title-label-1) will automatically swap to the left-hand side.
* By default, logos are positioned on the _Left_ in the invoice.

#### Business Name (2)
* Enter your business or trading name that should get displayed in the invoice.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Business Address (3)
* The business address is divided into three separate fields, each occupying a line in the invoice.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate these three settings.
* If you use any of these symbols `, | / \ - –` to separate multiple merge tags (e.g. `{City:3.3}, {State:3.4}, {Zip:3.5}`), and a merge tag is replaced with an empty value, the extra symbol(s) will be automatically removed.

#### Registration Number (4)
* If applicable, include a business registration number here (e.g. EIN in the US, ABN in Australia, and CRN in the UK).
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Contact Information (5)
* You can include your phone number, email address, fax, or website.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Additional Contact Information (6)
* An additional field for [Contact Information](#contact-information-5).
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Additional Information (7)
* There are two fields where you can include additional information about your company.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate these setting.

### Invoice Settings

![A close-up screenshot of the header section of Nova, with numbers one through five positioned on the invoice area, and controlled by the numbered settings documented in the Invoice Settings section.](https://resources.gravitypdf.com/uploads/2023/07/2-Invoice-Settings-Nova.png)

#### Invoice Number Prefix (1)
* This is an optional field that appears before the [Invoice Number](#invoice-number-2) in the PDF.

#### Invoice Number (2)
* The invoice number to be used in the PDF. By default, this is set to the unique Entry ID using the merge tag `{entry_id}`.
* **The Entry ID is not sequential for a specific form**, and will increment for every entry you have across all your forms. If you require your form / invoices to have sequential number, we recommend using the [Gravity Wiz Unique ID perk](#gravity-forms-unique-id).

#### Invoice Number Suffix (3)
* This is an optional field that is included after the [Invoice Number](#invoice-number-2) in the PDF.

#### Date Format (4)
* Select the date format used for the Invoice Date (the form submission date) and [Invoice Due Date](#invoice-due-date-5) (if set).
* The following date formats are supported:
  - 11/29/2024 (mm/dd/yyyy)
  - 11/29/24 (mm/dd/yy)
  - 29/11/2024 (dd/mm/yyyy)
  - 29/11/24 (dd/mm/yy)
  - 29-11-2024 (dd-mm-yyyy)
  - 29-11-24 (dd-mm-yy)
  - 29.11.2024 (dd.mm.yyyy)
  - 29.11.24 (dd.mm.yy)
  - 2024/11/29 (yyyy/mm/dd)
  - 24/11/29 (yy/mm/dd)
  - 2024-11-29 (yyyy-mm-dd)
  - 24-11-29 (yy-mm-dd)
  - 2024.11.29 (yyyy.mm.dd)
  - 24.11.29 (yy.mm.dd)
  - November 29, 2024 (mmmm d, yyyy)
  - Nov 29, 2024 (mmm d, yyyy)
  - 9 November 2024 (d mmmm yyyy)
  - 9 Nov 2024 (d mmm yyyy)
  - 2024 November 29 (yyyy mmmm d)
  - 2024 Nov 29 (yyyy mmm d)
  - WordPress Date Format (date configured in Settings -> General)
* When necessary, the WordPress Language your site is configured with will be used to translate the date.
* If your preferred date format isn't available, [the `gfpdf_invoice_date_format` filter](hooks/invoices/gfpdf-invoice-date-format.md) can be used to adjust it.

#### Invoice Due Date (5)
* You can show a due date in the invoice, which is configured by entering the number of days an invoice is due after the form submission date. For example, if the form submission date is `2024-11-29`, and this setting is set to `7` days, the invoice would be shown as due on `2024-12-06`.
* The default value for this setting is `0`, which disables this feature.

### Buyer Information

![A close-up screenshot of the mid section of Nova, with numbers one through five positioned on the invoice area, and controlled by the numbered settings documented in the Buyer Information section.](https://resources.gravitypdf.com/uploads/2023/07/3-Buyer-Information-Nova.png)

#### Buyer Name (1)
* Provide the name of the individual or company making the purchase.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Buyer Address (2)
* The buyer address is divided into three separate fields, with each field corresponding to a line on the invoice.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate these three settings.
* If you use any of these symbols `, | / \ - –` to separate multiple merge tags (e.g. `{City:3.3}, {State:3.4}, {Zip:3.5}`), and a merge tag is replaced with an empty value, the extra symbol(s) will be automatically removed.

#### Buyer Registration Number (3)
* If applicable, include your buyer's registration number here (EIN in the US, ABN in Australia, and CRN in the UK).
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Buyer Contact Information (4)
* You can include the buyer's phone number, email address, fax, or website.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Buyer Alternate Contact Information (5)
* An additional field for [Buyer Contact Info](#buyer-contact-information-4).
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

### Tax Settings

Gravity Forms doesn't natively support taxes [for Pricing fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/). You could use a [Product Calculation field](https://docs.gravityforms.com/product/) to calculate each product's tax, but there are limitations. For example, it can be challenging to update the calculations when you add/remove products in your form, the tax amount will be displayed in the line items (and not the totals section), and this method only supports tax-exclusive pricing. Thankfully, you have more feature-rich tax options available.

All Gravity PDF Invoices natively support tax-inclusive pricing, and you are able to set individual tax rates for each product (or disable taxes for a product entirely). If you require tax-exclusive pricing, [the Gravity Perks eCommerce Fields perk includes a Tax field, and is fully supported by Gravity PDF Invoices](#gravity-forms-ecommerce-fields).

![A screenshot of Nova, with numbers one through seven positioned on the invoice area, and controlled by the numbered settings documented in the Tax Settings section.](https://resources.gravitypdf.com/uploads/2023/07/4-Tax-Settings-Nova.png)

#### Enable Tax Inclusive Pricing
* Automatically calculate the taxes that apply to your products using the Default Tax Rate, and any modifiers.
* By default, tax-inclusive pricing is disabled on invoices.
* Multiple tax rates are supported for products using the Custom CSS Class `tax-{rate}-{label}` on Product or Shipping fields [in the Form Editor](https://docs.gravityforms.com/css-ready-classes/#h-how-to-use-ready-classes). The `{rate}` is a percentage between 0 and 100. While the `{label}` is the name of the tax (substitute spaces for hyphens). For example, if you wanted a specific product to be taxed at 5.25% with the label "CA Taxes", you would add the CSS class `tax-5.25-CA-Taxes` to the Product field in the Form Editor.
* You cannot add different tax rates directly to Option fields; it can only be added to Products. Option fields will inherit the tax rate of the associated Product field.
* Taxes can be disabled on a per-product basis using the Custom CSS Class `tax-0`. Do not include the label `-{label}` when disabling taxes this way.
* If you have the [Gravity Wiz eCommerce Fields perk](#gravity-forms-ecommerce-fields) activated on your website, tax-inclusive pricing is automatically disabled when a Tax field is included in the form.

![A screenshot of the Gravity Forms Editor with a Product field selected, the Custom CSS Class setting is highlighted in the Field Settings section, the value of the setting shows tax-7.25-California, which is how you define multiple tax rates in the invoice.](https://resources.gravitypdf.com/uploads/2023/07/5-Tax-Inclusive-Pricing-Vertex.png)

#### Default Tax Name (1)
* Provide the name of the default tax being applied to products and shipping fields  ([if taxes on shipping is enabled](#tax-shipping-5)). For example, _Sales Tax_ in the US, _VAT_ in Europe, _GST_ in Australia.
* This label is displayed with the tax calculated using the [Default Tax Rate](#default-tax-rate-2) in the invoice.

#### Default Tax Rate (2)
* Provide a percentage between 0 and 100 to be used as the default tax rate. For example, you would enter `10` for GST in Australia.
* The default tax rate [can be overridden on a per-product basis](#enable-tax-inclusive-pricing) using the Custom CSS Class `tax-{rate}-{label}` or `tax-0`.

#### Tax Summary Label (3)
* The label shown with the total invoice tax, which is displayed in the Invoice Summary.
* You can hide this information using the [Hide Tax Summary setting](#hide-tax-in-summary).
* The default value is "Tax Total:".

#### Unit Tax Column Label (4)
* The heading used for the Unit Tax column of the Product Table.
* The Unit Tax column is displayed automatically if [Tax Inclusive Pricing](#enable-tax-inclusive-pricing) is enabled. You can hide the column using the [Tax Column setting](#hide-tax-column).
* The default value is "Unit Tax".

#### Tax Shipping (5)
* When enabled alongside tax-inclusive pricing, taxes will be calculated for the Shipping field using the [Default Tax Rate](#default-tax-rate-2), or the `tax-{rate}-{label}` modifier.
* By default, taxes on the Shipping field is disabled.

#### Hide Tax in Summary
* By default, the total tax is shown in the Invoice Summary section (the top of the PDF). Tick this box to remove the tax amount from the summary.

#### Hide Tax Column
* When enabled, the Unit Tax column will be hidden from the Product Table.

#### Tax Number (6)
* Provide your company's tax number (if applicable). For example, VAT-registered companies have a Tax Identification number which can be included.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Tax Number Label (7)
* The label to be displayed next to the [Tax Number](#tax-number-6).
* This label will not be included in the invoice if Tax Number is left blank.
* The default value is "Tax Number:".

### Extras

![A screenshot focused on the bottom half of Nova, with numbers one through four positioned on the invoice area, and controlled by the numbered settings documented in the Extras section.](https://resources.gravitypdf.com/uploads/2023/07/6-Extras-Nova.png)

#### Discounts (1)
* By default, any discounts included via Gravity Forms Coupon field, or Gravity Wiz's Discount field, will be totaled and shown alongside the [Discount Label](#discount-label-13) (see image above for an example).
* If you enable the Itemized Discounts / Coupons setting, any discounts that apply will be shown individually, and not grouped together (see image below for an example).

![A screenshot focused on the bottom half of Nova, and showing individual discount amounts, which can be configured with the Itemized Discounts / Coupons setting.](https://resources.gravitypdf.com/uploads/2023/07/7-Discounts-Nova.png)

#### Watermark (2)
* You can include a text watermark in the invoice, which will display diagonally across the PDF from the bottom-left to the top-right corner.
* By default, the setting is left blank.

#### Additional Information (3)
* A Rich Text Editor allows you to include information below the Product Table. This setting is ideal for adding payment terms, a "Thank You" note, or delivery instructions.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

#### Footer (4)
* Include text to display at the bottom of each page in the invoice.
* This text will be center-aligned.
* You may use [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) to populate this setting.

### Labels

![A screenshot of Nova, with numbers one through fourteen positioned on the invoice area, and controlled by the numbered settings documented in the Labels section.](https://resources.gravitypdf.com/uploads/2023/07/8-Labels-Nova.png)

All text in the PDF can be easily changed. By default, the labels are displayed in English, but you can easily translate them. Many elements in the PDF can be disabled by saving a blank label.

#### Invoice Title Label (1)
* The document title, which is displayed in the top-left or top-right of the invoice (depending on the [Logo Position](#logo-position) setting).
* The default value is "Invoice". Australian businesses registered for GST should change their invoice title to "Tax Invoice".

#### Invoice Due Date Label (2)
* The label displayed next to the [Invoice Due Date](#invoice-due-date-5) value.
* The default value is "Due Date:".

#### Invoice Total Cost Summary Label (3)
* The label displayed next to the invoice total value in the Summary Section. Leave blank to disable.
* The default value is "Invoice Total:".

#### Currency Type Label (4)
* The label displayed next to the form's currency in the summary section (eg. USD, AUD, EUR). Leave blank to disable.
* The default value is "Currency Type:".

#### Buyer Details Label (5)
* The label displayed above the Buyer Name / Contact Info values.
* The default value is "Buyer Details:".

#### Quantity Column Label (6)
* The label displayed in the Product Table header for the Quantity column. The column cannot be removed.
* The default value is "Qty".

#### Description Column Label (7)
* The label displayed in the Product Table header for the Description column. The column cannot be removed.
* The default value is "Description".

#### Unit Price Column Label (8)
* The label displayed in the Product Table header for the Unit Price column. The column cannot be removed.
* The default value is "Unit Price".

#### Total Column Label (9)
* The label displayed in the Product Table header for the Total column. The column cannot be removed.
* The default value is "Total".

#### Subtotal Label (10)
* The label displayed next to the invoice subtotal value (the total cost for all products, excluding shipping and taxes), after the line items. Leave blank to disable.
* The default value is "Subtotal".

#### Discount Label (11)
* The label displayed next to the total discounts applied to the order (using the Coupons or Discount field).
* If there are no discounts, or the [Itemize Discounts / Coupons](#discounts-1) setting is enabled, this label will not be included in the invoice.
* The default value is "Discount".

#### Overall Total Label (12)
* The label displayed next to the invoice total value (the overall cost), after the line items. The label/value cannot be removed.
* The default value is "Total".

## Recommended Font

_Nova_ comes bundled with _Roboto_ which is an open source licensed font (Apache License, Version 2.0). For the best results, we recommend using _Roboto_ at 10pt. Set the PDF font [in the Appearance section](../users/setup-pdf.md#appearance-section).

## Viewing PDF

Once you've saved your new PDF, you can [view it from the Gravity Forms Entries List page](../users/viewing-pdfs.md). You can allow a user to download the invoice by [adding the [gravitypdf] shortcode to the form Confirmation](../users/shortcodes-and-mergetags.md#shortcode).

## Notification Email PDF Attachment

You can easily add the invoice as an attachment in your Notification emails. First, ensure you've [created the appropriate Notification(s) for your form](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/). Once done, you can [configure the Notification PDF setting](../users/setup-pdf.md#notifications) for your invoice.

## Enhance Invoices With Gravity Perks

<a href="https://gravitywiz.com/?ref=78" rel="sponsored">Gravity Perks</a> is a suite of add-ons or "perks" that can enhance Gravity Forms functionality. From the 47+ perks the Wizards have to offer, a number of those can enhance Gravity PDF Invoices. Here's a non-exhaustive list to consider:

### Gravity Forms eCommerce Fields

<a href="https://gravitywiz.com/documentation/gravity-forms-ecommerce-fields/?ref=78" rel="sponsored">This perk adds new eCommerce features to Gravity Forms</a>, including Tax, Discounts, and Subtotal fields. We recommend using this perk If you require tax-exclusive pricing in your invoices (the enhanced Discount field is handy, too).

![A screenshot of the Gravity Forms Editor with a Gravity Forms eCommerce Fields Tax field selected, an arrow points to the Tax Amount setting in the Field Settings section, the value of the setting shows 7.25%.](https://resources.gravitypdf.com/uploads/2023/07/9-eCommerce-Field-Vertex.png)

The Tax field allows you to apply taxes on all products/shipping fields, or you can selectively include/exclude fields from taxes. For multiple rates, you can add additional Tax fields to your form, as well as conditionally show/hide the field. The perk auto-calculates the correct taxes for an entry based on the rules, conditions, and product quantities selected.

:::info
You cannot use tax-inclusive and tax-exclusive pricing together. The Tax Inclusive Pricing feature is automatically disabled once you add a Tax field to your form.
:::

When a Tax field is detected in the form, all tax-inclusive invoice settings are removed. You still have control over the [Tax Summary](#hide-tax-in-summary) and [Tax Number](#tax-number-6) settings.

### Gravity Forms Unique ID
<a href="https://gravitywiz.com/documentation/gravity-forms-unique-id/?ref=78" rel="sponsored">The Unique ID Gravity Wiz perk</a> allows you to generate a sequential or alphanumeric ID for each entry on a per-form basis. To use with PDF Invoices, replace the entry ID merge tag in the <a href="#invoice-number-2">Invoice Number</a> setting with the Unique ID equivalent.

![A screenshot of the Gravity Forms Editor with a Unique ID field selected, an arrow points to the Field Settings section, which has been configured as a sequential number with a prefix of 'PDF' and a suffix of 'Y23'.](https://resources.gravitypdf.com/uploads/2023/07/10-Unique-ID-Vertex.png)

### Gravity Forms Inventory

If you'd like to use Gravity Forms to sell tickets / take bookings in limited quantities, <a href="https://gravitywiz.com/documentation/gravity-forms-inventory/?ref=78" rel="sponsored">the Inventory perk is useful</a>. One (of the many) features available is inventory tracking for Product fields. PDF Invoices supports this perk automatically when used with Products, without any extra configuration on your part.

:::tip
Pro Tip: Use the <a href="https://gravitywiz.com/documentation/gravity-forms-qr-code/?ref=78" rel="sponsored">QRCode</a> and <a href="https://gravitywiz.com/documentation/gravity-forms-easy-passthrough/?ref=78" rel="sponsored">Easy Passthrough</a> perks to <a href="https://gravitywiz.com/documentation/gravity-forms-qr-code/?ref=78#use-case-event-registration" rel="sponsored">create an event check-in tool</a>, and then add the check-in QRCode to your invoice via the <a href="#additional-information-3">Additional Information</a> setting.
:::

### Gravity Forms Conditional Pricing

You can create complex pricing rules for Product fields <a href="https://gravitywiz.com/documentation/gravity-forms-conditional-pricing/?ref=78" rel="sponsored">with the Conditional Pricing perk</a>. This saves adding a heap of different conditional products to your form, and is very useful if your pricing regularly changes. PDF Invoices supports this perk automatically, without any extra configuration on your part.

### Gravity Forms Advanced Calculations

<a href="https://gravitywiz.com/documentation/gravity-forms-advanced-calculations/?ref=78" rel="sponsored">The Advanced Calculations perk</a> does exactly as the name suggests: advanced number crunching using Gravity Forms data. It supports the Calculation Product field, so you can create complex product pricing. PDF Invoices supports this perk automatically when used with Product fields, without any extra configuration on your part.

### Gravity Forms Price Range

Gravity Forms natively supports user-defined pricing for Product fields. But what if you require a minimum (or maximum) spend? <a href="https://gravitywiz.com/documentation/gravity-forms-price-range/?ref=78" rel="sponsored">The Pricing Range perk enables this functionality</a>. PDF Invoices supports this perk automatically, without any extra configuration on your part.

## Upgrading from v1.x

_Nova_ is a new PDF Invoice introduced for the v2 release, and there was never a v1 edition of the template.

## Developers

Developers can customize the invoice by editing the template file, or using of the hooks provided. If you do modify the template directly, be aware that if you manually upgrade the template you will override your modifications (automatic updates aren't available for templates).

### Hooks

These hooks are available for developers to further customize the extension:

* [gfpdf_invoice_currency_format](hooks/invoices/gfpdf-invoice-currency-format.md)
* [gfpdf_invoice_date_format](hooks/invoices/gfpdf-invoice-date-format.md)
* [gfpdf_invoice_number](hooks/invoices/gfpdf-invoice-number.md)
* [gfpdf_invoice_watermark](hooks/invoices/gfpdf-invoice-watermark.md)
* [gfpdf_pre_invoice_html](hooks/invoices/gfpdf-pre-invoice-html.md)
* [gfpdf_pre_invoice_table](hooks/invoices/gfpdf-pre-invoice-table.md)
* [gfpdf_post_invoice_table](hooks/invoices/gfpdf-post-invoice-table.md)
* [gfpdf_post_invoice_html](hooks/invoices/gfpdf-post-invoice-html.md)
