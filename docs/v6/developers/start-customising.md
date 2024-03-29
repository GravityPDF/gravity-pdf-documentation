---
title: "Start Customising Gravity PDF – Developer Documentation"
sidebar_label: "Start Customising"
description: "We've attempted to make Gravity PDF as developer-friendly as possible. You can create custom PDF templates and tap into our WordPress actions and filters."
---

## Before You Begin

This section of the documentation is *primarily written for developers*. Assumed knowledge of WordPress basics, like [action and filter hooks](https://codex.wordpress.org/Plugin_API), with a solid PHP foundation and HTML / CSS is expected. If that doesn't sound like you, [reach out to our friendly team](https://gravitypdf.com/integration-services/) and we can discuss implementing customisations for you.

## Overview

We've attempted to make Gravity PDF as developer-friendly as possible. That means there are actions and filters placed all through the software, so you can tweak the functionality as you see fit. You can also control the exact look and feel of the generated PDFs using custom PDF templates, which are created using HTML/CSS and a bit of PHP knowledge.

## Custom Templates

![Screenshot of a custom PDF template](https://resources.gravitypdf.com/uploads/2022/07/pdf-template-sample-r3.png)

The majority of our developer documentation will be targeted at creating custom PDF templates. You'll learn how to:

-   Setup Gravity PDF so it utilises custom templates.
-   The different techniques for displaying Gravity Forms data in the PDFs – using [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) or a PHP array.
-   How to [utilise a PDF configuration file](template-configuration-and-image.md) to create template-specific settings.
-   [Adding a PDF template image](template-preview-image.md) so users can see what the custom template looks like in the PDF Template Manager.
-   [How the PDF hierarchy works](template-hierarchy.md) so you can override core templates.

[Find out more about creating your own custom PDF templates](first-custom-pdf.md).

### Supported PDF Features

![Sample of a PDF showing off the HTML support](https://resources.gravitypdf.com/uploads/2015/11/pdf-features.png)

Along with learning the ins and outs to create a template and configuration file, we'll go into detail about the common features you can use when laying out your PDF using HTML/CSS.

We'll cover:

-   [Supported HTML / CSS](pdf-features/supported-html-and-css.md): it's not like your web browser.
-   [Headers and Footers](pdf-features/headers-and-footers.md)
-   [Images](pdf-features/images.md)
-   [Watermarks](pdf-features/watermarks.md)
-   [Background Images](pdf-features/backgrounds.md)
-   [Rounded Corners](pdf-features/rounded-corners.md)
-   [Page Breaks](pdf-features/pagebreaks.md)
-   [Tables](pdf-features/tables.md)
-   [Positioning](pdf-features/positioning.md)
-   [Floats](pdf-features/floats.md)

For those developers looking for in-depth knowledge about the PDF software that powers Gravity PDF, [head over to the mPDF documentation](http://mpdf.github.io/).

## Actions / Filters

![Sample of a filter available](https://resources.gravitypdf.com/uploads/2015/11/filters.png)

We've worked hard to document many of the filters and actions available in Gravity PDF. This includes modifying the output of particular Gravity Forms fields in PDFs, to creating new access control policies for PDFs. All filter documentation is located under the *Filter Hooks* category in the sidebar, while actions are found under *Action Hooks*.

If you want to request a new filter or action be added, [please open a new ticket on GitHub](https://github.com/GravityPDF/gravity-pdf/issues).
