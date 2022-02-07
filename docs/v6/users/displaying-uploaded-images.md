---
title: "How to show uploaded images in Core / Universal PDFs"
sidebar_label: "Uploaded Images"
description: "Use the Image Hopper for Gravity Forms plugin to automatically display uploaded images in Core / Universal PDFs generated using Gravity PDF."
---

import ResponsiveEmbed from 'react-responsive-embed'

By default, Gravity PDF displays all files uploaded using the [File Upload field](https://docs.gravityforms.com/file-upload/) as a bullet point list with links to those files.

![The File Upload Field displaying a list of uploaded files in Core / Universal PDFs](https://resources.gravitypdf.com/uploads/2018/08/file-upload-field-default.png)
_The File Upload Field displaying a list of uploaded files in Core / Universal PDFs_

Out of the box it isn't possible to display uploaded images in the Core (free) or [Universal (paid)](https://gravitypdf.com/store/#universal) PDFs, and we've done this for technical reasons: loading more than 10MB of images (less on some shared hosting) can cause significant PDF generation times, or PHP fatal errors like timeouts or hitting the PHP memory limit. And images may appear incorrectly rotated because the PDF engine doesn't read an image's EXIF rotational data, which affects images captured on mobile or tablet devices. 

To overcome all these problems and display / show / embed uploaded images in Gravity PDF, we recommend the [Image Hopper add-on](https://imagehopper.tech/). This plugin can be configured to automatically downsize images and it will auto-rotate them by reading the EXIF data so the PDF will display them correctly. This all happens directly in the client's browser (and not on the server), which significantly reduces the chance of server-related problems while generating PDFs that include these images and has the added bonus of faster upload times for your users and reduced bandwidth and file storage usage for your website.

![The form editor with an Image Hopper field selected](https://resources.imagehopper.tech/uploads/2021/07/Image-Hopper-in-Form-Editor.png)
_Where to find the Image Hopper field in the Form Editor_

Once installed, add a new Image Hopper field to your Gravity Form. Just make sure to set the *Downscale Images* width and height setting to no more than 1000x1000px to prevent the aforementioned image size issue. Gravity PDF will now automatically display / show the uploaded images in the Core / Universal PDFs.

![A Gravity PDF-generated document with images included thanks to Image Hopper](https://resources.gravitypdf.com/uploads/2021/02/Gravity-PDF-Zadani-w-Image-Hopper.png)
_The Image Hopper Field displays images in Core / Universal PDFs automatically_

:::note
Previously we recommend using the Slim Image Cropper for Gravity Forms plugin, but it was discontinued by its developer.
:::

## Video Walkthrough

If you enjoy learning through video, you can watch this 12-minute video with Gravity PDF's lead developer showing you how to include user uploaded images in the Core and Universal PDF templates using both the File Upload field and the amazing Image Hopper plugin.

<ResponsiveEmbed src="https://player.vimeo.com/video/671784077" allowfullscreen />