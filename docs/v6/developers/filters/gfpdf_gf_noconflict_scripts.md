---
title: "gfpdf_gf_noconflict_scripts"
sidebar_label: "gfpdf_gf_noconflict_scripts"
description: "When Gravity Forms is in No-Conflict mode, along with enqueuing JS you also need to specifically register scripts with Gravity Forms."
---

## Description 

When Gravity Forms is in [No-Conflict mode](https://docs.gravityforms.com/enabling-no-conflict-mode/), along with [enqueuing JS](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) using `wp_enqueue_script()` you also need to specifically register scripts so they are loaded on Gravity Forms pages. 

We've ensured any enqueued scripts with a handle beginning with "gfpdf_js" are automatically registered, but you may need to register other WordPress scripts. This filter allows you to easily register a WordPress JS handler, so it's included on No Conflict Gravity Form pages. 

## Parameters 

### $items | array
*  The list of JS handlers currently being registered with Gravity Form's No-Conflict mode. 
*  By default, any JS handler beginning with "gfpdf_js", and already enqueued, are registered on Gravity Forms pages. The following WordPress scripts are also registered on *Gravity PDF pages*:

```language-php
$default_scripts = array(
	'editor',
	'word-count',
	'quicktags',
	'wpdialogs-popup',
	'media-upload',
	'wplink',
	'backbone',
	'underscore',
	'media-editor',
	'media-models',
	'media-views',
	'plupload',
	'plupload-flash',
	'plupload-html4',
	'plupload-html5',
	'plupload-silverlight',
	'wp-plupload',
	'gform_placeholder',
	'jquery-ui-autocomplete',
	'thickbox',
);
```

## Usage 

This example will register two core WordPress JS files with Gravity Forms No-Conflict mode.

```language-php
add_filter( 'gfpdf_gf_noconflict_scripts', function( $items ) {

	/**
	 * Register the jQuery Effects Core and jQuery Effects Fade JS with
	 * Gravity Forms No-Conflict Mode.
	 *
	 * Note: You still need to call wp_enqueue_script( 'jquery-effects-core' );
	 */
	$items[] = 'jquery-effects-core';
	$items[] = 'jquery-effects-fade';

	return $items;
} );
```

## Source Code 

This filter is located in the `Router::auto_noconflict_scripts()` method of `/src/bootstrap.php`.