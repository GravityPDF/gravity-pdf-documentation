---
title: "gfpdf_settings_tools"
sidebar_label: "gfpdf_settings_tools"
description: "This filter is used to add fields on the Tools tab of the Gravity PDF settings page. It's a Fields API and all validation, sanitising and saving is handled."
---

## Description 

This filter can be used to add new fields to the [Tools tab of the Gravity PDF settings page](user-global-settings.md#general). It's basically a Fields API and all validation, sanitising and saving is handled automatically for you.

The Tools tab doesn't have a submit button like other pages. This page is specifically for action tasks like `Setup Custom Templates`. If you want to add a new action you should include a new form `button` and do your processing [from the `gfpdf_tool_tab_actions` action](gfpdf_tool_tab_actions.md).

## Parameters 

### $fields | array
*  An associative array that includes a breakdown of the field information. We go into more detail about what each field configuration setting does [in our custom PDF configuration guide](developer-template-configuration-and-image.md#custom-fields).

## Usage 

The following snippet shows you how to add a new button to the Tools tab. Remember, when adding new buttons you also need to do your [processing in the `gfpdf_tool_tab_actions` action](gfpdf_tool_tab_actions.md).

```
add_filter( 'gfpdf_settings_tools', function( $fields ) {

   /**
    * Ensure you prefix the array key and ID to prevent any conflicts
    */

    /* Add a colour picker to the Security section of the General Settings page */
    $fields['prefix_flush_logs'] = array(
        'id'   => 'prefix_flush_logs',
        'name' => __('Flush Logs', 'prefix-text-domain' ),
        'type' => 'button',
        'desc' => __('Deletes all existing Gravity PDF log files', 'prefix-text-domain' ),
        'std'     => __( 'Purge', 'prefix-text-domain' ),
    );

	return $fields;
} );
```

The following snippet shows you how to change the label of an existing field:

```
add_filter( 'gfpdf_settings_tools', function( $fields ) {

	if ( isset( $fields['setup_templates'] ) ) {
		$fields['setup_templates']['name'] = __( 'Install Custom Templates', 'prefix-text-domain' );
	}

	return $fields;
} );
```

## Source Code 

This filter is located in the `Helper_Options_Fields::get_registered_fields()` method of `/src/helper/Helper_Options_Fields.php`.