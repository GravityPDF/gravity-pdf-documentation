---
title: "Gravity PDF Requirements and Installation Instructions"
sidebar_label: "Installation"
description: "Gravity PDF can be run on most shared web hosting. The easiest way to check if your web server meets the criteria is to install the plugin. Simple!"
---

## Plugin Requirements 

Gravity PDF can be run on most shared web hosting providers and the easiest way to check if yours is compatible is to [install](#install) the plugin. Gravity PDF has multiple checks in place when activating and will let you know if there are any issues than need addressing.

:::info
While Gravity PDF is a free plugin, it requires Gravity Forms to run. You'll need to [purchase a Gravity Forms license](https://rocketgenius.pxf.io/c/1211356/445235/7938) before you can use Gravity PDF – any license type will work.
:::

:::note
Gravity PDF is a third party extension for Gravity Forms, created by an independent company who love how powerful the software is. We have no control over their pricing model, and we do *not* provide direct support for their software.
:::

**Software Requirements**

-   [Gravity Forms](https://rocketgenius.pxf.io/c/1211356/445235/7938) 2.3.1+. [Any license type will work](gravity-forms-compatibility.md#gravityforms-licenses).
-   WordPress 4.8+

**Server Requirements**

-   PHP 5.6+ (PHP 7.1+ recommended)
-   [MB String](http://www.php.net/manual/en/mbstring.installation.php) with Regex enabled (`--enable-mbregex`)
-   [GD Library](http://www.php.net/manual/en/image.installation.php)
-   [DOM](http://php.net/manual/en/intro.dom.php)
-   [allow_url_fopen](https://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen) (optional) - If you have image display problems make sure this option is enabled.
-   128MB+ WP Memory (**256MB+ recommended**)

## Installation

### Automatic Installation 

Search for the plugin directly from your WordPress admin area and install it with a single click.

1. Login to your WordPress admin area and navigate to the `Plugins -> Add New` page.

1. Use the search bar in the top right-hand corner of the plugins page to search for `Gravity PDF`. 
    ![Plugin Installation Screen](https://resources.gravitypdf.com/uploads/2015/10/automatic-install.png)

1. Click the `Install Now` button on the Gravity PDF plugin to confirm the installation.

1. Once the installation has completed select the `Activate` link. 

### Manual Installation 

You can manually install the plugin by downloading the plugin zip file from WordPress.org and then uploading through your WordPress admin area. The plugin zip file is 4.6MB and most web hosts maximum upload limit should be higher than this (you can check your maximum upload limit by navigating to `Media -> Add New` in your WordPress admin area and reviewing the ​*Maximum upload file size*​ limit).

1. [Go to the plugin's WordPress repository](https://wordpress.org/plugins/gravity-forms-pdf-extended/) and select the `Download Version 5.x.x` button. 

2.  In your WordPress admin area, navigate to the `Plugins -> Add New` page then select the `Upload Plugin` button (located to the right of the `Add Plugins` title)

3.  Click the `Browse` button and select the zip file downloaded in step one. ![Manual Plugin Installation](https://resources.gravitypdf.com/uploads/2015/10/manual-plugin-installation-v5.png)

4.  Click the `Install Now` button and wait. Depending on your internet speed, it could take some time to upload.

5.  Once installed, select the `Activate Plugin` link.

### FTP Installation 

Upload the Gravity PDF plugin files to the WordPress plugins directory using your favourite FTP client.

1. [Go to the plugin's WordPress repository](https://wordpress.org/plugins/gravity-forms-pdf-extended/) and select the `Download Version 5.x.x` button. 

2.  Once downloaded, unzip the plugin folder. A folder called `gravity-forms-pdf-extended` will be extracted and this is what you should upload to your FTP server.

3.  Open your favourite FTP client (we recommend [Filezilla](https://filezilla-project.org/)) and enter your hostname, username and password. If you are unsure where to get these details, you should contact your web hosting provider for assistance.

4.  Once logged in, navigate to your WordPress plugin directory (usually `/wp-content/plugins/`) and upload the `gravity-forms-pdf-extended` folder. If a directory called `gravity-forms-pdf-extended` already exists, delete it before uploading. ![Upload plugin via FTP](https://resources.gravitypdf.com/uploads/2015/10/ftp-upload.png)

5.  Next, activate the plugin via your WordPress admin plugins page `Plugins -> Installed Plugins`
