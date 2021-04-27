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

This document presents all the pertinent info you need to upgrade to version 6. It also provides details about potential issues you might run into, how to fix, and how to downgrade back to version 5 if you find a problem you cannot resolve.

## Before you Begin

Because of the large changes found in both Gravity Forms 2.5 and Gravity PDF 6.0, you are strongly encouraged to test the updates in a staging environment first. Doing so will mean you don't negatively affect your production site should you run into problems. Some (but not all) web hosting providers include tools to quickly create a clone of your production site. Check with your host to see if this feature is available to you.

**You are strongly encouraged to take a full backup of your production site before completing the upgrade**. That way, if something goes wrong, you can quickly restore your site from the backup. Your hosting provider should include these tools.  

## New Software Requirements 

Both the server and software requirements have changed. Gravity PDF 6.0 requires the following:

-   PHP 7.3+
-   WordPress 5.3+
-   Gravity Forms 2.5+

Verify you meet these requirements [by viewing the System Status page](https://docs.gravityforms.com/checking-environment-details/), which can be accessed from the WP Admin menu `Forms -> System Status`. If you aren't running a compatible version of PHP and aren't sure how to upgrade, contact your web hosting provider. If you're running an older version of WordPress or Gravity Forms, [use WordPress's one-click update feature](https://wordpress.org/support/article/dashboard-updates-screen/). 

:::note
While the official release date for Gravity Forms 2.5 is Tuesday 27 April 2021, [they are doing a staggered rollout](https://www.gravityforms.com/2-5-announcement/) and you may not be prompted to update from within WordPress yet. If that's the case, you can still download the release from your GravityForms.com account and install manually.
:::

:::success Info
If you are unable to meet the v6 minimum software requirements, Gravity PDF will continue [supporting users on v5](../../v5/five-minute-install.md) with bug and security fixes until at least 27 April 2022.
:::

## New User Interface

Gravity Forms 2.5 sees a completely redesigned admin experience. So it doesn't stick out like a sore thumb, Gravity PDF has been updated to match the new user interface. 

### Global Settings

![Gravity PDF Global Settings Page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Global-with-License.png)

[A refined look see settings grouped more logically](global-settings.md), with better keyboard and screen reader support. The horizontal submenu structure stays the same.

### Form PDF Settings

![Adding new PDF Form](https://resources.gravitypdf.com/uploads/2021/04/v6-Add-a-PDF.png)

Instead of being split into tabs, [the PDF settings are now grouped into sections](setup-pdf.md). To aid you in managing the settings, an Add/Update button is included below each section, and you can hide sections by selecting the section title or associated toggle.

### Entry List

![The Gravity Forms Entry List page with multiple PDF links under the submenu](https://resources.gravitypdf.com/uploads/2021/04/v6-View-Multiple-PDF.png)

[The location of the PDF view/download link hasn't changed](viewing-pdfs.md#entry-list), but the submenu that appears when you've multiple PDFs configured has got a makeover. It will now display more consistently, is keyboard and screen reader accessible, and can handle a big list of PDFs without running off the screen.

### Entry Details

![The Gravity Forms Entry Details page](https://resources.gravitypdf.com/uploads/2021/03/Entry-Details-v6.png)

It's now easier than ever to access your PDFs. The PDF links have been moved from the Entry widget [to a dedicated PDFs widget](viewing-pdfs.md#entry-details). 

### System Status

![Gravity Forms System Status page](https://resources.gravitypdf.com/uploads/2021/04/v6-System-Status-Page.png)

The Gravity PDF System Status information has been moved (and expanded upon) from the Global Settings pages to [Gravity Forms dedicated System Status page](system-status.md).

### Uninstaller

![Gravity Forms Uninstall Page](https://resources.gravitypdf.com/uploads/2021/04/v6-Uninstall-Gravity-PDF.png)

The uninstaller was moved from the Tools Global Settings page to [Gravity Forms dedicated uninstall page](uninstall-gravitypdf.md).

## New Features

A lot of new features and refinements went into this release. Below is the big ticket items you should be aware of.

### Drag and Drop Columns

![Gravity Forms Form Editor with Column Support](https://resources.gravitypdf.com/uploads/2021/04/v6-Gravity-Forms-Column-Support-1.png)

Gravity Forms have revamped their Form Builder and it now includes [Drag and Drop column support](https://docs.gravityforms.com/working-with-columns/). To support this feature individual templates have to be updated with new CSS.

#### Core Templates

The Core templates Gravity PDF ships have all been updated to support Drag and Drop columns. If you've attempted to create a custom template in the past and run the [Setup Template Tool](../../v5/user-global-settings.md#setup-custom-templates) your Core template overrides will be out of date and need to be updated (or deleted). You can check if you're affected [in the Gravity PDF System Status section](system-status.md).

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

If you plan to utilise this feature you'll want to install the latest version from GravityPDF.com. Active license holders can download the latest version of a template by [logging into your GravityPDF.com account](https://gravitypdf.com/account/) and navigating to the _Downloads_ or _Access Passes_ page (depending on your purchase). If your license has lapsed you will need to purchase a new one.

Once you've downloaded the latest template zip file [install it via the PDF Template Manager](pdf-template-manager.md#install).

### Nested Forms Column Support

When using [Gravity Perks Nested Forms add-on](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) with Gravity PDF, the generated PDF documents now supports Drag and Drop columns when displaying those Nested Forms in Core/Universal templates. 

### Font Manager

![Font Manager](https://resources.gravitypdf.com/uploads/2021/03/v6-Font-Manager.png)

We threw the [old Font Manager](../../v5/user-global-settings.md#fonts) out the window, and [built an intuitive, accessible interface for searching, installing, updating, and deleting custom fonts](custom-fonts.md) for use in PDFs. All the quirky bugs with the old Font Manager have been squashed, significant improvements were made to the rendering of fonts supporting Arabic, Hebrew, Bengali, Thai (or other complex scripts), and you can install and select new fonts in-context while configuring new PDFs on your form.

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
  `{Report:pdf:6063bd0362dda:print:signed,5 minutes}`
* Download + Print Dialog + Signed URL<br />
  `{Report:pdf:6063bd0362dda:download:print:signed,2 weeks}`

### Webhooks Support

[The powerful Webhooks Add-On is now supported by Gravity PDF](webhooks-support.md), so you can send your PDF URLs to external services. This works really nicely with the new PDF merge tag modifiers feature, so that you've greater control over what kind of PDF URL you want to include with the webhook.

## Breaking Changes / Removed Components

Along with the bump in the minimum software requirements, below is a list of changes to the Gravity PDF plugin that may affect some users.

### Always Save PDF

Because Gravity PDF [doesn't permanently store PDFs on disk](pdf-security.md#pdfs-and-the-file-system), this has always been [a confusion setting for users](../../v5/user-setup-pdf.md#always-save-pdf). The reason it existed was so the `gfpdf_post_save_pdf` hook would always be triggered on form submission, even if no notifications were configured. 

We've removed the setting from the UI entirely, and will determine whether to temporarily save the PDF to disk based on if an action is hooked into `gfpdf_post_save_pdf` (or if being included as a notification attachment).

### Setup Template Tool

The [Setup Template tool](../../v5/user-global-settings.md#setup-custom-templates) has been removed from Gravity PDF (previously located on the PDF Tools page). This feature was used by developers to automatically copy all Core templates to the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory) so they could be modified, and it [was the recommended first step for creating a custom PDF template](../../v5/developer-first-custom-pdf.md#preparing-the-infrastructure). The problem with this is most (if not all) the files copied over never got changed, and when an update is made to the Core templates you're stuck with an outdated version and need to manually intervene (as is the case with [Drag and Drop Column support for this release](#core-templates)).

Going forward, [developers will need to manually copy the individual Core template(s)](../developers/template-hierarchy.md#how-do-i-modify-core-templates) they plan to modify using an (S)FTP client, or a hosts File Manager (exactly like theme template overrides). A warning prompt has been added [to Gravity PDF's System Status section](system-status.md) that'll inform you if you've an outdated template override that needs to be manually updated.

### Removed Legacy CSS File

The v3 legacy CSS file `/initialisation/template.css` has been removed from the plugin. This file was referenced by v3 templates, which [were deprecated in v4 and users were encouraged to upgrade to one of the Core templates](../../v4/v3-to-v4-migration.md#upgrading-to-gravity-pdf-v4). If you are still using one of the v3 templates, now is the time to make the switch. If your custom template is loading/referencing `/initialisation/template.css` you should remove that line, or, if you rely on those styles, [add them directly in your template file](https://github.com/GravityPDF/gravity-pdf/blob/3.7.8/initialisation/template.css).

### Removed Legacy v3 Migration Code

The v3 to v4 migration code has been removed from Gravity PDF. If you are one of the few still running Gravity PDF v3 and want to upgrade, you should use the [WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/) to roll forward through each major version and follow the respective migration guides ([v3 to v4](../../v4/v3-to-v4-migration.md) and [v4 to v5](../../v5/v4-to-v5-migration.md)).

### Changed Namespace for Composer Packages

Gravity PDF includes a number of third party libraries for its functionality, which [is managed through Composer](https://getcomposer.org/doc/00-intro.md). A problem with this approach is when another plugin includes a different version of the same library, and this can cause unexpected bugs. To prevent this, we've moved all Composer-managed libraries to a new namespace. For most users this won't cause any problems when you upgrade (even if you are using a custom template).

If you've developed custom functionality for Gravity PDF and needed to directly access any of the following namespaced classes, you'll need to update your code:

* `\League\Uri` -> `\GFPDF_Vendor\League\Uri`
* `\Masterminds` -> `\GFPDF_Vendor\Masterminds`
* `\Monolog` -> `\GFPDF_Vendor\Monolog`
* `\Mpdf` -> `\GFPDF_Vendor\Mpdf`
* `\DeepCopy` -> `\GFPDF_Vendor\DeepCopy`
* `\QueryPath` -> `\GFPDF_Vendor\QueryPath`
* `qp()` -> `\GFPDF_Vendor\qp()`
* `htmlqp()` -> `\GFPDF_Vendor\htmlqp()`
* `html5qp()` -> `\GFPDF_Vendor\html5qp()`
* `\setasign\Fpdi` -> `\GFPDF_Vendor\setasign\Fpdi`
* `\Spatie\UrlSigner` -> `\GFPDF_Vendor\Spatie\UrlSigner`
* `\Upload` -> `\GFPDF_Vendor\Upload`

#### Setasign PDF-Parser

If you've [integrated the commercial FPDI PDF-Parser from Setasign](https://www.setasign.com/products/fpdi-pdf-parser/details/) with Gravity PDF, [you'll need to update your code](../developers/setasign-fpdi-pdf-parser.md) to support Gravity PDF's new Composer namespaces.

### Admin Pages

The HTML mark-up used on all Gravity PDF pages in the WordPress Admin area has been updated to match Gravity Forms (as much as possible). If you've written custom CSS to change the look and feel of one of these pages, you'll likely need to update your code to support this new structure.

### Removed Files

The following files have been removed from Gravity PDF and may affect developers who've manually included or used functionality from them:

```text 
bower_components/backbone.modelbinder/Backbone.ModelBinder.min.js
src/Controller/Controller_Welcome_Screen.php
src/Helper/Helper_Migration.php
src/Model/Model_Welcome_Screen.php
src/View/View_Save_Core_Fonts.php
src/View/View_Welcome_Screen.php
src/View/html/Actions/begin_multisite_migration.php
src/View/html/Actions/migration.php
src/View/html/Settings/license.php
src/View/html/Settings/system_status.php
src/View/html/Settings/uninstaller.php
src/View/html/Welcome/more.php
src/View/html/Welcome/welcome.php
src/assets/css/gfpdf-styles.css
src/assets/js/admin/helper/resizeDialogIfNeeded.js
src/assets/js/admin/helper/wpDialog.js
src/assets/js/admin/settings/common/setupSelectBoxes.js
src/assets/js/admin/settings/common/showTooltips.js
src/assets/js/admin/settings/global/runPDFAccessCheck.js
src/assets/js/admin/settings/global/setupAdvancedOptions.js
src/assets/js/admin/settings/global/tools/setupToolsFontsDialog.js
src/assets/js/admin/settings/global/tools/setupToolsTemplateInstallerDialog.js
src/assets/js/admin/settings/global/tools/setupToolsUninstallDialog.js
src/assets/js/admin/settings/global/toolsSettings.js
src/assets/js/admin/settings/pdf/setupPdfTabs.js
src/assets/js/legacy/gfpdf-backbone.js
src/assets/js/legacy/gfpdf-migration.js
src/assets/js/react/actions/help.js
src/assets/js/react/components/CoreFonts/CoreFontButton.js
src/assets/js/react/components/Help/DisplayError.js
src/assets/js/react/components/Help/DisplayResultEmpty.js
src/assets/js/react/components/Help/DisplayResultItem.js
src/assets/js/react/components/Template/TemplateCloseDialog.js
src/assets/js/react/reducers/helpReducer.js
src/assets/js/react/sagas/help.js
```

### Removed Class Methods

The following public class methods have been removed from Gravity PDF and may affect developers who've used them in their custom code:

```text
Controller_Settings::process_tool_tab_actions()
Controller_Settings::allow_font_uploads()
Controller_Settings::validate_font_uploads()
Model_Actions::migration_condition()
Model_Actions::begin_migration()
Model_Actions::migrate_v3()
Model_Actions::handle_multisite_migration()
Model_Actions::ajax_multisite_v3_migration()
Model_Settings::install_templates()
Model_Settings::remove_font_file() // Use GPDFAPI::delete_pdf_font()
Model_Settings::is_font_name_valid() // Moved to Model_Custom_Fonts::check_font_name_valid()
Model_Settings::if_font_name_unique()
Model_Settings::install_fonts() // Moved to Model_Custom_Fonts::add_font()
Model_Settings::save_font() // Use GPDFAPI::add_pdf_font()
Model_Settings::delete_font() // Use GPDFAPI::delete_pdf_font()
Model_Settings::process_font() // Use GPDFAPI::add_pdf_font()
Model_Settings::get_font_id_by_name() // Font names no longer linked to IDs.
Model_Settings::check_tmp_pdf_security()
View_Actions::migration()
View_Save_Core_Fonts::core_fonts_setting() 
View_Settings::get_avaliable_tabs(); // Renamed View_Settings::get_available_tabs()
View_Settings::system_status();
```

### Modified Class Method Signatures

The following class method signatures have been changed and may affect developers who've written code that calls them:

```text
GPDFAPI::delete_pdf_font( $font_name ) -> GPDFAPI::delete_pdf_font( $font_id )
Controller_Save_Core_Fonts::__construct( Helper_Abstract_View $view, LoggerInterface $log, Helper_Data $data, Helper_Misc $misc ) -> Controller_Save_Core_Fonts::__construct( LoggerInterface $log, Helper_Data $data, Helper_Misc $misc )
Controller_System_Report::__construct( $allow_url_fopen ) -> Controller_System_Report::__construct( Helper_Abstract_Model $model, Helper_Abstract_View $view ) 
Model_Install::__construct( Helper_Abstract_Form $gform, LoggerInterface $log, Helper_Data $data, Helper_Misc $misc, Helper_Notices $notices, Helper_Pdf_Queue $queue ) -> Model_Install::__construct( LoggerInterface $log, Helper_Data $data, Helper_Misc $misc, Helper_Notices $notices, Helper_Pdf_Queue $queue, Model_Uninstall $uninstall )
Model_Mergetags::__construct( Helper_Abstract_Options $options, Model_PDF $pdf, LoggerInterface $log, Helper_Misc $misc ) -> Model_Mergetags::__construct( Helper_Abstract_Options $options, Model_PDF $pdf, LoggerInterface $log, Helper_Misc $misc, Helper_Interface_Url_Signer $url_signer )
```

## Downgrade Plugin

If something broke during the update you can rollback to v5 without much difficulty. First, if you are experiencing the "white screen of death" [please follow these instructions](white-screen-of-death.md) to help resolve the problem. If you still have full control over your website but there's some compatibility issues with v6, we recommend [installing the WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/). Once installed, click the *Rollback* link on the Gravity PDF row on the plugin's page, then select the latest stable v5 release and rollback. 

![Rolling back Gravity PDF to v5](https://resources.gravitypdf.com/uploads/2018/08/rollback-v4.png)

## Help and Support 

If you run into trouble during the upgrade, [get in touch with our friendly support team](https://gravitypdf.com/support/), and we will be happy to assist you.
