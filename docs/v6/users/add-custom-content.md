---
title: "How to easily include custom content in PDFs"
sidebar_label: "Add Custom Content"
description: "Learn how to add your own custom HTML content to Core and Universal PDF documents anywhere in the PDF."
---

Gravity PDF will automatically display user-submitted content in Core ([and Universal](https://gravitypdf.com/store/#universal)) PDFs. But what if you need to include additional text, images, links, or disclaimers alongside the user content? Gravity Forms and Gravity PDF make this easy...

https://vimeo.com/637697049

## HTML Field

![Showing off the HTML Field Visibility setting in the Gravity Forms Form Editor](https://resources.gravitypdf.com/uploads/2021/10/html-field-visibility-settings-2.png)

Gravity Forms allows you to set the visibility of HTML fields (as of v2.5.13+) so that it won't be shown to the end user as they fill out your form. By adding HTML fields to the [Form Editor](#) in the order you want your custom content included in the PDF and setting the *Visibility* to **Administrative**, you have effectively created a PDF-only field. 

Merge tags can be used in HTML blocks and Gravity PDF will automatically process them. 

Gravity PDF will respect conditional logic you apply to HTML fields (provided you have the [Enable Conditional Logic](setup-pdf.md#enable-conditional-logic) setting turned on).

## PDF 

![Showing off Gravity PDF's Enable HTML Fields setting in the Form PDF settings](https://resources.gravitypdf.com/uploads/2021/10/gravity-pdf-show-html-fields-setting-2.png)

When [configuring your PDF on the form](setup-pdf.md), make sure to enable the [Show HTML Fields](setup-pdf.md#show-html-fields) setting.

If you have HTML fields that you don't want to include in the PDF [you can exclude them](hide-form-fields.md). 

This feature only works with Core or Universal PDF templates. 