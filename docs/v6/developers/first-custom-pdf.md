---
title: "Creating your First Custom PDF Template"
sidebar_label: "First Custom PDF"
description: "Learn the theory behind Gravity PDF's template system and dive into your first custom PDF template: a very basic \"Hello World\" example."
---

## Introduction 

Before we jump right into the code, we're going to discuss the architecture Gravity PDF uses to register and load custom templates, how multisite sites differ from standard WordPress installations and briefly touch on the template hierarchy.

## PDF Working Directory 

![The PDF_EXTENDED_TEMPLATES Working Directory](https://resources.gravitypdf.com/uploads/2015/10/v5-pdf-working-directory.png)

When Gravity PDF is installed, it automatically creates a folder called `PDF_EXTENDED_TEMPLATES` in your WordPress upload directory. This folder is used to store temporary files, fonts and custom PDF templates. Any PHP files in the root of this folder will be classified as a **PDF Template**, and the system will automatically register it.

:::info
On a vanilla WordPress installation, the full path to the `PDF_EXTENDED_TEMPLATES` directory is `/wp-content/uploads/PDF_EXTENDED_TEMPLATES`. Your installation may be different if defining the `WP_CONTENT_DIR` or `UPLOADS` constants, or if you've used the [`gfpdf_template_location`](filters/gfpdf_template_location.md) and [`gfpdf_template_location_uri`](filters/gfpdf_template_location_uri.md) filters.
:::

:::caution
The **PDF Template** filename should only contain `A-Z`, `a-z`, `0-9`, `_`, or `-` characters, followed by the `.php` extension. Do not include spaces, symbols, or non-ascii characters. For example `my-custom-template.php` is valid, whereas `F.ID #123.php` is invalid.
:::

### Template Hierarchy

[Gravity PDF template system is modelled on the Theme hierarchy](template-hierarchy.md). The plugin's core templates are like the parent theme, while the `PDF_EXTENDED_TEMPLATES` directory acts like a child theme. All core template can be overridden by placing a file with the same name in `PDF_EXTENDED_TEMPLATES`. This information is important to know when you want to modify a Core template file, as you can easily copy any files from `/src/templates/` into the Working Directory and Gravity PDF will use it. 

### Multisite Structure 

![The PDF_EXTENDED_TEMPLATES Working Directory one a Multisite installation](https://resources.gravitypdf.com/uploads/2015/10/v5-pdf-working-directory-multisite.png)

To correctly handle multisite installations, the plugin creates a directory in `PDF_EXTENDED_TEMPLATES` for each active sub-site. For instance, site #2 will use the folder `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/2/` for its templates.

![Example of where to find your multisite ID](https://resources.gravitypdf.com/uploads/2015/11/multisite-id.png)

The site ID can be found by looking at each site's `Edit` URL in the `Network Admin -> Sites` section of your admin area (you'll need to be logged in as a network administrator). Alternatively, the site ID column is automatically added to this page when using the [Multisite Enhancements](https://wordpress.org/plugins/multisite-enhancements/) plugin.

[The hierarchy in Multisite installations has an extra tier](template-hierarchy.md#multisite-wordpress-installation). In a Multisite network, the Core templates and `PDF_EXTENDED_TEMPLATES` directory still act like parent and child themes, but [the sub-site folders](#multisite-structure) act like a child "child theme".

The templates placed in the root `PDF_EXTENDED_TEMPLATES` directory are loaded by all sites in the network. While templates in a sub-site directory – like `PDF_EXTENDED_TEMPLATES/5/` – are site specific. Placing templates directly in the `PDF_EXTENDED_TEMPLATES` directory can be useful when duplicating sites in your network, but most of the time you'll add the custom template to the sub-site folder (which is where the [PDF Template Manager](../users/pdf-template-manager.md) will install them).

## Template Structure 

Much like [creating plugins](https://developer.wordpress.org/plugins/the-basics/header-requirements/) or themes, all PDF templates must have the appropriate file headers to tell Gravity PDF more information about your template. 

Your header should include:

-   **Template Name:** The name of your template, which will be displayed to the user when selecting templates.
-   **Description:** A short summary about what your PDF template is for.
-   **Version:** The current version number of your PDF template.
-   **Group:** The group your PDF should be assigned to. The group can be anything and helps users find the templates they're looking for.
-   **Required PDF Version:** The minimum Gravity PDF version required to run the template.

Optional headers include:

-   **Author:** The PDF template author name
-   **Author URI:** The author's website URL
-   **License:** The license type the PDF template is released under e.g GPLv2
-   **Tags:** Any PDF tags that can be used to better search for the plugin in the PDF Template Manager

The following is a valid PDF template header:

```
    /**
     * Template Name: Zadani
     * Version: 1.2
     * Description: A minimalist business-style template that will generate a well-spaced document great for printing. Through the Template tab, you can control the PDF header and footer, change the background color or image, and show or hide the form title, page names, HTML fields and the Section Break descriptions.
     * Author: Gravity PDF
     * Author URI: https://gravitypdf.com
     * Group: Core
     * License: GPLv2
     * Required PDF Version: 4.0
     * Tags: Header, Footer, Background, Optional HTML Fields, Optional Page Fields, Container Background Color
     */
```

## Variables Available 

The following variables are available to all PDF templates:

:::caution
If you print/echo any PHP variable in the template it is best practice to [late-escape those variables on output](https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/#escaping-securing-output).
:::

### $form 
* The current [Gravity Forms object](https://docs.gravityforms.com/form-object/) being processed. This is the main object in Gravity Forms and contains all properties of a particular form – form title, fields, notification, confirmation etc.

### $entry 
* The current [Gravity Forms entry object](https://docs.gravityforms.com/entry-object/) being processed. This object contains all properties of a particular entry in **raw** format – accessing field data directly from the object should be avoided, where possible. The object is formatted as an associative array, and the field IDs are the array keys.

### $form\_data 
* The formatted [$entry](#entry) data stored in an associative array. [View full documentation on the `$form_data` array](php-form-data-array.md).

### $settings 
* The current PDF configuration settings in array format. Standard settings like filename and font size are stored in this array, as well as [template-specific settings](template-configuration-and-image.md).

### $fields 
* An array of the current Gravity Forms fields which can be accessed using the field ID number – `print_r( $fields[20] );`. This is just a formatted version of the `$form['fields']` array.

## Supported HTML / CSS

The PDF engine used by Gravity PDF is powerful, but there are limitations when it comes to the available CSS you can use to build advanced layouts. **Modern styles like grid or flexbox are not supported**, and layouts need to be done with floats / positioning / tables (and each of those has its own quirks). Keep that in mind when building custom templates.

[Refer to the supported HTML or CSS for more information](pdf-features/supported-html-and-css.md).

## Template Tutorial – Part 1 

![The basic Hello World PDF template](https://resources.gravitypdf.com/uploads/2015/11/basic-hello-world-template.png)

Now we've got all the theory out of the way let's create our first PDF template. In the traditional fashion, this will be a basic "Hello World" PDF.

To get started, create a new PHP file in your IDE of choice and call it `hello-world.php`. We're going to add the following headers to the file to tell Gravity PDF about the template:

```
<?php 

/**
 * Template Name: Hello World
 * Version: 0.1
 * Description: A basic "Hello World" PDF template showing custom PDF templates in action
 * Author: Jake Jackson
 * Author URI: https://gravitypdf.com
 * Group: Sol System
 * License: GPLv2
 * Required PDF Version: 4.0
 * Tags: space, solar system, getting started
 */

/* Prevent direct access to the template (always good to include this) */
if ( ! class_exists( 'GFForms' ) ) {
    return;
}

/**
 * All Gravity PDF v4/v5/v6 templates have access to the following variables:
 *
 * @var array  $form      The current Gravity Forms array
 * @var array  $entry     The raw entry data
 * @var array  $form_data The processed entry data stored in an array
 * @var object $settings  The current PDF configuration
 * @var array  $fields    An array of Gravity Forms fields which can be accessed with their ID number
 * @var array  $config    The initialised template config class – eg. /config/zadani.php
 */
 
 ?>
```

As you can see, it's very simple to let Gravity PDF know about your PDF template. More information about each individual header is available in the [Template Structure](#template-structure) section.

Next, we're going to layout the basic structure. Go ahead and add the following below the header section:

```html
<!-- Any PDF CSS styles can be placed in the style tag below -->
<style>

</style>

<!-- The PDF content should be placed in here -->
```

Think of Gravity PDF templates as HTML that is automatically included inside the `<body>` tag. Any [supported CSS](pdf-features/supported-html-and-css.md#css-support) can be placed in the `<style>` tags, while your actual content should be included below that.

To finish off our example, we've going to replace `<!-- The PDF content should be placed in here -->` with `<h1>Hello World</h1>`. Once done, save the example and upload it to your [PDF working directory](#pdf-working-directory) using an (S)FTP client or by [zipping up the template and uploading via the PDF Template Manager](install-template-via-template-manager.md).

[Download a completed copy of the Hello World template](https://gist.github.com/jakejackson1/d98b99fd504a5a300f1a).

### Viewing PDF 

![The new Sol System PDF group](https://resources.gravitypdf.com/uploads/2022/03/v6.2-Sol-System-Group.png)

Once you've uploaded the template, you'll be able to see your new *Sol System* group added to the [template](../users/setup-pdf.md#template) field of the PDF settings. Go ahead and [configure a new form PDF](../users/setup-pdf.md) with your Hello World template and then [view the PDF](../users/viewing-pdfs.md). You should see a PDF with "Hello World" written in large text.

### Adding Styles 

If you would like to change the appearance of the PDF we can add new styles to the document. We're going to change the `<h1>` tag appearance by adding the following CSS inside the `<style>` tag:

```css
h1 {
    text-align: center;
    text-transform: uppercase;
    color: #a62828; 
    border-bottom: 1px solid #999;
}
```

Save and upload the template again. When you view it you'll see the heading is now centre-aligned, burgundy in colour, with a bottom border.

[Download a completed copy of the Hello World template with the styling added](https://gist.github.com/jakejackson1/2822bd311df289684840).
