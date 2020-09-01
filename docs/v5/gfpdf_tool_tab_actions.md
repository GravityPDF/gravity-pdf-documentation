---
title: "gfpdf_tool_tab_actions"
sidebar_label: "gfpdf_tool_tab_actions"
description: "This action should be used in conjunction with the gfpdf_settings_tools filter to add new functionality to Gravity PDF"
---

## Description 

This action should be used in conjunction [with the `gfpdf_settings_tools` filter](gfpdf_settings_tools.md) to add new functionality to Gravity PDF. While the `gfpdf_settings_tools` filter adds the new button to the admin area, the `gfpdf_tool_tab_actions` does all the actual validation and processing. 

## Parameters 

### $settings | array
*  An associative array which contains the Tool tab form `$_POST['gfpdf_settings']` data. Use this to check if a user clicked on a specific action.

## Usage 

The following snippet shows you how to correctly process a button called `prefix_flush_logs`, which we've assumed was included in the Tools tab [using the `gfpdf_settings_tools` filter](gfpdf_settings_tools.md).

Note: it's **very important** you don't skip on the nonce verification! 

```
add_action( 'gfpdf_tool_tab_actions', function( $settings ) {

	/**
	 * Check if our tools action button was clicked and if we have a valid nonce
	 * At this stage a user has already had their capabilities checked (they must have the "gravityforms_edit_setting" capability)
	 * so there's no need to do that test.
	 */
	if ( isset( $settings['prefix_flush_logs']['name'] ) && isset( $settings['prefix_flush_logs']['nonce'] ) ) {

		/* Get our notice and logging class for later use */
		$logs    = GPDFAPI::get_log_class();
		$notices = GPDFAPI::get_notice_class();

		/**
		 * Verify the nonce
		 *
		 * We automatically set an nonce for this field using the name "gfpdf_settings[{:field_id}]"
		 * For instance, our 'prefix_flush_logs' field should have its nonce validated against 'gfpdf_settings[prefix_flush_logs]'
		 */
		if ( ! wp_verify_nonce( $settings['prefix_flush_logs']['nonce'], 'gfpdf_settings[prefix_flush_logs]' ) ) {

			/**
			 * Add a failure message in our logs and notify the user
			 */
			$logs->addWarning( 'Nonce Verification Failed.' );
			$notices->add_error( __( 'There was a problem flushing the logs. Please try again.', 'prefix-text-domain' ) );

			return null;
		}

		/**
		 * If we are here the user has correctly authenticated and they want your action to run
		 * Include all your action handling code below.
		 */
		//unlink( '/path/to/log/files' );

		/* Notify the user it was successful and log the results */
		$notices->add_notice( __( 'Gravity PDF Logs successfully flushed', 'prefix-text-domain' ) );
		$logs->addNotice( 'Gravity PDF Logs successfully flushed' );

		return true;
	}

} );
```

## Source Code 

This filter is located in the `Helper_Options_Fields::get_registered_fields()` method of `/src/helper/Helper_Options_Fields.php`.