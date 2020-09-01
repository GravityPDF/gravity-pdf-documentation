---
title: "gfpdf_post_tools_settings_page"
sidebar_label: "gfpdf_post_tools_settings_page"
description: "This hook allows you to output content at the bottom of the PDF Tools Settings tab. Change the priority to include before or after the System Status/Uninstaller."
---

## Description 

This hook allows you to output content at the bottom of the [PDF Tools Settings tab](global-settings.md#tools). Keep in mind our System Status notice uses this hook on priority 10, so you can choose to place your content before or after this block by changing your action's priority. Also, the [Uninstaller](global-settings.md#uninstall) has a priority of 5.

## Usage 

This snippet shows you how you can include a message after the Tools Settings form, but before the Uninstaller:

```
add_action( 'gfpdf_post_tools_settings_page', function() {
	/* We set the action priority to 3 so this content will be included before the Uninstaller */
	?>
		<h3><?php _e( 'Custom Section', 'prefix-text-domain' ); ?></h3>
		<p><?php _e( 'This is the message for this new section. You should include any additional functionality here...', 'prefix-text-domain' ); ?></p>
	<?php
}, 3 );
```

If you want to include content after the Uninstaller and before the System Status make sure your priority is between 5 and 10:

```
add_action( 'gfpdf_post_tools_settings_page', function() { }, 7 );
```

And to display content after the System status use a priority over 10:

```
add_action( 'gfpdf_post_tools_settings_page', function() { }, 15 );
```

## Source Code 

This action is located in `/src/view/html/Settings/tools.php`.