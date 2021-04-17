---
title: "Gravity PDF System Status Information"
sidebar_label: "System Status"
description: "Gravity PDF includes environmental details in Gravity Forms System Status page to help with diagnostic and troubleshooting."
---

![Gravity Forms System Status page](https://resources.gravitypdf.com/uploads/2021/04/v6-System-Status-Page.png)

[Gravity Forms System Status page](https://docs.gravityforms.com/checking-environment-details/) lists environmental details about your WordPress installation and hosting. Gravity PDF-related environment details are included in this list, and provide vital information to help with troubleshooting problems.

## Gravity PDF Environment

This is the group of environment information added by Gravity PDF that can be used to help diagnose issues (usually by the [Gravity PDF support team](https://gravitypdf.com/support/)).

### PHP

* **WP Memory** <br />
The current WordPress memory available to your website. The sweet spot for running Gravity PDF smoothly is usually around the 256MB mark.

* **allow_url_fopen** <br />
Under certain circumstances, there can be image display problems in the PDF when this setting is disabled.

* **Default Charset** <br />
The default character encoding for PHP functions. UTF-8 is the default (and expected) value here.

* **Internal Encoding** <br />
The default character encoding for the MB String functions. UTF-8 is the default (and expected) value here.

### Directories and Permissions

* **PDF Working Directory** <br />
The absolute path to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory), where temporary files, fonts and custom PDF templates are located.

* **PDF Working Directory URL** <br />
  The URL to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory), used to display the image preview in the [PDF Template Manager](pdf-template-manager.md).

* **Font Folder location** <br />
The absolute path to where mPDFs core and custom fonts are installed.

* **Temporary Folder location** <br />
The absolute path to where Gravity PDF will save PDFs to disk. 

* **Temporary Folder permissions** <br />
Whether the web server can create folders and files in this directory.

* **Temporary Folder protected** <br />
Whether the folder is directly accessible from a web browser.

* **mPDF Temporary location** <br />
The absolute path to where mPDF stores cached font data, images, and CSS files.

* **Outdated Templates** <br />
Displays a warning if a [Core template override](../developers/template-hierarchy.md#how-do-i-modify-core-templates) is outdated and needs to be updated manually. This information will only be displayed if any outdated templates are detected.

### Global Settings

* **PDF Entry List Action** <br />
The current [global Entry View setting](global-settings.md#entry-view) value.

* **Background Processing** <br />
The current [global Background Processing setting](global-settings.md#background-processing) value.

* **Debug Mode** <br />
The current [global Debug Mode setting](global-settings.md#debug-mode) value.

### Security Settings

* **User Restrictions** <br />
The current [global User Restrictions setting](global-settings.md#user-restriction) value.

* **Logged Out Timeout** <br />
The current [global Logged Out Timeout setting](global-settings.md#logged-out-timeout) value.
