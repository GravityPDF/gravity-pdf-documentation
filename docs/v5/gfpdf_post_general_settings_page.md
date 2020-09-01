---
title: "gfpdf_post_general_settings_page"
sidebar_label: "gfpdf_post_general_settings_page"
description: "This hook allows you to output content at the bottom of the PDF General Settings tab. Change the priority to include before or after the System Status."
---

## Description 

This hook allows you to output content at the bottom of the [PDF General Settings tab](user-global-settings.md#general). Keep in mind our System Status notice uses this hook on priority 10, so you can choose to place your content before or after this block by changing your action's priority.

## Usage 

This snippet shows you how you can include a message after the General Settings form, but before the System Status:

```
add_action( 'gfpdf_post_general_settings_page', function() {
	/* We set the action priority to 5 so this content will be included before the System Status */
	?>
		<h3><?php _e( 'Custom Section', 'prefix-text-domain' ); ?></h3>
		<p><?php _e( 'This is the message for this new section. You should include any additional functionality here...', 'prefix-text-domain' ); ?></p>
	<?php
}, 5 );
```

If you want to include content after the System Status just adjust the priority so it's over 10:

```
add_action( 'gfpdf_post_general_settings_page', function() { }, 15 );
```


## Source Code 

This action is located in `/src/view/html/Settings/general.php`.