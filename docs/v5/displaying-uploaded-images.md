---
title: "How to show uploaded images in Core / Universal PDFs"
sidebar_label: "Uploaded Images"
description: "Use the Slim Image Cropper plugin for Gravity Forms to automatically display uploaded images in Core / Universal PDFs generated using Gravity PDF."
---

By default, Gravity PDF will display all files uploaded using the [File Upload field](https://docs.gravityforms.com/file-upload/) as a bullet point list with links to those files.

![](https://resources.gravitypdf.com/uploads/2018/08/file-upload-field-default.png) 
_The File Upload Field displaying a list of uploaded files in Core / Universal PDFs_

Out of the box it isn't possible to display uploaded images in the Core (free) or <a href="https://gravitypdf.com/template-shop/#universal">Universal (paid)</a> PDFs, and we've done this for technical reasons – loading more than 10MB of images (less on some shared hosting) can cause significant PDF generation times, or PHP fatal errors.

To work around this limitation and display / show / embed uploaded images in Gravity PDF, we recommend the [Slim Image Cropper for Gravity Forms plugin](https://codecanyon.net/item/slim-image-cropper-for-gravity-forms/19606752). This plugin can be configured to automatically resize images on the client-side, which helps prevent timeout issues during the PDF generation.

![](https://resources.gravitypdf.com/uploads/2018/08/slim-image-field.png) 
_Add a new Slim Image Cropper Field to your form with a maximum width/height of no more than 1000,1000_

Once installed, add a new Slim Upload Field to your Gravity Form. Just make sure to set the maximum image size of no more than 1000,1000 to prevent the aforementioned image size issue. Gravity PDF will automatically display / show uploaded images in the Core / Universal PDFs.

![](https://resources.gravitypdf.com/uploads/2018/08/slim-field-pdf.png) 
_The Slim Image Cropper Field Displayed in Core / Universal PDFs Automatically_
