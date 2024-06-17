---
title: "Previewer Hooks – gfpdf_previewer_current_form_data"
sidebar_label: "gfpdf_previewer_current_form_data"
description: ""
---

## Description

This filter will allow you to manipulate the form data before it is sent to the server so the preview PDF can be generated.

## Arguments

The following arguments are passed to functions that use this hook:

### data | [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
*  the object containing all the form information extracted from `form`

### form | [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* the current form element where `data` is built from

## Usage

This example will add a new key to `FormData` (or update a key if it already exists). Any new keys will be available via the `$_POST` superglobal when the PDF preview is generated.

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

## Install

The Javascript code needs to be included on the same page as your form. A quick way to do this is to add a HTML field to your form and then place the code snippet inside the `<script type="text/javascript"></script>` tags.