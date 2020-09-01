---
title: "gfpdf_pdf_config"
sidebar_label: "gfpdf_pdf_config"
description: "This filter can be used to dynamically change or add to a form's PDF settings. This shouldn't be used as a permanent way to control the form's PDF settings."
---

## Description 

This filter can be used to dynamically change or add to a form's PDF settings. For a permanent way to set the PDF settings you should use the [`GPDFAPI::update_pdf()`](../api/update_pdf.md) method instead.

You also have the option to use the `gfpdf_pdf_config_$form_id` filter.

## Parameters 

### $settings | array
*  The current PDF settings being processed

## Usage 

This snippet shows you how you can easily update all your forms from a legacy v3 template to a v4 template, without having to manually change the settings in the UI.

```
add_action( 'gfpdf_pdf_config', function( $settings, $form_id ) {

	/* Change from the legacy v3 template to a v4 template */
	if( 'default-template' === $settings['template'] ) {
		$settings['template'] = 'zadani';
	}

	return $settings;

}, 10, 2 );
```

While the PDF master password setting has been removed from the UI, you can manually set this using the following snippet:

```
add_action( 'gfpdf_pdf_config', function( $settings, $form_id ) {

	/* When security is on we'll use our own master password instead of a random one */
	if( $settings['security'] === 'Yes' ) {
		$settings['master_password'] = 'my password'; /* change this to a secure password */
	}

	return $settings;

}, 10, 2 );
```

You can also specifically target a form: 

```
add_action( 'gfpdf_pdf_config_2', function( $settings ) { }, 10 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::get_pdf()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.