---
title: "How to show a template preview image in the PDF Template Manager"
sidebar_label: "Template Preview Image"
description: "To add the finishing touch to your custom template, we recommend adding preview image which gives users a nice visual of your template in the PDF Template Manager."
---

![The Template Previewer Image in the PDF Template Manager](https://resources.gravitypdf.com/uploads/2017/03/details-page-delete.png)

To add the finishing touch to your custom template, we recommend adding a preview image, which gives users a nice visual of your template in the [PDF Template Manager](../users/pdf-template-manager.md). This is an optional step.

To add support for your custom PDF template, save a 768x576 PNG to the `images` folder in the [PDF Working Directory](first-custom-pdf.md#working-directory) with the same name as your PDF template. If no `images` folder exists, create one. 

For example, if the PDF template is called `hello-world.php`, you'd save `/images/hello-world.png` in the PDF Working Directory.

    +-- /PDF_EXTENDED_TEMPLATES/
    |   +-- hello-world.php
    |   +-- /images/
    |       +-- hello-world.png