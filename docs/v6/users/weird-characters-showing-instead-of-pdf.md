---
title: "Weird Characters Showing Instead of PDF"
sidebar_label: "Weird Characters Showing Instead of PDF"
description: "Edge cases in caching plugins can cause issues with Gravity PDF. When that happens you may see weird characters on the screen instead of your PDF."
---

![Weird characters showing up instead of PDF](https://resources.gravitypdf.com/uploads/2016/05/gzip-display-issue.png)

When rendering PDFs, Gravity PDF sets a `DONOTCACHEPAGE` constant that is suppose to prevent any caching plugin from running when we display the PDFs. We tested all popular caching plugins with Gravity PDF, and out of the box there were no issues. However, there are edge cases that can cause caching plugins to try apply cache techniques to the PDF anyway. When that happens, you may see weird characters on the screen instead of your PDF document (we narrowed this down to a Gzip Compression issue).

To test if there is a conflict between Gravity PDF and your caching plugin temporarily deactivate the caching plugin and see if the problem with the PDF persists. If the PDF starts displaying correctly, you've found the conflict. If your caching plugin allows you to manually prevent caching on certain URLs, it's straightforward to resolve by excluding the `/pdf/` URL from being cached.

![Exclude PDFs from WP Super Cache](https://resources.gravitypdf.com/uploads/2016/05/wp-super-cache.png)
_Under the Advanced Tab in WP Super Cache you can exclude PDFs by include `/pdf/` in the "Exclude Strings" section._
