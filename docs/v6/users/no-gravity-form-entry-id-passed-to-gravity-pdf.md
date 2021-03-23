---
title: "No Gravity Form entry ID passed to Gravity PDF"
sidebar_label: "No Gravity Form entry ID passed to Gravity PDF"
description: ""
---

This error occurs when you [use the `[gravitypdf]` shortcode](shortcodes.md#building-the-shortcode) outside of Gravity Forms AND don't pass the [entry ID to the shortcode](shortcodes.md#entry-semi-optional) or the page.

The most common occurrence is when using [Gravity Forms Page Confirmation](https://www.gravityhelp.com/documentation/article/configuring-confirmations-in-gravity-forms/#page-confirmations) (which redirects a user to an existing WordPress page). If this occurs, [please follow our guide for using the shortcode with the Page Confirmation](shortcodes.md#page-confirmation).

If you want to use the shortcode outside of Gravity Forms entirely, you need to [include the `entry` attribute](shortcodes.md#entry-semi-optional) with the shortcode, so Gravity PDF knows what entry is being generated.