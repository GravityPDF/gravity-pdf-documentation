---
title: "Bulk Generator Plugin Documentation: How to Install and Configure"
sidebar_label: "Bulk Generator"
description: "Easily bulk-generate the PDFs for your Gravity Forms entries and download as a zip file or merged document."
---

import ResponsiveEmbed from 'react-responsive-embed'

![](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-cover-artwork.png)

*Bulk Generator* is a premium plugin for Gravity PDF that makes it simple to bulk-generate the PDFs for your Gravity Forms entries and download as a zip file or merged document.

You can purchase the Bulk Generator plugin from the [Extension Shop](https://gravitypdf.com/shop/bulk-generator-add-on/). This guide will walk you through installing and using the *Bulk Generator* plugin.

:::info
This documentation refers to version 2 of the Gravity PDF Bulk Generator add-on. [The v1 documentation can be found here](../../v5/shop-plugin-bulk-generator-add-on.md).
:::


## Prerequisites

* Gravity PDF 6.0 or higher
* WordPress 5.7 or higher
* The WordPress REST API must be enabled to use this plugin.
* [PHP Zip Extension](https://www.php.net/manual/en/zip.installation.php)

## Installation

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Configuring

The extension adds a new bulk action called *Download PDF* to [Gravity Forms Entry List pages](https://docs.gravityforms.com/entries/). Like other bulk actions, you can select the checkbox next to each entry to include them in the download. We recommend you become familiar with [Gravity Forms' powerful search and filtering capabilities](https://gravitypdf.com/news/how-to-search-and-filter-gravity-forms-entries-like-a-pro/) to help select only the entries you are interested in. You can also use Gravity Forms' *Select All Entries* feature to include every entry that matches your current search/filter parameters.

:::note
The `Download PDF` option will only be listed in the Bulk Action select box [if you have at least one active PDF configured on your form](../users/setup-pdf.md#locating-pdf-settings).
:::

### 0. Bulk Generator

![A screenshot of the Entry List Page displaying a list of form entries. All entries on the page are selected, as indicated by checkmarks next to each entry. At the top of the page, the Bulk Actions dropdown menu is open, with the cursor hovering over the 'Download PDF' option.](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Select-All-Entries.png)

Once you've picked your entries, select the *Download PDF* bulk action from the dropdown menu and then the *Apply* button. A new window will appear to take you through the rest of the process, which is split into three simple steps:

1. Configure
1. Build
1. Download

### 1. Configure

After you've selected the *Download PDF* bulk action a dialog box will open and bring up the _Configure_ step. This screen allows you to choose the PDFs to include in the export, how the documents are stored in the zip, whether the PDFs are merged together, and the filename of the export. 

:::info
*Bulk Generator's* form settings will be remembered by your browser, making it easier to run regular exports.
:::

![Screenshot of the Bulk Generator Step 1 Configure user interface. Two out of four available PDFs are selected.](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Step-1.png)

#### Select PDFs 

Choose the entry PDFs you'd like included in the export. If a PDF isn't shown then [verify it hasn't been deactivated](../users/managing-pdfs.md#activate--deactivate-pdfs)) (only active PDFs are included in the list).

#### Merge PDFs

Enable this setting to combine all selected PDFs into a single document. The current and total page numbers will be displayed in the footer of the document. 

When this setting is disabled, you will download a zip file that contains all generated documents.

:::caution
This feature is in beta and can be resource-intensive. You may encounter problems if trying to merge a substantial number of documents / pages together.
:::

#### PDF Filename

When the *[Merge PDFs](#merge-pdfs)* setting is enabled, you can set the filename of the PDF you download. Form merge tags that do not rely on entry data can be used, and the UI includes a small list of common tags to add.

#### Directory Structure 

This option allows you to organize your PDFs into folders inside the zip archive, and will be shown when the *[Merge PDFs](#merge-pdfs)* setting is disabled. 

[Most merge tags available to the current form](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) can be used in the Directory Structure setting. The UI includes a small list of common tags you can add, but you aren't limited to these.

#### Zip Filename

When the *[Merge PDFs](#merge-pdfs)* setting is disabled, you can set the filename of the zip archive you download. Form merge tags that do not rely on entry data can be used, and the UI includes a small list of common tags to add.

### 2. Build

This step does all the heavy lifting to generate and zip or merge the PDF documents. Once you've chosen the PDFs to create, select the _Build_ button to begin. 

You'll need to leave your browser window open until the process is completed, otherwise the build will be cancelled.

![A screenshot that shows the user interface for Step 2 Build of the Bulk Generator process. The screen displays a progress bar that is 70% complete, indicating how far along the PDF generation process is. Below the progress bar there's a PDF log section where real-time updates on the status of each individual PDF being generated is displayed.](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Step-2.png)

The length of time it takes a build to run depends on how many entries you've selected, the size and complexity of each PDF, and the quality of your web hosting provider. A progress bar will show the overall progress, and an activity log highlights any problems that might occur.

You can cancel the build process at any time by selecting the _Cancel_ button.

### 3. Download

![A user interface screenshot of the Bulk Generator's Step 3 Download process. The main area shows a PDF log listing the status of each generated PDF. Overlaying this is a browser's 'Save As' dialog box for downloading a zip file. The filename field in this dialog is highlighted in green.](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Step-3.png)

When all the PDFs are generated and zipped/merged you'll reach the _Download_ step. You'll either be prompted to download the file or it will be downloaded automatically (depends on your browser settings). If neither of those occur, you can use the download link displayed on screen.

## FAQ

### How many entries / PDFs can be bulk-generated? 

There aren't any hard limits when zipping the PDFs (we've tested with 10,000 documents). The limiting factor is likely to be the amount of disk space your hosting plan allows. For example, if each generated PDF is 100kb, and you've 10,000 documents to include, you'll need at least 1GB of free space for the build.

[Merging the PDF documents together](#merge-pdfs) requires a lot more WordPress memory than the zip method, and will be the limiting factor. For the best experience we recommend keeping the total page count under 1000.

### In the zip, why does the filename of some PDFs include the entry ID and PDF ID?

If a PDF with the same filename already exists, the Entry ID and a shortened version of the PDF ID (the first two and last two characters) is added to the filename to prevent a naming conflict. If you don't want this to occur, [make use of merge tags in the PDF filename](../users/setup-pdf.md#filename) so it will be unique for each document.

### Do I need to configure my settings every time I generate in bulk?

No, you don't. Your browser will remember the last settings used for specific form. The settings won't be restored if you use a different computer or web browser, clear your browser cache, or run the bulk generator for the first time on a new form.

### There are warnings in the activity log. What do they mean?

The Bulk Generator will display warnings for the following reasons:

1. **Deactivated PDF** - shown when [a PDF is deactivated](../users/managing-pdfs.md#activate--deactivate-pdfs) after the build has begun. Reactivate the PDF and run the build again.

1. **Invalid PDF** - shown when a PDF gets deleted after the build has begun. If it was deleted accidentally, you should [recreate the PDF on the form](../users/setup-pdf.md) and run the build again.

### There are a number of errors in my Activity Log. Why did they occur?

![The image shows the PDF log. Multiple entries in the log display the status "Inactive PDF". This indicates that during the PDF generation process, certain PDFs were skipped and not processed.](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Error-Log.png)

Errors are shown in the activity log if, after three attempts, the PDF was unable to be successfully generated and saved on the server. Some reasons this could occur include:

* Filesystem busy
* Network error
* Memory limit exceeded
* PHP Error / Warning / Notice triggered
* Bulk Generator session becomes invalid

The activity log only shows a generic error. You will need to enable [Gravity Forms logging](https://docs.gravityforms.com/logging-and-debugging/) and run the Bulk Generator process again to get specific information about the problem. The log files are verbose and can be hard to read, so if you need help please leave logging enabled and [open a support ticket](https://gravitypdf.com/support/).

### During the Build step a fatal error occurred. What now?

![A screenshot of an error message displayed during Step 2 Build of the Bulk Generator process. The message reads "Build process could not be completed."](https://resources.gravitypdf.com/uploads/2024/09/Bulk-Generator-2024-Fatal-Error-Screen.png)
 
It could be a temporary filesystem or network error. First, reload the page in your browser and run the Bulk Generator again. If it happens again, enable [Gravity Forms logging](https://docs.gravityforms.com/logging-and-debugging/) and re-run the Bulk Generator. This will save the specific errors in the log file and can be used to debug the issue. The log files are verbose and can be hard to read, so if you need help please leave logging enabled and [open a support ticket](https://gravitypdf.com/support/).

### I'm a developer and want to trigger an action after the Build process is complete

The Javascript hook `gform.doAction('gpdf-bulk-generator-redux-store', store)` allows you to listen for changes to the data store. [This basic plugin shows how to set this up](https://github.com/GravityPDF/gravity-pdf-bulk-generator-store-example).

## Translations

The *Bulk Generator* plugin has been translated in the following languages with the help of AI:

* English
* French
* Spanish
* German
* Chinese
* Dutch
* Portuguese
* Russian

If you'd like to translate the plugin into your own language, or change the existing translations, [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/). **Note**: the text domain for _Bulk Generator_ is `gravity-pdf-bulk-generator`.