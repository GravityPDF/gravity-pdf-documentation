---
title: "Previewer Plugin Documentation: How to Install and Configure"
sidebar_label: "Previewer"
description: "Previewer allows generated PDFs to be previewed on-screen before a Gravity Forms submission. It includes live reloading and watermark support."
---

import ResponsiveEmbed from 'react-responsive-embed'

![Previewer add-on](https://resources.gravitypdf.com/uploads/edd/2017/08/cover-artwork-1.png)

*Previewer* is a premium plugin for Gravity PDF that allows the user to review the Gravity PDF-generated document(s) before the form has been submitted. It's the perfect tool for providing an on-screen preview of the document(s) while users fill in you forms. The extension pairs really nicely [with a Bespoke PDF](https://gravitypdf.com/bespoke/) or one of [our premium PDF templates](https://gravitypdf.com/store/#templates).

You can purchase the *Previewer* plugin from the [Extension Shop](https://gravitypdf.com/shop/previewer-add-on/). This guide will walk you through installing and configuring *Previewer* to its full potential.

:::info
This documentation refers to version 3 of the Gravity PDF Previewer add-on. [The v2 documentation can be found here](../../v5/shop-plugin-previewer-add-on.md) and [the v1 documentation here](../../v4/shop-plugin-previewer-add-on.md).
:::

## Installation

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

:::note
The REST API (with public access) must be enabled to use this plugin.
:::

## Configuring

[![Locating the PDF Previewer field in the Form Editor](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor.png)

This extension adds a new field called **PDF Preview** to the [Gravity Forms Editor](https://docs.gravityforms.com/create-a-new-form/) and can be found under the **Advanced Fields** section (or you can use the search bar). Before you can set up the field, you need to [configure at least one PDF on the form](../users/setup-pdf.md).

[![The PDF Previewer field options in the Form Editor](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor-Field-Settings.png)](https://resources.gravitypdf.com/uploads/2022/04/2.0-Previewer-Add-On-Form-Editor-Field-Settings.png)

Once you've added the *PDF Preview* field to your form, you'll have a number of settings that can be used to change the look and feel of the viewer. The next few sections describes in detail what each setting does.

### Common Settings

The *PDF Previewer* field supports the following Gravity Forms settings:

- [Field Label](https://docs.gravityforms.com/common-field-settings/#h-field-label)
- [Description](https://docs.gravityforms.com/common-field-settings/#h-description)
- [Custom CSS Class](https://docs.gravityforms.com/common-field-settings/#h-custom-css-class)
- [Conditional Logic](https://docs.gravityforms.com/common-field-settings/#h-conditional-logic-fly-out)

Refer to the Gravity Forms documentation linked above for further information about these common settings.

### PDF to Preview

Select the PDF that the end user will be able to preview. This dropdown setting allows you to choose any of the active PDFs [configured on the form](../users/setup-pdf.md).

<ResponsiveEmbed src="https://player.vimeo.com/video/694720548?dnt=1" allow="fullscreen" allowfullscreen />

### Download Preview

When enabled, a download button will be included in the _PDF Preview_ toolbar so a user can download a copy of the document before form submission.

For security reasons, after a PDF is downloaded the file is automatically deleted from the server. To download the PDF a second time a user may need to [use the toolbar refresh action](#pdf-viewer) first, but this is browser dependant.

This setting is disabled by default.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720230?dnt=1" allow="fullscreen" allowfullscreen />

### Appearance

Select a light or dark appearance for the PDF viewer, or choose automatic to use the end-user's device settings.

The default Appearance is set to _Automatic_

<ResponsiveEmbed src="https://player.vimeo.com/video/694719979?dnt=1" allow="fullscreen" allowfullscreen />

### Zoom Level

Control the standard zoom level to use when a PDF is first loaded into the viewer. You can choose an arbitrary zoom level between 50% and 400%. Alternatively, set to _Page Width_ to make the PDF take up the full width of the viewer container, or _Page Fit_ to show the entire first page within the viewer content area. _Actual Size_ is an alias for 100%.

The default Zoom Level is set to _Page Width_

<ResponsiveEmbed src="https://player.vimeo.com/video/694720933?dnt=1" allow="fullscreen" allowfullscreen />

### Page Scrolling

Display the pages of a PDF vertically or horizontally in the viewer.

_Page Scrolling_ defaults to _Vertical_

<ResponsiveEmbed src="https://player.vimeo.com/video/694720465?dnt=1" allow="fullscreen" allowfullscreen />

### Spread

Display PDF pages with an odd or even spread in the PDF viewer. When enabled, pages will be displayed side-by-side in the PDF viewer, like a book. The _Odd Spread_ begins page 1 on the left and page 2 on the right. While an _Even Spread_ begins with page 2 on the left and page 3 on the right. This pattern repeats until all the pages are displayed.

This setting is only available when _[Page Scrolling](#page-scrolling)_ is set to _Vertical_. The setting defaults to _No Spread_.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720700?dnt=1" allow="fullscreen" allowfullscreen />

### Preview Height

The height in pixels the PDF viewer should be displayed on the front-end of the website using. The width is always set to 100% to take up the full width of its container element.

The default height is 600px.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720595?dnt=1" allow="fullscreen" allowfullscreen />

### Watermark

<ResponsiveEmbed src="https://player.vimeo.com/video/694720778?dnt=1" allow="fullscreen" allowfullscreen />

When enabled, _Watermark Text_ youu define is overlaid diagonally on each page of PDF displayed in the viewer. You can change the font of the text watermark using the _Watermark Font_ dropdown setting.

The _Watermark_ setting is disabled by default. When it is enabled, the text watermark will override any watermark settings [configured by the Gravity PDF Watermark extension](watermark-add-on.md). When disabled, the Gravity PDF Watermark settings will be preserved.

### Disable Right-Click Protection

By default, users cannot right-click on PDF pages to access the context menu. This prevents people saving the page of the document as an image (which some browsers support). You can turn this protection feature off by toggling on this setting.

<ResponsiveEmbed src="https://player.vimeo.com/video/694719993?dnt=1" allow="fullscreen" allowfullscreen />

### Disable Text-Copying Protection

By default, users cannot copy any text on PDF pages and links are not functional/clickable. Enable this setting to:

1. Render the text in the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), making it selectable for users, and providing better accessibility for Screen Readers.
2. Enable internal and external links in the PDF, so they are functional/clickable.
3. Change the default cursor action from [grab-scroll feature](#grab-scroll) to text selection (grab-scroll can still be used when holding the spacebar key). 

<ResponsiveEmbed src="https://player.vimeo.com/video/694720034?dnt=1" allow="fullscreen" allowfullscreen />

## PDF Viewer

The PDF viewer is designed to be simple and intuitive for end users to view the generated PDF documents. It works across all modern devices and includes touch support (eg. pinch zoom). There are minimal controls in the toolbar to help people interact with the PDF. These include:

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

You can scroll both vertical and horizontal with ease by grabbing (click-hold or touch-hold) a page of the PDF and moving your pointer on the screen. When you [disable text-copying protection](#disable-text-copying-protection) this feature is also disabled and only toggled on when you hold the spacebar key.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720294?dnt=1" allow="fullscreen" allowfullscreen />

## Multiple Previews

If you've multiple PDFs configured on a form you can allow users to preview each of those documents. Add multiple *PDF Preview* fields to the form and adjust the _[PDF to Preview](#pdf-to-preview)_ setting to display each document. You can even include the fields in columns [using Gravity Forms Drag and Drop column feature](../users/columns.md).

<ResponsiveEmbed src="https://player.vimeo.com/video/694720365?dnt=1" allow="fullscreen" allowfullscreen />

## Right to Left (RTL) Mode

If the PDF selected in _[PDF to Preview](#pdf-to-preview)_ has [RTL enabled](../users/setup-pdf.md#reverse-text-rtl) the order of pages will change if:

1. [Spread](#spread) is enabled: pages displayed side-by-side will be reversed (page 3 on the left and page 2 on the right).
2. [Page Scrolling](#page-scrolling) is set to _Horizontal_: the order of pages will be reversed and the scroll bar will default to the far right.

If the _WordPress Site Language_ setting (found on the Settings -> General admin page) is set to a RTL language the viewer zoom dropdown will be reversed, with the text on the right and the chevron on the left.

<ResponsiveEmbed src="https://player.vimeo.com/video/694720630?dnt=1" allow="fullscreen" allowfullscreen />

## Gravity Flow

The *Previewer* is fully-functional <a href="https://gravityflow.io/?ref=12" rel="sponsored">with the Gravity Flow User Input step</a>, including when using conditional logic on the Previewer or manually selecting which fields to display.

**It's not currently possible to display the _PDF Preview_ field during the Approval Step.**

## Translations

The *Previewer* plugin includes the following languages out of the box:

* English
* French
* Spanish
* German
* Chinese^
* Dutch^
* Portuguese^
* Russian^

If you'd like to translate the plugin into your own language, or change the existing translations, [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/). **Note**: the text domain for _Previewer_ is `gravity-pdf-previewer`.

^ We are testing the accuracy of AI / machine learning for these translations.

## File Upload Limitations

If using the standard File Upload field **without** having the Multi-File Upload option enabled, the Previewer won't be able to recognise the file if included on the same page in the form. To workaround this limitation you can either enable the Multi-File Upload feature (set Max Files to 1) or place the Previewer on a different page in the form ([using Gravity Forms Page field](https://docs.gravityforms.com/page-break/)).

## Upgrade from v2

Users who use the out-of-the-box features of _Previewer_ should have a seamless upgrade experience to v3. There are only two changes in v3 that might cause an issue for some users.

These changes include:

1. The [Gravity PDF Watermark extension](watermark-add-on.md) will apply any configured text or image watermark if the [Previewer Watermark feature is disabled](#watermark). To bypass the new functionality, you may enable the Previewer Watermark feature and set the Watermark Text to an empty space ` ` character. Save the form when done and then verify no watermark is displayed in the Previewer.

2. [CSS variables were introduced in v2](../../v5/shop-plugin-previewer-add-on.md#css-variables) which allowed developers to more easily change the Previewer UI. Unfortunately we didn't prefix these variables, and they could cause conflicts with other plugins that used variables with the same name. In v3 we've renamed all CSS variables defined by the plugin, prefixed each with `gpdf-`, and added more variables for greater control of the design. If you've made changes to the default CSS variable value you will need to update your codebase to be v3-compatible. [See the full list of CSS variables defined in v3](#css-variables).

## Developers

### Conditionally Show Content

To conditionally display content in the PDF when used in the context of the PDF viewer you can use the `DOING_PDF_PREVIEWER` constant in your [custom PDF template](../developers/first-custom-pdf.md).

For example:

```php
if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
    echo 'This content will only show when the PDF is generated for the Previewer';
}

if ( ! defined( 'DOING_PDF_PREVIEWER' ) ) {
    echo 'This content will only show when the PDF is NOT generated for the Previewer';
}

echo 'This content will show regardless...';
```

### Hooks

#### PHP

##### gfpdf_post_save_pdf

If using the PHP hook [gfpdf_post_save_pdf](../developers/actions/gfpdf_post_save_pdf.md), it will be triggered every time a PDF in the viewer is generated. If this isn't the desired effect, use the constant check to circumvent this behaviour in your code:

```php
add_action( 'gfpdf_post_save_pdf', function( $pdf_path, $filename, $settings, $entry, $form ) {

    /* Don't run this hook when the PDF Previewer is being used */
    if ( defined( 'DOING_PDF_PREVIEWER' ) && DOING_PDF_PREVIEWER ) {
        return;
    }
   
    /* Do other actions here */
   
}, 10, 5 );
```

#### Javascript

These hooks can be used to change the how the Previewer field functions in the form. The Javascript code needs to be included on the same page as your form. A really quick way to apply them is to add a HTML field to your chosen form and then place the code inside `<script type="text/javascript"></script>` tags.

##### gfpdf_previewer_field_settings

This filter will allow you to change the [Previewer field's settings](#configuring) dynamically.

**Arguments**

* `settings` (object): a Javascript key/value object containing the current field settings
* `formId` (int): the current form ID the Previewer field is included
* `fieldId` (string): the ID of the current Previewer field

The structure of the `settings` object is:

```
{
   download: true,
   height: "600",
   pageScrolling: "vertical",
   rightClickProtection: false,
   rtl: false,
   spread: "none",
   textCopyingProtection: false,
   theme: "auto",
   zoomLevel: "page-fit"
}
```

**Examples**

This example will override the Previewer height and set it to 200px for any instance:

```js
gform.addFilter('gfpdf_previewer_field_settings', function(settings, formId, fieldId) {
   settings.height = '200'

   return settings;
}, 10, 3);
```

You can also limit the filter to a specific form:

```js
gform.addFilter('gfpdf_previewer_field_settings', function(settings, formId, fieldId) {
   if(formId === 5) {
      settings.height = '200'
   }

   return settings;
}, 10, 3);
```

Or a specific form field:

```js
gform.addFilter('gfpdf_previewer_field_settings', function(settings, formId, fieldId) {
  if(formId === 5 && fieldId === '7') {
    settings.height = '200'
  }

  return settings;
}, 10, 3);
```

##### gfpdf_previewer_skip_auto_refresh

This filter will allow you to disable the auto-refresh feature of the Previewer.

**Arguments**

* `action` (bool): If true the auto-refresh feature is turned off. If false (default), it will be turned on
* `formId` (int): the current form ID the Previewer field is included
* `fieldId` (string): the ID of the current Previewer field

**Examples**

This example will disable auto-refresh for all Previewer instances:

```js
gform.addFilter('gfpdf_previewer_skip_auto_refresh', function(action, formId, fieldId) {
  return true;
}, 10, 3);
```

You can also limit the filter to a specific form:

```js
gform.addFilter('gfpdf_previewer_skip_auto_refresh', function(action, formId, fieldId) {
  if(formId === 5) {
    return true;
  }

  return action;
}, 10, 3);
```

Or a specific form field:

```js
gform.addFilter('gfpdf_previewer_skip_auto_refresh', function(action, formId, fieldId) {
  if(formId === 5 && fieldId === '7') {
    return true;
  }

  return action;
}, 10, 3);
```

##### gfpdf_previewer_page_viewer_options

This filter will allow you to change the default pdf.js `PDFViewer()` options used by Previewer.

:::warning
While the accepted options for `PDFViewer()` [can be found in the pdf.js source code](https://github.com/mozilla/pdf.js/blob/master/web/pdf_viewer.js#L198-L315), only a subset of the viewer code is used for Previewer. Any changes to the options using this filter may break Previewer, so do thorough testing if you use it.
:::

**Arguments**

* `options` (object): The default options passed to `PDFViewer()` by Previewer
* `formId` (int): the current form ID the Previewer field is included
* `fieldId` (string): the ID of the current Previewer field

The structure of the `options` object is:

```
{
    container: viewerContainer,
    eventBus,
    linkService: pdfLinkService,
    textLayerMode: disableTextCopyingProtection,
    annotationMode: disableTextCopyingProtection ? ANNOTATION_MODE.ENABLE : ANNOTATION_MODE.DISABLE
}
```

**Examples**

This example will make any links included in the PDF clickable, regardless of whether [text copying protection](#disable-text-copying-protection) is active/inactive:

```js
gform.addFilter('gfpdf_previewer_page_viewer_options', function(options, formId, fieldId) {
  options.annotationMode = 1;

  return options;
}, 10, 3);
```

You can also limit the filter to a specific form:

```js
gform.addFilter('gfpdf_previewer_page_viewer_options', function(options, formId, fieldId) {
  if (formId === 5) {
    options.annotationMode = 1;
  }

  return options;
}, 10, 3);
```

Or a specific form field:

```js
gform.addFilter('gfpdf_previewer_page_viewer_options', function(options, formId, fieldId) {
  if (formId === 5 && fieldId === '7') {
    options.annotationMode = 1;
  }

  return options;
}, 10, 3);
```

##### gfpdf_previewer_current_form_data

This filter will allow you to manipulate the form data before it is sent to the server so the preview PDF can be generated.

**Arguments**

* `data` ([FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)): the object containing all the form information extracted from `form`
* `form` ([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)): the current form element where `data` is built from

**Examples**

This example will add a new key to `FormData` (or update a key if it already exists). Any new keys will be available via the `$_POST` superglobal when the PDF is generated.

```js
gform.addFilter('gfpdf_previewer_current_form_data', function(data, form) {
  data.append('name', 'value');

  return data;
}, 10, 2);
```

You can also delete a key/field from `FormData`:

```js
gform.addFilter('gfpdf_previewer_current_form_data', function(data, form) {
  data.delete('input_7');

  return data;
}, 10, 2);
```

If you want to find out what information is being sent to the previewer API:

```js
gform.addFilter('gfpdf_previewer_current_form_data', function(data, form) {
  for (const pair of data.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }

  return data;
}, 10, 2);
```

### CSS Variables

The following CSS variables are defined by the plugin and are available to easily customize the color scheme of both light and dark-mode viewers.

```css
:root {
  --gpdf-prev-dir-factor: 1;
  --gpdf-prev-scale-select-container-width: 140px;
  --gpdf-prev-scale-select-overflow: 22px;
  --gpdf-prev-toolbar-icon-opacity: 0.7;
  --gpdf-prev-main-color: rgba(12, 12, 13, 1);
  --gpdf-prev-body-bg-color: rgba(190, 190, 190, 1);
  --gpdf-prev-light-mode-viewer-bg-color: #bebebe;
  --gpdf-prev-light-mode-refresh-button-hover-color: #c3c2c2;
  --gpdf-prev-scrollbar-color: auto;
  --gpdf-prev-scrollbar-bg-color: auto;
  --gpdf-prev-toolbar-icon-bg-color: rgba(0, 0, 0, 1);
  --gpdf-prev-toolbar-icon-hover-bg-color: rgba(0, 0, 0, 1);
  --gpdf-prev-toolbar-bg-color: rgba(249, 249, 250, 1);
  --gpdf-prev-toolbar-border-color: rgba(204, 204, 204, 1);
  --gpdf-prev-button-hover-color: rgba(221, 222, 223, 1);
  --gpdf-prev-toggled-btn-color: rgba(0, 0, 0, 1);
  --gpdf-prev-toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
  --gpdf-prev-toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
  --gpdf-prev-dropdown-btn-bg-color: rgba(215, 215, 219, 1);
  --gpdf-prev-separator-color: rgba(0, 0, 0, 0.3);
  --gpdf-prev-field-color: rgba(6, 6, 6, 1);
  --gpdf-prev-field-bg-color: rgba(255, 255, 255, 1);
  --gpdf-prev-field-border-color: rgba(187, 187, 188, 1);
  --gpdf-prev-doorhanger-bg-color: rgba(255, 255, 255, 1);
  --gpdf-prev-doorhanger-border-color: rgba(12, 12, 13, 0.2);
  --gpdf-prev-doorhanger-hover-color: rgba(12, 12, 13, 1);
  --gpdf-prev-doorhanger-hover-bg-color: rgba(237, 237, 237, 1);
  --gpdf-prev-dialog-button-border: 0 none;
  --gpdf-prev-dialog-button-hover-bg-color: rgba(12, 12, 13, 0.3);
  --gpdf-prev-loading-icon: url(../images/loading.svg);
  --gpdf-prev-toolbar-button-menu-arrow-icon: url(../images/toolbar-button-menu-arrow.svg);
  --gpdf-prev-toolbar-button-page-up-icon: url(../images/toolbar-button-page-up.svg);
  --gpdf-prev-toolbar-button-page-down-icon: url(../images/toolbar-button-page-down.svg);
  --gpdf-prev-toolbar-button-zoom-out-icon: url(../images/toolbar-button-zoom-out.svg);
  --gpdf-prev-toolbar-button-zoom-in-icon: url(../images/toolbar-button-zoom-in.svg);
  --gpdf-prev-toolbar-button-download-icon: url(../images/toolbar-button-download.svg);
  --gpdf-prev-toolbar-button-refresh-icon: url(../images/refresh.svg);
  --gpdf-prev-loading-color: rgba(25, 25, 25, 1);
  --gpdf-prev-dark-mode-viewer-bg-color: rgb(75, 75, 75, 1);
  --gpdf-prev-dark-mode-toolbar-bg-color: rgba(45, 45, 45, 1);
  --gpdf-prev-dark-mode-toolbar-border-color: rgba(0, 0, 0, 0.35);
  --gpdf-prev-dark-mode-field-bg-color: rgba(75, 75, 75, 1);
  --gpdf-prev-dark-mode-field-border-color: rgba(0, 0, 0, 0.32);
  --gpdf-prev-dark-mode-field-color: rgba(235, 235, 235, 1);
  --gpdf-prev-dark-mode-toolbar-text-color: rgba(242, 242, 242, 1);
  --gpdf-prev-dark-mode-button-hover-color: rgba(95, 95, 95, 1);
  --gpdf-prev-dark-mode-field-bg-color-hover: rgba(95, 95, 95, 1);
  --gpdf-prev-dark-mode-loading-color: rgba(235, 235, 235, 1);
  --gpdf-prev-dark-mode-loading-btn-border-color: rgba(235, 235, 235, 1);
  --gpdf-prev-dark-mode-loading-btn-bg-color: rgba(95, 95, 95, 1);
  --gpdf-prev-dark-mode-split-toolbar-separator-color: #848383;
  --gpdf-prev-field-focus: rgba(10, 132, 255, 1);
  --gpdf-prev-toolbar-font-size: 12px;
  --gpdf-prev-toolbar-input-font-size: 12px;
  --gpdf-prev-toolbar-small-screen-input-font-size: 18px;
  --gpdf-prev-toolbar-responsive-height: 47px;
  --gpdf-prev-toolbar-small-screen-font-size: 15px;
  --gpdf-prev-toolbar-responsive-icon-size: 20px;
  --gpdf-prev-toolbar-responsive-button-size: 20px;
  --gpdf-prev-toolbar-responsive-select-pointer-top: 10px;
  --gpdf-prev-toolbar-responsive-buttons-top-padding: 0px;
  --gpdf-prev-toolbar-responsive-label-top-padding: 13px;
  --gpdf-prev-toolbar-page-number-input-box-width: 45px;

  --gpdf-prev-xfa-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");

  --gpdf-prev-focus-outline: solid 2px blue;
  --gpdf-prev-hover-outline: dashed 2px blue;
  --gpdf-prev-freetext-line-height: 1.35;
  --gpdf-prev-freetext-padding: 2px;
 
  --gpdf-prev-viewer-container-height: 0;
  --gpdf-prev-pdf-viewer-padding-bottom: 0;
  --gpdf-prev-page-margin: 1px auto -8px;
  --gpdf-prev-page-border: 9px solid transparent;
  --gpdf-prev-page-border-image: url(../images/shadow.png) 9 9 repeat;
  --gpdf-prev-spread-horizontal-wrapped-margin-lr: -3.5px;
  --gpdf-prev-scale-factor: 1;
}

[dir="rtl"]:root {
  --gpdf-prev-dir-factor: -1;
}

@media (forced-colors: active) {
  :root {
    --gpdf-prev-focus-outline: solid 3px ButtonText;
    --gpdf-prev-hover-outline: dashed 3px ButtonText;
  }

  .xfaLayer *:required {
    outline: 1.5px solid selectedItem;
  }
}

@media screen and (forced-colors: active) {
  :root {
    --gpdf-prev-button-hover-color: Highlight;
    --gpdf-prev-doorhanger-hover-bg-color: Highlight;
    --gpdf-prev-toolbar-icon-opacity: 1;
    --gpdf-prev-toolbar-icon-bg-color: ButtonText;
    --gpdf-prev-toolbar-icon-hover-bg-color: ButtonFace;
    --gpdf-prev-toggled-btn-color: HighlightText;
    --gpdf-prev-toggled-btn-bg-color: LinkText;
    --gpdf-prev-doorhanger-hover-color: ButtonFace;
    --gpdf-prev-doorhanger-border-color-whcm: 1px solid ButtonText;
    --gpdf-prev-doorhanger-triangle-opacity-whcm: 0;
    --gpdf-prev-dialog-button-border: 1px solid Highlight;
    --gpdf-prev-dialog-button-hover-bg-color: Highlight;
    --gpdf-prev-dialog-button-hover-color: ButtonFace;
    --gpdf-prev-field-border-color: ButtonText;
    --gpdf-prev-pdf-viewer-padding-bottom: 9px;
    --gpdf-prev-page-margin: 8px auto -1px;
    --gpdf-prev-page-border: 1px solid CanvasText;
    --gpdf-prev-page-border-image: none;
    --gpdf-prev-spread-horizontal-wrapped-margin-lr: 3.5px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --gpdf-prev-main-color: rgba(249, 249, 250, 1);
    --gpdf-prev-scrollbar-color: rgba(121, 121, 123, 1);
    --gpdf-prev-scrollbar-bg-color: rgba(35, 35, 39, 1);
    --gpdf-prev-toolbar-icon-bg-color: rgba(255, 255, 255, 1);
    --gpdf-prev-toolbar-icon-hover-bg-color: rgba(255, 255, 255, 1);
    --gpdf-prev-toolbar-bg-color: rgba(56, 56, 61, 1);
    --gpdf-prev-toolbar-border-color: rgba(12, 12, 13, 1);
    --gpdf-prev-button-hover-color: rgba(102, 102, 103, 1);
    --gpdf-prev-toggled-btn-color: rgba(255, 255, 255, 1);
    --gpdf-prev-toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
    --gpdf-prev-toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
    --gpdf-prev-dropdown-btn-bg-color: rgba(74, 74, 79, 1);
    --gpdf-prev-separator-color: rgba(0, 0, 0, 0.3);
    --gpdf-prev-field-color: rgba(250, 250, 250, 1);
    --gpdf-prev-field-bg-color: rgba(64, 64, 68, 1);
    --gpdf-prev-field-border-color: rgba(115, 115, 115, 1);
    --gpdf-prev-doorhanger-bg-color: rgba(74, 74, 79, 1);
    --gpdf-prev-doorhanger-border-color: rgba(39, 39, 43, 1);
    --gpdf-prev-doorhanger-hover-color: rgba(249, 249, 250, 1);
    --gpdf-prev-doorhanger-hover-bg-color: rgba(93, 94, 98, 1);
    --gpdf-prev-dialog-button-hover-bg-color: rgba(115, 115, 115, 1);

    /* This image is used in <input> elements, which unfortunately means that
     * the `mask-image` approach used with all of the other images doesn't work
     * here; hence why we still have two versions of this particular image. */
    --gpdf-prev-loading-icon: url(../images/loading-dark.svg);
  }
}
```

### PDF Security in Previewer

By default, when you've [allowed your user to download the PDF via the Previewer](previewer-add-on.md#download-preview) the PDF Security settings are disabled. To use the security [you've set in the PDF settings](../users/setup-pdf.md#enable-pdf-security), include the following snippet in your active theme's functions.php file:

```
add_filter( 'gfpdf_previewer_enable_pdf_security', '__return_false' );
```
