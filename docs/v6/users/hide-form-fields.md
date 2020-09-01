---
title: "How to Prevent Form Fields Displaying in PDF"
sidebar_label: "Hide Form Fields"
description: "Only certain form data is important to you. That's why Gravity PDF has a number of ways to filter out the unimportant data in your generated PDF."
---

![The Gravity Forms Editor](https://resources.gravitypdf.com/uploads/2015/10/form-editor.png) 

Only certain form data is important to you. That's why Gravity PDF has a number of ways to filter out the unimportant fields in your generated PDF. 

It's important to note that only certain PDF templates have these filtering options. All the core PDF templates will support the features discussed below, but [premium](https://gravitypdf.com/shop/), [custom templates](https://gravitypdf.com/integration-services/) or [your own DIY templates](../developers/start-customising.md) may not.

## What fields are displayed in the PDF? 

Gravity PDF will adhere to your form's conditional logic when generating a PDF. That means if the conditional logic determines a field (or entire section) should be hidden it won't be displayed on the PDF. Also, if a user doesn't fill in anything for a particular field it won't be displayed either. Both of these settings can be modified – see [*Enable Conditional Logic*](setup-pdf.md#enable-conditional-logic) and [*Show Empty Fields*](setup-pdf.md#show-empty-fields). 

HTML and Page fields are also hidden by default, but they can be enabled using the [*Show Page Names*](setup-pdf.md#show-page-names) and [*Show HTML Fields*](setup-pdf.md#show-html-fields) options. 

You can also choose to show or hide the form's title using the [*Show Form Title*](setup-pdf.md#show-form-title) option.

## Hiding Specific Fields in the PDF 

![Add 'exclude' field to Gravity Form Field](https://resources.gravitypdf.com/uploads/2015/10/exclude-field.png) 

In certain cases you may not want a particular form field from displaying in the PDF. When that's the case you can add the CSS class `exclude` to a field in the Gravity Forms editor. You can do this by:

1.  Navigating to your form's *Form Editor*
2.  Select the field you want excluded from the PDF
3.  Open the `Appearance` tab and add `exclude` to the `Custom CSS Class` field. If a class is already included ensure you add a space between it and `exclude`
4.  Save your form

This technique works for all fields except the *Hidden* field (which doesn't include the *Custom CSS Class* field) and *Product* fields when included in the product table. 

## Get more control over fields using the Core Booster Extension

![Customise Fields with Core Booster](https://resources.gravitypdf.com/uploads/edd/2018/10/display-fields.png)

The `exclude` technique is a simple, quick and easy way to remove fields from your PDF, but it does have its limitations. For example, besides not being able to exclude Hidden or Product fields, you cannot create multiple PDFs on a single form and control which fields are shown in each. To overcome these limitations, [take advantage of the Core Booster add-on's *Customise Fields* feature](https://gravitypdf.com/shop/core-booster-add-on/).
