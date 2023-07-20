---
title: "Custom Template Configuration and Image Preview"
sidebar_label: "Template Configuration and Image"
description: "Set template-specific user options for your custom templates and add image preview support to ensure the user experience."
---

### Introduction

Gravity PDF allows users to [set template-specific options](user-setup-pdf.md#template-tab) when they configure a Gravity Forms PDF. The template configuration is used to register settings that give the end user greater control over the PDF output. You can also include an image preview of your PDF layout, which gives users a nice visual look at the template they have selected.

It's worth noting that both the template configuration file and PDF preview image *are optional*. They are **not required** when building custom templates, but *do enhance the user experience*.

**Jump To**

-   [Template Configuration](#template-configuration)
    -   [Configuration Naming Convention](#configuration-naming-convention)
    -   [Configuration Mark-Up](#configuration-mark-up)
    -   [Configuration Structure](#configuration-structure)
        -   [Core Fields](#core-fields)
        -   [Custom Fields](#custom-fields)

    -   [Template Field Support](#template-field-support)

-   [Template Tutorial – Part 4](#template-tutorial)
    -   [Template Configuration](#template-configuration)
    -   [PDF Custom Field Support](#pdf-custom-field-support)
-   [Image Preview](#image-preview)
-   [setUp and tearDown Methods](#setup-teardown)

### Template Configuration

![Our Hello World Template File](https://resources.gravitypdf.com/uploads/2015/11/configuration.png)

Template configuration is done in PHP files located in the `config` folder inside your [PDF working directory](developer-first-custom-pdf.md#working-directory). These PHP files use [namespaces](http://php.net/manual/en/language.namespaces.php) and contain a class which **must** implement our `Helper_Interface_Config` class (see [PHP Interfaces](http://php.net/manual/en/language.oop5.interfaces.php)). It's also important to correctly name your class and configuration file so it gets auto-loaded by Gravity PDF.

It sounds complex at first but with guidance you'll find it's surprisingly simple and powerful to use.

#### Configuration Naming Convention

Your PHP configuration file should have the same name as your PDF template file. If your template is called `my-super-custom-template.php` then that's what your configuration file will be called (just in the `config` directory).

#### Configuration Mark-Up

The actual PHP configuration structure is straightforward, but we recommend you base your template off one of the existing configuration files – just duplicate and rename the file as per the [*Configuration Naming Convention*](#configuration-naming-convention) above.

Once you have duplicated the template file you need to rename the PHP class in it to match your template name. There are a few rules to keep in mind for the class name:

1. The file extension is omitted (.php)
1. Any hyphens (-) should be replaced with underscores (_)
1. The class name should be in sentence case (the first character of each word separated by an underscore (_) should be upper case)

Going back to our `my-super-custom-template.php` example, the class name would be `My_Super_Custom_Template`. Below is a sample for our `my-super-custom-template.php` configuration file:

```{.language-php}
<?php

namespace GFPDF\Templates\Config;

use GFPDF\Helper\Helper_Interface_Config;

/**
 * Configuration file for my-super-custom-template.php
 */

/* Exit if accessed directly */
if ( ! defined('ABSPATH') ) {
    exit;
}

/**
 * The configuration class name should be the same name as the PHP template file name with the following modifications:
 *     The file extension is omitted (.php)
 *     Any hyphens (-) should be replaced with underscores (_)
 *     The class name should be in sentence case (the first character of each word separated by a hyphen (-) or underscore (_) should be uppercase)
 *
 * For instance, a template called core-simple.php or core_simple.php would have a configuration class of "Core_Simple"
 *
 * This naming convention is very important, otherwise the software cannot correctly load the configuration
 */
class My_Super_Custom_Template implements Helper_Interface_Config {

    /**
     * Return the templates configuration structure which control what extra fields will be shown in the "Template" tab when configuring a form's PDF.
     *
     * @return array The array, split into core components and custom fields
     *
     * @since 4.0
     */
    public function configuration() {

        return array(

        );
    }
}
```

#### Configuration Structure

The important part of the above sample is our `configuration` method inside the class. This array will tell Gravity PDF about the custom template fields that it supports.

The array is split into two sub-keys: `core` and `fields`. The `core` key allows you to enable built-in fields like headers and footers, while the `fields` key allows you to implement your own fields using our settings API.

##### Core Fields

Gravity PDF has a number of built-in template-specific fields you can easily enable. Some of them are only applicable when using the `$pdf->process_html_structure()` method in your custom template, while others can be included in your PDF automatically.

Below is a sample of the `configuration` method with a number of core fields enabled:

```{.language-php}
public function configuration() {

    return array(

        /* Enable core fields */
        'core' => array(
            'show_form_title'      => true,
            'show_page_names'      => true,
            'show_html'            => true,
            'show_section_content' => true,
            'enable_conditional'   => true,
            'header'               => true,
            'footer'               => true,
        ),
    );
}
```

As you can see it's a simple associative array which sets our core fields to `true`. If you saved your configuration file and [viewed the Template tab](user-setup-pdf.md#template-tab) you'll see a number of new settings.

Below are details of all the core fields available to you:

show_form_title
:   Adds a Yes/No field to the template section asking users if they want to shows the Gravity Form title at the beginning of the PDF template.
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template. Although you can add your own field logic based on this setting. [See custom field support for more details](developer-template-configuration-and-image.md#custom-field-support).

show_page_names
:   Adds a Yes/No field to the template section asking users if they want to show Gravity Form page names in the appropriate location within the PDF.
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

show_html
:   Adds a Yes/No field to the template section asking users if they want to show Gravity Form HTML fields in the PDF.
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

show_section_content
:   Adds a Yes/No field to the template section asking users if they want to show Section break content in the PDF.
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

enable_conditional
:   Adds a Yes/No field to the template section asking users if they want to enable conditional logic in the PDF
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

show_empty
:   Adds a Yes/No field to the template section asking users if they want to show fields that haven't been filled in by the user.
:   Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

header
:   Adds a Rich Text Editor to the template section allowing users to include information in the header of the PDF
:   Unless you use `@page` to set your own header, the core header will automatically be included in your PDF.

first_header
:   Adds a Rich Text Editor to the template section allowing users to include information in a header on the first page of the PDF
:   Unless you use `@page` to set your own header, the core header will automatically be included in your PDF.

footer
:   Adds a Rich Text Editor to the template section allowing users to include information in the footer of the PDF
:   Unless you use `@page` to set your own footer, the core footer will automatically be included in your PDF.

first_footer
:   Adds a Rich Text Editor to the template section allowing users to include information in a footer on the first page of the PDF
:   Unless you use `@page` to set your own footer, the core footer will automatically be included in your PDF.

background_color
:   Adds a colour picker to the template section allowing users to change the PDF background colour.
:   Unless you use `@page` to set your own background(-color), the background colour will automatically be included in your PDF.

background_image
:   Adds an upload box to the template section allowing users to upload and select a background image for the PDF
:   Unless you use `@page` to set your own background(-image), the background image will automatically be included in your PDF.

##### Custom Fields

Adding your own custom fields is where this feature gets really powerful. Using the `fields` sub-key you can define text, paragraph, rich text, radio buttons, select boxes, colour pickers or upload fields with a few lines of code.

```{.language-php}
public function configuration() {

    return array(

        /* Create custom fields to control the look and feel of a template */
        'fields' => array(
            'prefix_border_colour' => array(
                'id'   => 'prefix_border_colour',
                'name' => __('Field Border Colour', 'gravity-forms-pdf-extended' ),
                'type' => 'color',
                'desc' => __('Control the colour of the field border.', 'gravity-forms-pdf-extended' ),
                'std'  => '#CCCCCC'
            ),
            'prefix_my_custom_radio' => array(
                'id'      => 'prefix_my_custom_radio',
                'name'    => 'My Custom Radio',
                'desc'    => 'This is my field description',
                'type'    => 'radio',
                'options' => array(
                    'Yes'     => __( 'Yes', 'gravity-forms-pdf-extended' ),
                    'No'      => __( 'No', 'gravity-forms-pdf-extended' ),
                ),
                'std'     => __( 'No', 'gravity-forms-pdf-extended' ),             
            ),
        )
    );
}
```

**It's important to use a unique name for the ID (we recommend prefixing them) and ensure your ID and field array key match.**

Below are details about the most common field attributes that can be used when defining custom template fields:

id
:   The field ID. This should be unique and we recommend prefixing it.

name
:   The field label displayed to the user.

type
:   The field type. Acceptable values include: `text`, `number`, `checkbox`, `multicheck`, `radio`, `select`, `textarea`, `password`, `rich_editor`, `upload`, `color`, `button`, `descriptive_text`, `hook`.

desc
:   The field description. This will be displayed right below the field.

options
:   An array of options for use in `multicheck`, `radio`, `select`.

std
:   The standard value that should be defined when a user hasn't set anything.

class
:   Add class name to field.

Because only certain options apply to certain fields this isn't an exhaustive list of available attributes, but they are the most common.

For more details we recommend you review the `/src/helper/Helper_Options_Fields.php` files for samples showing you different field types. You can also see what attributes are supported by a specific field type by reviewing the `/src/helper/Helper_Options.php` – from line 1400 onwards.

#### Custom Field Support

The `header`, `first_header`, `footer`, `first_footer`, `background_color` and `background_image` core fields are automatically supported in custom PDF templates (provided you don't override them with your own header/footer or background using `@page`). However, all custom fields will need appropriate logic included in your PDF template.

To do this, you'll have to access a variable named `$settings` in the PDF template. This variable is an array that contains all the settings a user has defined (using the field ID as the array key) and is where your template settings will be located.

Let's have a look at supporting our `prefix_border_colour` custom field [we defined above](developer-template-configuration-and-image.md#custom-fields).

##### Border Colour Support

First we need to get the `prefix_border_colour` setting from the `$settings` array.

```{.language-php}
$border_colour = ( ! empty( $settings['prefix_border_colour'] ) ) ? $settings['prefix_border_colour'] : '#000'; //check if the setting exists and use it, otherwise fall back to black
```

The `$border_colour` variable will now contain the user-selected colour, or fall back to black. Now we can apply the border colour to an element in our PDF template:

```{.language-html}
<style>
    .container {
        border: 1px solid <?php echo $border_colour; ?>;           
    }
</style>

<div class="container">
     This container will have a user-defined border colour.
</div>
```

### Template Tutorial – Part 4

![Our Hello World template fields](https://resources.gravitypdf.com/uploads/2015/11/hello-world-configuration.png)

Continuing on from our [Part 3 Hello World Tutorial](developer-php-form-data-array.md#template-tutorial), we're going to show you how to create a template configuration with core footer and background image support enabled. We'll also add a new field that will determine if meta data should be included in the document.

#### Template Configuration

First, let's [grab a copy of the basic PDF template PHP mark-up](https://gist.github.com/jakejackson1/3554f5f7885aa08b19dd) and save it in the `config` folder of our [PDF working directory](developer-first-custom-pdf.md#working-directory). Remember to save the file as `hello-world.php` – the same name we used for our template file. This sample code already has the class name changed to `Hello_World`, but you would normally update this to match your template's file name.

The only area we'll be focusing on is the empty array being returned in the `configuration` method. We'll need to update this to include our two core fields and create our custom field. Let's do the core fields first:

```{.language-php}
public function configuration() {

    return array(
        'core' => array(
            'footer'           => true,
            'background_image' => true,
        ),
    );
}
```

The [core fields can easily be enabled](#core-fields) by passing their name as the array key with a `true` value.

We've just told the system we want to enable the footer field and our background image field. If you edit your Hello World PDF settings in WordPress, [you'll see a new Template tab](user-setup-pdf.md#template-tab) with our two core fields included. The system will automatically parse and store these fields when the PDF settings are saved.

Including a custom field is a little trickier, but we're just defining array key/value pairs that tell Gravity PDF how to display a field:

```{.language-php}
public function configuration() {

    return array(
        'core' => array(
            'footer'           => true,
            'background_image' => true,
        ),

        'fields' => array(
            'world_show_meta_data' => array(
                'id' => 'world_show_meta_data',
                'name' => __( 'Show Meta Data', 'world-pdf-template'),             
                'desc' => __( 'When enabled the user IP, timestamp, user agent and source URL will be included in the PDF.', 'world-pdf-template' ),
                'type' => 'radio',
                'options' => array(
                        'Yes'     => __( 'Yes', 'world-pdf-template' ),
                        'No'      => __( 'No', 'world-pdf-template' ),
                ),
                'std' => __( 'No', 'world-pdf-template' )
            )
        ),
    );
}
```

We've just told Gravity PDF about a new radio field called *Show Meta Data* that has Yes/No options. By default the *No* value will be selected and a nice description about what the field does is shown just below the radio buttons. We've also prefixed our field ID with `world_` so we don't clash with any other fields. And because we are conscientious developers we've made all our strings translatable by wrapping them [in the `__()` function](https://developer.wordpress.org/reference/functions/__/). Make sure you only translate the `option` array's value and not the keys.

[Read more about the specifics of each field attribute](#custom-fields).

If you go back to the [Template tab](user-setup-pdf.md#template-tab) you'll now see our two core fields and the *Show Meta Data* field. Go ahead and enable/fill in information for each field then save it.

[Download the completed configuration template for our Hello World PDF](https://gist.github.com/jakejackson1/b784eb1338c87357cdf8).

#### PDF Custom Field Support

Now we're capturing and saving the footer, background image and meta data toggle from the user we need to update our original *Hello World* PDF template. The core header/footer and background image fields will automatically be included, but we'll need to update the PDF template to support our custom field.

If you haven't been following along with the other tutorials you can [download the current PDF template here](https://gist.github.com/jakejackson1/c7dea5d0953374970f71).

[If you remember from earlier](#template-field-support) the `$settings` array holds all our custom fields and is where we'll found out meta data setting. To keep our PDF template clean we'll set the settings variables at the beginning of the template (before the HTML).

```{.language-php}
/* Prevent direct access to the template (always good to include this) */
if ( ! class_exists( 'GFForms' ) ) {
    return;
}

/**
 * Load our template-specific settings
 */
$show_meta_data = ( ! empty( $settings['world_show_meta_data']) ) ? $settings['world_show_meta_data'] : 'No';

?>
```

Here we are checking if our our *Show Meta Data* field exists in the settings array before assigning it to the `$show_meta_data` variable. If it doesn't we'll default to *No*. Now we can do a simple *IF* statement in the `<body>` of our template and output the meta data required:

```{.language-html}
<?php if ( 'Titan' == $location ): ?>
    <p>Titan's colony is only recently established. You're one of only 500 people currently living there!</p>
<?php endif; ?>    

<?php if ( 'Yes' == $show_meta_data ): ?>
    <p style="font-size: 0.8em;">
        <strong>User IP:</strong> <?php echo $form_data['misc']['ip']; ?><br>
        <strong>Submission Timestamp:</strong> <?php echo $form_data['misc']['date_time']; ?><br>
        <strong>User Agent:</strong> <?php echo $form_data['misc']['user_agent']; ?><br>
        <strong>Source URL:</strong> <?php echo $form_data['misc']['source_url']; ?>
    </p>
<?php endif; ?>
```

If you've enabled the *View Meta Data* option, when you view the *Hello World* PDF you'll see the meta data included. That's all there is to it. You've now added support for all three template-specific fields to the *Hello World* PDF.

[Download the completed Hello World PDF Template for Part 4](https://gist.github.com/jakejackson1/49ec98ddbb0dd64d42ae).

### Image Preview

![The preview of the Zadini PDF Template](https://resources.gravitypdf.com/uploads/2015/11/template-image-preview.png)

When a user selects a PDF template to use from the admin area they'll see a preview of that template if it exists. To add support for your custom PDF template just save a 768x576 PNG to the `images` folder in the [PDF working directory](developer-first-custom-pdf.md#working-directory).

Ensure you use the same name as your custom template when saving the image. For example, an image for our `hello-world.php` template would be named `hello-world.png`.

### setUp / tearDown Methods

**In Gravity PDF 4.1** we introduced a new class interface called `Helper_Interface_Setup_TearDown` which can be used in conjunction with your configuration class. This interface has two methods that need to be defined:

1. `setUp` – trigged once when the PDF is installed via the new PDF Template Manager in Gravity PDF 4.1
1. `tearDown` – trigged once when the PDF is deleted via the new PDF Template Manager in Gravity PDF 4.1

These can be very useful to update PDF configuration settings when installed, and then clean up those modifications when deleted.

To use, update your PHP configuration class definition:

```{.language-php}
<?php

namespace GFPDF\Templates\Config;

use GFPDF\Helper\Helper_Interface_Config;
use GFPDF\Helper\Helper_Interface_Setup_TearDown;

...

class My_Super_Custom_Template implements Helper_Interface_Config, Helper_Interface_Setup_TearDown {

	/**
	 * Runs once when the template is initially installed
	 */
	public function setUp() {
                /* Include the code that should be run when this template is installed */
	}

	/**
	 * Runs once when the template is deleted
	 */
	public function tearDown() {
                /* Include the code that should be run when this template is deleted */	
	}

    public function configuration() {
            ...
    }
}
```

It's worth noting that you need to implement the `Helper_Interface_Setup_Teardown` interface AND both `setUp` and `tearDown` methods otherwise the correct method will NOT be run.

To create a PDF template `.zip` package for installation just zip up your PDF template file in the root of the zip archive. If you've created a configuration or image file include them in their correct directories (`config` or `images`).