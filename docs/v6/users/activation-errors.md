---
title: "Gravity PDF Activation Errors and How to Fix Them"
sidebar_label: "Activation Errors"
description: "When activated, a number of checks are run to ensure the web server meets all the requirements. Find out how to fix any problems that may occur."
---

When Gravity PDF is activated, it will run a number of checks to ensure your web server meets all the [software requirements](installation.md#requirements). It also verifies the minimum version requirements for WordPress and Gravity Forms. If it detects a problem, a notice will be displayed in your admin area.

## Activation Errors

### WordPress version X is required

This error means your WordPress software doesn't meet [the minimum software requirements](installation.md). To resolve the issue use WordPress's One-Click Update feature, found on the `Dashboard -> Updates` page in your admin area, to get the latest version.

If you aren't ready to upgrade and your server meets the minimum requirements needed to run Gravity PDF v5, a prompt will show up allowing you to easily downgrade back to the latest release of the v5 branch (still actively supported).

### Gravity Forms is required

Gravity PDF is an add-on for the form builder plugin Gravity Forms, and cannot be used on your WordPress website without it. You will need to install and activate Gravity Forms before you can begin using Gravity PDF. Don't have a Gravity Forms license? <a href="https://rocketgenius.pxf.io/c/1211356/445235/7938" rel="sponsored">Go purchase one now</a>.

### Gravity Forms version X is required

:::caution
[Gravity Forms is currently doing a staged rollout for version 2.5](https://www.gravityforms.com/gravity-forms-v2-5-release/) and you may not be able to update from your admin area. If that's the case, you can [manually download the release from your Gravity Forms account](https://www.gravityforms.com/my-account/downloads/).
:::

This error means the version of Gravity Forms you are running doesn't meet [the minimum software requirements](installation.md). To resolve, use Gravity Forms' automatic updater on the `Forms -> Updates` page in your admin area to get the latest version. **Note: One-click updates require an active Gravity Forms license key**.

If you aren't ready to upgrade and your server meets the minimum requirements needed to run Gravity PDF v5, a prompt will show up allowing you to easily downgrade back to the latest release of the v5 branch (still actively supported).

### You are running an outdated version of PHP

This error means the version of PHP running on your website's web server does not meet [the minimum software requirements](installation.md). To fix this issue you'll need to contact your web hosting service and ask them to switch you to the latest version of PHP.

If you aren't ready to upgrade and your server meets the minimum requirements needed to run Gravity PDF v5, a prompt will show up allowing you to easily downgrade back to the latest release of the v5 branch (still actively supported).

### The PHP Extension MB String could not be detected

This error means the version of PHP you are running doesn't have support for MB String. This extension is used to correctly display non-English characters in PDF documents. To fix this issue, you'll need to contact your web hosting and tell them you need MB String enabled.

### The PHP Extension MB String does not have MB Regex enabled

This error means the version of PHP you are running does have the [MB String](#the-php-extension-mb-string-could-not-be-detected) module installed, but doesn't have support for the regular expression functions which usually come bundled with this extension. To fix this issue, you'll need to contact your web hosting and tell them you need MB String's Regex functions enabled.

### The PHP Extension GD Image Library could not be detected

This error means the version of PHP you are running doesn't have the GD Image Library installed. This is used to correctly display images in the PDF documents. To fix this issue, you'll need to contact your web hosting and tell them you need the GD Image Library installed with jpeg and png support.

### The PHP DOM Extension was not found

This error means the version of PHP you are running doesn't have the DOM extension installed. This is used to correct certain display issues when generating PDFs. To fix this issue, you'll need to contact your web hosting and tell them you need the DOM extension installed.

### The PHP Extension libxml could not be detected

This error means the version of PHP you are running doesn't have the LibXML extension installed. This is needed by the [DOM](#the-php-dom-extension-was-not-found) extension. To fix this issue, you'll need to contact your web hosting and tell them you need the LibXML extension installed.

### You need 128MB of WP Memory (RAM) but we only found X available

This error means the WordPress memory limit isn't high enough. Generating PDF documents is hard work and uses a lot of resources, which is why it needs more memory. [Read our guide on how you can increase your memory limit](increasing-memory-limit.md) to fix the problem.
