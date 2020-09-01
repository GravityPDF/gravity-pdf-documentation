---
title: "gfpdf_post_help_settings_page"
sidebar_label: "gfpdf_post_help_settings_page"
description: "This hook allows you to output content at the bottom of the PDF Help Settings tab. "
---

## Description 

This hook allows you to output content at the bottom of the [PDF Help Settings tab](global-settings.md#help). 

## Usage 

This snippet shows you how you can include a message after the Help Settings form:

```
add_action( 'gfpdf_post_help_settings_page', function() {
	/* We set the action priority to 3 so this content will be included before the Uninstaller */
	?>
		<h3><?php _e( 'Custom Section', 'prefix-text-domain' ); ?></h3>
		<p><?php _e( 'This is the message for this new section. You should include any additional functionality here...', 'prefix-text-domain' ); ?></p>
	<?php
}, 3 );
```

## Source Code 

This action is located in `/src/view/html/Settings/help.php`.