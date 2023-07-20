---
title: "How to Prevent Form Fields Displaying in PDF"
sidebar_label: "Hide Form Fields"
description: "Only certain form data is important to you. That's why Gravity PDF has a number of ways to filter out the unimportant data in your generated PDF."
---

![The Gravity Forms Editor](https://resources.gravitypdf.com/uploads/2015/10/form-editor.png)

Only certain form data is important to you. That's why Gravity PDF has a number of ways to filter out the unimportant fields in your generated PDF.

It's important to note that only certain PDF templates have these filtering options. All the core PDF templates will support the features discussed below, but [premium](https://gravitypdf.com/shop/), [custom templates](https://gravitypdf.com/integration-services/) or [your own DIY templates](developer-start-customising.md) may not.

---

### What is Displayed?

Gravity PDF will adhere to your form's conditional logic when generating a PDF. That means if the conditional logic determines a field (or entire section) should be hidden it won't be displayed on the PDF. Also, if a user doesn't fill in anything for a particular field it won't be displayed either. Both of these settings can be modified – see [*Enable Conditional Logic*](user-setup-pdf.md#enable-conditional-logic) and [*Show Empty Fields*](user-setup-pdf.md#show-empty-fields).

HTML and Page fields are also hidden by default, but they can be enabled using the [*Show Page Names*](user-setup-pdf.md#show-page-names) and [*Show HTML Fields*](user-setup-pdf.md#show-html-fields) options.

You can also choose to show or hide the form's title using the [*Show Form Title*](user-setup-pdf.md#show-form-title) option.

---

### Hide Specific Field

![Add 'exclude' field to Gravity Form Field](https://resources.gravitypdf.com/uploads/2015/10/exclude-field.png)

In certain cases you may not want a particular form field from displaying in the PDF. When that's the case you can add the CSS class `exclude` to a field in the Gravity Forms editor. You can do this by:

1. Navigating to your form's *Form Editor*
1. Select the field you want excluded from the PDF
1. Open the `Appearance` tab and add `exclude` to the `Custom CSS Class` field. If a class is already included ensure you add a space between it and `exclude`
1. Save your form

This technique works for all fields except the *Hidden* field (which doesn't include the *Custom CSS Class* field) and *Product* fields when included in the product table. If you want to hide a *Hidden* field from the PDF you should instead replace it with a *Single Line Text* field that has its visibility set to "Hidden". If you want to hide a *Product* field use our [Core Booster add-on](https://gravitypdf.com/shop/core-booster-add-on/) to disable the Order table.