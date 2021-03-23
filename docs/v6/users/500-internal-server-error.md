---
title: "500 Internal Server Error and Gravity PDF"
sidebar_label: "500 Internal Server Error"
description: "The usual cause of a 500 Internal Server error with Gravity PDF is a lack of WP Memory but other problems may be cause it. Find out how to debug and fix."
---

The usual cause of a 500 Internal Server error with Gravity PDF is a lack of WP Memory. So first, [try increasing this to 256MB or higher](increasing-memory-limit.md) and see if that resolves your issue. 

The next most common cause is caused by the Gravity PDF installation not completing correctly. You can check if this is the case by going to your WP Admin Plugins page and then deactivating and deleting Gravity PDF. Once done, [follow the usual plugin installation steps](installation.md#automatic) to reinstall Gravity PDF and check if the problem persists. 

If the issue isn't resolved, you need to do some debugging. Try setting `WP_DEBUG` to `true` in your wp-config.php file (you'll need to do this over (S)FTP or with your cPanel File Manager) and [view the PDF via the admin area](viewing-pdfs.md). The true cause of the error should be displayed on the screen, and help you to resolve the problem. If the error doesn't appear on the screen another plugin could be stopping it from being displayed. You can easily check by temporarily disabling all plugins except Gravity Forms and Gravity PDF and viewing the PDF again. 

If you aren't sure how to fix the error yourself [get in touch with our friendly support team](https://gravitypdf.com/support/#contact-support).
