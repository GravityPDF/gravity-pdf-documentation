---
title: "Gravity PDF Activation Errors and How to Fix Them"
sidebar_label: "Activation Errors"
description: "When activated, a number of checks are run to ensure the web server meets all the requirements. Find out how to fix any problems that may occur."
---

When Gravity PDF is activated it will run a number of checks to ensure your web server meets all the [software requirements](installation.md#requirements). It also verifies the minimum version requirements for WordPress and Gravity Form. If it detects a problem a notice will be displayed in your admin area. 

## Activation Errors

### WordPress Version 4.X is required 

This error means your WordPress software doesn't meet the minimum software requirements – currently WordPress 4.8 and above is supported. To resolve the issue use WordPress's One-Click Update feature to get the latest version. Navigate to `Dashboard > Updates` in your admin area to update WordPress.

### Gravity Forms Version 2.x is required 

This error means you either haven't installed Gravity Forms or your version of Gravity Forms doesn't meet the minimum software requirements – currently Gravity Forms 2.3.1 and above are supported. If you haven't installed Gravity Forms, [go get yourself a license](https://rocketgenius.pxf.io/c/1211356/445235/7938), download and then install the plugin. Otherwise, use Gravity Forms' automatic updater to get the latest version. Navigate to `Forms -> Updates` in your admin area to update Gravity Forms. **One-click updates require an activate Gravity Forms license key**.

### You are running an outdated version of PHP 

This error means the version of PHP running on your website's web server isn't compatible – currently version 5.6 and above are supported. To fix this issue you'll need to contact your web hosting service and ask them to switch you to the latest version of PHP – we recommend using PHP 7.0 or higher.

### The PHP Extension MB String could not be detected 

This error means the version of PHP you are running doesn't have support for MB String. This extension is used to correctly display non-English characters in PDF documents. To fix this issue you'll need to contact your web hosting and tell them you need MB String enabled.

### The PHP Extension MB String does not have MB Regex enabled 

This error means the version of PHP you are running does have the [MB String](#php-mbstring) module installed, but doesn't have support for the regular expression functions which usually come bundled with this extension. To fix this issue you'll need to contact your web hosting and tell them you need MB String's Regex functions enabled.

### The PHP Extension GD Image Library could not be detected 

This error means the version of PHP you are running doesn't have the GD Image Library installed. This is used to correctly display images in the PDF documents. To fix this issue you'll need to contact your web hosting and tell them you need the GD Image Library installed with jpeg and png support.

### The PHP DOM Extension was not found 

This error means the version of PHP you are running doesn't have the DOM extension installed. This is used to correct certain display issues when generating PDFs. To fix this issue you'll need to contact your web hosting and tell them you need the DOM extension installed.

### The PHP Extension libxml could not be detected 

This error means the version of PHP you are running doesn't have the LibXML extension installed. This is needed by the [DOM](#php-dom) extension. To fix this issue you'll need to contact your web hosting and tell them you need the LibXML extension installed.

### You need 128MB of WP Memory (RAM) but we only found X available 

This error means the WordPress memory limit isn't high enough. Generating PDF documents is hard work and uses a lot of resources, which is why it needs more memory. [Read our guide on how you can increase your memory limit](increasing-memory-limit.md) to fix the problem.
