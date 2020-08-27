---
title: "Bulk Generator Plugin Documentation: How to Install and Configure"
sidebar_label: "Bulk Generator"
description: "Discover how to install, configure, and use the Gravity PDF Bulk Generator premium plugin so you can be bulk exporting your entry PDFs in no time."
---

![Bulk Generator Plugin Icon](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-cover-artwork.png)

*Bulk Generator* is a premium plugin for Gravity PDF which allows you to easily bulk export Gravity PDF documents from Gravity Forms entries. Once the PDFs have been generated, you can download a zip file with all the files. 

You can purchase the Bulk Generator plugin from our [Extension Shop](https://gravitypdf.com/shop/bulk-generator-add-on/). This guide will walk you through installing and using the *Bulk Generator* plugin.

## Requirements 

To use this software you web server and WordPress installation must meet these requirements:

* Gravity PDF 5.2+
* REST API enabled (on by default, can be disabled via security plugins)
* [PHP Zip Extension](https://www.php.net/manual/en/zip.installation.php)

## Installation 

[Please follow our installation guide](shop-installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

:::note
The REST API must be enabled to use this plugin.
::: 

## Configuring 

https://www.youtube.com/watch?v=IC1UO2AkRMw

The extension adds a new bulk action option called *Download PDF* on [Gravity Forms Entry List pages](https://docs.gravityforms.com/entries/). Like other bulk actions, you select the checkbox next to each entry you would like to generate PDFs for. To refine the entries, you can use Gravity Forms native filters to show only *Starred* or *Unread* entries, or use the entry search feature. If you've got a lot of entries, you can use Gravity Forms *Select All Entries* feature to include all paginated pages.

:::note
The `Download PDF` option will only be listed in the Bulk Action select box [if you have at least one active PDF configured on your Gravity Form](user-setup-pdf.md#locating-pdf-settings).
:::

### Bulk Generator 

![Initialising a Bulk Generator action from the Entry List page](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-download-pdf.png)

Once you've picked your entries, selected the *Download PDF* Bulk Action option and clicked the **Apply** button. A new window will appear to take you through the rest of the process.

The bulk generator process is split into three steps:

1. Configure
1. Build
1. Download

### Configure Step 

Before you can kickoff the build process, you'll need to do a tiny bit of configuration. The following options are available:

![Initialising a Bulk Generator action from the Entry List page](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-step-1.png)

#### Select PDFs  

Choose the PDFs you'd like to generate for the entries you've selected. If you've got multiple PDFs, and you'd like to generate them all, you can use the handy *Toggle All* feature. 

If a PDF isn't showing up, you should [check if it has not been deactivated](user-managing-pdfs.md#active-toggle). Only active PDFs will be listed. 

#### Directory Structure  

This option controls the folder structure used in the generated zip file you will download at the end of the process. It provides a simple way for you to organise and group your PDFs.

[Almost any merge tags available for the current Gravity Form](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) can be used in the Directory Structure. We've included a small list of common tags you can easily add, but you are not limited to these.

### Build Step 

This step does all the grunt work of generating each individual PDF and zipping them up. Once you've completed the Configure step, click the **Build** button in the bottom-right corner of the window to start the Build process.

![The Bulk Generator Build Step](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-step-2.png)

:::info
You need to leave your browser window open until the Build process is completed.
:::

The length of time it takes to complete this step will depend on how many entries you've selected, the size and complexity of each PDF, as well as the quality of your web hosting provider. A VPS or managed hosting provide will generate the PDFs faster than a low-budget shared host. Simpler PDFs will also generate much quicker than more complex PDFs.

A progress bar is displayed to indicate the overall progress. An activity log is also available, and will highlight any warnings or errors that might occur during the process. By default, the activity log only shows the total number of events. To view more details, click the log title to unfurl the logs.

You can cancel the build process at any time by clicking the **Cancel** button in the bottom-right corner of the window. 

### Download Step 

![The Bulk Generator Download Step](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-step-3.png)

Once all your PDFs are generated and zipped, you are automatically redirected to the Download step. Depending on your browser settings, you'll either be prompted to download the zip package or the file will be downloaded automatically. If neither of those occur, you can click the download link displayed on the screen. 

You can also view the Activity Log in full on the Download Step page.

## FAQ 

### Just how many PDFs can I generate with this plugin 

We have tested the plugin with 10,000 PDFs. It took a few hours to complete the process, but a zip file containing every single document was spat out the other end. The limiting factor is likely the amount of available disk space you have. For example, if the generated PDFs are 100kb each then bulk generating 10,000 is going to create a 1GB zip file. For 500kb PDFs, that would be a 5GB zip. And for 1MB PDFs, that would be a 10GB zip. 

### How long is the zip download url valid? 

The zip download URL will expire 12 hours after it was created. If you'd like to modify the timeout for future zip files, use the `gfpdf_bg_download_url_timeout` filter:

```
add_filter( 'gfpdf_bg_download_url_timeout', function( $timeout ) {
    return '2 hours';
} );
```

The timeout cannot be more than 24 hours, as the zip file gets automatically deleted.

### When is the zip file deleted from the server? 

The zip file is deleted from the server after 24 hours during the daily scheduled clean-up.

### Why is the filename of some PDFs suffixed with the entry ID and PDF ID? 

If a PDF with the same filename already exists in the zip, the plugin includes the Entry ID and a shortened version of the PDF ID (the first two and last two characters) in the filename to prevent a naming conflict. If you don't want this to occur, [make use of merge tags in the PDF filename](user-setup-pdf.md#filename) so it is unique for each document. 

### Has the plugin been translated into any other languages? 

Yes! Besides English, we've had the plugin translated into Dutch, French, German, and Spanish. 

### There are a number of warnings in my Activity Log. What do they mean? 

![Warning Log](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-warnings.png)

The Bulk Generator will display warnings for the following reasons:

1. **Conditional Logic** – this is the most common warning. It means the [PDF Conditional Logic](user-setup-pdf.md#conditional-logic) did not pass for the current entry and so it was skipped. This is normal behaviour and can usually be ignored. 
1. **Deactivated PDF** - this warning can occur if [a PDF gets deactivated](user-managing-pdfs.md#active-toggle) after you've begun the Build step. If this occurs, wait until the current Build finishes, reactivate the PDF and then run a new build just for the problem PDF.
1. **Invalid PDF** - this warning can occur if a PDF gets deleted after you've begun the Build step. If it was deleted accidentally, you should [recreate the PDF on the form](user-setup-pdf.md) and run the build again. 

### There are a number of errors in my Activity Log. Why did they occur? 

![Error Log](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-errors.png)

Errors are shown in the activity log if, after three attempts, the PDF was unable to be successfully generated and saved on the server. Some reasons this could occur include:

* Filesystem busy
* Network error
* Memory limit exceeded
* PHP Error / Warning / Notice triggered
* Bulk Generator session becomes invalid

The activity log only shows a generic error that a problem occurred. You will need to enable [Gravity Forms logging](https://docs.gravityforms.com/logging-and-debugging/) and run the Bulk Generator process again to get more details about what specifically went wrong, and have them saved into the log file. The log is verbose and can be hard to read, so if you'd like help, leave logged enabled on your website and [open a support ticket](https://gravitypdf.com/support/).

### During the Build step a fatal error occurred. What now? 

![The Fatal Error screen](https://resources.gravitypdf.com/uploads/2020/04/bulk-generator-fatal-error.png)

If a fatal error occurs, it could be a temporary filesystem or network error. First, reload the page in your browser and run the Bulk Generator again. If it occurs a second time, enable [Gravity Forms logging](https://docs.gravityforms.com/logging-and-debugging/) and re-run the Bulk Generator. This will save the specific errors in the log file and can be used to debug the issue. The log is verbose and can be hard to read, so if you'd like help, leave logged enabled on your website and [open a support ticket](https://gravitypdf.com/support/).

### I'm a developer. How exactly does the Build process works? 

The front-end UI is powered by ReactJS and it communicates with your server using the REST API. When you click the *Build* button, an API request is made that returns a unique session ID and links your configuration to that ID. Next, five concurrent API requests are made to generate individual PDFs for an entry. For every five PDFs that are generated, a separate zip API request is made to move those documents into the zip archive (this is more memory efficient that zipping everything up at the end). This process repeats until the PDFs for all your entries are generated. The Zip API call returns a secure URL which can be used to download the zip file. We redirect the browser to that URL upon completion. There's also a lot of error handling built into the process, e.g., retry API calls if they fail and continue on error.
