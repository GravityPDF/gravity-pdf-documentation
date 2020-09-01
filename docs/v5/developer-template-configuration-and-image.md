---
title: "Custom Template Configuration and Image Preview"
sidebar_label: "Template Configuration"
description: "Gravity PDF allows users to set template-specific options when they configure a Gravity Forms PDF. The template configuration is used to register settings that give the end user greater control over the PDF output. This is an optional feature."
---

## Introduction 

The template configuration file is *an optional* feature which allows you to [set template-specific options](user-setup-pdf.md#template-tab) for your custom template. You can also run commands when the template is installed or deleted [via the PDF Template Manager](user-pdf-template-manager.md) (work's great for installing custom fonts). 

## Template Configuration 

![Our Hello World Template File](https://resources.gravitypdf.com/uploads/2015/11/configuration.png)

The template configuration file is a file you create (or copy) and needs to be placed inside the `/config/` folder in the [PDF working directory](developer-first-custom-pdf.md#working-directory). 

### Configuration Naming Convention 

Your PHP configuration file needs to have the same name as your PDF template file. The directory structure will be as follows:

    +-- /PDF_EXTENDED_TEMPLATES/
    |   +-- hello-world.php
    |   +-- /config/
    |       +-- hello-world.php

### Configuration Mark-Up 

The structure of the PHP configuration file is very important; this will allow you to tell Gravity PDF what features your PDF supports. Below is the basic structure of the config file:

```
<?php

namespace GFPDF\Templates\Config;

use GFPDF\Helper\Helper_Interface_Config;
use GFPDF\Helper\Helper_Interface_Setup_TearDown;

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @package  GFPDF\Templates\Config
 */
class Hello_World implements Helper_Interface_Config, Helper_Interface_Setup_TearDown {

	/**
	 * Runs when the template is initially installed via the PDF Template Manager
	 *
	 * @Internal Great for installing custom fonts you've shipped with your template.
	 * @Internal Recommend creating the directory structure /install/Hello_World/ for bundled fonts
	 *
	 * @since    1.0
	 */
	public function setUp() {

	}

	/**
	 * Runs when the template is deleted via the PDF Template Manager
	 *
	 * @Internal Great for cleaning up any additional directories
	 *
	 * @since    1.0
	 */
	public function tearDown() {

	}

	/**
	 * Return the templates configuration structure which control what extra fields will be shown in the "Template" tab when configuring a form's PDF.
	 *
	 * @return array The array, split into core components and custom fields
	 *
	 * @since 1.0
	 */
	public function configuration() {
		return [
			/* Enable core fields */
			'core'   => [

			],

			/* Create custom fields to control the look and feel of a template */
			'fields' => [

			],
		];
	}
}
```

Once you have copied the above into your config file, you'll need to rename the class to match your file name. This will ensure it can be automatically loaded when your template is used. There are a few rules to keep in mind for the class name:

1.  The file extension is omitted (.php)
2.  Any hyphens (-) should be replaced with underscores (\_)
3.  The class name should be in sentence case (the first character of each word separated by an underscore (\_) should be upper case)

For instance, if you created a custom template called `business-letter.php` the class name should be `Business_Letter`:

```
class Business_Letter implements Helper_Interface_Config, Helper_Interface_Setup_TearDown {
```

### configuration() 

The `configuration()` method allows you to return an array which [defines the supported template settings](user-setup-pdf.md#template-tab). The array is split into two sub-keys: `core` and `fields`. The `core` key allows you to enable built-in fields like headers and footers, while the `fields` key allows you to implement your own fields using our settings API.

#### Core Fields 

Gravity PDF has a number of built-in template-specific fields you can easily enable. Some of them are only applicable when using the `$pdf->process_html_structure()` method (the main way Core templates generate their mark-up) in your custom template, while others can be included in your PDF automatically.

Below is a sample of the `configuration` method with a number of core fields enabled:

```
public function configuration() {

    return [

        /* Enable core fields */
        'core' => [
            'show_form_title'      => true, /* requires $pdf->process_html_structure() */
            'show_page_names'      => true, /* requires $pdf->process_html_structure() */
            'show_html'            => true, /* requires $pdf->process_html_structure() */
            'show_section_content' => true, /* requires $pdf->process_html_structure() */
            'enable_conditional'   => true, /* requires $pdf->process_html_structure() */
            'header'               => true, /* Added automatically to any template */
            'footer'               => true, /* Added automatically to any template */
        ],
    ];
}
```

Below are details of all the core fields available to you:

##### show\_form\_title 
* Adds a Yes/No field to the template section asking users if they want to shows the Gravity Form title at the beginning of the PDF template.
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template. Although you can add your own field logic based on this setting. [See custom field support for more details](developer-template-configuration-and-image.md#custom-field-support).

##### show\_page\_names 
* Adds a Yes/No field to the template section asking users if they want to show Gravity Form page names in the appropriate location within the PDF.
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

##### show\_html 
* Adds a Yes/No field to the template section asking users if they want to show Gravity Form HTML fields in the PDF.
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

##### show\_section\_content 
* Adds a Yes/No field to the template section asking users if they want to show Section break content in the PDF.
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

##### enable\_conditional 
* Adds a Yes/No field to the template section asking users if they want to enable conditional logic in the PDF
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

##### show\_empty 
* Adds a Yes/No field to the template section asking users if they want to show fields that haven't been filled in by the user.
* Only applicable when template is using `$pdf->process_html_structure()` in your PDF template.

##### header 
* Adds a Rich Text Editor to the template section allowing users to include information in the header of the PDF
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own header, the core header will automatically be included in your PDF.

##### first\_header 
* Adds a Rich Text Editor to the template section allowing users to include information in a header on the first page of the PDF
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own header, the core header will automatically be included in your PDF.

##### footer 
* Adds a Rich Text Editor to the template section allowing users to include information in the footer of the PDF
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own footer, the core footer will automatically be included in your PDF.

##### first\_footer 
* Adds a Rich Text Editor to the template section allowing users to include information in a footer on the first page of the PDF
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own footer, the core footer will automatically be included in your PDF.

##### background\_color 
* Adds a colour picker to the template section allowing users to change the PDF background colour.
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own background(-color), the background colour will automatically be included in your PDF.

##### background\_image 
* Adds an upload box to the template section allowing users to upload and select a background image for the PDF
* [Unless you use `@page`](developer-pagebreaks.md#at-page) to set your own background(-image), the background image will automatically be included in your PDF.

#### Custom Fields 

Adding your own custom fields is where this feature gets really powerful. Using the `fields` sub-key you can define text, paragraph, rich text, radio buttons, select boxes, colour pickers or upload fields with a few lines of code:

```
public function configuration() {
    return [
        /* Enable core fields */
        'core'   => [

        ],

        /* Create custom fields to control the look and feel of a template */
        'fields' => [
            'prefix_descriptive_text' => [
                'id'    => 'prefix_descriptive_text',
                'type'  => 'descriptive_text',
                'desc'  => '<h4 class="section-title">' . esc_html__( 'Description', 'gravity-forms-pdf-extended' ) . '</h4>',
                'class' => 'gfpdf-no-padding',
            ],

            'prefix_my_custom_text' => [
                'id'         => 'prefix_my_custom_text',
                'name'       => esc_html__( 'Text', 'gravity-forms-pdf-extended' ),
                'type'       => 'text',
                'desc'       => esc_html__( 'This is my field description', 'gravity-forms-pdf-extended' ),
                'inputClass' => 'merge-tag-support mt-hide_all_fields', /* add merge tag support */
            ],

            'prefix_my_custom_number' => [
                'id'   => 'prefix_my_custom_number',
                'name' => esc_html__( 'Number', 'gravity-forms-pdf-extended' ),
                'type' => 'number',
            ],

            'prefix_my_custom_password' => [
                'id'   => 'prefix_my_custom_password',
                'name' => esc_html__( 'Password', 'gravity-forms-pdf-extended' ),
                'type' => 'password',
            ],

            'prefix_my_custom_textarea' => [
                'id'         => 'prefix_my_custom_textarea',
                'name'       => esc_html__( 'Textarea', 'gravity-forms-pdf-extended' ),
                'type'       => 'textarea',
                'size'       => 12, /* control the default height of the editor */
                'inputClass' => 'merge-tag-support mt-hide_all_fields', /* enable merge tag support */
            ],

            'prefix_my_custom_rich_editor' => [
                'id'         => 'prefix_my_custom_rich_editor',
                'name'       => esc_html__( 'Rich Editor', 'gravity-forms-pdf-extended' ),
                'type'       => 'rich_editor',
                'size'       => 12, /* control the default height of the editor */
                'inputClass' => 'merge-tag-support mt-wp_editor mt-manual_position mt-position-right mt-hide_all_fields', /* enable merge tag support */
            ],

            'prefix_my_custom_select' => [
                'id'      => 'prefix_my_custom_select',
                'name'    => esc_html__( 'Select', 'gravity-forms-pdf-extended' ),
                'type'    => 'select',
                'options' => [
                    'Value 1' => 'Option 1',
                    'Value 2' => 'Option 2',
                    'Value 3' => 'Option 3',
                    'Value 4' => 'Option 4',
                ],
                'chosen'  => true, /* Enable advanced drop down selector */
            ],

            'prefix_my_custom_checkbox' => [
                'id'     => 'prefix_my_custom_checkbox',
                'name'   => esc_html__( 'Checkbox', 'gravity-forms-pdf-extended' ),
                'type'   => 'checkbox',
                'desc'   =>  esc_html__( 'The checkbox label', 'gravity-forms-pdf-extended' ),
            ],

            'prefix_my_custom_multicheck' => [
                'id'      => 'prefix_my_custom_multicheck',
                'name'    => esc_html__( 'Multple Checkboxes', 'gravity-forms-pdf-extended' ),
                'type'    => 'multicheck',
                'options' => [
                    'Value 1' => 'Option 1',
                    'Value 2' => 'Option 2',
                    'Value 3' => 'Option 3',
                    'Value 4' => 'Option 4',
                ],
            ],

            'prefix_my_custom_radio' => [
                'id'      => 'prefix_my_custom_radio',
                'name'    => 'Radio',
                'desc'    => 'This is my field description',
                'type'    => 'radio',
                'options' => [
                    'Yes' => __( 'Yes', 'gravity-forms-pdf-extended' ),
                    'No'  => __( 'No', 'gravity-forms-pdf-extended' ),
                ],
                'std'     => 'No',
            ],

            'prefix_border_colour' => [
                'id'   => 'prefix_border_colour',
                'name' => __( 'Colour', 'gravity-forms-pdf-extended' ),
                'type' => 'color',
                'desc' => __( 'Control the colour of the field border.', 'gravity-forms-pdf-extended' ),
                'std'  => '#CCCCCC',
            ],
        ],
    ];
}
```

**It's important to use a unique name for the ID (we recommend prefixing them) and ensure your ID and field array key match.**

Below are details about the most common field attributes that can be used when defining custom template fields:

##### id 
* The field ID. This should be unique and we recommend prefixing it.

##### name 
* The field label displayed to the user.

##### type 
* The field type. Acceptable values include: `text`, `number`, `checkbox`, `multicheck`, `radio`, `select`, `textarea`, `password`, `rich_editor`, `upload`, `color`, `descriptive_text`.

##### desc 
* The field description. This will be displayed right below the field.

##### options 
* An array of options for use in `multicheck`, `radio`, `select`.

##### std 
* The standard value that should be defined when a user hasn't set anything.

##### inputClass 
* Add class name to field.

Because only certain options apply to certain fields this isn't an exhaustive list of available attributes, but they are the most common. For additional examples, [review the `/src/helper/Helper_Options_Fields.php` file](https://github.com/GravityPDF/gravity-pdf/blob/development/src/helper/Helper_Options_Fields.php).

### Custom Field Support 

The `header`, `first_header`, `footer`, `first_footer`, `background_color` and `background_image` core fields are automatically supported in custom PDF templates (provided you don't override them with your own header/footer or background [using `@page`](developer-pagebreaks.md#at-page)). However, all custom fields will need appropriate logic included in your PDF template.

To do this, you'll have to access a variable named `$settings` in the PDF template. This variable is an array that contains all the settings a user has defined (using the field ID as the array key) and is where your template settings will be located.

#### Accessing Custom Fields in Template 

[If you added all the custom fields listed above](#custom-fields) to your configuration file, you could access each in your template file with the following code:

```
$gform = GPDFAPI::get_form_class();

$text        = isset( $settings['prefix_text'] ) ? $settings['prefix_text'] : '';
$number      = isset( $settings['prefix_number'] ) ? $settings['prefix_number'] : '';
$password    = isset( $settings['prefix_password'] ) ? $settings['prefix_password'] : '';
$textarea    = isset( $settings['prefix_textarea'] ) ? wpautop( $settings['prefix_textarea'] ) : ''; /* format the text */
$rich_editor = isset( $settings['prefix_rich_editor'] ) ? wpautop( wp_kses_post( $gform->process_tags( $settings['prefix_rich_editor'], $form, $entry ) ) ) : ''; /* for security, pre-process the merge tags, run through default post HTML filters, then format. Delete `wpautop` if required. */
$select      = isset( $settings['prefix_select'] ) ? $settings['prefix_select'] : '';
$checkbox    = isset( $settings['prefix_checkbox'] ) ? true : false;
$multicheck  = isset( $settings['prefix_multicheck'] ) ? $settings['prefix_multicheck'] : [];
$radio       = isset( $settings['prefix_radio'] ) ? $settings['prefix_radio'] : '';
$color       = isset( $settings['prefix_color'] ) ? $settings['prefix_color'] : '#000'; /* default to black when doesn't exist */

?>

<p><?= $text ?></p>

<p><?= $number ?></p>

<p><?= $password ?></p>

<?= $textarea ?>

<?= $rich_editor ?>

<p><?= $select ?></p>

<p><?= $checkbox ? 'Enabled' : 'Disabled' ?></p>

<p><?= implode( ', ', array_filter( $multicheck ) ) ?></p>

<p><?= $radio ?></p>

<p><?= $color ?></p>

```

### setUp() and tearDown() 

The `setUp()` method will be triggered when your template is [installed via the PDF Template Manager](user-pdf-template-manager.md#install) ([see how to zip up your template for installation](install-template-via-template-manager.md)). While the `tearDown()` method is triggered when [deleted via the PDF Template Manager](user-pdf-template-manager.md#delete). 

We like to use these methods to automatically install custom fonts (`setUp()`), and then clean-up additional template-related files when deleted (`tearDown()`).

:::info
The *Delete* function of the PDF Template Manager will only delete the template file, the configuration file and the template image. Any additional files included will not be removed automatically.
::: 

If you need to include additional files with your template, we recommend saving them to `/install/Template_Name/` (substitute `Template_Name`). This will make it easy for you to clean-up when writing `tearDown()`. 

Below is a sample showing you how you can auto-install a font and clean-up your template's files on delete. This assumes you've created the directory structure `/install/Hello_World/font-fira-sans/` in your [PDF working directory](developer-first-custom-pdf.md#working-directory) and have the listed fonts included.

```
 <?php

namespace GFPDF\Templates\Config;

use GFPDF\Helper\Helper_Interface_Config;
use GFPDF\Helper\Helper_Interface_Setup_TearDown;

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Hello_World
 *
 * @package  GFPDF\Templates\Config
 */
class Hello_World implements Helper_Interface_Config, Helper_Interface_Setup_TearDown {

	/**
	 * Runs when the template is initially installed via the PDF Template Manager
	 *
	 * @Internal Great for installing custom fonts you've shipped with your template.
	 * @Internal Recommend creating the directory structure /install/Hello_World/ for bundled fonts
	 *
	 * @since    1.0
	 */
	public function setUp() {
		$font_data = [
			'font_name'   => 'Fira Sans',
			'regular'     => __DIR__ . '/../install/Hello_World/font-fira-sans/FiraSans-Regular.ttf',
			'italics'     => __DIR__ . '/../install/Hello_World/font-fira-sans/FiraSans-Italic.ttf',
			'bold'        => __DIR__ . '/../install/Hello_World/font-fira-sans/FiraSans-SemiBold.ttf',
			'bolditalics' => __DIR__ . '/../install/Hello_World/font-fira-sans/FiraSans-SemiBoldItalic.ttf',
		];

		\GPDFAPI::add_pdf_font( $font_data );
	}

	/**
	 * Runs when the template is deleted via the PDF Template Manager
	 *
	 * @Internal Great for cleaning up any additional directories
	 *
	 * @since    1.0
	 */
	public function tearDown() {
		$misc = \GPDFAPI::get_misc_class();

		/* Cleanup files */
		$misc->rmdir( __DIR__ . '/../install/Hello_World' );
	}

	/**
	 * Return the templates configuration structure which control what extra fields will be shown in the "Template" tab when configuring a form's PDF.
	 *
	 * @return array The array, split into core components and custom fields
	 *
	 * @since 1.0
	 */
	public function configuration() {
		return [
			/* Enable core fields */
			'core'   => [

			],

			/* Create custom fields to control the look and feel of a template */
			'fields' => [

			],
		];
	}
}
```

## Template Tutorial – Part 4 

![Our Hello World template fields](https://resources.gravitypdf.com/uploads/2015/11/hello-world-configuration.png)

Continuing on from our [Part 3 Hello World Tutorial](developer-php-form-data-array.md#template-tutorial), we're going to show you how to create a template configuration with core footer and background image support enabled. We'll also add a new field that will determine if meta data should be included in the document.

### Template Configuration 

First, let's [grab a copy of the basic PDF template PHP mark-up](https://gist.github.com/jakejackson1/903c607beab274619ab19f508d65ce74) and save it in the `config` folder of our [PDF working directory](developer-first-custom-pdf.md#working-directory). Remember to save the file as `hello-world.php` – the same name we used for our template file. This sample code already has the class name changed to `Hello_World`, but you would normally update this to match your template's file name.

The only area we'll be focusing on is the empty array being returned in the `configuration` method. We'll need to update this to include our two core fields and create our custom field. Let's do the core fields first:

```
public function configuration() {
		return [
			/* Enable core fields */
			'core'   => [
				'footer'           => true,
				'background_image' => true,
			],
	
			/* Create custom fields to control the look and feel of a template */
			'fields' => [
	
			],
		];
	}
```

The [core fields can easily be enabled](#core-fields) by passing their name as the array key with a `true` value.

We've just told the system we want to enable the footer field and our background image field. If you edit your Hello World PDF settings in WordPress, [you'll see a new Template tab](user-setup-pdf.md#template-tab) with our two core fields included. The system will automatically parse and store these fields when the PDF settings are saved.

Including a custom field is a little trickier, but we're just defining array key/value pairs that tell Gravity PDF how to display a field:

```
public function configuration() {
    return [
        /* Enable core fields */
        'core'   => [
            'footer'           => true,
            'background_image' => true,
        ],

        /* Create custom fields to control the look and feel of a template */
        'fields' => [
            'world_show_meta_data' => [
                'id'      => 'world_show_meta_data',
                'name'    => __( 'Show Meta Data', 'world-pdf-template' ),
                'desc'    => __( 'When enabled the user IP, timestamp, user agent and source URL will be included in the PDF.', 'world-pdf-template' ),
                'type'    => 'radio',
                'options' => [
                    'Yes' => __( 'Yes', 'world-pdf-template' ),
                    'No'  => __( 'No', 'world-pdf-template' ),
                ],
                'std'     => 'No',
            ],
        ],
    ];
}
```

We've just told Gravity PDF about a new radio field called *Show Meta Data* that has Yes/No options. By default the *No* value will be selected and a nice description about what the field does is shown just below the radio buttons. We've also prefixed our field ID with `world_` so we don't clash with any other fields. And because we are conscientious developers we've made all our strings translatable by wrapping them [in the `__()` function](https://developer.wordpress.org/reference/functions/__/). Make sure you only translate the `option` array *values*, and not the keys.

[Read more about the specifics of each field attribute](#custom-fields).

If you go back to the [Template tab](user-setup-pdf.md#template-tab) you'll now see our two core fields and the *Show Meta Data* field. Go ahead and enable/fill in information for each field then save it.

[Download the completed configuration template for our Hello World PDF](https://gist.github.com/jakejackson1/0115bf12f6303e2e400799fc3080245c).

### PDF Custom Field Support 

Now we're capturing and saving the footer, background image and meta data toggle from the user we need to update our original *Hello World* PDF template. The core header/footer and background image fields will automatically be included, but we'll need to update the PDF template to support our custom field.

If you haven't been following along with the other tutorials you can [download the current PDF template here](https://gist.github.com/jakejackson1/c7dea5d0953374970f71).

[If you remember from earlier](#template-field-support) the `$settings` array holds all our custom fields and is where we'll find the meta data setting. To keep our PDF template clean we'll set the settings variables at the beginning of the template (before the HTML).

```
/* Prevent direct access to the template (always good to include this) */
if ( ! class_exists( 'GFForms' ) ) {
	return;
}

/**
 * Load our template-specific settings
 */
$show_meta_data = ! empty( $settings['world_show_meta_data'] ) ? $settings['world_show_meta_data'] : 'No';

/**
 * Include your PHP variables in this section
 */

?>
```

Here we are checking if our our *Show Meta Data* field exists in the settings array before assigning it to the `$show_meta_data` variable. If it doesn't, we'll default to *No*.

Now we can do a simple *IF* statement in the body of our template and output the meta data required. We'll add the condition to the statement to the end of our template:

```
<?php if ( $location === 'Titan' ): ?>
    <p>Titan's colony is only recently established. You're one of only 500 people currently living there!</p>
<?php endif; ?>     

<?php if ( $show_meta_data === 'Yes' ): ?>
    <p>
        <strong>User IP:</strong> <?php echo $form_data['misc']['ip']; ?><br>
        <strong>Submission Timestamp:</strong> <?php echo $form_data['misc']['date_time']; ?><br>
        <strong>User Agent:</strong> <?php echo $form_data['misc']['user_agent']; ?><br>
        <strong>Source URL:</strong> <?php echo $form_data['misc']['source_url']; ?>
    </p>
<?php endif; ?>
```

If you've enabled the *View Meta Data* option, when you view the *Hello World* PDF you'll see the meta data included.

[Download the completed Hello World PDF Template for Part 4](https://gist.github.com/jakejackson1/49ec98ddbb0dd64d42ae).
