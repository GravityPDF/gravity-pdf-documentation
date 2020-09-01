---
title: "Gravity PDF 5 Minute Installation (a WordPress plugin)"
sidebar_label: "5 Minute Install"
description: "Gravity PDF is a free WordPress plugin built for the popular premium form builder software, Gravity Forms. Get started in 5 minutes flat!"
---

![Gravity PDF 5.x Welcome Screen](https://resources.gravitypdf.com/uploads/2016/04/v5-welcome-screen.png) 

Gravity PDF is a **free WordPress plugin** built for the popular premium form builder software, [Gravity Forms](https://rocketgenius.pxf.io/c/1211356/445235/7938). It allows you to generate PDF documents that contain user-data captured with Gravity Forms. 

The look and feel of the PDF is controlled through templates. The software comes with **four free designs**, but you can also [purchase additional templates from our template shop](https://gravitypdf.com/template-shop/), [build your own using HTML and CSS](../developers/start-customising.md) or have our team [custom-build one for you](https://gravitypdf.com/integration-services/) – we can even auto-complete existing PDF documents like government forms. 

## Installation 

Assuming you [meet the software minimum requirements](installation.md), the installation is a breeze. Head to `Plugins -> Add New` in your WordPress admin area, search *Gravity PDF*, click **Install Now** and activate. It's that simple! 

![Installing Gravity PDF via the WordPress admin area](https://resources.gravitypdf.com/uploads/2015/10/automatic-install.png)

[View additional information about the software requirements and other installation procedures](installation.md).

## Core Fonts 

After activating the plugin for the first time, you'll be prompted to install the core font files needed to generate your PDFs. Click the `Install Core Fonts` button and Gravity PDF will download and save the fonts locally. This is a one-time action and once complete you won't need to repeat this step again. 

![This is the Font Downloader prompt you will see upon activation](https://resources.gravitypdf.com/uploads/2016/04/v5-font-installer.png) 

[View additional information about the Core Fonts that are installed, and alternate installation methods](core-pdf-fonts.md)

## General Settings 

After activating, head to `Form -> Settings -> PDF` and check over the plugin's default settings. The software uses sane defaults but you may want to tweak the PDF paper size, PDF template and font family, size and colour. [You may also want to enable on Background Processing](background-processing.md).

![The global Gravity PDF settings page](https://resources.gravitypdf.com/uploads/2016/04/v5-general-settings.png) 

[View more information about the general PDF settings](global-settings.md).

## Creating a PDF 

Next, it's time to setup a PDF for your Gravity Form. Click `Forms` in the main navigation and select the Gravity Form you want integrated. From the form editor page, hover over the form `Settings` menu item and select `PDF` from the sub-navigation. Finally, click the `Add New` button to create a PDF. 

![The PDF Form Settings page](https://resources.gravitypdf.com/uploads/2016/04/v5-form-pdf-settings-1.png) 

While there are a lot of options available to you, only the `Name` and `Filename` settings are required. Go ahead and fill those in. If you want the **PDF automatically attached to the email** when your form is submitted select the Gravity Forms Notifications you want to attach it to in the [PDF Notifications setting](setup-pdf.md#notifications). Finally, click *Add PDF* to complete the setup. 

![Adding a new PDF to a form](https://resources.gravitypdf.com/uploads/2016/04/v5-add-pdf.png) 

Now that you've setup the PDF you can view and download it from the Gravity Form Entries page in your admin area (just make sure you've submitted an entry already). If you configured it in the last step, when you fill out and submit the form the generated PDF will be attached to the email notification. 

![Download the PDFs via the Entries page](https://resources.gravitypdf.com/uploads/2016/04/v5-download-pdf-page.png) 

[View more information about configuring PDFs](setup-pdf.md).

## PDF Download Link 

If you would like to add a link to the PDF on your form's confirmation page you'll need to use the `[gravitypdf]` shortcode. Read more about it [in our shortcode documentation](shortcodes.md).

## Help and Support 

If you run into trouble during any of these steps [head to our support page](https://gravitypdf.com/support/). From there you can search and review our documentation, or get in touch with our friendly support team should you still have issues.
