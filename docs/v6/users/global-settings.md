---
title: "Gravity PDF Global Settings and What They Do"
sidebar_label: "Global Settings"
description: "Gravity PDF is fully integrated into Gravity Forms. If you've ever used a Gravity Forms add-on you'll feel right at home setting up Gravity PDF."
---

![Gravity PDF Global Settings Page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Global-with-License.png) 

The PDF Global Settings area is where you control a variety of plugin-wide options, can manage templates and fonts, and search our knowledgebase. 
It integrates seemlessly into Gravity Forms own settings area and can be found by by navigating to `Forms -> Settings -> PDF` in your WordPress admin area. 

The PDF settings are split into three separate tabs out of the box:

* [General](#general-tab)
* [Tools](#tools-tab)
* [Help](#help-tab)

An additional [_License_ tab](#license-tab) is available if you [purchase and install an extension](https://gravitypdf.com/extension-shop/).

## General Tab 

You can control what the PDF defaults will be [when you create new PDFs on forms](setup-pdf.md). You also have control over more advance options like Background Processing and Security policies. This tab is only available to users with the `gravityforms_view_settings` capability.

Below is the list of settings available in the General tab, with a brief description about what each is for.

### Default Template
* Use this option to set the default template for all [individual PDFs](setup-pdf.md) (templates control the PDF design and layout). Gravity PDF comes with **four completely-free templates** for you to choose from. Click the `Manage` button to view a preview of all available designs.
* The default template is *Zadani* – a minimalist business-style template that will generate a well-spaced document great for printing. Additional templates can be purchased from the [template shop](https://gravitypdf.com/template-shop/) and [installed through the PDF Template Manager](pdf-template-manager.md).
* Developers with HTML, CSS and PHP knowledge can [create their own designs and layouts](../developers/start-customising.md). Alternatively, the Gravity PDF team offers [a Bespoke PDF service](http://gravitypdf.com/integration-services/) for those who want us to build it for them – we can even populate existing PDF documents (not available in the free plugin).

### Default Font Type
* Use this option to set the default font for all [individual PDFs](setup-pdf.md). Gravity PDF ships with fonts for the majority of languages worldwide and uses the unicode typeface *DejaVu Sans Condensed* by default. For languages that aren't supported out of the box, you can use our [*Font Installer*](#fonts) to upload TTF font files for use in PDFs.

### Default Paper Size 
* Use this option to set the paper size for all [individual PDFs](setup-pdf.md). The default selection is A4 (210 x 297mm), but other common paper sizes such as US Letter and Legal are easily accessible. Also preloaded are the ISO-standard *A*, *B* and *C* paper sizes, as well as *RA* and *SRA*.
* If none of the preloaded options suit, you can select [*Custom Paper Size*](#custom-paper-size) and control the width and height in millimetres or inches.

### Custom Paper Size 
* This field is hidden until you select the *Custom Template Option* from the [*Default Paper Size*](#default-paper-size) field. It allows you to control the exact paper size of your document – in millimetres or inches.
* When displayed, this field is required and only positive numbers or float values are permitted in the width and height inputs.

### Reverse Text (RTL)
* Use this option to default the text direction for all [individual PDFs](setup-pdf.md). Many languages worldwide are written from right to left – Arabic and Hebrew script are examples of this. 
* This setting is disabled by default.

### Default Font Size 
* Use this option to set the default font size for all [individual PDFs](setup-pdf.md). 
* The default is set to 10pt.

### Default Font Colour 
* Use this option to set the default font colour for all [individual PDFs](setup-pdf.md). 
* The default is set to black (hex colour code #000000).

### Entry View 
* This option determines if the PDF on your admin [entry list page](viewing-pdfs.md) will be shown in the browser or automatically downloaded. 
* By default, this option is set to `View`.

### Background Processing 
* When enable, during form submission and resending notifications PDFs will be processed and emailed in a background task. This is very useful if you've complex PDFs, have multiple PDFs assigned to a form, want to speed up the submission process, or are resending notifications in bulk.
* When enabled, Gravity Forms Notifications configured to be sent during Form Submission with PDFs attached will be delayed and processed in the background process/task.
* This functionality requires *Background tasks* and the *WordPress Cron* are functional. [Find out more about Background Processing and its requirements](background-processing.md).
* By default, this option is disabled.

### Debug Mode 
* When enabled, this turns on shortcode debugging and PDF statistics, and turns off template header caching.
* _Shortcode debugging:_ when Debug Mode is on, users with the `gravityforms_view_entries` capability (the Administrator Role by default) will be shown debug messages when the `[gravitypdf]` shortcode cannot be generated. When Debug Mode is disabled and a shortcode error occurs, no content is shown.
* _PDF statistics:_ when Debug Mode is on the PDF will display the time spent generating the document, peak memory usage, and number of fonts used. 
* _Template header caching:_ to decrease the plugin initialisation time, we store the template header data in a transient (expires weekly) instead of reading that information from the filesystem. The cache is flushed automatically when installing or deleting a template [via the PDF Template Manager](pdf-template-manager.md), or when toggling Debug Mode. The cache is disabled when Debug Mode is on.
* By default, this option is disabled

### Security Options 

![Gravity PDF Advanced Options on the General Tab](https://resources.gravitypdf.com/uploads/2021/03/v6-Security-Settings.png)

The security settings are configured with sane defaults and, in most cases, you won't need to modify this behaviour. The [security documentation page](pdf-security.md) focuses on the finer points of the plugin's security protocols, and is worth a read before making any changes to this section.

The security settings are hidden by default and can be shown by clicking the _Security_ label or associated toggle button.

#### Logged Out Timeout
* When a logged out user attempts to view a PDF, the plugin will try and match their current IP address against the one saved with the Gravity Forms entry. If they match, they get access. However, this method isn't a secure long-term option [because IP addresses can change](http://whatismyipaddress.com/keeps-changing). To prevent unauthorised access, we implemented a timeout feature. After X amount of time, the user no longer has access to the generated PDF.
* This option has no effect on PDFs sent as attachments in Gravity Forms notifications but does affect the `[gravitypdf]` shortcode and PDF merge tags.
* By default, this timeout is set to 20 minutes. **While it is not recommended**, you can disable the timeout functionality by setting the value to zero (0).

#### Default Owner Restrictions 
* This option allows you to prevent the form entry owner – the user who filled out the Gravity Forms – from viewing the generated PDF. This included logged out and logged in users – with the exception of a logged in user who has any of the capabilities listed in the [*User Restriction*](#user-restriction) field.
* This option has no effect on PDFs sent as attachments in Gravity Forms notifications, but does affect the unsigned [Gravity PDF shortcode and mergetags](shortcodes-and-mergetags.md).
* By default, this option is disabled.

#### User Restriction
* Logged in users who do not have the `gravityforms_view_entries` capability are prevented from accessing any PDF if they aren't the original owner – the owner is who filled in the form entry originally. If you leave the setting untouched only site administrators and network super admins (if running a multisite) can view the generated PDFs. To change this behaviour, you can assign capabilities that other roles have access to. For instance, if you wanted the [*Editor* role](https://codex.wordpress.org/Roles_and_Capabilities#Editor) to have access to all PDFs you could add the `edit_pages` capability. Another option is to use a role editing plugin like [User Role Editor](https://wordpress.org/plugins/user-role-editor/) to give an existing role the `gravityforms_view_entries` capability. Choose the best solution for your use-case.
* This setting has no effect on PDFs sent as attachments in Gravity Forms notifications or [signed PDFs](@TODO), but does affect the unsigned [Gravity PDF shortcode and mergetags](shortcodes-and-mergetags.md).
* More information about WordPress roles and capabilities [can be found in the WordPress codex](https://codex.wordpress.org/Roles_and_Capabilities).

## License Tab 

![A view of the License tab](https://resources.gravitypdf.com/uploads/2021/04/v6-License-Tab.png) 

If you've [purchased an extension from our store](https://gravitypdf.com/extension-shop/) and have it activated on your website, a new *License* tab will be available. This tab allows you to enter and activate your license key to receive automatic plugin updates.

## Tools Tab 

![Gravity PDF Tools Settings Page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Tools-Tab.png) 

The tools tab allows you to install/reinstall Core Fonts and manage your custom fonts. This tab is only available to users with the `gravityforms_edit_settings` capability.

### Install Core Fonts
* Will install or reinstall [the Core PDF fonts needed to correctly generated PDF documents with Gravity PDF](core-pdf-fonts.md).
* A success or failure message will be displayed on screen for each font that is installed.  
* Upon completion, if there was a problem a _retry_ link will allow you to attempt to download any fonts that failed the first time.

### Fonts 

* The font manager allows you to search, add, edit, and delete custom fonts for use with Gravity PDF
* Only TTF font files can be installed 
* When adding a new font you can upload four font variants: Regular, Italics, Bold, and Bold Italics. The appropriate variant will be used in the PDF based on the styles applied to the text.
    1. Regular = `font-weight: normal`
    1. Italics = `font-style: italic`
    1. Bold = `font-weight: bold`
    1. Bold Italics = `font-weight: bold; font-style: italic` 
* There are two required fields when adding a new font:
  1.  Font Name (only alphanumeric characters and spaces can be used)
  2.  The Regular Font Variant.
* If you do not include all variants, and the PDF needs to display text using one of the missing types, it will create a faux style based on the Regular variant.
* Review the [Font Manager documentation](custom-fonts.md) for more in-depth details on managing PDF fonts.

:::note Where is the Setup Custom Templates tool?
This has been removed from Gravity PDF in favour of developers manually copying Core templates they want to modify to the [PDF Working Directory](@TODO), much like you do with themes. [Read more about overriding templates](@TODO). 
:::

:::info Where is the Uninstaller?
Gravity PDF's uninstaller has been moved to the [Gravity Forms Uninstall page](@TODO). 
:::

## Help Tab 

![Gravity PDF Help Settings Page](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Help-Tab.png) 

If you've got a problem or aren't sure how to accomplish a task for Gravity PDF, the Help tab will allow you to search our extensive knowledgebase direct from your admin area. If you can't find what you're looking for, we also include a link [to our support ticket system](https://gravitypdf.com/support/).