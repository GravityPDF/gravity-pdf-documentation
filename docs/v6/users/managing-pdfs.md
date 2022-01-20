---
title: "Managing PDFs – Add, Edit, Deactivate, Duplicate and Delete"
sidebar_label: "Managing PDFs"
description: "Managing your PDFs and performing actions like activate/deactivate, duplicate and deleting is a breeze – and it all can be done without a page reload!"
---

![A look at a form's PDF list](https://resources.gravitypdf.com/uploads/2021/08/V6-Managing-PDFs-List.png) 

You can configure more than one PDF on a Gravity Forms form, and the _PDF List Page_ is where you go to manage these configurations. You can easily add new PDFs, edit existing ones, temporarily disable, duplicate, or even delete individual PDFs. 

## Why would you need multiple PDFs on a form?

When you begin taking advantage of [conditional logic](setup-pdf.md#conditional-logic), use the [Core Booster add-on to control which fields are displayed in each PDF](../extensions/core-booster-add-on.md#customise-fields), or install a [premium](https://gravitypdf.com/store/#templates) or [Bespoke](https://gravitypdf.com/bespoke/) template, one PDF per form just isn't enough. A simple example of this would be sending customer info to the onboarding team, and also an invoice to the accounting team (plus a copy for the customer).

## How to I find the PDF List page

![PDF Form Settings List](https://resources.gravitypdf.com/uploads/2021/08/v6-GPDF-Settings-Page.png)

The PDF settings for an individual form can be accessed by following these steps:

1. Navigating to `Forms -> Forms` in your WordPress admin area.
1. Locate the form you want to create a PDF for, then hover your mouse (or similar device) over that particular row. A list of actions will be revealed; click the `Settings` action.
1. When the page loads select the navigation item called `PDF` in the left sidebar.

## List Columns 

![The list column names](https://resources.gravitypdf.com/uploads/2021/08/v6-PDF-List-Columns.png) 

The PDF list contains four columns which provide an overview of the PDFs currently configured for your Gravity Form. These include:

### Label
* This column displays the internal PDF [label](setup-pdf.md#label). It also functions as the "actions" column. By hovering over the row the `Edit`, `Duplicate` and `Delete` actions will appear in this column.

### Template 
* The selected PDF template will be displayed in this column. Along with the name, the template's group will also be displayed. For instance, any template that ships with the software is apart of the `Core` group. This is useful when you start creating custom PDF templates.
* PDF templates may also require a specific version of Gravity PDF. If the version requirements aren't met a notice will be displayed in this column.

### Notifications
* If you've configured the PDF to attach to any of the form's notifications a list of those notifications will show in this column.

### Shortcode
* This column displays a sample shortcode that generates a download link for the PDF. Use it in Gravity Forms Confirmations or Notifications. [See our shortcode documentation](shortcodes-and-mergetags.md) for more details about the `[gravitypdf]` shortcode.

## Actions 

There are five main actions available to you when managing your PDFs. They are:

1.  [Add](#add)
2.  [Edit](#edit)
3.  [Activate / Deactivate](#activate--deactivate-pdfs)
4.  [Duplicate](#duplicate)
5.  [Delete](#delete)

The Edit, Duplicate and Delete actions will appear in the [*Label*](#label) column while hovering over the row.

### Add 

New PDFs can be added by clicking the `Add New` button, which is located on the right-hand-side, just above the table. [See our Setup PDF documentation](setup-pdf.md) for more details on adding a PDF.

### Edit 

Click a PDFs *Edit* action to modify an existing PDF configuration. [See our Setup PDF documentation](setup-pdf.md) for  in-depth details on what each PDF setting does.

### Activate / Deactivate PDFs 

![Active and deactivated toggles](https://resources.gravitypdf.com/uploads/2021/08/v6-Activate-Deactivate-PDF.png) 

PDFs can be **completely disabled** by using the active/inactive toggle – located to the left of the _Label_ column. Once a PDF has been set to inactive, users and administrators will no longer be able to access the document. The PDF will not be attached to email notifications, and its shortcode/merge tag won't generate a link.

### Duplicate 

![The UI shown when duplicating PDFs](https://resources.gravitypdf.com/uploads/2022/01/PDF-Settings-Duplicate-PDF.png) 

You can duplicate an existing PDF configuration by clicking the *Duplicate* action. This action will happen in the background without a page reload. The newly-duplicated PDF will have the label appended with "(copy)" and be inactive by default.

### Delete 

![The warning shown when deleting PDFs](https://resources.gravitypdf.com/uploads/2021/08/v6-PDF-Delete.png) 

You can delete an existing PDF configuration by clicking the *Delete* action. A warning box will pop up asking you to confirm before a PDF is deleted. This action will happen in the background without a page reload.
