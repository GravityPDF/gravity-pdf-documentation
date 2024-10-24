---
title: "Gravity PDF 5 Minute Installation"
sidebar_label: "5 Minute Install"
description: "Gravity PDF is a free WordPress plugin built for the popular form-builder, Gravity Forms. Get started in 5 minutes flat!"
---

import ResponsiveEmbed from 'react-responsive-embed'

![Gravity PDF 6.x PDF Creation](https://resources.gravitypdf.com/uploads/2022/05/v6.3-Create-PDF.png)

[Gravity PDF](https://gravitypdf.com) is a **free WordPress plugin** built for the popular form-builder software, <a href="https://rocketgenius.pxf.io/c/1211356/445235/7938" rel="sponsored">Gravity Forms</a>. Gravity PDF allows you to generate PDF documents that contain user-data captured with Gravity Forms.

The look and feel of the PDF is controlled through templates. The software comes with **four free template designs**, but you can also [purchase additional templates from the template shop](https://gravitypdf.com/store/#templates), [build your own using HTML and CSS](../developers/start-customising.md) or have our team [custom-build one for you](https://gravitypdf.com/bespoke/) – our team can even autopopulate existing PDF documents like government forms (not available in our free edition).

If you enjoy video tutorials, you can watch a 13-minute Getting Started video for Gravity PDF where Gravity PDF's lead developer takes you through the installation and basic setup process, but also goes into more detail about the various Gravity PDF features and settings available.

<ResponsiveEmbed src="https://player.vimeo.com/video/665407495?dnt=1" allowFullScreen />

## Installation

Provided you [meet the minimum software requirements](installation.md), the installation is a breeze. Follow these simple steps to install the plugin on your WordPress site:

1. [Download the latest version of the plugin from GravityPDF.com](https://gravitypdf.com/download-gravity-pdf)
1. Log in to your WordPress admin area
1. Navigate to `Plugins > Add New Plugin` and select the `Upload Plugin` button
1. Upload the zip file downloaded in step 1 and select the `Install Now` button
1. Finish up by selecting the `Activate Plugin` button
 
All future updates for Gravity PDF are done directly from your WordPress admin area – no zip file required.

## Core Fonts

After activating the plugin for the first time, you'll be prompted to install the core font files needed to generate your PDFs. Click the `Install Core Fonts` button and Gravity PDF will download and save the fonts locally. This is a one-time action and once complete you won't need to repeat this step again.

![This is the Font Downloader prompt you will see upon activation](https://resources.gravitypdf.com/uploads/2021/03/Install-Core-Fonts.png)

[View additional information about the Core Fonts that are installed, and alternate installation methods](core-pdf-fonts.md)

## Global Settings

After activating, head to `Form -> Settings -> PDF` and check over the plugin's default settings. The software uses sane defaults, but you may want to tweak the default paper size, template and font family, size and colour. [You may also want to enable on Background Processing for faster form processing](background-processing.md).

![The global Gravity PDF settings page](https://resources.gravitypdf.com/uploads/2022/05/v6.3-PDF-Global-Settings.png)

[View more information about the general PDF settings](global-settings.md).

## Creating a PDF

Next, it's time to set up a PDF for one of your Gravity Forms. Select `Forms` in the main navigation and then choose one of the forms you want to integrate with. From the form editor page that loads, hover on the `Settings` menu in the horizontal navigation and choose `PDF` from the dropdown menu shown. Finally, select the `Add New` button to create a PDF.

![The PDF Form Settings page](https://resources.gravitypdf.com/uploads/2022/05/v6.3-PDF-Settings-Form.png)

While there are a lot of options available to you, only the `Name` and `Filename` settings are required. Go ahead and fill those in. You can choose a `Template` from the dropdown or leave it set to the default option. If you want the **PDF automatically attached to the email** when your form is submitted select the [Gravity Forms Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) you want to attach it to in the [PDF Notifications setting](setup-pdf.md#notifications). Finally, click *Add PDF* to complete the setup.

![Adding a new PDF to a form](https://resources.gravitypdf.com/uploads/2022/05/v6.3-Add-PDF.png)

Now that you've set up the PDF you can view and download it from the Gravity Forms Entries page in your admin area (just make sure you've submitted an entry already). If you configured it, when a new entry is submitted the generated PDF will be attached to the email notification.

![Download the PDFs via the Entries page](https://resources.gravitypdf.com/uploads/2021/04/v6-Download-PDF.png)

[View more information about configuring PDFs](setup-pdf.md).

## PDF Download Link

If you would like to add a link to the PDF on your form's [Confirmation page](https://docs.gravityforms.com/configuring-confirmations/) you'll need to use the `[gravitypdf]` shortcode. Read more about it [in our shortcode documentation](shortcodes-and-mergetags.md).

## Help and Support

If you run into trouble during any of these steps [head to our support page](https://gravitypdf.com/support/). From there you can search and review our documentation, or get in touch with our friendly support team should you still have issues.
