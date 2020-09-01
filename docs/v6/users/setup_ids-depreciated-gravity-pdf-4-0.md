---
title: "\"setup_ids\" has been deprecated as of Gravity PDF 4.0"
sidebar_label: "\"setup_ids\" has been deprecated as of Gravity PDF 4.0"
description: "While Gravity PDF had a major milestone release, our Tier 2 add-on has not. The errors are caused because of deprecated code AND WP_DEBUG being true."
---

While Gravity PDF had a major milestone release, our Tier 2 add-on has not yet been updated. The errors you are seeing are caused because the Tier 2 PDFs are calling deprecated methods AND [`WP_DEBUG` is set to `true`](https://codex.wordpress.org/WP_DEBUG). While these deprecated messages aren't harmful they do prevent the PDF being generated when debugging mode is enabled.

To resolve the issue, set `WP_DEBUG` to `false` in your `wp-config.php` file.
