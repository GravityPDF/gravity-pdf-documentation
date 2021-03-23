---
title: "gfpdf_fully_loaded"
sidebar_label: "gfpdf_fully_loaded"
description: "This action is run right after Gravity PDF has fully loaded (which happens on the after_setup_theme hook)."
---

## Description 

This action is run right after Gravity PDF has fully loaded (which happens on the `after_setup_theme` hook after all the plugin checks have passed). If you want to create a plugin to enhance Gravity PDF, we recommend using this action to initialise. 

## Parameters 

### $gfpdf | object
*  The initialised `\GFPDF\Router` class which holds all our helper classes (like `$options`, `$data`, `$misc` ect). 

## Usage 

The snippet below shows you how to use this filter to initialise your plugin. The code assumes you've created and included a class called `Prefix_Custom_Gravity_PDF_Plugin`, which has an `init` method. You'll want to change this to suit your plugin's structure.

```
add_action( 'gfpdf_fully_loaded', 'prefix_intialise_custom_plugin' );

/**
 * We haven't used a closure like in all the other examples because your plugin could initially be run on PHP 5.2.
 * However, the `gfpdf_fully_loaded` action doesn't fire if the Gravity PDF minimum requirements are not met
 * so if you create your Prefix_Custom_Gravity_PDF_Plugin class in a separate file and include it during this hook (or use an autoloader) you can happily
 * use PHP 5.4 code without causing any problems.
 */
function prefix_intialise_custom_plugin( $gfpdf ) {
	/* Initialise your plugin here */
	require_once( __DIR__ . '/Prefix_Custom_Gravity_PDF_Plugin.php' );
	$prefix_custom_plugin = new Prefix_Custom_Gravity_PDF_Plugin();
	$prefix_custom_plugin->init();
}
```

## Source Code 

This action is located in the `Router::init()` method of `/src/bootstrap.php`.