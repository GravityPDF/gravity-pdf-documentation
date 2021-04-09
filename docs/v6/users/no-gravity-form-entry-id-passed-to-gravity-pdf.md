---
title: "No Gravity Forms entry ID passed to Gravity PDF"
sidebar_label: "No Gravity Forms entry ID passed to Gravity PDF"
description: ""
---

This error occurs when you [use the `[gravitypdf]` shortcode](shortcodes-and-mergetags.md#building-the-shortcode) outside of Gravity Forms AND don't pass the [entry ID to the shortcode](shortcodes-and-mergetags.md#entry-semi-optional) or the page.

The most common occurrence is when using [Gravity Forms Page Confirmation](https://docs.gravityforms.com/configuring-confirmations/#page-confirmations) (which redirects a user to an existing WordPress page). If this occurs, [please follow our guide for using the shortcode with the Page Confirmation](shortcodes-and-mergetags.md#page-confirmation).

If you want to use the shortcode outside of Gravity Forms entirely, you need to [include the `entry` attribute](shortcodes-and-mergetags.md#entry-semi-optional) with the shortcode so that Gravity PDF knows what entry it should use.