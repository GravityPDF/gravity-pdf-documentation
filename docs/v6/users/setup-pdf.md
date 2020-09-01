---
title: "All You Need To Know About Creating a Gravity Form PDF"
sidebar_label: "Setup PDF"
description: "There are a lot of options available but the most common settings are up front and are split into groups: General, Appearance, Template and Advanced."
---

![Adding new PDF Form](https://resources.gravitypdf.com/uploads/2015/10/add-new-pdf-v5.png) 

Creating a PDF for an individual Gravity Form is similar to [creating your form's notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) (and is found in the same location). There are a lot of options available to users but we've put the most common settings up front. The rest are hidden; split up between four tabs. These include:

1. **General** - Common settings like template, filename, notifications and conditional logic.
1. **Appearance** - Control the paper size and orientation as well as the font type, size and colour.
1. **Template** - The template-specific settings. Different templates can have different options.
1. **Advanced** - Advanced features like PDF security are found here.

## Locating the PDF Settings 

![PDF Form Settings List](https://resources.gravitypdf.com/uploads/2015/10/PDF-Settings-v5.png) 

The form PDF settings can be accessed by following these steps:

1. Navigating to `Forms -> Forms` in your WordPress admin area.
1. Locate the Gravity Form you want to create a PDF on and hover your mouse (or similar device) over that particular row. A list of actions will be revealed; click the `Settings` action.
1. When the page loads you'll see a new tab called `PDF` in the left sidebar. Click that link.
1. Finally select the `Add New` button to the right of the *Gravity PDF* title.

## Required Fields 

There are only two required fields when creating a PDF: the name and filename options. Both appear in the [*General*](#general-tab) tab. These include:

### Name 
* The name field is only used for internal administrative tasks. Its sole purpose is to provide a human-readable identifier for the particular PDF configuration – which can help you distinguish between multiple PDFs in your WordPress admin area. It's best to choose a meaningful easy-to-remember name.

### Filename 
* The filename field is for external use and is what the generated PDF will actually be called when saved. For example, `My_Personal_Flyer.pdf`.
* [Gravity Form merge tags](https://www.gravityhelp.com/documentation/article/merge-tags/) are supported in the filename. For example, `{Name:3}'s_Personal_Flyer.pdf`.
* If you have multiple PDFs configured on a single form, make sure the Filename is unique for each document otherwise PDF Notifications won't work correctly.
* The `.pdf` extension should be excluded from the filename field (but will be automatically removed if you add it).
* While the following characters will be saved, they are automatically converted to an underscore when generating the PDF: `/  " * ? | :`. This is to prevent file system problems when saving the PDF to disk.

## Optional Fields 

There are a number of optional fields available which give you granular control over how the PDF functions. Each field belongs to one of four tabs. The [*General*](#general-tab) and [*Template*](#template-tab) tabs contain the most common settings.

## General Tab 

![PDF Form Settings General Tab](https://resources.gravitypdf.com/uploads/2015/10/general-tab-v5.png) 

The most common PDF settings are found in the General tab. The required fields [*Name*](#name) and [*Filename*](#filename) are also part of this tab.

Below is the list of settings available in the General tab, with a brief description about what each is for.

### Template 
* Select the PDF template that should be used to generated the document. The [global Default Template setting](user-global-settings.md#default-template) controls which template to use by default.
* Gravity PDF comes with **four completely-free templates** for you to choose from. Upon changing your selection (using the drop down or selecting the Advanced button to get a more graphical overview) the *Template* tab will be updated (or removed if it has no options) to reflect the template-specific options.
* Additional templates can be purchased from our [template shop](https://gravitypdf.com/template-shop/) and then installed through the [PDF Template Manager](user-pdf-template-manager.md).
* Developers with HTML, CSS and a little PHP knowledge can also [create their own designs and layouts](developer-start-customising.md). Alternatively, the Gravity PDF team offers [design and integration services](https://gravitypdf.com/integration-services/) for those looking for a custom solution – we can even integrate existing PDF documents.

### Notifications 
* This setting allows you to automatically attach the PDF to the selected notification(s).
* The PDF [active state](user-managing-pdfs.md#active-toggle) and [*Conditional Logic*](#conditional-logic) determine if the PDF will be attached to the notification. If one or both of these tests fail no PDF will be attached. This setting **does not** affect the actual notification conditional logic (which determines if the notification should be sent).
* [If Background Processing is enabled](user-global-settings.md#background-processing), during the form submission when it's determined a PDF should be attached to a notification, Gravity PDF will handle the PDF generation and notification sending as a background task. The major benefit is the end-user doesn't have to wait for these tasks to complete before seeing the form's Confirmation page. Resending notifications from your admin area will also be processed as a background task.
* If there is semi-sensitive user information included in the PDF it's recommended you enable [*PDF Security*](#pdf-security) with a strong [*Password*](#password) (more than 10 characters, with a mix of symbols, numbers and upper and lower case). Password-protected PDFs are encrypted using 128-bit AES.
* If very sensitive user information is included in the PDF it is recommended you **do not** enable this feature as email can be insecure. Instead [use the `[gravitypdf]` shortcode over HTTPS](user-shortcodes.md) and enable [*PDF Security*](#pdf-security).

### Conditional Logic 
* Conditional logic is a [powerful feature of Gravity Forms](https://www.gravityhelp.com/documentation/article/enable-conditional-logic/) allowing you to show or hide fields in your form based on a user's response. We've extended this behaviour to Gravity PDF, allowing you to enable or disable a PDF if a user responded a specific way.
* If the conditional logic determines a PDF should be disabled it will not be generated for that entry. The PDF will not be accessible through the `[gravitypdf]` shortcode and will not be attached to notifications. Site administrators won't even be able to access it from the admin area.

## Appearance Tab 

![PDF Form Settings Appearance Tab](https://resources.gravitypdf.com/uploads/2015/10/appearance-tab-v5.png) 

The appearance tab contains fields that control the general look and feel of your PDF. You have granular control over the paper size and orientation, as well as the font, font size / colour and RTL support.

Below is the list of settings available in the Appearance tab, with a brief description about what each is for.

### Paper Size 
* Use this option to set the PDF paper size. This field defaults to the [Default Paper Size](user-global-settings.md#paper-size) option in the global settings. Common paper sizes like US Letter and Legal are available. The ISO-standard *A*, *B* and *C* paper sizes, as well as *RA* and *SRA*, are also preloaded.
* If none of the preloaded options suit you can also select [*Custom Paper Size*](#custom-paper-size) and control the width and height in millimetres or inches.

### Custom Paper Size 
* This field is hidden until you select the *Custom Paper Size* option from the [*Paper Size*](#paper-size) field. It allows you to control the exact paper size of your document – in millimetres or inches. When displayed, this field is required and only positive numbers are permitted in the width and height inputs.

### Orientation 
* This allows you to change the paper orientation from portrait to landscape. A page displayed in portrait mode is taller than it is wide. Inversely, landscape pages are wider than they are tall.
* The field defaults to *Portrait*.

### Font 
* Select the font to be used in your PDF. This field defaults to the [Default Font](user-global-settings.md#font-type) option in the global settings.
* If none of the pre-installed fonts suit your needs, additional fonts can be installed using our [Font Installer](user-custom-fonts.md).

### Font Size 
* Control the font size used in the PDF. The field defaults to the [Default Font Size](user-global-settings.md#font-size) option in the global settings.

### Font Colour 
* Control the font colour used in the PDF. The field defaults to the [Default Font Colour](user-global-settings.md#font-colour) option in the global settings.

### Reverse Text (RTL) 
* Control the text direction used in the PDF. The field defaults to the [Reverse Text (RTL)](user-global-settings.md#rtl) option in the global settings.

## Template Tab 

![PDF Form Settings Template Tab](https://resources.gravitypdf.com/uploads/2015/10/template-tab-v5.png) 

This tab contains the current template-specific settings. A template may support dozens of custom settings, or none at all (and the tab will be hidden). However, there are a number of in-built settings a template can support, if they so choose. 

Below is a description of the core template settings.

### Show Form Title 
* Optionally display the form name at the beginning of the PDF document.

### Show Page Names 
* When using Gravity Forms' *Page Break* fields you have the option to [name each page using the *Start Paging* field](https://www.gravityhelp.com/documentation/article/page-break/). When this PDF option is enabled these page names will be displayed in your PDF.

### Show HTML Fields 
* Show your form's HTML fields in the PDF.
* If your HTML has conditional logic this will be honoured in the PDF. See [*Enable Conditional Logic*](#enable-conditional-logic) to disable this feature.

### Show Section Break Description 
* The [*Section Break* field](https://www.gravityhelp.com/documentation/article/section-break/) allows you to enter a label and description. By default, a PDF will only show a section break's *label*. Enabling this option will also show the section break description.

### Enable Conditional Logic 
* When this option is enabled, the Gravity Form field conditionals you set in your form will be adhered to in the PDF. This means if a field's conditional logic says it should be hidden then it won't be included in the PDF. 
* This option is useful when you have [*Show Empty Fields*](#show-empty-fields) enabled.

### Show Empty Fields 
* By default, any field not completed by the user won't be shown in the PDF document. When enabled this option will display all fields, regardless of whether the user filled it out.
* Conditional logic is honoured on all fields, including empty ones. See [*Enable Conditional Logic*](#enable-conditional-logic) to disable this feature.

### Header 
* Add a header to your PDF document using the WordPress Editor. You can use the media library to include a simple logo. Or add a more robust three-column table ([try this code snippet](https://gist.github.com/jakejackson1/997b5dedf0a5e665e8ef)).
* Gravity Form merge tags can be used in the header.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the header.

### First Page Header 
* When enabled you can add a different header to the first page of your PDF document.
* Gravity Form merge tags can be used in the header.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the header.

### Footer 
* Add a header to your PDF document using the WordPress Editor. You can use the media library to include images. Or add a more robust three-column table that includes the page number and date ([try this code snippet](https://gist.github.com/jakejackson1/e6179a96cd97ef0a8457)).
* Gravity Form merge tags can be used in the footer.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the footer.

### First Page Footer 
* When enabled you can add a different footer to the first page of your PDF document.
* Gravity Form merge tags can be used in the footer.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the footer.

## Advanced Tab 

![PDF Form Settings Advanced Tab](https://resources.gravitypdf.com/uploads/2015/10/advanced-tab-v5.png) 

The advanced tab allows you to control the PDF security (which includes password protection). You can also change the image DPI and the format to PDF/A-1b or PDF/X-1a.

Below is the list of settings available in the Advanced tab, with a brief description about what each is for.

### Format 
* This allows you to change the PDF to one of the ISO-standard PDF/A-1b or PDF/X-1a formats.
* The PDF/A-1b standard is designed for long-term archiving and is 100% self-contained. All the information necessary for displaying the document is embedded in the file.
* The PDF/X-1a standard is designed to facilitate printing. Like the PDF/A-1b standard, the document is 100% self-contained but has the added restriction that all images need to be CMYK or spot colours. The software will automatically convert any images to CMYK.
* Both the PDF/A-1b and PDF/X-1a standards do not allow transparency, which means you cannot use watermarks or PNG images with alpha channel transparency. Additionally, the [*PDF Security*](#pdf-security) option is disabled – which includes the [*Password*](#password) and [*Privileges*](#privileges) fields.

### Enable PDF Security 
* When the [*Format*](#format) is set to *Standard* you have the option to enable PDF security. This allows you to set a password to access the PDF, or control the end-user document privileges.

### Password 
* When [*PDF Security*](#pdf-security) is enabled you have the option to password-protect your PDF documents. 
* [Mergetag](https://www.gravityhelp.com/documentation/article/merge-tags/) usage is allowed in this field.
* Leave this field blank if you don't want to set a password (useful if you only want to control the end-user [*Privileges*](#privileges))

### Privileges 
* You can restrict what the end user does with the PDF by removing privileges. The following privileges are available:

     1. **Annotate**: Add or modify text annotations.
     1. **Assemble**: Allow users to insert, delete or rotate pages.
     1. **Copy**: Allow users to copy and pasting content from the document.
     1. **Extract**: Allow users to split or extract pages from the document.
     1. **Fill Forms**: Allow users to fill in any active form field elements.
     1. **Printing - High Resolution**: Allow high quality printing and PDF re-distilling.
     1. **Printing - Low Resolution**: Low-resolution printing will generate a bitmapped image of the document that is suitable for personal use. High-quality reproduction and re-distilling is disabled. If you don't want the user to print at all remove both *Printing* privileges.
     1. **Modify**: If this privilege is removed, document modifications is disabled. However, copying, extracting content and printing are allowed.

### Image DPI 
* Adjust the image DPI (Dots Per Inch). By default this is set to 96. If professionally printing you should set this to *300* and change the [*Format*](#format) to *PDF/X-1a*.

### Always Save PDF 
* By default, when a new Gravity Form entry is submitted a PDF is only ever saved to disk when the [*Notifications*](#notifications) feature is enabled. When active, this option is very useful in conjunction [with the `gfpdf_post_save_pdf` filter](gfpdf_post_save_pdf.md), which can be used to copy the generated PDF to an alternate location.

### Enable Public Access 
* Enabling public access to the PDF will **disable all security protocols** and give anonymous users access to the PDF. This means anyone worldwide can view the PDF document for all your form's entries. 
* For most users the [standard security measures](user-pdf-security.md) will be adequate and public access should remain disabled.

### Restrict Owner 
* This option defaults to the [global Default Owner Restrictions](user-global-settings.md#default-owner-restrictions) value but you have the option to override that behaviour on a per-PDF basis. 
* This option is used to prevent the original entry owner from viewing the generated PDF.  
