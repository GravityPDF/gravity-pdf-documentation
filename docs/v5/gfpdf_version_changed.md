---
title: "gfpdf_version_changed"
sidebar_label: "gfpdf_version_changed"
description: "We save the Gravity PDF version number in the database and when the plugin is updated (and the version number changes) this action is triggered. "
---

## Description 

We save the Gravity PDF version number in the database and when the plugin is updated (and the version number changes) this action is triggered. 

## Parameters 

### $old_version | string
*  The version Gravity PDF was at before the update took place     

### $new_version | string
*  The version of Gravity PDF now being run on the website.

## Usage 

This snippet will show you how to run your own upgrade code right after a Gravity PDF update:

```
add_action( 'gfpdf_version_changed', function( $old_version, $new_version ) {
	/* Run any upgrade checks you need to */	
}, 10, 2 );
```

## Source Code 

This action is located in the `Controller_Install::get_install_status()` method of `/src/controller/Controller_Install.php`.