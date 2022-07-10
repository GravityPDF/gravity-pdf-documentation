---
title: "Add, Search, Select, and Delete with the PDF Template Manager"
sidebar_label: "PDF Template Manager"
description: "The PDF Template Manager allows you to better view, search and manage your PDF Templates. You can easily search through your installed templates, see what a PDF might look like and view supported features. You can also install PDFs via a zip file and easily delete them, too."
---

import ResponsiveEmbed from 'react-responsive-embed'

![The all-new PDF Template Manager](https://resources.gravitypdf.com/uploads/2021/03/v6-Advanced-Template-Selector.png)

The PDF Template Manager allows you to view, search and manage your PDF Templates. Modelled after the WordPress Theme Manager, you can easily search through your installed templates and see a screenshot + description. Pick the template you want to use, install a new one, or delete an existing one. It's all handled through the Template Manager. 

:::info
Templates are the backbone of Gravity PDF and **what give it so much power**. They control the design and layout of the PDF and can add unique settings to the UI to create highly dynamic documents. Out of the box you get four free templates, and additional [pre-built templates can be purchased from our store](https://gravitypdf.com/store/#templates). For those DIY aficionados, you can [create your own using HTML/CSS/PHP](../developers/first-custom-pdf.md), which allows you to include advanced logic and pull data from multiple sources (inside and outside Gravity Forms). We also [offer a Bespoke PDF service for those who need a helping hand](https://gravitypdf.com/bespoke/).
:::

In this 6-minute video, Gravity PDF's lead developer takes you through opening and installing custom PDF templates via the PDF Template Manager, how to delete templates, and how to search and select them.

<ResponsiveEmbed src="https://player.vimeo.com/video/665431569" allowFullScreen />

## Open the PDF Template Manager 

![Access the PDF Template Manager through the Advanced button next to the Template Dropdown](https://resources.gravitypdf.com/uploads/2021/03/v6-Access-Manager.png) 

You can access the PDF Template Manager through the [Global PDF Settings page](global-settings.md#default-template) or when [configuring a PDF on your form](setup-pdf.md#template). Just look for the *Manage* button that will appear next to the Template dropdown box. 

More information on each PDF can be viewed by clicking (or navigating with your keyboard and pressing Enter) on a PDF image.

## Search 

![Search for installed templates](https://resources.gravitypdf.com/uploads/2021/03/v6-Search-Templates.png) 

Once you've accessed the PDF Template Manager, you'll see a prominent search bar at the top of the interface. Use it to filter your **installed** PDF templates – searches are done on the PDF title, description, author, and group.

## Install 

![Install zip PDF Templates](https://resources.gravitypdf.com/uploads/2021/03/v6-Installing-Template.png) 

You can install PDF Template `.zip` packages straight from the UI. You'll see an "Add New Template" box below all your installed templates where you can drag and drop your `.zip` package.

:::caution
This feature is only for template files that have been specifically created for Gravity PDF (either [a premium template](https://gravitypdf.com/store/#templates) or [DIY](../developers/start-customising.md)). You cannot zip up any old document on your computer (like a `.pdf` or `.docx`) and upload it.
:::

If a PDF template already exists, it will be automatically updated (the old template will be overridden with the new one). **You’ll lose any changes you make to the PDF template file(s) during an update**.

## Delete 

![Delete custom PDF templates](https://resources.gravitypdf.com/uploads/2021/03/v6-Details-Page-Delete.png) 

If you ever need to delete a template you can easily do so via the _Delete_ button when viewing individual PDFs (click the template image to view an individual PDF). You'll be asked to confirm this action before it deletes anything. 

Core PDF templates (Zadani, Rubix, Focus Gravity and Blank Slate) cannot be deleted. However, if you've overridden a core template by copying it to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory), you will get the option to delete your modified version.
