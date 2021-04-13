---
title: "All You Need To Know About Creating a Gravity Forms PDF"
sidebar_label: "Setup PDF"
description: "There are a lot of options available, but the most common settings are up front, with the rest grouped by one-of-four sections: and are split into groups: General, Appearance, Template and Advanced."
---

![Adding new PDF Form](https://resources.gravitypdf.com/uploads/2021/03/v6-Add-New-PDF.png) 

Creating a PDF for individual Gravity Forms is similar to creating Notifications. There are a lot of options available to you, but we've put the most common settings up front. The rest are hidden; split up between four sections:

1. **General** - Common settings like label, filename, PDF template, and Notification attachments
1. **Appearance** - Control the paper size and orientation as well as the font type, size and colour.
1. **Template** - Template-specific settings: different templates can have different options
1. **Advanced** - Advanced settings like document format and security options

## Locating the PDF Settings 

![PDF Form Settings List](https://resources.gravitypdf.com/uploads/2021/03/v6-PDF-Settings.png) 

The PDF settings for an individual form can be accessed by following these steps:

1. Navigating to `Forms -> Forms` in your WordPress admin area.
1. Locate the form you want to create a PDF for, then hover your mouse (or similar device) over that particular row. A list of actions will be revealed; click the `Settings` action.
1. When the page loads you'll see a navigation item called `PDF` in the left sidebar. Click that link.
1. Finally, select the `Add New` button which is above-and-to-the-right of the table shown in the content area.

## Required Fields 

There are only two required fields when creating a PDF: _Label_ and _Filename_. The rest of the settings will either use sane defaults, those [configured in the Global Settings](global-settings.md), or be disabled / empty. These settings can be found in the General section.

### Label
* The name is only used for internal administrative tasks. Its sole purpose is to provide a human-readable identifier for the particular PDF.
* The name can help you distinguish between multiple PDFs in your WordPress admin area. It's best to choose something meaningful and easy to remember.

:::info
In previous versions of Gravity PDF this setting was know as the _Name_.
:::

### Filename 
* The filename is what the generated PDF will be called when saved. For example, `My_Personal_Flyer.pdf`.
* [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported in the filename. Any mergetags will be converted to the appropriate value when the PDF is saved. For example, `{Name:3}_Personal_Flyer.pdf` will become `Gravity PDF_Personal_Flyer.pdf` if _Gravity PDF_ was entered into field 3 for the current entry.
* If you use merge tags, either use a field marked required or include static text alongside the merge tag to prevent empty filenames.
* If you have multiple PDFs configured on a single form, make sure the Filename is unique for each document, otherwise the [PDF Notification attachments]#notifications] and the [Always Save PDF](#always-save-pdf) feature won't work correctly.
* The `.pdf` extension should be excluded from the filename field (but will be automatically removed if you add it).
* While the following characters will be saved, they are automatically converted to an underscore when generating the PDF: `/ " * ? | :`. This is to prevent problems saving the PDFs to disk on some operating systems.

## Optional Fields 

There are a number of optional fields available which give you granular control over how the PDF functions. Each field belongs to one of four sections which are covered below.

## General Section

![PDF Form Settings General Section](https://resources.gravitypdf.com/uploads/2021/03/v6-General-Tab.png)

Below is the list of settings available in the General section, with a brief description about what each is for.

### Template 
* Select the PDF template that should be used to generate the document. The [global Default Template setting](global-settings.md#default-template) controls which template will be preselected.
* Gravity PDF comes with **four free templates** for you to choose from. Upon changing your selection (using the drop down or selecting the Manage button to get a more graphical overview), the [Template section](#template-section) will be updated (or removed if it has no options) to reflect the template-specific options.
* Additional templates can be purchased from our [template shop](https://gravitypdf.com/template-shop/) and then installed through the [PDF Template Manager](pdf-template-manager.md).
* Developers with HTML, CSS and a little PHP knowledge can also [create their own designs and layouts](../developers/start-customising.md). Alternatively, the Gravity PDF team offers [a Bespoke PDF service](https://gravitypdf.com/bespoke/) for those wanting us to build it for them – we can even populate existing PDF documents (not available in the free plugin).

### Notifications 
* This setting allows you to automatically attach the PDF to the selected notification(s).
* The PDF [active state](managing-pdfs.md#activate--deactivate-pdfs) and [*Conditional Logic*](#conditional-logic) determine if the PDF will be attached to the notification. If one or both of these tests fail, no PDF will be attached. This setting **does not** affect the actual [notification conditional logic](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#using-conditional-logic-with-the-notification) (which determines if the notification should be sent).
* [If Background Processing is enabled](global-settings.md#background-processing), during the form submission when it's determined a PDF should be attached to a notification, Gravity PDF will handle the PDF generation and notification sending as a background task. The major benefit is the end-user doesn't have to wait for these tasks to complete before seeing the form's Confirmation page. Resending notifications from your admin area will also be processed as a background task.
* If there is semi-sensitive user information included in the PDF, it's recommended you also enable [*PDF Security*](#enable-pdf-security) with a strong [*Password*](#password) (more than 12 characters, with a mix of symbols, numbers and upper and lower case). Password-protected PDFs are encrypted using 128-bit AES.
* If very sensitive user information is included in the PDF, it is recommended you **do not** enable this feature as email can be insecure. Instead [use the `[gravitypdf]` shortcode over HTTPS](shortcodes-and-mergetags.md) so users have to login and [pass PDF security checks](pdf-security.md) before the document can be viewed or downloaded.

### Conditional Logic 
* Conditional logic is a [powerful feature of Gravity Forms](https://docs.gravityforms.com/enable-conditional-logic/) allowing you to show or hide fields in your form based on a user's response. We've extended this behaviour to Gravity PDF, allowing you to enable or disable a PDF if a user responded a specific way.
* If the conditional logic determines a PDF should be disabled, it will not be generated for that entry. The PDF will not be accessible through the `[gravitypdf]` shortcode and will not be attached to notifications. Site administrators won't be able to access it from the admin area either.

## Appearance Section 

![PDF Form Settings Appearance Section](https://resources.gravitypdf.com/uploads/2021/03/v6-Appearance-Tab.png) 

The Appearance section contains fields that control the general look and feel of your PDF. You have control over the paper size and orientation, as well as the font, font size / colour and RTL support.

### Paper Size 
* Use this option to set the PDF paper size. 
* This field defaults to the [Default Paper Size](global-settings.md#default-paper-size) option in the global settings. 
* Common paper sizes like A4, US Letter and Legal are available. The ISO-standard *A*, *B* and *C* paper sizes, as well as *RA* and *SRA*, can also be selected.
* If none of the preloaded options suit, you can also select [*Custom Paper Size*](#custom-paper-size) and control the width and height in millimetres or inches.

### Custom Paper Size 
* This field is hidden until you select the *Custom Paper Size* option from the [*Paper Size*](#paper-size) field. It allows you to control the exact paper size of your document – in millimetres or inches. 
* When displayed, this field is required, and only positive numbers or floats are permitted in the width and height inputs.

### Orientation 
* This allows you to change the paper orientation from portrait to landscape. A page displayed in portrait mode is taller than it is wide. Inversely, landscape pages are wider than they are tall.
* The field defaults to *Portrait*.

### Font 
* Select the font to be used in your PDF. 
* This field defaults to the [Default Font](global-settings.md#default-font-type) option in the global settings.
* If none of the pre-installed fonts suit your needs, additional fonts can be installed by selecting the _Manage_ button, which will open the [Font Installer](custom-fonts.md).

### Font Size 
* Control the font size used in the PDF. 
* The field defaults to the [Default Font Size](global-settings.md#default-font-size) option in the global settings.

### Font Colour 
* Control the font colour used in the PDF. 
* The field defaults to the [Default Font Colour](global-settings.md#default-font-colour) option in the global settings.

### Reverse Text (RTL) 
* Control the text direction used in the PDF. 
* The field defaults to the [Reverse Text (RTL)](global-settings.md#reverse-text-rtl) option in the global settings.

## Template Section 

![PDF Form Settings Template Section](https://resources.gravitypdf.com/uploads/2021/03/v6-Template-Tab.png) 

The template section contains the current template-specific settings. A template may support dozens of custom settings, or none at all (and the section will be hidden). 

Below is a description of the Core template settings that all **four free templates** that ship with Gravity PDF include.

### Show Form Title 
* Display the form name at the beginning of the PDF document.
* This is disabled by default.

### Show Page Names 
* When using Gravity Forms' *Page Break* fields you have the option to [name each page using the *Start Paging* field](https://docs.gravityforms.com/page-break/). When this PDF option is enabled, these page names will be displayed in your PDF.
* This is disabled by default.

### Show HTML Fields 
* Show your form's HTML fields in the PDF.
* If your HTML has conditional logic, this will be honoured in the PDF. See [*Enable Conditional Logic*](#enable-conditional-logic) to disable this feature.
* This is disabled by default.

### Show Section Break Description 
* The [*Section Break* field](https://docs.gravityforms.com/section-break/) allows you to enter a label and description. By default, a PDF will only show a section break's *label* but enabling this option will also show the description.
* This is disabled by default.

### Enable Conditional Logic 
* When this option is enabled, the Gravity Forms field conditionals you set in your form will be adhered to in the PDF. This means if a field's conditional logic says it should be hidden, then it won't be included in the PDF. 
* This option is useful when you have [*Show Empty Fields*](#show-empty-fields) enabled.
* This is enabled by default.

### Show Empty Fields 
* By default, any field not completed by the user won't be shown in the PDF document. When enabled, this option will display all fields, regardless of whether the user filled it out.
* Conditional logic is honoured on all fields, including empty ones. See [*Enable Conditional Logic*](#enable-conditional-logic) to disable this feature.
* This is disabled by default.

### Background Color
* Set the background color for all pages in the PDF
* By default, this is set to white (hex `#FFFFFF`)

### Background Image
* Set the background image to be used for all pages in the PDF
* For the best results, create an image with the same dimensions as the [Paper Size](#paper-size) and then run through an image optimization tool before you upload. 
* This is disabled by default

### Header 
* Add a header to your PDF document using the WordPress Classic Editor. You can use the media library to include a simple logo. Or add a more robust three-column table ([try this code snippet](https://gist.github.com/jakejackson1/997b5dedf0a5e665e8ef)).
* Gravity Forms merge tags can be used in the header.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the header.
* Images will have their height restricted, so they don't take up too much of the page. [Learn how to override this behaviour](@TODO).

### First Page Header 
* When enabled, you can add a different header to the first page of your PDF document.
* Gravity Forms merge tags can be used in the header.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the header.
* Images will have their height restricted, so they don't take up too much of the page. [Learn how to override this behaviour](@TODO).

### Footer 
* Add a footer to your PDF document using the WordPress Classic Editor. You can use the media library to include images. Or add a more robust three-column table that includes the page number and date ([try this code snippet](https://gist.github.com/jakejackson1/e6179a96cd97ef0a8457)).
* Gravity Forms merge tags can be used in the footer.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the footer.
* Images will have their height restricted, so they don't take up too much of the page. [Learn how to override this behaviour](@TODO).

### First Page Footer 
* When enabled, you can add a different footer to the first page of your PDF document.
* Gravity Forms merge tags can be used in the footer.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the footer.
* Images will have their height restricted, so they don't take up too much of the page. [Learn how to override this behaviour](@TODO).

## Advanced Section 

![PDF Form Settings Advanced Section](https://resources.gravitypdf.com/uploads/2021/03/v6-Advanced-Tab.png) 

The Advanced section allows you to control the PDF security (which includes password protection). You can also change the image DPI and the PDF format.

### Format 
* This allows you to change the PDF to one of the ISO-standard PDF/A-1b or PDF/X-1a formats.
* The PDF/A-1b standard is designed for long-term archiving and is 100% self-contained. All the information necessary for displaying the document is embedded in the file.
* The PDF/X-1a standard is designed to facilitate printing. Like the PDF/A-1b standard, the document is 100% self-contained but has the added restriction that all images need to be CMYK or spot colours. The software will try automatically convert any images to CMYK.
* Both the PDF/A-1b and PDF/X-1a standards do not allow transparency, which means you cannot use watermarks or PNG images with alpha channel transparency. Additionally, the [*PDF Security*](#enable-pdf-security) option is automatically disabled – which includes the [*Password*](#password) and [*Privileges*](#privileges) fields.

### Enable PDF Security 
* When the [*Format*](#format) is set to *Standard*, you have the option to enable PDF security. This allows you to set a password to access the PDF or control the end-user document privileges.

### Password 
* When [*PDF Security*](#enable-pdf-security) is enabled, you have the option to password-protect your PDF documents. 
* [Mergetag](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) usage is allowed in this field.
* Leave this field blank if you don't want to set a password (useful if you only want to control the end-user [*Privileges*](#privileges))

:::note
In the PDF world, this password is known as the Unlock Password. It should not to be confused with the Owner/Permissions Password, which is randomly generated for each PDF. [Add this filter to your site to manually control the Owner/Permissions Password](../developers/filters/gfpdf_enable_master_password_field.md).
:::

### Privileges 
* You can restrict what the end user does with the PDF by removing privileges. The following privileges are available:

     1. **Annotate**: Add or modify text annotations.
     1. **Assemble**: Allow users to insert, delete or rotate pages.
     1. **Copy**: Allow users to copy and pasting content from the document.
     1. **Extract**: Allow users to split or extract pages from the document.
     1. **Fill Forms**: Allow users to fill in any active form field elements.
     1. **Printing - High Resolution**: Allow high quality printing and PDF re-distilling.
     1. **Printing - Low Resolution**: Low-resolution printing will generate a bitmapped image of the document that is suitable for personal use. High-quality reproduction and re-distilling is disabled. If you don't want the user to print at all remove both *Printing* privileges.
     1. **Modify**: If this privilege is removed, document modifications are disabled. However, copying, extracting content and printing are allowed.

:::caution
Do not rely on privileges to restrict what a user can do with the PDF, as they are easily bypassed with simple tools. This is a limitation of the PDF specification and not Gravity PDF. Use this feature to convey intention and, optionally, combine with an appropriate license to inform the user what they legally can and cannot do with the document.
:::

### Image DPI 
* Adjust the image DPI (Dots Per Inch). By default this is set to 96. If professionally printing you should set this to *300* and change the [*Format*](#format) to *PDF/X-1a*.

:::info
The _Always Save PDF_ setting has been removed from the UI. As the sole reason for this setting was to allow developers to use [the `gfpdf_post_save_pdf` action](../developers/actions/gfpdf_post_save_pdf.md), we now automatically enable this functionality when the action is hooked into. 
:::

### Enable Public Access 
* Enabling public access to the PDF will **disable all security protocols** and give anonymous users access to the PDF. This means anyone worldwide can view the PDF document for all your form's entries. 
* For most users, the [standard security measures](pdf-security.md) will be adequate, and public access should remain disabled.
* A good middleground between the default security and public access [is Signed PDF URLs](@TODO), as it allows anyone with access to the secure signed PDF URL to view the document.

### Restrict Owner 
* This option is used to prevent the original entry owner (the person who submitted the form) from viewing the generated PDF.
* This option defaults to the [global Default Owner Restrictions](global-settings.md#default-owner-restrictions) value, but you have the option to override that behaviour on a per-PDF basis.
* Logged-in users who have one of the capabilities enabled in the [User Restriction](global-settings.md#user-restriction) setting will still be able to access the PDF
* [Signed PDF URLs](@TODO) will ignore this setting.
