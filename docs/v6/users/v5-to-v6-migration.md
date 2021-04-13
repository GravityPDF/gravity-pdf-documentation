---
title: "How to successfully upgrade to Gravity PDF 6.0"
sidebar_label: "v5 to v6 Migration"
description: "Gravity PDF 6.0 is a major update which sees the minimum version requirements for PHP, WordPress and Gravity Forms increased."
---

Gravity PDF 6.0 is a major update that sees the minimum version requirements for PHP, WordPress and Gravity Forms increased. Legacy code and settings have been removed, and new features added.

## New Software Requirements 

Both the server and software requirements have changed. Gravity PDF 6.0 requires the following:

-   PHP 7.3+
-   WordPress 5.2+
-   Gravity Forms 2.5+

Verify you meet these requirements [by viewing the System Status page](https://docs.gravityforms.com/checking-environment-details/), which can be accessed from the WP Admin menu `Forms -> System Status`. If you aren't running a compatible version of PHP, contact your host and ask them how you can upgrade. If you're running an older version of WordPress or Gravity Forms, [use WordPress's one-click update feature](https://wordpress.org/support/article/dashboard-updates-screen/) before updating Gravity PDF.

## Premium Templates 

The following premium templates have been updated to be compatible with [Gravity Forms 2.5 Drag and Drop columns](https://docs.gravityforms.com/working-with-columns/):

1. [Aryal](https://gravitypdf.com/shop/aryal/)
1. [Barot](https://gravitypdf.com/shop/barot/)
1. [Colossus](https://gravitypdf.com/shop/colossus/)
1. [Sabre](https://gravitypdf.com/shop/sabre/)
1. [Tritan](https://gravitypdf.com/shop/tritan/)

If you plan to utilise this feature you'll want to install the latest template version from GravityPDF.com. Active license holders can download the latest version of a template by [logging into your GravityPDF.com account](https://gravitypdf.com/account/) and navigating to the _Downloads_ or _Access Passes_ page (depending on your purchase). If your license has lapsed you will need to purchase a new one. 

Once you've downloaded the latest template zip [install it via the PDF Template Manager](pdf-template-manager.md#install).

## Removed Legacy CSS File

The v3 legacy CSS file `/initialisation/template.css` has been removed from the plugin. This file was referenced by v3 templates, which [were deprecated in v4 and users were recommended to swap to one of the Core templates](../../v4/v3-to-v4-migration.md#upgrading-to-gravity-pdf-v4).  

## Removed Legacy v3 Migration Code

The v3 migration code has been removed from Gravity PDF. If you are still running Gravity PDF v3, you should use the [WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/) to roll forward through major versions when following the respective migration guides ([v4](../../v4/v3-to-v4-migration.md) and [v5](../../v5/v4-to-v5-migration.md)).

## Remove Setup Template Tool

The Setup Template tool has been removed from the [PDF Tools page](global-settings.md#tools-tab). This feature was used by developers to automatically copy all Core templates to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory), so they could be modified. 

Instead, [developers should manually copy the Core template(s)](../developers/template-hierarchy.md#how-do-i-modify-core-templates) they plan to modify using an (S)FTP client or a web hosts File Manager.

## Core Templates

The Core templates have all been updated to support [Gravity Forms 2.5 Drag and Drop columns](https://docs.gravityforms.com/working-with-columns/). If you've used the Setup Template Tool in the past your template overrides will be out of date and need to be updated (or deleted). You can check if you're affected [in the Gravity PDF System Status section](@TODO).

Should you be using an out-of-date version of the Core templates, there's two ways you can fix the problem:

1. If you haven't made any modifications to the Core template(s), you can delete those template files from the PDF Working Directory via the PDF Template Manager.
1. If you did modify a Core template, you will need to add the following CSS to the template in the PDF Working Directory.

## Remove Always Save PDF setting






## Upgrading to Gravity PDF v5 

Now that you are aware of the [potential issues that can occur during an upgrade](#compatibility-issues), let's go through the steps needed to complete v4 to v5 migration.

1.  **Before you begin, you should take a full backup of your website before attempting the update.** Better yet, test the update in a staging environment so you can check for any problems without affecting your live website.

2.  To verify there have been no visual changes in your PDF, it's helpful to download a number of PDFs before beginning the update. This will allow you to compare them to v5's PDFs once successful. Just make sure you write down which entries the PDFs come from.

3.  The actual update process is as simple as [using WordPress's one-click update feature](https://wordpress.org/support/article/dashboard-updates-screen/).

4.  Once the update is completed, generate new versions of your sample PDFs (see step 2) and verify there are no changes.

5.  Submit test entries to all forms that have PDFs configured and verify the functionality.

### Optional Tasks 

The following are optional tasks you can take after completing the migration process.

#### Install Core Fonts 

In Gravity PDF v5 [all fonts have been removed from the core plugin files](core-pdf-fonts.md) and now need to be installed when the plugin is first activated. Note: you won't need to reinstall the fonts after every upgrade, only the initial installation. 

If you upgraded from v4.3+, the software automatically copied the fonts to the [PDF Working Directory's](../developers/first-custom-pdf.md#working-directory) font subfolder. However, mPDF v7 includes additional fonts which support even more languages out of the box. To take advantage of this, it is recommended to run the [Core Font Installer](global-settings.md#install-core-fonts). This feature is available from [the Tools tab](global-settings.md#tools-tab) of the [Global PDF settings](global-settings.md). ![The prompt you'll receive to install the Core Fonts if upgraded from pre v4.3](https://resources.gravitypdf.com/uploads/2017/12/core-fontdownload-prompt.png) If you upgraded from v4.2 or below you'll be prompted to run the Core Font Installer automatically. Click the `Install Core Fonts` button to start the process.

#### Enable Background Processing 

New to Gravity PDF v5 is the option to turn on [PDF Background Processing](global-settings.md#background-processing) to reduce your form submission time. This option can be enabled [from the Global PDF Settings page](global-settings.md). Before enabling this feature, you should first verify that your website can support it. To do this look for a green tick next to “Background Tasks” [on the Gravity Forms System Status page](https://docs.gravityforms.com/checking-environment-details/). Gravity Forms has a great guide on [why Background tasks might not be functional for your website](https://docs.gravityforms.com/troubleshooting-background-issues/).

## Rollback to v4 

If something broke during the v5 update all is not lost and you can rollback to v4 without much difficulty. First, if you are experiencing the "white screen of death" [please follow these instructions](white-screen-of-death.md) to help resolve the problem. If you still have full control over your website, but there's some compatibility issues with v5, we recommend [installing the WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/). With little effort on your behalf you can downgrade from v5 to v4. Once installed, just click the *Rollback* link on the Gravity PDF row on the plugin's page, then select the latest stable release of v4 and rollback. ![Rolling back Gravity PDF to v4](https://resources.gravitypdf.com/uploads/2018/08/rollback-v4.png)

## Help and Support 

If you run into trouble during your migration, [get in touch with our friendly support team](https://gravitypdf.com/support/), and we will be happy to assist you.
