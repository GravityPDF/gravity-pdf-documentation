---
title: "Gravity PDF Requirements and Detailed Installation Instructions"
sidebar_label: "Installation"
description: "Gravity PDF can be run on modern shared web hosting. The easiest way to check if your web server meets the criteria is to install the plugin. Simple!"
---

## Plugin Requirements

Gravity PDF can be run on modern shared web hosting providers, and the easiest way to check if your host can run it is to [install the plugin](#installation). Gravity PDF has checks in place when you first activate it on your WordPress website, and it will let you know if there are any issues than need addressing.

:::info
Gravity PDF is a free third-party plugin for Gravity Forms <a href="https://rocketgenius.pxf.io/c/1211356/445235/7938" rel="sponsored">and you will need your own Gravity Forms license</a> (any tier will work) before you can use the add-on.
:::

**Software Requirements**

-   <a href="https://rocketgenius.pxf.io/c/1211356/445235/7938" rel="sponsored">Gravity Forms</a> 2.5+.
-   WordPress 5.3+

**Server Requirements**

-   PHP 7.3+
-   [MB String](http://www.php.net/manual/en/mbstring.installation.php) with Regex enabled (`--enable-mbregex`)
-   [GD Library](http://www.php.net/manual/en/image.installation.php)
-   [DOM](http://php.net/manual/en/intro.dom.php)
-   [libxml](https://www.php.net/manual/en/intro.libxml.php)
-   [Ctype](https://www.php.net/manual/en/intro.ctype.php)
-   [allow_url_fopen](https://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen) (optional) - If you have image display problems make sure this option is enabled.
-   128MB+ WP Memory (**256MB+ recommended**)

## Installation

:::note
If your browser auto-extracts zip files when downloaded, you'll need to temporarily disable this functionality to prevent issues during installation. [See how to disable this in Safari](https://apple.stackexchange.com/a/963).
:::

### Direct Installation

1. [Download the latest version of the plugin from GravityPDF.com](https://gravitypdf.com/download-gravity-pdf)

1. Log in to your WordPress admin area

1. Navigate to `Plugins > Add New Plugin` and select the `Upload Plugin` button

1. Upload the zip file downloaded in step 1 and select the `Install Now` button

1. Finish up by selecting the `Activate Plugin` button

All future updates for Gravity PDF are done directly from your WordPress admin area – no zip file required.

### FTP Installation

1. [Download the latest version of the plugin from GravityPDF.com](https://gravitypdf.com/download-gravity-pdf)

1. Unzip the downloaded zip file. A folder called `gravity-pdf` will be extracted and this is what you should upload to your FTP server.

1. Open your favorite FTP client (we recommend [Filezilla](https://filezilla-project.org/)) and enter your hostname, username and password.

1. Navigate to your WordPress plugin directory in your FTP client (usually `/wp-content/plugins/`) and upload the plugin folder. If a directory called `gravity-pdf` already exists, delete it before uploading.

1. Finish up by activating the plugin on the `Plugins` admin page
