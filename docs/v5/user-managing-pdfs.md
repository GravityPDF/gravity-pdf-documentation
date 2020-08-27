---
title: "Managing PDFs – Add, Edit, Deactivate, Duplicate and Delete"
sidebar_label: "Managing PDFs"
description: "Managing your PDFs and performing actions like activate/deactivate, duplicate and deleting is a breeze – and it all can be done without a page reload!"
---

![A look at a form's PDF list](https://resources.gravitypdf.com/uploads/2015/10/pdf-list.png) 

When you begin taking advantage of [conditional logic](user-setup-pdf.md#conditional-logic), or install a [premium](https://gravitypdf.com/shop/) or [custom](https://gravitypdf.com/integration-services/) template, one PDF per form just isn't enough. That's why we've built an AJAXified PDF list to help you activate / deactivate, duplicate and delete your PDFs – all without a page reload. You can also add new PDFs or edit existing ones (it's not AJAX-powered though). The user interface is similar to the confirmation and notification lists so you should feel right at home. 

To access the *Managing PDFs* page see [Locating Your PDF Settings](user-setup-pdf.md#locating-pdf-settings).

## List Columns 

![The list column names](https://resources.gravitypdf.com/uploads/2015/10/column-list.png) 

The PDF list contains four columns which provide an overview of the PDFs currently configured for your Gravity Form. These include:

### Name 
* This column displays the internal PDF [name](user-setup-pdf.md#name). It also functions as the "actions" column. By hovering over the row the `Edit`, `Duplicate` and `Delete` actions will appear in this column.

### Download Shortcode 
* This column displays a sample shortcode that generates a download link for the PDF. Use it in the Gravity Form confirmations or notifications. [See our shortcode documentation](user-shortcodes.md) for more details about the `[gravitypdf]` shortcode.

### Template 
* The selected PDF template will be displayed in this column. Along with the name, the template's group will also be displayed. For instance, any template that ships with the software is apart of the `Core` group. This is useful when you start creating custom PDF templates.
* PDF templates may also require a specific version of Gravity PDF. If the version requirements aren't met a notice will be displayed in this column.

### Notifications
* If you've configured the PDF to attach to any of the form's notifications a list of those notifications will show in this column.

## Actions 

There a five main actions available to you when managing your PDFs. They are:

1.  [Add](#add)
2.  [Edit](#edit)
3.  [Activate / Deactivate](#activate--deactivate-pdfs)
4.  [Duplicate](#duplicate)
5.  [Delete](#delete)

The Edit, Duplicate and Delete actions will appear in the [*Name*](#name) column while hovering over the row.

### Add 

New PDFs can be added by clicking the `Add New` button, which is located to the right of the *Gravity PDF* page heading. [See our Setup PDF documentation](user-setup-pdf.md) for more details on adding new PDFs.

### Edit 

Click a PDFs *Edit* action to modify an existing PDF configuration. [See our Setup PDF documentation](user-setup-pdf.md) for more in-depth details on what each PDF setting does.

### Activate / Deactivate PDFs 

![Active and deactivated toggles](https://resources.gravitypdf.com/uploads/2015/10/toggles.png) 

PDFs can be **completely disabled** by using the activate/deactivate toggle – located to the left of the `Name` column. Once a PDF has been deactivated users and administrators will no longer be able to access the document. The PDF will not be attached to email notifications, and its shortcode won't generate a link.

### Duplicate 

![The UI shown when duplicating PDFs](https://resources.gravitypdf.com/uploads/2015/10/duplcate.png) 

You can duplicate an existing PDF configuration by clicking the *Duplicate* action. This action will happen in the background without the page reloading and once done you'll see a copy of the PDF added to the list.

### Delete 

![The warning shown when deleting PDFs](https://resources.gravitypdf.com/uploads/2015/10/delete.png) 

You can delete an existing PDF configuration by clicking the *Delete* action. A warning box will pop up asking you to confirm before a PDF is deleted. This action will happen in the background without the page reloading.
