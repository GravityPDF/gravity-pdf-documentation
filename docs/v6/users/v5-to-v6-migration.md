---
title: "How to successfully upgrade to Gravity PDF 6.0"
sidebar_label: "v5 to v6 Migration"
description: "Gravity PDF 6.0 is a major update which sees the minimum version requirements for PHP, WordPress and Gravity Forms increased."
---

## Introduction

Gravity PDF 6.0 is a major update which has an overhauled UI to [match the changes found in Gravity Forms 2.5](https://www.gravityforms.com/two-five-form-editor/). A bunch of new features have been added to this release, with the standouts being: 

1. A [brand new Font Manager](custom-fonts.md)
1. Support for [Drag and Drop Columns](https://www.gravityforms.com/drag-and-drop-column-control-two-five/) in Core/Universal PDFs
1. Integration with [Export Entries](include-pdfs-in-entry-export.md)
1. Integration with the [Webhook add-on](webhooks-support.md)
1. [New modifiers for PDF Merge Tags](shortcodes-and-mergetags.md#available-modifiers)
  
To future-proof the plugin, the minimum version requirements for PHP, WordPress and Gravity Forms has been increased. And legacy code and settings from version 3 have been removed.

This document will guide you through all the pertinent info you need to know to upgrade to version 6. It also provides details about potential issues you might run into, how to fix, and how to downgrade back to version 5 if you find a problem you cannot resolve.

## Before you Begin

Because of the large changes found in both Gravity Forms 2.5 and Gravity PDF 6.0, you are strongly encouraged to test the updates in a staging environment first. Doing so will mean you don't negatively affect your production site should you run into problems. Some (but not all) web hosting providers include tools to quickly create a clone of your production site. Check with your host to see if this feature is available to you.

**You are strongly encouraged to take a full backup of your production site before completing the upgrade**. That way, if something goes wrong, you can quickly restore your site from the backup. Again, your hosting provider should include these tools.  

## New Software Requirements 

Both the server and software requirements have changed. Gravity PDF 6.0 requires the following:

-   PHP 7.3+
-   WordPress 5.3+
-   Gravity Forms 2.5+

Verify you meet these requirements [by viewing the System Status page](https://docs.gravityforms.com/checking-environment-details/), which can be accessed from the WP Admin menu `Forms -> System Status`. If you aren't running a compatible version of PHP and aren't sure how to upgrade, contact your web hosting provider. If you're running an older version of WordPress or Gravity Forms, [use WordPress's one-click update feature](https://wordpress.org/support/article/dashboard-updates-screen/). 

:::note
While the official release date for Gravity Forms 2.5 is Tuesday 27 April 2021, [they are doing a staggered rollout](https://www.gravityforms.com/2-5-announcement/), and you may not be prompted to update from within WordPress yet. If that's the case, you can still download the release from your GravityForms.com account and install manually.
:::

## New User Interface

Gravity Forms 2.5 sees a completely redesigned admin experience. So it doesn't stick out like a sore thumb, Gravity PDF has been updated to match the new user interface. 

### Global Settings

[A refined look see settings grouped more logically](global-settings.md), with better keyboard and screen reader support. The horizontal submenu structure stays the same.

### Form PDF Settings

Instead of being split into tabs, [the PDF settings are now grouped into sections](setup-pdf.md). To aid you in managing the settings, an Add/Update button is included below each section, and you can hide sections by selecting the section title or associated toggle.

### Entry List

[The location of the PDF view/download link hasn't changed](viewing-pdfs.md#entry-list), but the submenu that appears when you've multiple PDFs configured got a makeover. It will now display more consistently, is keyboard and screen reader accessible, and handles a larger list of PDFs without running off the screen.

### Entry Details

It's now easier than ever to access your PDFs. The PDF links have been moved from the Entry widget [to a dedicated PDFs widget](viewing-pdfs.md#entry-details). 

### System Status

The Gravity PDF System Status information has been moved (and expanded upon) from the Global Settings pages to [Gravity Forms dedicated System Status page](system-status.md).

### Uninstaller

The uninstaller was moved from the Tools Global Settings page to [Gravity Forms dedicated uninstall page](uninstall-gravitypdf.md).

## New Features

A lot of new features and refinements went into this release. Below is the big ticket items you should be aware of.

### Drag and Drop Columns

Gravity Forms have revamped their Form Builder and it now includes [Drag and Drop column support]((https://docs.gravityforms.com/working-with-columns/)). To support this feature the template files has to be updated with new CSS.

#### Core Templates

The Core templates have all been updated to support Drag and Drop columns. If you've create custom templates for Gravity PDF and run the [Setup Template Tool](../../v5/user-global-settings.md#setup-custom-templates) in the past your Core template overrides will be out of date and need to be updated (or deleted). You can check if you're affected [in the Gravity PDF System Status section](system-status.md).

Should you be using an out-of-date version of the Core templates, there are two ways you can fix the problem:

1. If you haven't made any modifications to the Core template(s), you can delete those template files via the [PDF Template Manager](pdf-template-manager.md#delete).
1. If you did modify a Core template, you [will need to add this CSS](https://github.com/GravityPDF/gravity-pdf/blob/6.0.0-RC2/src/templates/zadani.php#L49-L97) to your template in the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory).

#### Universal Templates

The following premium templates have been updated to be compatible with Drag and Drop columns:

1. [Aryal](https://gravitypdf.com/shop/aryal/)
1. [Barot](https://gravitypdf.com/shop/barot/)
1. [Colossus](https://gravitypdf.com/shop/colossus/)
1. [Sabre](https://gravitypdf.com/shop/sabre/)
1. [Tritan](https://gravitypdf.com/shop/tritan/)

If you plan to utilise this feature you'll want to install the latest template version from GravityPDF.com. Active license holders can download the latest version of a template by [logging into your GravityPDF.com account](https://gravitypdf.com/account/) and navigating to the _Downloads_ or _Access Passes_ page (depending on your purchase). If your license has lapsed you will need to purchase a new one.

Once you've downloaded the latest template zip [install it via the PDF Template Manager](pdf-template-manager.md#install).

### Nested Forms Column Support

When using [Gravity Perks Nested Forms add-on](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) with Gravity PDF, the generated PDF documents now supports Drag and Drop columns when displaying those Nested Forms in Core/Universal templates. 

### Font Manager

We threw the [old Font Manager](../../v5/user-global-settings.md#fonts) out the window, and built an intuitive, accessible interface for searching, installing, updating, and deleting custom fonts for use in PDFs. All the quirky bugs with the old Font Manager have been squashed, significant improvements were made to the rendering of fonts supporting Arabic, Hebrew, Bengali, Thai (or other complex scripts), and you can install and select new fonts in-context while configuring new PDFs on your form.

### Merge Tag Modifiers

[The PDF Merge Tag](shortcodes-and-mergetags.md#merge-tag) has been significantly improved thanks to the addition of modifiers that'll change the behaviour of the generated PDF URL.

* Show Download PDF URL<br />
  `{Report:pdf:6063bd0362dda:download}`
* Show Print Dialog on open<br />
  `{Report:pdf:6063bd0362dda:print}`
* Signed PDF URL<br />
  `{Report:pdf:6063bd0362dda:signed}`
* Signed PDF URL with 2 week timeout<br />
  `{Report:pdf:6063bd0362dda:signed,2 weeks}`

Modifiers can also be used together, in any order:

* Signed + Download URL<br />
  `{Report:pdf:6063bd0362dda:signed:download}`
* Signed + Download + Print Dialog URL<br />
  `{Report:pdf:6063bd0362dda:signed:print:download}`
* Print Dialog + Signed URL<br />
  {Report:pdf:6063bd0362dda:print:signed,5 minutes}`
* Download + Print Dialog + Signed URL<br />
  {Report:pdf:6063bd0362dda:download:print:signed,2 weeks}`

### Webhooks Support

[The powerful Webhooks Add-On is now supported by Gravity PDF](webhooks-support.md), so you can send your PDF URLs to external services. This works really nicely with the new PDF merge tag modifiers feature, so that you've greater control over what kind of PDF URL you want to include with the webhook.

## Breaking Changes / Removed Features

Along with the bump in the minimum software requirements, below is a list of changes to the Gravity PDF plugin that may affect some users.

### Always Save PDF

### Setup Template Tool

The Setup Template tool has been removed from the [PDF Tools page](global-settings.md#tools-tab). This feature was used by developers to automatically copy all Core templates to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory), so they could be modified.

Instead, [developers should manually copy the individual Core template(s)](../developers/template-hierarchy.md#how-do-i-modify-core-templates) they plan to modify using an (S)FTP client or a web hosts File Manager.

### Removed Legacy CSS File

The v3 legacy CSS file `/initialisation/template.css` has been removed from the plugin. This file was referenced by v3 templates, which [were deprecated in v4 and users were recommended to swap to one of the Core templates](../../v4/v3-to-v4-migration.md#upgrading-to-gravity-pdf-v4).

### Removed Legacy v3 Migration Code

The v3 migration code has been removed from Gravity PDF. If you are still running Gravity PDF v3, you should use the [WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/) to roll forward through major versions when following the respective migration guides ([v4](../../v4/v3-to-v4-migration.md) and [v5](../../v5/v4-to-v5-migration.md)).

### Welcome Screen

### Prefixed Composer Packages

#### Setasign FPDI

### Admin Pages

The HTML mark-up used on all Gravity PDF pages in the WordPress Admin area has been updated to match Gravity Forms (as much as possible). If you've written custom CSS to change the look and feel of one of these pages, you'll likely need to update your CSS selectors.

### Removed Files

The following files have been removed from Gravity PDF:

### Removed Functions/Methods

The following functions/class methods have been removed from Gravity PDF:

## Downgrade Plugin

If something broke during the v5 update all is not lost and you can rollback to v4 without much difficulty. First, if you are experiencing the "white screen of death" [please follow these instructions](white-screen-of-death.md) to help resolve the problem. If you still have full control over your website, but there's some compatibility issues with v5, we recommend [installing the WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/). With little effort on your behalf you can downgrade from v5 to v4. Once installed, just click the 1.Rollback1. link on the Gravity PDF row on the plugin's page, then select the latest stable release of v4 and rollback. ![Rolling back Gravity PDF to v4](https://resources.gravitypdf.com/uploads/2018/08/rollback-v4.png)

## Help and Support 

If you run into trouble during the upgrade, [get in touch with our friendly support team](https://gravitypdf.com/support/), and we will be happy to assist you.
