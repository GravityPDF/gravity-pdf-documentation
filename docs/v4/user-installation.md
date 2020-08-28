---
title: "Gravity PDF Requirements and Installation Instructions"
sidebar_label: "Installation"
description: "Gravity PDF can be run on most shared web hosting. The easiest way to check if your web server meets the criteria is to install the plugin. Simple!"
---

### Plugin Requirements 

Gravity PDF can be run on most shared web hosting, however there are some restrictions in place to prevent problems. The easiest way to check if your web server meets the criteria is to [install](#install) the plugin. The software has multiple checks in place when activating and will let you know if there are any issues than need addressing. 

> Gravity PDF is a **third party extension**[^1] for Gravity Forms. The software cannot function without it. You'll need to [purchase a license](https://rocketgenius.pxf.io/c/1211356/445235/7938) for Gravity Forms before you can use Gravity PDF - any license type will work. [See more details about Gravity PDF's compatibility with Gravity Forms](user-gravity-forms-compatibility.md).

**Software Requirements**

* [Gravity Forms](https://rocketgenius.pxf.io/c/1211356/445235/7938) 1.9+. [Any license type will work](user-gravity-forms-compatibility.md#gravityforms-licenses).
* WordPress 4.4+

**Server Requirements**

* PHP 5.4+ (PHP 7.0+ recommended)
* [MB String](http://www.php.net/manual/en/mbstring.installation.php) with Regex enabled (`--enable-mbregex`)
* [GD Library](http://www.php.net/manual/en/image.installation.php)
* [DOM](http://php.net/manual/en/intro.dom.php)
* 64MB+ WP Memory (**128MB+ recommended**)

### Installation 

There are multiple ways to install Gravity PDF but the simplest option is to do so via your WordPress admin area. 

**Jump to section**

1. [Automatic Installation](#automatic) (recommended)
1. [Manual Installation](#manual)
1. [FTP Installation](#ftp)

---

#### Automatic Installation 

Search for the plugin directly from your WordPress admin area and install it with a single click.

1. Login to your WordPress admin area and navigate to the `Plugins -> Add New` page.

1. Use the search bar in the top right hand corner of the plugins page to search for `Gravity PDF`. 
    ![Plugin Installation Screen](https://resources.gravitypdf.com/uploads/2015/10/automatic-install.png)

1. Click the `Install Now` button on the Gravity PDF plugin to confirm the installation.

1. Once the installation has completed select the `Activate Plugin` link. 
    ![Activate Plugin](https://resources.gravitypdf.com/uploads/2015/10/activate-gravity-pdf.png)

---

#### Manual Installation 

You can manually install the plugin by downloading the plugin zip file from WordPress.org and then uploading through your WordPress admin area. However, due to the increase in fonts included in the package the total zip size tops 25MB, while the majority of hosts limit uploads to 8MB. If that’s the case for you the manual installation method won't be viable (try the [FTP](#ftp) method). 

You can check your maximum upload limit by navigating to `Media -> Add New` in your WordPress admin area and reviewing the ​*Maximum upload file size*​ limit.

1. [Go to the plugin's WordPress repository](https://wordpress.org/plugins/gravity-forms-pdf-extended/) and select the `Download Version 4.x.x` button. 
    ![Download the zip file](https://resources.gravitypdf.com/uploads/2015/10/download-plugin.png)

1. In your WordPress admin area, navigate to the `Plugins -> Add New` page then select the `Upload Plugin` button (located to the right of the `Add Plugins` title)

1. Click the `Browse` button and select the zip file downloaded in step one. 
    ![Manual Plugin Installation](https://resources.gravitypdf.com/uploads/2015/10/manual-plugin-installation.png)

1. Click the `Install Now` button and wait. Depending on your internet speed, it could take some time to upload.

1. Once installed, select the `Activate Plugin` link.

---

#### FTP Installation 

Upload the Gravity PDF plugin files to the WordPress plugins directory using your favourite FTP client.

1. Navigate to the plugin's [WordPress repository](https://wordpress.org/plugins/gravity-forms-pdf-extended/) and select the `Download Version 4.x.x` button.

1. Once downloaded, unzip the plugin folder. A folder called `gravity-forms-pdf-extended` will be extracted and this is what you should upload to your FTP server.

1. Open your favourite FTP client (we recommend [Filezilla](https://filezilla-project.org/)) and enter your hostname, username and password. If you are unsure where to get these details you should contact your web hosting provider for assistance.

1. Once logged in, navigate to your WordPress plugin directory (usually `/wp-content/plugins/`) and upload the `gravity-forms-pdf-extended` folder. If a directory called `gravity-forms-pdf-extended` already exists, delete it before uploading. 
    ![Upload plugin via FTP](https://resources.gravitypdf.com/uploads/2015/10/ftp-upload.png)

1. Finally activate the plugin via your WordPress admin plugins page `Plugins -> Installed Plugins`

[^1]: Gravity PDF is not an official Gravity Forms add-on – we're an independent company who love how powerful Gravity Forms is. We have no control over their pricing model and we do *not* provide support for their software - you'll want to use [their official support channels](https://www.gravityhelp.com/support/) for that.