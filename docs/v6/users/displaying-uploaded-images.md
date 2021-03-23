---
title: "How to show uploaded images in Core / Universal PDFs"
sidebar_label: "Uploaded Images"
description: "Use the Image Hopper for Gravity Forms plugin to automatically display uploaded images in Core / Universal PDFs generated using Gravity PDF."
---

:::caution
The third party Slim Image Cropper for Gravity Forms plugin has recently been discontinued by its developer. We're actively looking at solutions to reliably get your images displaying in PDFs again. 
:::

By default, Gravity PDF will display all files uploaded using the [File Upload field](https://docs.gravityforms.com/file-upload/) as a bullet point list with links to those files.

![](https://resources.gravitypdf.com/uploads/2018/08/file-upload-field-default.png) 
_The File Upload Field displaying a list of uploaded files in Core / Universal PDFs_

Out of the box, it isn't possible to display uploaded images in the Core (free) or <a href="https://gravitypdf.com/template-shop/#universal">Universal (paid)</a> PDFs, and we've done this for technical reasons: loading more than 10MB of images (less on some shared hosting) can cause significant PDF generation times, or PHP fatal errors.

To work around this limitation and display / show / embed uploaded images in Gravity PDF, we recommend the [Image Hopper add-on](https://imagehopper.tech/). This plugin can be configured to automatically downsize and rotate images on the client-side, which helps to prevent timeout issues during the PDF generation.

![](https://resources.imagehopper.tech/uploads/2020/11/form-editor-image-hopper-field-open.png) 
_Where to find the Image Hopper field in the Form Editor_

Once installed, add a new Image Hopper field to your Gravity Form. Just make sure to set the *Downscale Images* width and height setting to no more than 1000x1000px to prevent the aforementioned image size issue. Gravity PDF will now automatically display / show the uploaded images in the Core / Universal PDFs.

![](https://resources.gravitypdf.com/uploads/2021/02/Gravity-PDF-Zadani-w-Image-Hopper.png) 
_The Image Hopper Field displays images in Core / Universal PDFs automatically_

:::note
Previously we recommend using the Slim Image Cropper for Gravity Forms plugin, but it was discontinued by its developer.
:::
