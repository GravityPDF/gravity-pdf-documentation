---
title: "How to display uploaded images in Core / Universal PDFs"
sidebar_label: "Uploaded Images"
description: "Use the Slim Image Cropper plugin for Gravity Forms to automatically included uploaded images in Core / Universal PDFs generated using Gravity PDF."
---

:::note
The Slim Image Cropper for Gravity Forms plugin has been discontinued and [Image Hopper is the go-to solution now](https://imagehopper.tech). Because v4 has reached its end of life, we've chosen to leave the original recommendation as-is.
:::

By default, Gravity PDF will display all files uploaded using the [File Upload field](https://docs.gravityforms.com/file-upload/) as a bullet point list with links to those files.

<img src="https://resources.gravitypdf.com/uploads/2018/08/file-upload-field-default.png" alt="" width="916" height="129" class="size-full wp-image-23870" /> The File Upload Field displaying a list of uploaded files in Core / Universal PDFs

Out of the box it isn't possible to display uploaded images in the Core (free) or [Universal (paid)](https://gravitypdf.com/template-shop/#universal) PDFs, and we've done this for technical reasons – loading more than 10MB of images (less on some shared hosting) can cause significant PDF generation times, or PHP fatal errors.

To work around this limitation and display uploaded images in Gravity PDF, we recommend the [Slim Image Cropper for Gravity Forms plugin](https://pqina.nl/slim-wp/). This plugin can be configured to automatically resize images on the client-side, which helps prevent timeout issues during the PDF generation.

<img src="https://resources.gravitypdf.com/uploads/2018/08/slim-image-field.png" alt="" width="507" height="769" class="size-full wp-image-23873" /> Add a new Slim Image Cropper Field to your form with a maximum width/height of no more than 1000,1000

Once installed, add a new Slim Upload Field to your Gravity Form. Just make sure to set the maximum image size of no more than 1000,1000 to prevent the aforementioned image size issue. Gravity PDF will automatically include uploaded images in the Core / Universal PDFs.

<img src="https://resources.gravitypdf.com/uploads/2018/08/slim-field-pdf.png" alt="" width="911" height="541" class="size-full wp-image-23872" /> The Slim Image Cropper Field Displayed in Core / Universal PDFs Automatically
