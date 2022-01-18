---
id: 500-internal-server-error
title: "500 Internal Server Error and Gravity PDF"
sidebar_label: "500 Internal Server Error"
description: "The usual cause of a 500 Internal Server error with Gravity PDF is a lack of WP Memory, but other problems may cause it. Find out how to debug and fix."
---

The usual cause of a 500 Internal Server error with Gravity PDF is a lack of WP Memory. So first, [try increasing this to 256MB or higher](increasing-memory-limit.md) and see if that resolves your issue. 

The next most common reason is a problem with the installation or upgrade of Gravity PDF. Go to the Plugins section in WordPress admin area, deactivate and delete Gravity PDF, and then [follow the plugin installation steps](installation.md#automatic) to reinstall Gravity PDF. 

If the issue isn't resolved, you need to do some debugging. The [WP Debugging plugin by Andy Fragen](https://wordpress.org/plugins/wp-debugging/) is an easy way to enable debug mode in WordPress. All you need to do is install and activate the plugin. Once activated, [view the PDF via the admin area](viewing-pdfs.md) and check for any errors. 

If no errors appear when debug mode activated, it could be masked by another plugin. You can check by installing the [Health Check & Troubleshooting plugin](https://wordpress.org/plugins/health-check/) and enable troubleshooting mode for both Gravity Forms and Gravity PDF. [Gravity Forms has an excellent guide on how to troubleshoot using this plugin](https://docs.gravityforms.com/conflict-testing-using-health-check-plugin/#enabling-the-troubleshooting-mode-for-gravity-forms-).

If you aren't sure how to fix the error yourself [get in touch with our friendly support team](https://gravitypdf.com/support/#contact-support).
