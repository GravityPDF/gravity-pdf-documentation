---
title: "Gravity PDF 5 Minute Installation"
sidebar_label: "5 Minute Install"
description: "Gravity PDF is a free WordPress plugin built for the popular premium form builder software, Gravity Forms. Get started in 5 minutes flat!"
---

![Gravity PDF 6.x PDF Creation](https://resources.gravitypdf.com/uploads/2021/04/v6-Create-PDF.png)

[Gravity PDF](https://gravitypdf.com) is a **free WordPress plugin** built for the popular premium form builder software, [Gravity Forms](https://rocketgenius.pxf.io/c/1211356/445235/7938). Gravity PDF allows you to generate PDF documents that contain user-data captured with Gravity Forms. 

The look and feel of the PDF is controlled through templates. The software comes with **four free template designs**, but you can also [purchase additional templates from the template shop](https://gravitypdf.com/template-shop/), [build your own using HTML and CSS](../developers/start-customising.md) or have our team [custom-build one for you](https://gravitypdf.com/bespoke/) – our team can even auto-populate existing PDF documents like government forms (not available in our free edition). 

## Installation 

:::warning
Gravity PDF 6.0 will officially be released alongside Gravity Forms 2.5 on Tuesday April 27, 2021 (USD EST). A pre-release version is currently available for testing, and [you can find out how to try this out in the RC2 announcement post](https://gravitypdf.com/news/gravity-pdf-6-0-0-rc-2/). Until the official release, the installation instructions below will not work.
:::

Assuming you [meet the software minimum requirements](installation.md), the installation is a breeze. Head to `Plugins -> Add New` in your WordPress admin area, search *Gravity PDF*, click **Install Now** and activate. It's that simple! 

![Installing Gravity PDF via the WordPress admin area](https://resources.gravitypdf.com/uploads/2021/03/Gravity-PDF-Add-Plugins-Page.png)

[View additional information about the software requirements and other installation procedures](installation.md).

## Core Fonts 

After activating the plugin for the first time, you'll be prompted to install the core font files needed to generate your PDFs. Click the `Install Core Fonts` button and Gravity PDF will download and save the fonts locally. This is a one-time action and once complete you won't need to repeat this step again. 

![This is the Font Downloader prompt you will see upon activation](https://resources.gravitypdf.com/uploads/2021/03/Install-Core-Fonts.png) 

[View additional information about the Core Fonts that are installed, and alternate installation methods](core-pdf-fonts.md)

## Global Settings 

After activating, head to `Form -> Settings -> PDF` and check over the plugin's default settings. The software uses sane defaults, but you may want to tweak the default paper size, template and font family, size and colour. [You may also want to enable on Background Processing for faster form processing](background-processing.md).

![The global Gravity PDF settings page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Global-Settings.png) 

[View more information about the general PDF settings](global-settings.md).

## Creating a PDF 

Next, it's time to setup a PDF for one of your Gravity Forms. Select `Forms` in the main navigation and then choose one of the forms you want to integrate with. From the form editor page that loads, hover on the `Settings` menu in the horizontal navigation and choose `PDF` from the dropdown menu shown. Finally, select the `Add New` button to create a PDF. 

![The PDF Form Settings page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Settings-Form.png) 

While there are a lot of options available to you, only the `Name` and `Filename` settings are required. Go ahead and fill those in. You can choose a `Template` from the dropdown or leave it set to the default option. If you want the **PDF automatically attached to the email** when your form is submitted select the [Gravity Forms Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) you want to attach it to in the [PDF Notifications setting](setup-pdf.md#notifications). Finally, click *Add PDF* to complete the setup. 

![Adding a new PDF to a form](https://resources.gravitypdf.com/uploads/2021/04/v6-Add-a-PDF.png) 

Now that you've setup the PDF you can view and download it from the Gravity Forms Entries page in your admin area (just make sure you've submitted an entry already). If you configured it, when a new entry is submitted the generated PDF will be attached to the email notification. 

![Download the PDFs via the Entries page](https://resources.gravitypdf.com/uploads/2021/04/v6-Download-PDF.png) 

[View more information about configuring PDFs](setup-pdf.md).

## PDF Download Link 

If you would like to add a link to the PDF on your form's [Confirmation page](https://docs.gravityforms.com/configuring-confirmations/) you'll need to use the `[gravitypdf]` shortcode. Read more about it [in our shortcode documentation](shortcodes-and-mergetags.md).

## Help and Support 

If you run into trouble during any of these steps [head to our support page](https://gravitypdf.com/support/). From there you can search and review our documentation, or get in touch with our friendly support team should you still have issues.
