---
title: "Previewer Hooks – gfpdf_previewer_field_settings"
sidebar_label: "gfpdf_previewer_field_settings"
description: ""
---

## Description

This filter will allow you to change the [Previewer field's settings](../../previewer-add-on.md#configuring) dynamically.

## Arguments

The following arguments are passed to functions that use this hook:

### settings | `object`
* a key/value object containing the current field settings
* The structure of this object is:

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

### formId | `int`
* the current form ID the Previewer field is included

### fieldId | `string`
* the ID of the current Previewer field

## Usage

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

## Install

The Javascript code needs to be included on the same page as your form. A quick way to do this is to add a HTML field to your form and then place the code snippet inside the `<script type="text/javascript"></script>` tags.