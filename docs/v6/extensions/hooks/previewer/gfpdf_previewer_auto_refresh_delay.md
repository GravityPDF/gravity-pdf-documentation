---
title: "Previewer Hooks – gfpdf_previewer_auto_refresh_delay"
sidebar_label: "gfpdf_previewer_auto_refresh_delay"
description: ""
---

## Description

This filter allows you to change the default delay/timeout period before the Previewer auto-refreshes after a form change is detected.

## Arguments

The following arguments are passed to functions that use this hook:

### delay | `int`
* The time to wait in milliseconds before the previewer is refreshed.
* The default delay is 1000ms / 1 second

### formId | `int`
* the current form ID the Previewer field is included

### fieldId | `string`
* the ID of the current Previewer field

## Usage

This example increases the delay/timeout from 1 second to 5 seconds:

```js
gform.addFilter('gfpdf_previewer_auto_refresh_delay', function(delay, formId, fieldId) {
  return 5000;
}, 10, 3);
```

You can also limit the filter to a specific form:

```js
gform.addFilter('gfpdf_previewer_auto_refresh_delay', function(delay, formId, fieldId) {
  if(formId === 5) {
    return true;
  }

  return 5000;
}, 10, 3);
```

Or a specific form field:

```js
gform.addFilter('gfpdf_previewer_auto_refresh_delay', function(delay, formId, fieldId) {
  if(formId === 5 && fieldId === '7') {
    return true;
  }

  return 5000;
}, 10, 3);
```

## Install

The Javascript code needs to be included on the same page as your form. A quick way to do this is to add a HTML field to your form and then place the code snippet inside the `<script type="text/javascript"></script>` tags.