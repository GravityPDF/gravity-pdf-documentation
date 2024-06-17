---
title: "Previewer Hooks – gfpdf_previewer_page_viewer_options"
sidebar_label: "gfpdf_previewer_page_viewer_options"
description: ""
---

## Description

This filter will allow you to change the default pdf.js `PDFViewer()` options used by Previewer.

## Arguments

The following arguments are passed to functions that use this hook:

### options | `object`
*  the default options passed to `PDFViewer()` by Previewer
* The structure of the `options` object is:

```
{
    container: viewerContainer,
    eventBus,
    linkService: pdfLinkService,
    textLayerMode: disableTextCopyingProtection,
    annotationMode: disableTextCopyingProtection ? ANNOTATION_MODE.ENABLE : ANNOTATION_MODE.DISABLE
}
```

:::warning
All accepted options for `PDFViewer()` [can be found in the pdf.js source code](https://github.com/mozilla/pdf.js/blob/master/web/pdf_viewer.js#L198-L315). However, only a subset of the viewer code is used by Previewer, and changes to the options using this filter may break the plugin. Thoroughly test the functionality.
:::

### formId | `int`
* the current form ID the Previewer field is included

### fieldId | `string`
* the ID of the current Previewer field

## Usage

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

## Install

The Javascript code needs to be included on the same page as your form. A quick way to do this is to add a HTML field to your form and then place the code snippet inside the `<script type="text/javascript"></script>` tags.