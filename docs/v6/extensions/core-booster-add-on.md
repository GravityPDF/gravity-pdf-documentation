---
title: "Core Booster Plugin Documentation: How to Install and Configure"
sidebar_label: "Core Booster"
description: "Core Booster adds useful display options – like showing all choices and field selection – to Core and Universal templates for Gravity PDF."
---

![](https://resources.gravitypdf.com/uploads/edd/2017/06/cover-artwork-2.png)

*Core Booster* is a premium plugin for Gravity PDF that adds a number of new settings to control the look and feel of Core and Universal templates. *Core templates* are the free designs that [ship with Gravity PDF Core](https://wordpress.org/plugins/gravity-forms-pdf-extended/). Universal templates are the [premium designs available for purchase from the Template Shop](https://gravitypdf.com/store/#universal).

You can [purchase the Core Booster plugin from the Extension Shop](https://gravitypdf.com/shop/core-booster-add-on/). This guide will walk you through installing and configuring *Core Booster* to its full potential.

:::info
This documentation refers to version 2 of the Gravity PDF Core Booster add-on. [The v1 documentation can be found here](../../v5/shop-plugin-core-booster-add-on.md).
:::

## Installation

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Configuring

Once the plugin is activated, you'll find new settings [in the _Template_ section](../users/setup-pdf.md#template-section) when you create or edit a PDF [configured with a Core or Universal template](https://docs.gravitypdf.com/v6/users/setup-pdf#template). The following section details what each setting does: Refer to the sections below for information on what each setting does:

* [Page Margin](#page-margin)
* [Filter Fields](#filter-fields)
* [Field Label Display](#field-label-display)
* [Field Choices](#field-choices)
* [Field Choices Layout](#field-choices-layout)
* [Field Choices Display](#field-choices-display)
* [Field Description](#field-description)
* [Pricing Fields](#pricing-fields)
* [Entry Notes](#entry-notes)

### Page Margins

Adjust the gap between the page edge and the main content area. The page margin format follows the [CSS shorthand convention](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties), allowing you to specify the margin for each side of the page. 

The CSS shorthand rules are:

* If one value (e.g. `10mm` or `1in`), it is used for all four sides
* If two values (e.g. `10mm 5mm` or `1in 0.5in`), the first is used on top and bottom margins, and the second for the left and right.
* If three values (e.g. `10mm 5mm 20mm` or `1in 0.5in 1.5in`), the first is the top margin, the second is the left and right, and the third the bottom.
* If four values (e.g. `10mm 5mm 20mm 15mm` or `1in 0.5in 1.5in 0.7in`), the first is the top, the second the right, the third the bottom, and fourth the left.

When defining a margin, the following units are supported:

* Millimeters: `mm`
* Centimeters: `cm` 
* Inches: `in`
* Percentage: `%`
* Pixels: `px`

:::note
The top/bottom margins are automatically increased if you include a header or footer that would overlap the main body content.
:::

### Filter Fields

When enabled, you can control exactly which fields are included or excluded in the PDF. This allows you to configure multiple PDFs on the same form, with different fields in each document. The [rudimentary "exclude" CSS class](../users/hide-form-fields.md) is ignored when this setting is enabled. When disabled (the default), all form fields will be displayed in the PDF (unless another setting excludes specific fields e.g. [Enable Conditional Logic](../users/setup-pdf.md#enable-conditional-logic)).

When turned on, included fields are displayed in the order shown [in the Form Editor](https://docs.gravityforms.com/form-editor/) – you cannot re-order them independently.

If you'd like to control which HTML fields are included, first [enable the Show HTML Fields setting]](../users/setup-pdf.md#show-html-fields). To filter pricing fields, [set the Pricing Fields setting to Display Individually](#pricing-fields) (it's not possible to filter these fields in the summary table).

### Field Label Display

This setting allows you to control what label will be displayed for fields in the PDF. You have four choices available:

1. Field Label: All fields will use the value set in the Field Label setting, which is found under a field's _General_ section in the Form Editor. 
2. Admin Label: All fields will use the value set in the Admin Field Label setting, which is found under a field's _Advanced_ section in the Form Editor.
3. Admin Label (if not empty): If it has been set, a field's Admin Field Label will be display. Otherwise, the standard Field Label is used.
4. No Label: This option disables all field labels in the PDF, and only the field value is included.

### Field Choices

By default, Gravity PDF only displays the user-selected choices for Radio, Checkbox, Select, and Multiselect fields in Core and Universal templates. When enabled, this setting will display all available field choices for specific fields, and check the choices a user has selected when they completed the form.

If a user has selected a choice, it will show up as a crossed ballot box ☒. If it has not been selected an empty ballot box is displayed ☐. All choices are shown in a list/block format by default, but you can use the [_Field Choices Layout_ setting](#field-choices-layout) to display them inline.

You can override this setting for individual fields by adding  `show_all_options` or `hide_all_options` to the Custom CSS Class setting (under the _Advanced_ section) in the Form Editor.

:::note
If you display [_Pricing Fields individually_](#pricing-fields), those that support choices are compatible with this feature.  
:::

### Field Choices Layout

If you have enabled [_Field Choices_](#field-choices), this setting will be available to control how all the choices will be presented in the PDF. You can choose to display each choice on a new line (Block), or include them side-by-side (Inline).

When using the Block layout, and a field isn't included in a Drag and Drop columns (or using Formium, Colossus, or Cellulose templates), you can also [display choices in a 2 to 5 column list](https://docs.gravityforms.com/css-ready-classes/#h-list-classes). This may produce a more uniform layout than the _Inline_ setting.

You can override this setting for individual fields by adding  `gf_list_inline` or `gf_list_block` to the Custom CSS Class setting (under the _Advanced_ section) in the Form Editor.

### Field Choices Display

Gravity PDF defaults to displaying the choices label for Radio, Checkbox, Select, and Multiselect fields. This setting allows you to display the choice value instead. 

If you'd like relevant pricing fields to use the choice value, you need to [set the Pricing Fields setting to Display Individually](#pricing-fields).

### Field Description

When enabled, each field Description – found under the _General_ section in the Form Editor – will be displayed alongside the label and value. The description position is [determined by your Form Settings](https://docs.gravityforms.com/form-settings/#h-form-layout), and can be placed above or below the user's response in the PDF.

### Pricing Fields

Pricing fields are all fields shown [under the _Pricing Fields_ section in the Form Editor](https://docs.gravityforms.com/form-fields/#pricing-fields). This includes _Product_, _Option_, _Quantity_, and _Shipping_ field types. 

In the PDF, the default layout for Pricing fields is to group them together at the end of the document in a Summary/Order table, similar to how they are displayed [on Entry Details](https://docs.gravityforms.com/entry-detail/). This setting allows you to alter this behaviour and display all Pricing fields individually, in the order they appear in the Form Editor. When shown individually, pricing fields can be affected by the [_Filter Fields_](#filter-fields) and [_Field Choices_](#field-choices) settings.

For convenience, the _Remove Fields_ option is an easy shortcut to remove all Pricing fields from the PDF.

### Entry Notes

[Every entry has a notes section](https://docs.gravityforms.com/entry-detail/#h-entry-notes) to keep important, related information with each submission. When this feature is enabled, your Gravity PDF Core or Universal template will include these notes at the end of the document. 

## Translations

The *Core Booster* plugin supports the following languages out of the box:

* English
* French
* Spanish
* German
* Chinese
* Dutch
* Portuguese
* Russian

If you'd like to translate the plugin into your own language, or change an existing translations, [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/). **Note**: the text domain for _Core Booster_ is `gravity-pdf-core-booster`.

:::info
All translations have been generated with AI / machine learning. If a translation is incorrect, [please submit a ticket and let us know](https://gravitypdf.com/support/#contact-support) (select _Other_ for the enquiry type).
:::

## Upgrade from v1

Provided you are running Gravity PDF (Core) 6.0 or higher, you'll have a seamless upgrade experience to _Core Booster_ v2. Besides the new features, the important changes include:

1. The minimum support version of Gravity PDF has been increased to 6.0 or higher. 
2. The labels/descriptions for existing settings have been updated to better reflect what they do. This is purely presentational, and doesn't change how those features work in your PDFs.
3. The `gf_inline_list` CSS class is now natively supported when the current field is [displaying all field choices](#field-choices). If you'd like to continue showing your choices inline in your form, but as a list in the PDF, you can add an additional CSS class `gf_inline_block` to the field.

## Developers

### Custom Templates

You can take advantage of the Core Booster PDF settings [in your custom template](https://docs.gravitypdf.com/v6/developers/first-custom-pdf) by doing the following:

1. In the Header section of your custom template, include the `core-booster-supported` tag:

```
<?php
    /**
     * Template Name: My Custom Template
     * Version: 0.1
     * Description: A custom template that makes use of the Core Booster settings
     * Group: Dunder Mifflin Paper Co.
     * Required PDF Version: 6.0
     * Tags: core-booster-supported
     */
```

If you already have tags in your template, add a comma and then the tag (the position in the list doesn't matter). 

2. Your custom template must call `$pdf->process_html_structure()` at some point in the file:

```
<?php 

/*
 * Load our core-specific styles from our PDF settings which will be passed to the PDF template $config array
 */
$show_form_title      = ( $settings['show_form_title'] ?? '' ) === 'Yes';
$show_page_names      = ( $settings['show_page_names'] ?? '' ) === 'Yes';
$show_html            = ( $settings['show_html'] ?? '' ) === 'Yes';
$show_section_content = ( $settings['show_section_content'] ?? '' ) === 'Yes';
$enable_conditional   = ( $settings['enable_conditional'] ?? '' ) === 'Yes';
$show_empty           = ( $settings['show_empty'] ?? '' ) === 'Yes';

/**
 * Set up our configuration array to control what is and is not shown in the generated PDF
 *
 * @var array
 */
$html_config = [
	'settings' => $settings,
	'meta'     => [
		'echo'                     => true, /* whether to output the HTML or return it */
		'exclude'                  => true, /* whether we should exclude fields with a CSS value of 'exclude'. Default to true */
		'empty'                    => $show_empty, /* whether to show empty fields or not. Default is false */
		'conditional'              => $enable_conditional, /* whether we should skip fields hidden with conditional logic. Default to true. */
		'show_title'               => $show_form_title, /* whether we should show the form title. Default to true */
		'section_content'          => $show_section_content, /* whether we should include a section breaks content. Default to false */
		'page_names'               => $show_page_names, /* whether we should show the form's page names. Default to false */
		'html_field'               => $show_html, /* whether we should show the form's html fields. Default to false */
		'individual_products'      => false, /* Whether to show individual fields in the entry. Default to false - they are grouped together at the end of the form */
		'enable_css_ready_classes' => true, /* Whether to enable or disable Gravity Forms CSS Ready Class support in your PDF */
	],
];

/*
 * Generate our HTML markup
 *
 * You can access Gravity PDFs common functions and classes through our API wrapper class "GPDFAPI"
 */
$pdf = GPDFAPI::get_pdf_class();
$pdf->process_html_structure( $entry, GPDFAPI::get_pdf_class( 'model' ), $html_config );
```

### Hooks

#### PHP

##### gfpdf_description_spacer

When displaying a [field description](#field-description), the default behaviour is to include a spacer/divider between the description and the content. This filter allows you to change what that spacer is:

```
add_filter( 'gfpdf_description_spacer', function( $spacer, $field, $entry, $form ) {
  return '<div class="gfpdf_description_spacer">––––––</div>';
}, 10, 4 ); 
```

Or remove the spacer altogether:

```
add_filter( 'gfpdf_description_spacer', '__return_empty_string' ); 
```
