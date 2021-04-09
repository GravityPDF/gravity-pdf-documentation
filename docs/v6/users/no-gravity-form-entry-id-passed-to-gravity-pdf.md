---
title: "No Gravity Forms Entry ID passed to Gravity PDF"
sidebar_label: "No Entry ID Passed"
description: ""
---

If you've [Debug Mode enabled](global-settings.md#debug-mode) and are using the `[gravitypdf]` shortcode on a Post or Page on your website, you might come across the error:

```text
No Gravity Forms Entry ID passed to Gravity PDF
```

This is displayed when you [use the `[gravitypdf]` shortcode](shortcodes-and-mergetags.md#building-the-shortcode) outside of Gravity Forms and don't pass the [entry ID direct to the shortcode or via a URL parameter](shortcodes-and-mergetags.md#entry-semi-optional).

This commonly occurs when using [Page Confirmations](https://docs.gravityforms.com/configuring-confirmations/#page-confirmations), and you should [follow our shortcode Page Confirmation guide](shortcodes-and-mergetags.md#page-confirmation) to resolve.

If you want to use the shortcode outside of Gravity Forms entirely, you need to [include the `entry` attribute](shortcodes-and-mergetags.md#entry-semi-optional) so that Gravity PDF knows what entry it should use when processing the shortcode.