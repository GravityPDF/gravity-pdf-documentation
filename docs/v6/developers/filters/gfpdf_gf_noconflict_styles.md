---
title: "gfpdf_gf_noconflict_styles"
sidebar_label: "gfpdf_gf_noconflict_styles"
description: "When Gravity Forms is in No-Conflict mode, along with enqueuing CSS you also need to specifically register styles with Gravity Forms."
---

## Description 

When Gravity Forms is in [No-Conflict mode](https://docs.gravityforms.com/enabling-no-conflict-mode/), along with [enqueuing CSS](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) using `wp_enqueue_style()` you also need to specifically register styles so they are loaded on Gravity Forms pages. 

We've ensured any enqueued styles with a handle beginning with `gfpdf_css` are automatically registered, but you may need to register other WordPress styles. This filter allows you to easily register a WordPress CSS handler, so it's included on No Conflict Gravity Form pages. 

## Parameters 

### $items | array
*  The list of CSS handler currently being registered with Gravity Form's No-Conflict mode. 
*  By default, any CSS handler beginning with `gfpdf_css`, and already enqueued, are registered on Gravity Forms pages. The following WordPress styles are also registered on *Gravity PDF pages*:

```language-php
$default_styles = array(
	'editor-buttons',
	'wp-jquery-ui-dialog',
	'media-views',
	'buttons',
	'thickbox',
);
```

## Usage 

This example will register a core WordPress CSS file with Gravity Forms No-Conflict mode.

```language-php
add_filter( 'gfpdf_gf_noconflict_styles', function( $items ) {

	/**
	 * Register the WP Color Picker styles with
	 * Gravity Forms No-Conflict Mode.
	 *
	 * Note: You still need to call wp_enqueue_style( 'wp-color-picker' );
	 */
	$items[] = 'wp-color-picker';

	return $items;
} );
```

## Source Code 

This filter is located in the `Router::auto_noconflict_styles()` method of `/src/bootstrap.php`.