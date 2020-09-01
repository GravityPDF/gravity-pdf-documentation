---
title: "gfpdf_plugin_installed"
sidebar_label: "gfpdf_plugin_installed"
description: "This action is triggered when Gravity PDF is activated for the first time. It will not fire for subsequent activations or upgrades unless first uninstalled."
---

## Description 

This action is triggered when Gravity PDF is activated for the first time. It will not fire for subsequent activations or upgrades ([see `gfpdf_version_changed`](gfpdf_version_changed.md)) unless the software [is first uninstalled](global-settings.md#uninstall). 

## Usage 

This snippet will show you how to run your own code right when Gravity PDF is installed:

```
add_action( 'gfpdf_plugin_installed', function() {
	/* Run any one-time checks you need to */	
} );
```

## Source Code 

This action is located in the `Model_Install::install_plugin()` method of `/src/model/Model_Install.php`.