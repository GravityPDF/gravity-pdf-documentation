---
title: "How to successfully upgrade to Gravity PDF 5.0"
sidebar_label: "v4 to v5 Migration"
description: "Gravity PDF 5.0 is a major update which sees the minimum version requirements for PHP, WordPress and Gravity Forms increased. The PDF library we use has been updated from v6 to v7, we've removed a legacy directory used in v3, and we no longer bundle the PDF fonts directly in the plugin."
---

Gravity PDF 5.0 is a major update that sees the minimum version requirements for PHP, WordPress and Gravity Forms increased. We have updated the PDF library we use (mPDF) from v6 to v7, we've removed a legacy directory used in v3 and we no longer bundle the PDF fonts directly in the plugin. 

:::warning Gravity PDF v4 End of Life 
Gravity PDF v4 reached its End of Life on 2019-10-04 and is no longer supported in any way.
::: 

Below you'll find the main problems that can occur during an upgrade to Gravity PDF v5 and ways you can go about overcoming them.

### New Software Requirements 

Both the server and software requirements have changed. Gravity PDF 5.0 requires the following:

-   PHP 5.6+ (PHP 7.1+ is recommended)
-   WordPress 4.8+
-   Gravity Forms 2.3.1+

Verify you meet these requirements [by viewing the System Status page](https://docs.gravityforms.com/checking-environment-details/), which can be accessed from the WP Admin menu `Forms -> System Status`. If you aren't running a compatible version of PHP, contact your host and ask them how you can upgrade. If you're running an older version of WordPress or Gravity Forms, [use WordPress's one-click update feature](https://codex.wordpress.org/Dashboard_Updates_Screen) before updating Gravity PDF.

### Premium Templates 

If you've [purchased a premium PDF template from our online store](https://gravitypdf.com/template-shop/), make sure you've installed the latest version of the template. All premium templates had an update so they'd be fully compatible with v5. ![How to check the latest template version](https://resources.gravitypdf.com/uploads/2018/08/template-shop-current-version.png) To check the latest version of a template, navigate to the product on our website and see the "Current Version" value in the sidebar. ![How to check the template version you have installed](https://resources.gravitypdf.com/uploads/2018/08/template-manager-template-version.png) To check the version you have installed on your website, [navigate to the PDF Template Manager](user-pdf-template-manager.md) and drill down to the Template Details. You'll see the current version you've installed. ![Download the latest version on the account page](https://resources.gravitypdf.com/uploads/2018/08/download-latest-template.png) Active license holders can download the latest version of a template by [logging into your GravityPDF.com account](https://gravitypdf.com/account/). If your license has lapsed you will need to purchase a new one. Once you've downloaded the latest template zip [install it via the PDF Template Manager](user-pdf-template-manager.md#install).

### mPDF v7 

The library we use to generate PDF documents is called mPDF and it also got a major version bump. Our team has worked closely with the mPDF developers over the past 12 months to ensure there's little (if any) differences to PDFs generated using Gravity PDF v4 and v5 when [using the standard templating functionality](developer-start-customising.md). However, any developers who are accessing the mPDF library directly – either in a custom template or using a filter – may need to modify their code. Notable changes in mPDF v7 include:

1.  Moved class `mPDF` to namespace `Mpdf\Mpdf`. Note: [we've polyfilled the mPDF object for backwards compatibly reasons](https://github.com/GravityPDF/gravity-pdf/blob/development/src/deprecated.php#L736).
2.  The configuration files have been removed, now configured via the `_construct`
3.  Progressbar support is removed
4.  Bundled JpGraph support removed (can still be utilised independently)
5.  An exception is thrown when `mbstring.func_overload` is set
6.  Removed a number of global constants
7.  Moved a number of global functions to classes or namespaced functions
8.  Removed deprecated methods.

[You can see the full changelog here](https://github.com/mpdf/mpdf/blob/development/CHANGELOG.md).

### Removed /resources/ Directory 

The `/resources/` directory, which contained assets (images and CSS) used in v3 example template files, has been removed. If your custom template(s) relied on files in this directory you'll need to move them to the [PDF Working Directory](developer-first-custom-pdf.md#working-directory) and update your template(s).

### Gravity PDF Customers 

If you're a Gravity PDF customer and are having trouble with your Bespoke template, [get in touch with our team for a quote to upgrade your templates](https://gravitypdf.com/integration-services/contact/).

## Upgrading to Gravity PDF v5 

Now that you are aware of the [potential issues that can occur during an upgrade](#compatibility-issues), let's go through the steps needed to complete v4 to v5 migration.

1.  **Before you begin, you should take a full backup of your website before attempting the update.** Better yet, test the update in a staging environment so you can check for any problems without affecting your live website.

2.  To verify there have been no visual changes in your PDF, it's helpful to download a number of PDFs before beginning the update. This will allow you to compare them to v5's PDFs once successful. Just make sure you write down which entries the PDFs come from.

3.  The actual update process is as simple as [using WordPress's one-click update feature](https://codex.wordpress.org/Dashboard_Updates_Screen).

4.  Once the update is completed, generate new versions of your sample PDFs (see step 2) and verify there are no changes.

5.  Submit test entries to all forms that have PDFs configured and verify the functionality.

### Optional Tasks 

The following are optional tasks you can take after completing the migration process.

#### Install Core Fonts 

In Gravity PDF v5 [all fonts have been removed from the core plugin files](user-core-pdf-fonts.md) and now need to be installed when the plugin is first activated. Note: you won't need to reinstall the fonts after every upgrade, only the initial installation. 

If you upgraded from v4.3+, the software automatically copied the fonts to the [PDF Working Directory's](developer-first-custom-pdf.md#working-directory) font subfolder. However, mPDF v7 includes additional fonts which support even more languages out of the box. To take advantage of this, it is recommended to run the [Core Font Installer](user-global-settings.md#core-fonts). This feature is available from [the Tools tab](user-global-settings.md#tools) of the [Global PDF settings](user-global-settings.md). ![The prompt you'll receive to install the Core Fonts if upgraded from pre v4.3](https://resources.gravitypdf.com/uploads/2017/12/core-fontdownload-prompt.png) If you upgraded from v4.2 or below you'll be prompted to run the Core Font Installer automatically. Click the `Install Core Fonts` button to start the process.

#### Enable Background Processing 

New to Gravity PDF v5 is the option to turn on [PDF Background Processing](user-global-settings.md#background-processing) to reduce your form submission time. This option can be enabled [from the Global PDF Settings page](user-global-settings.md). Before enabling this feature, you should first verify that your website can support it. To do this look for a green tick next to “Background Tasks” [on the Gravity Forms System Status page](https://docs.gravityforms.com/checking-environment-details/). Gravity Forms has a great guide on [why Background tasks might not be functional for your website](https://docs.gravityforms.com/troubleshooting-background-issues/).

## Rollback to v4 

If something broke during the v5 update all is not lost and you can rollback to v4 without much difficulty. First, if you are experiencing the "white screen of death" [please follow these instructions](user-white-screen-of-death.md) to help resolve the problem. If you still have full control over your website, but there's some compatibility issues with v5, we recommend [installing the WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/). With little effort on your behalf you can downgrade from v5 to v4. Once installed, just click the *Rollback* link on the Gravity PDF row on the plugin's page, then select the latest stable release of v4 and rollback. ![Rolling back Gravity PDF to v4](https://resources.gravitypdf.com/uploads/2018/08/rollback-v4.png)

## Help and Support 

If you run into trouble during your migration [get in touch with our friendly support team](https://gravitypdf.com/support/) and we will be happy to assist you.
