---
title: "Previewer Document: How to Install and Configure"
sidebar_label: "Previewer"
description: "Previewer allows generated PDFs to be previewed on-screen before a Gravity Form has been submitted. It includes live reloading and watermark support."
---

![Previewer add-on](https://resources.gravitypdf.com/uploads/edd/2017/08/cover-artwork-1.png)

*Previewer* is a premium plugin for Gravity PDF that allows the user to review the PDF(s) before the form has been submitted. The extension goes hand-in-hand [with a bespoke PDF](https://gravitypdf.com/integration-services/) or one of [our premium PDF templates](https://gravitypdf.com/template-shop/).

You can purchase the *Previewer* plugin from our [Extension Shop](https://gravitypdf.com/shop/previewer-add-on/). This guide will walk you through installing and configuring *Previewer* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

:::note
The REST API must be enabled to use this plugin.
:::

## Configuring 

This extension adds a new field called **PDF Preview** to the [Gravity Forms Editor](https://www.gravityhelp.com/documentation/article/creating-a-form/), and can be found under the 'Advanced Fields' section. To correctly setup, the *Previewer* field, you first need to [configure a PDF on your chosen Gravity Form](../users/setup-pdf.md).

### PDF Preview Options 

![Preview Options](https://resources.gravitypdf.com/uploads/2017/08/previewer1.1.png)

Once you've added the *PDF Preview* field to the form, you have a number of options that can be configured. The field supports the following standard Gravity Forms options:

-   Field Label
-   Description
-   Custom CSS Class
-   Conditional Logic

### Options specific to the PDF Preview field include:

#### PDF to Preview  

A dropdown that allows you to select one of the active PDFs [configured on the current Gravity Form](../users/setup-pdf.md) the end user can preview.

#### Preview Height  

The height in pixels of the preview should be displayed at. The default height is 600px.

The width of the preview will always be 100% and fill the container the form is embedded in.

#### Download Preview 

When enabled, a 'download' button will be included in the PDF Preview so the user can download the generated PDF

After a PDF is downloaded, it'll automatically be removed from the server. To download the PDF a second time, the user might need to refresh the Previewer (whether they do or not will depend on the browser they're using).

#### Watermark 

In the preview, text is overlaid diagonally on each page of the generated PDF

You can change the watermark text displayed and the font.

### Multiple Previews 
![Side by side Previews](https://resources.gravitypdf.com/uploads/edd/2017/08/two-previewers-side-by-side.png)

If you've got multiple PDFs configured on a single Gravity Form, you may want to allow the end user to preview each of those documents. You can add multiple *PDF Preview* fields to the form and display each of your configured PDFs.
**Bonus Feature:** Use Gravity Forms [CSS Ready Classes](https://www.gravityforms.com/css-ready-classes/) – like `gf_left_half` and `gf_right_half` – to display the previews side by side.

### Conditional Previews 

Conditional Logic is fully supported for the *PDF Preview* field. Set it up from the field's Advanced Tab in the Form Editor.

### Gravity Flow 

The *Previewer* is fully-functional with the Gravity Flow (version 2.0+) User Input step, including when using conditional logic on the Previewer or manually selecting which fields to display. **It's not currently possible to use the *Previewer* during the Approval Step.**

### File Upload Limitations 

If using the File Upload field with the Multi-File Upload option disabled, the Previewer will need to be on a different page in the form (using Gravity Forms Page fields) for those uploads to display in the PDF preview. This is a limitation of how the File Upload field works.

## Developers 

### Conditionally Show Content 

To conditionally display content in the PDF Preview you can use the `DOING_PDF_PREVIEWER` constant in your custom PDF template. For example:

```
if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
    echo 'This content will only show when the PDF is generated for the Previewer';
}

if ( ! defined( 'DOING_PDF_PREVIEWER' ) ) {
    echo 'This content will only show when the PDF is NOT generated for the Previewer';
}

echo 'This content will show regardless...';
```

### Blurry Background Image 

There's [a bug in PDF.js](https://github.com/mozilla/pdf.js/issues/8083) (the library we use to preview PDFs in your browser) that can cause background images to be blurry in the Previewer. There are two different workarounds available, both requiring modifications to your PDF template.
Originally, your template might have the following code:

```html
<!-- With this code there will be a blurry background in the Previewer -->
<style>
    #background {
         background: url(/path/to/image.jpg) no-repeat 0 0;
         ...other styles here...
    }
</style>

<div id="background">
    Content goes here...
</div>
```

#### Background on Single Page 

If you only need to display a background image on a single page of your PDF, adjust your template as follows:

```html
<!-- With this code there will be no blurry background in the Previewer on a Single Page -->
<style>
    #background {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
    }
</style>

<div id="background">
    <img src="/path/to/image.jpg" />
</div>

<div style="z-index: 1">
    Content goes here...
    </div>
```

#### Background on Multiple Pages 

If you need your user content to expand across multiple pages, and include your background image on each page, you can commandeer the PDF Header like so:

```html
<!-- With this code there will be no blurry background in the Previewer across all pages -->
<style>
    @page {
        header: html_MyCustomHeader;
    }

    #background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<htmlpageheader name="MyCustomHeader">
    <div id="background">
        <img src="<?php echo __DIR__; ?>/images/House.jpg" />
    </div>
</htmlpageheader>

<div style="z-index: 1">
    <h1>Content</h1>

    Other content

    <pagebreak />

    New page content
</div>
```

### PDF Security in Previewer 

By default, when you've [allowed your user to download the PDF via the Previewer](previewer-add-on.md#download-preview) the PDF Security settings are disabled. To use the security [you've set in the PDF settings](user-setup-pdf.md#enable-pdf-security), include the following snippet in your active theme's functions.php file:

```
add_filter( 'gfpdf_previewer_enable_pdf_security', '__return_false' );
```
