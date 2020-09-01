---
title: "Why does it say \"Generated in X seconds\" in my PDF?"
sidebar_label: "Why does it say \"Generated in X seconds\" in my PDF?"
description: "When the `WP_DEBUG` constant is set to `true` Gravity PDF will show debug information at the bottom of the PDFs it generates."
---

## Gravity PDF 5.1+

When [Debug Mode is enabled in the global PDF settings](global-settings.md#debug-mode), Gravity PDF will show debug information at the bottom of the PDFs it generates (PDF stats). This may look like:

    Generated in 1.13 seconds
    Peak Memory usage 64.00 MB
    Number of fonts 3

This is useful information [when building a custom PDF template](../developers/start-customising.md) but not something you'll want enabled during production. You can disable this by setting Debug Mode to `No`. 

## Gravity PDF 5.0

[When the `WP_DEBUG` constant](https://codex.wordpress.org/WP_DEBUG) is set to `true` Gravity PDF will show debug information at the bottom of the PDFs it generates (PDF stats). If the constant `WP_DEBUG_DISPLAY` is also set, it will need to be `true` as well to display the debug information. This may look like:

    Generated in 1.13 seconds
    Compiled in 1.16 seconds (total)
    Peak Memory usage 64.00 MB
    Number of fonts 3

This is useful information [when building a custom PDF template](../developers/start-customising.md) but not something you'll want enabled during production. You can disable this by setting `WP_DEBUG` or `WP_DEBUG_DISPLAY` to `false` in your `wp-config.php` file.