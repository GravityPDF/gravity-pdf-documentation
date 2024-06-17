---
title: "Previewer Hooks – gfpdf_previewer_skip_auto_refresh"
sidebar_label: "gfpdf_previewer_skip_auto_refresh"
description: ""
---

## Description

This filter will allow you to programmatically disable the auto-refresh feature of the Previewer. 

## Arguments

The following arguments are passed to functions that use this hook:

### action | `bool`
*  If true the auto-refresh feature is turned off. If false (default), it will be turned on

### formId | `int`
* the current form ID the Previewer field is included

### fieldId | `string`
* the ID of the current Previewer field

## Usage

This example will programmatically disable auto-refresh for all Previewer instances:

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

## Install

The Javascript code needs to be included on the same page as your form. A quick way to do this is to add a HTML field to your form and then place the code snippet inside the `<script type="text/javascript"></script>` tags.