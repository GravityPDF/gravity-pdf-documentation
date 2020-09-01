---
title: "gfpdf_get_settings"
sidebar_label: "gfpdf_get_settings"
description: "This filter can be used to dynamically change or add to the Gravity PDF global settings. This shouldn't be used as a permanent way to control the settings."
---

## Description 

This filter can be used to dynamically change or add to the Gravity PDF global settings. For a permanent way to set the global settings you should use the [`GPDFAPI::add_plugin_option()`](add_plugin_option.md) or [`GPDFAPI::update_plugin_option()`](update_plugin_option.md) methods instead. 

## Parameters 

### $settings | array
*  The Gravity PDF global settings
*  This shouldn't be confused with the individual PDF settings. 

### $is_temp | boolean
*  If this is `true` a user failed the settings validate/sanitise process and we are returning their saved state. 
*  It's highly unlikely you ever need to change the default settings when this is `true` and you should check for this in your filter.

## Usage 

This snippet shows you how to change the *logged out timeout* security setting. Before modifying the setting we're looking for a constant you conditionally defined at some stage (but you could use any temporary condition). 

```
add_action( 'gfpdf_get_settings', function( $settings, $is_temp ) {

	/**
	 * Only modify the default PDF settings when it's not currently in a validation state
	 * AND our special one-time PREFIX_SWITCH constant you defined when certain conditions are met
	 */
	if( false === $is_temp && defined( 'PREFIX_SWITCH' ) ) {

		/* Check the array item we want exists and then update */
		if( isset( $settings['logged_out_timeout'] ) ) {
			$settings['logged_out_timeout'] = '40';
		}
	}

	return $settings;

}, 10, 2 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Options::get_settings()` method of `/src/helper/abstract/Helper_Abstract_Options.php`.