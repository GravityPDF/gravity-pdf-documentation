---
title: "Previewer Documentation: How to Install and Configure"
sidebar_label: "Previewer"
description: "Previewer allows generated PDFs to be previewed on-screen before a Gravity Forms submission. It includes live reloading and watermark support."
---

![Previewer add-on](https://resources.gravitypdf.com/uploads/edd/2017/08/cover-artwork-1.png)

*Previewer* is a premium plugin for Gravity PDF that allows the user to review the PDF(s) before the form has been submitted. It's a perfect tool for providing an on-screen preview of the document to a user before the form is submitted. The extension goes hand-in-hand [with a bespoke PDF](https://gravitypdf.com/integration-services/) or one of [our premium PDF templates](https://gravitypdf.com/store/#templates).

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

This extension adds a new field called **PDF Preview** to the [Gravity Forms Editor](https://docs.gravityforms.com/create-a-new-form/) and can be found under the **Advanced Fields** section. Before you can setup the field, you first need to [configure a PDF on the form](../users/setup-pdf.md).

Once you've added the *PDF Preview* field to the form, you have a number of settings that can be used to change the look and feel of the _PDF Preview_ field.

![Preview Options](https://resources.gravitypdf.com/uploads/2022/03/v6.2-Previewer-Add-On.png)

### Common Settings

The *PDF Previewer* field supports the following common Gravity Forms settings:

- [Field Label](https://docs.gravityforms.com/common-field-settings/#h-field-label)
- [Description](https://docs.gravityforms.com/common-field-settings/#h-description)
- [Custom CSS Class](https://docs.gravityforms.com/common-field-settings/#h-custom-css-class)
- [Conditional Logic](https://docs.gravityforms.com/common-field-settings/#h-conditional-logic-fly-out)

### PDF to Preview  

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

Select the PDF that the end user will be able to preview. This dropdown setting allows you to choose any of the active PDFs [configured on the form](../users/setup-pdf.md). 

### Download Preview

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

When enabled, a download button will be included in the _PDF Preview_ toolbar so a user can download a copy of the document before form submission.

For security reasons, after a PDF is downloaded the file is automatically deleted from the server. To download the PDF a second time a user may need to use the toolbar refresh action (depends on the browser).

This setting is disabled by default.

### Appearance

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

Select a light or dark appearance for the PDF viewer, or automatically choose the appearance using the device defaults.

The default Appearance is set to _Automatic_

### Zoom Level

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

Control the standard zoom level to use when a PDF is first loaded into the viewer. You can choose an arbitrary zoom level between 50% and 400%. Alternatively, set to _Page Width_ to make the PDF take up the full width of the viewer container, or _Page Fit_ to show the entire first page within the viewer content area. _Actual Size_ is an alias for 100%.

The default Zoom Level is set to _Page Width_

### Page Scrolling

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

Display the pages of a PDF vertically or horizontally in the viewer. 

_Page Scrolling_ defaults to _Vertical_

### Spread

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

Display PDF pages with an odd or even spread in the PDF viewer. That is to say, pages will be displayed side-by-side in the PDF Viewer, like a book. The _Odd Spread_ begins page 1 on the left and page 2 on the right. While an _Even Spread_ begins with page 2 on the left and page 3 on the right. This pattern repeats until all the pages are displayed.

This setting is only available when _Page Scrolling_ is set to _Vertical_. The default _Spread_ is set to _No Spread_.

### Preview Height

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

The height in pixels the PDF viewer should be displayed on the front-end of the website using. The width is always set to 100% to take up the full width of its container element.

The default height is 600px.

### Watermark

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

When enabled, the _Watermark Text_ is overlaid diagonally on each page of PDF displayed in the viewer. You can change the font of the text watermark using the _Watermark Font_ dropdown setting.

### Disable Right-Click Protection

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

By default, users cannot right-click on PDF pages to access the context menu. This prevents people saving the page of the document as an image, which some browsers support. You can turn this protection feature off by toggling on this setting.

### Disable Text-Copying Protection

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

By default, users cannot copy any text on PDF pages. Enable this setting to render the text in the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), making it selectable for users and providing better accessibility for Screen Readers.

## Multiple Previews

@TODO - VIDEO OF SETTING SELECTION AND FRONT-END OUTPUT

If you've got multiple PDFs configured on a form you may want to allow the end user to preview each of those documents before form submission. You can add multiple *PDF Preview* fields to the form and adjust the _PDF to Preview_ setting to display your documents.

### Gravity Flow

The *Previewer* is fully-functional [with the Gravity Flow User Input step](https://gravityflow.io/?ref=12), including when using conditional logic on the Previewer or manually selecting which fields to display. 

**It's not currently possible to display the _PDF Preview_ field during the Approval Step.**

### File Upload Limitations 

If using the File Upload field with the Multi-File Upload option disabled, the Previewer will need to be on a different page in the form ([using Gravity Forms Page field](https://docs.gravityforms.com/page-break/)) for those uploads to display in the PDF preview. This is a limitation of how the File Upload field works.

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

### PDF Security in Previewer 

By default, when you've [allowed your user to download the PDF via the Previewer](previewer-add-on.md#download-preview) the PDF Security settings are disabled. To use the security [you've set in the PDF settings](../users/setup-pdf.md#enable-pdf-security), include the following snippet in your active theme's functions.php file:

```
add_filter( 'gfpdf_previewer_enable_pdf_security', '__return_false' );
```
