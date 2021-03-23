---
title: "Helper Parameters to Assist PDF Template Development"
sidebar_label: "Helper Parameters"
description: "We've included a number of techniques to assist you create custom PDF templates. From viewing the $form_data array to direct paths for the PDF directory."
---

## Introduction  

We've included a number of techniques to assist you when creating custom PDF templates. From viewing the `$form_data` array in an easy-to-read format, to direct paths to the [PDF working directory](first-custom-pdf.md#working-directory).

## URL Parameters 

When viewing a Gravity PDF in your browser, there's a couple of URL parameters that will assist you. A URL parameter is simply a value added to your URL which Gravity PDF can read. It might look like this:

    https://gravitypdf.com/pdf/12i0afjafwijww212/?name=value

The URL parameter is the `name=value` pair after the question mark.

### data=1 
* ![Preview of the 'data' attribute](https://resources.gravitypdf.com/uploads/2015/11/data.png)
* The data URL parameter is used to display the full output of the `$form_data` array in your browser. This is very useful when [creating your PDF template using PHP only](php-form-data-array.md).
* Usage: `https://gravitypdf.com/pdf/12i0afjafwijww212/?data=1`

### html=1 
* ![Preview of the 'html' attribute](https://resources.gravitypdf.com/uploads/2015/11/html.png)
* The HTML URL parameter is used to display the generated PDF template's HTML mark-up. What you'll see is the HTML that gets sent to the PDF software with all the PHP and merge tag formatting complete. This is very useful when debugging layout issues in your custom templates.
* Usage: `https://gravitypdf.com/pdf/12i0afjafwijww212/?html=1`

### template={name} 
* ![Preview of the 'template' attribute](https://resources.gravitypdf.com/uploads/2015/11/template.png)
* The template URL parameter allows you to quickly swap between different PDF template files. The `{name}` value needs to be substituted for the PHP template name (with the `.php` extension removed).
* Usage: `https://gravitypdf.com/pdf/12i0afjafwijww212/?template=hello-world`

## Useful Paths and URLs 

When creating custom PDF templates, it's often useful to include external CSS files and images, however you don't want to use a fixed path or URL. Instead, you should use a PHP constant or function that contains the correct path or URL.

### \_\_DIR\_\_ 
* [This is a PHP magic constant](http://php.net/manual/en/language.constants.predefined.php) that references the current absolute path to the current file. We use this when referencing images or other PHP files in the PDF template.
* We recommend using absolute paths for images and stylesheets located on your web server.
* Usage: `<img src="<?= __DIR__; ?>/images/hello-world.png" width="400" />`

### PDF\_TEMPLATE\_LOCATION 
* This is a constant that contains the path to the [PDF working directory](first-custom-pdf.md#working-directory) or, in multisite installations, the path to the [individual multisite working directory](first-custom-pdf.md#multisite-structure).
* We recommend using [`__DIR__`](#dir) where possible.

### PDF\_TEMPLATE\_URL\_LOCATION 
* This is a constant that contains the URL to the [PDF working directory](first-custom-pdf.md#working-directory) or, for multisite installations, the URL to the [individual multisite working directory](first-custom-pdf.md#multisite-structure). This is useful if you want to provide a link to a file on the host machine.
* If you want to include images or stylesheets that are located on your web server we recommend using [`__DIR__`](#dir) where possible
* Usage: `<a href="<?= PDF_TEMPLATE_URL_LOCATION; ?>images/hello-world.png">View Sample</a>`

### wp\_upload\_dir() 
* A [WordPress function](https://codex.wordpress.org/Function_Reference/wp_upload_dir) that returns path and URL information about the uploads directory.
* Usage: `<?php $upload_dir = wp_upload_dir(); echo '<img src="' . $upload_dir['path'] . '2015/04/hello-world.png" width="400" />'; ?>`

### ABSPATH 
* A WordPress constant that references the directory in which WordPress is installed. This is less useful than the other methods (usually you don't store files in the root directory), but it's good to know about.
* Usage: `<img src="<?= ABSPATH; ?>logo.png" width="400" />`
