---
title: "Previewer Plugin Documentation: How to Install and Configure"
sidebar_label: "Previewer"
description: "Previewer allows generated PDFs to be previewed on-screen before a Gravity Forms submission. It includes live reloading and watermark support."
---

import ResponsiveEmbed from 'react-responsive-embed'

![Previewer add-on](https://resources.gravitypdf.com/uploads/edd/2017/08/cover-artwork-1.png)

*Previewer* is a premium plugin for Gravity PDF that allows the user to review the PDF(s) before the form has been submitted. It's a perfect tool for providing an on-screen preview of the document as the user fills out your form. The extension pairs really nicely [with a bespoke PDF](https://gravitypdf.com/integration-services/) or one of [our premium PDF templates](https://gravitypdf.com/store/#templates).

You can purchase the *Previewer* plugin from our [Extension Shop](https://gravitypdf.com/shop/previewer-add-on/). This guide will walk you through installing and configuring *Previewer* to its full potential.

:::info
This documentation refers to version 2.0+ of the Gravity PDF Previewer add-on. [The v1 documentation can be found here](../../v5/shop-plugin-previewer-add-on.md). 
:::

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

:::note
The REST API must be enabled to use this plugin.
:::

## Configuring 

[![Locating the PDF Previewer field in the Form Editor](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor.png)

This extension adds a new field called **PDF Preview** to the [Gravity Forms Editor](https://docs.gravityforms.com/create-a-new-form/) and can be found under the **Advanced Fields** section (or you can use the search bar). Before you can set up the field, you need to [configure at least one PDF on the form](../users/setup-pdf.md).

[![The PDF Previewer field options in the Form Editor](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor-Field-Settings.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor-Field-Settings.png)

Once you've added the *PDF Preview* field to your form, you'll have a number of settings that can be used to change the look and feel of PDF viewer. The next few sections describes in detail what each setting does.

### Common Settings

The *PDF Previewer* field supports the following Gravity Forms settings:

- [Field Label](https://docs.gravityforms.com/common-field-settings/#h-field-label)
- [Description](https://docs.gravityforms.com/common-field-settings/#h-description)
- [Custom CSS Class](https://docs.gravityforms.com/common-field-settings/#h-custom-css-class)
- [Conditional Logic](https://docs.gravityforms.com/common-field-settings/#h-conditional-logic-fly-out)

Refer to the Gravity Forms documentation linked above for further information about these common settings.

### PDF to Preview

Select the PDF that the end user will be able to preview. This dropdown setting allows you to choose any of the active PDFs [configured on the form](../users/setup-pdf.md). 

<ResponsiveEmbed src="https://player.vimeo.com/video/694720548" allow="fullscreen" allowfullscreen />

### Download Preview

When enabled, a download button will be included in the _PDF Preview_ toolbar so a user can download a copy of the document before form submission.

For security reasons, after a PDF is downloaded the file is automatically deleted from the server. To download the PDF a second time a user may need to [use the toolbar refresh action](#pdf-viewer) first, but this is browser dependant.

This setting is disabled by default.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720230" allow="fullscreen" allowfullscreen />

### Appearance

Select a light or dark appearance for the PDF viewer, or choose automatic to use the end-user's device settings.

The default Appearance is set to _Automatic_

<ResponsiveEmbed src="https://player.vimeo.com/video/694719979" allow="fullscreen" allowfullscreen />

### Zoom Level

Control the standard zoom level to use when a PDF is first loaded into the viewer. You can choose an arbitrary zoom level between 50% and 400%. Alternatively, set to _Page Width_ to make the PDF take up the full width of the viewer container, or _Page Fit_ to show the entire first page within the viewer content area. _Actual Size_ is an alias for 100%.

The default Zoom Level is set to _Page Width_

<ResponsiveEmbed src="https://player.vimeo.com/video/694720933" allow="fullscreen" allowfullscreen />

### Page Scrolling

Display the pages of a PDF vertically or horizontally in the viewer. 

_Page Scrolling_ defaults to _Vertical_

<ResponsiveEmbed src="https://player.vimeo.com/video/694720465" allow="fullscreen" allowfullscreen />

### Spread

Display PDF pages with an odd or even spread in the PDF viewer. When enabled, pages will be displayed side-by-side in the PDF viewer, like a book. The _Odd Spread_ begins page 1 on the left and page 2 on the right. While an _Even Spread_ begins with page 2 on the left and page 3 on the right. This pattern repeats until all the pages are displayed.

This setting is only available when _[Page Scrolling](#page-scrolling)_ is set to _Vertical_. The setting defaults to _No Spread_.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720700" allow="fullscreen" allowfullscreen />

### Preview Height

The height in pixels the PDF viewer should be displayed on the front-end of the website using. The width is always set to 100% to take up the full width of its container element.

The default height is 600px.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720595" allow="fullscreen" allowfullscreen />

### Watermark

<ResponsiveEmbed src="https://player.vimeo.com/video/694720778" allow="fullscreen" allowfullscreen />

When enabled, _Watermark Text_ youu define is overlaid diagonally on each page of PDF displayed in the viewer. You can change the font of the text watermark using the _Watermark Font_ dropdown setting.

The _Watermark_ setting is disabled by default.

### Disable Right-Click Protection

By default, users cannot right-click on PDF pages to access the context menu. This prevents people saving the page of the document as an image (which some browsers support). You can turn this protection feature off by toggling on this setting.

<ResponsiveEmbed src="https://player.vimeo.com/video/694719993" allow="fullscreen" allowfullscreen />

### Disable Text-Copying Protection

By default, users cannot copy any text on PDF pages. Enable this setting to render the text in the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), making it selectable for users and providing better accessibility for Screen Readers. When enabled, the [grab-scroll feature](#grab-scroll) will be turned off so that text can be selected. 

<ResponsiveEmbed src="https://player.vimeo.com/video/694720034" allow="fullscreen" allowfullscreen />

## PDF Viewer

The PDF viewer is designed to be simple and intuitive for end users to view the generated PDF documents. There are minimal controls in the toolbar to help people interact with the PDF. These include:

1. **Page Navigation** - Use the up and down arrow icons to navigate through each page of the PDF, or enter a specific page number 
2. **Zoom Level** - Use the plus and minus icons to step-zoom the PDF in or out. The dropdown has a range of zoom levels to select from to make the reading experience comfortable for any user
3. **Download** - [If enabled](#download-preview), a download icon will appear that allows a user to save a copy of the document to their computer
4. **Refresh** - an automatic refresh mechanism is used to update the PDF viewer as the form is filled out by the user, but there can be times when this isn't effective and the refresh icon will allow a manual refresh.

The toolbar items listed above match to the numbered area in the image below.

[![How the PDF viewer looks to the end user](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Toolbar.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Toolbar.png)

### Responsive Viewer

The PDF viewer will automatically adapt to the available width so that it looks fantastic on any device. For small-screen devices, or when the PDF viewer is displayed in a narrow container, the toolbar controls are enlarged to make it easier to interact with.

[![The PDF viewer on smaller screens or narrow containers](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Responsive-Layout.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Responsive-Layout.png)

## Grab Scroll

You can scroll both vertical and horizontal with ease by grabbing (click-hold or touch-hold) a page of the PDF and moving your pointer on the screen. This feature is turned off when you [disable text-copying protection](#disable-text-copying-protection) so that text can be correctly selected.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720294" allow="fullscreen" allowfullscreen />

## Multiple Previews

If you've multiple PDFs configured on a form you can allow users to preview each of those documents. Add multiple *PDF Preview* fields to the form and adjust the _[PDF to Preview](#pdf-to-preview)_ setting to display each document. You can even include the fields in columns [using Gravity Forms Drag and Drop column feature](../users/columns.md).

<ResponsiveEmbed src="https://player.vimeo.com/video/694720365" allow="fullscreen" allowfullscreen />

## Right to Left (RTL) Mode

If the PDF selected in _[PDF to Preview](#pdf-to-preview)_ has [RTL enabled](../users/setup-pdf.md#reverse-text-rtl) the order of pages will change if:

1. [Spread](#spread) is enabled: pages displayed side-by-side will be reversed (page 3 on the left and page 2 on the right).
2. [Page Scrolling](#page-scrolling) is set to _Horizontal_: the order of pages will be reversed and the scroll bar will default to the far right.

If the _WordPress Site Language_ setting (found on the Settings -> General admin page) is set to a RTL language the viewer zoom dropdown will be revered, with the text on the right and the chevron on the left. 

<ResponsiveEmbed src="https://player.vimeo.com/video/694720630" allow="fullscreen" allowfullscreen />

## Gravity Flow

The *Previewer* is fully-functional [with the Gravity Flow User Input step](https://gravityflow.io/?ref=12), including when using conditional logic on the Previewer or manually selecting which fields to display. 

**It's not currently possible to display the _PDF Preview_ field during the Approval Step.**

## Translations

The *Previewer* plugin includes the following languages out of the box:

* English
* French
* Spanish
* German

If you'd like to translate the plugin into your own language, or change the existing translations, [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/). **Note**: the text domain for _Previewer_ is `gravity-pdf-previewer`.

## File Upload Limitations 

If using the File Upload field with the Multi-File Upload option disabled, the Previewer will need to be on a different page in the form ([using Gravity Forms Page field](https://docs.gravityforms.com/page-break/)) for those uploads to display in the PDF preview. This is a limitation of how the File Upload field works.

## Upgrade from v1

Users who use the out-of-the-box features of _Previewer_ should have a seamless upgrade experience to v2, with no breaking changes. If you do have any issues, before [opening a support ticket](https://gravitypdf.com/support/https://gravitypdf.com/support/) try clear both your website cache (if using a caching plugin) and your browser cache and test again. 

The security in v2 has been enhanced and the right-click context menu has been disabled when used with the PDF viewer. If you relied on this functionality to save images of the PDF pages you will need to [toggle the associated security setting to disable](#disable-right-click-protection).

The color scheme has been tweaked, and the grey in v1 has been strengthened/sharpened to create a more pleasant viewing experience. If you would like to revert to the v1 color scheme you can add the following CSS in the Customizer's Additional CSS section:

```css 
:root {
  --dark-mode-viewer-bg-color: #7b7b7b;
  --dark-mode-toolbar-bg-color: #4a4a4a;
}
```

## Developers 

### Conditionally Show Content 

To conditionally display content in the PDF when used in the context of the PDF viewer you can use the `DOING_PDF_PREVIEWER` constant in your [custom PDF template](../developers/first-custom-pdf.md). 

For example:

```
if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
    echo 'This content will only show when the PDF is generated for the Previewer';
}

if ( ! defined( 'DOING_PDF_PREVIEWER' ) ) {
    echo 'This content will only show when the PDF is NOT generated for the Previewer';
}

echo 'This content will show regardless...';
```

### Hook: gfpdf_post_save_pdf

If using the [gfpdf_post_save_pdf hook](../developers/actions/gfpdf_post_save_pdf.md) it will be triggered every time a PDF in the viewer is generated. If this isn't the desired effect, use the constant check above to circumvent this behaviour in your code:

```php
add_action( 'gfpdf_post_save_pdf', function( $pdf_path, $filename, $settings, $entry, $form ) {

    /* Don't run this hook when the PDF Previewer is being used */
    if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
        return;
    }
    
    /* Do other actions here */
    
}, 10, 5 );
```

### CSS Variables

The following CSS variables are defined by the plugin and are available to easily customize the color scheme of both light and dark-mode viewers. 

```css 
:root {
  --viewer-bg-color: rgba(190, 190, 190, 1);

  --toolbar-icon-opacity: 0.8;
  --toolbar-main-color: rgba(12, 12, 13, 1);
  --toolbar-icon-bg-color: rgba(0, 0, 0, 1);
  --toolbar-icon-hover-bg-color: rgba(0, 0, 0, 1);
  --toolbar-bg-color: rgba(249, 249, 250, 1);
  --toolbar-border-color: rgba(0, 0, 0, 0.15);
  --toolbar-option-bg-color: rgba(255, 255, 255, 1);

  --button-hover-color: rgba(221, 222, 223, 1);
  --toggled-btn-color: rgba(0, 0, 0, 1);
  --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
  --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
  --dropdown-btn-bg-color: rgba(215, 215, 219, 1);

  --separator-color: rgba(0, 0, 0, 0.3);

  --field-color: rgba(6, 6, 6, 1);
  --field-border-color: rgba(0, 0, 0, 0.3);
  --field-bg-color: rgba(255, 255, 255, 1);
  --field-focus: rgba(10, 132, 255, 1);

  --loading-color: rgba(25, 25, 25, 1);
  --loading-btn-bg-color: rgba(215, 215, 215, 1);
  --loading-btn-border-color: rgba(25, 25, 25, 1);

  --dark-mode-viewer-bg-color: rgb(75, 75, 75, 1);

  --dark-mode-toolbar-bg-color: rgba(45, 45, 45, 1);
  --dark-mode-button-hover-color: rgba(95, 95, 95, 1);
  --dark-mode-toolbar-text-color: rgba(242, 242, 242, 1);
  --dark-mode-toolbar-border-color: rgba(0, 0, 0, 0.35);

  --dark-mode-field-bg-color: rgba(75, 75, 75, 1);
  --dark-mode-field-bg-color-hover: rgba(95, 95, 95, 1);
  --dark-mode-field-border-color: rgba(0, 0, 0, 0.32);
  --dark-mode-field-color: rgba(235, 235, 235, 1);

  --dark-mode-loading-color: rgba(235, 235, 235, 1);
  --dark-mode-loading-btn-bg-color: rgba(95, 95, 95, 1);
  --dark-mode-loading-btn-border-color: rgba(235, 235, 235, 1);
}
```

### PDF Security in Previewer 

By default, when you've [allowed your user to download the PDF via the Previewer](previewer-add-on.md#download-preview) the PDF Security settings are disabled. To use the security [you've set in the PDF settings](../users/setup-pdf.md#enable-pdf-security), include the following snippet in your active theme's functions.php file:

```
add_filter( 'gfpdf_previewer_enable_pdf_security', '__return_false' );
```
