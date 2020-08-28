---
title: "Why does it say \"Generated in X seconds\" in my PDF?"
sidebar_label: "Why does it say \"Generated in X seconds\" in my PDF?"
description: "When the `WP_DEBUG` constant is set to `true` Gravity PDF will show debug information at the bottom of the PDFs it generates."
---

[When the `WP_DEBUG` constant](https://codex.wordpress.org/WP_DEBUG) is set to `true` Gravity PDF will show debug information at the bottom of the PDFs it generates (PDF stats). If the constant `WP_DEBUG_DISPLAY` is also set, it will need to be `true` as well to display the debug information. This may look like:

```
Generated in 1.13 seconds
Compiled in 1.16 seconds (total)
Peak Memory usage 64.00 MB
Number of fonts 3
```

This is useful information [when building a custom PDF template](developer-start-customising.md) but not something you'll want enabled during production. You can disable this by setting `WP_DEBUG` to `false` in your `wp-config.php` file. 