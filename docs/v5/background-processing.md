---
title: "Generating PDFs in a Background Process for faster form submissions"
sidebar_label: "Background Processing"
description: "A big feature of Gravity PDF v5 is the ability to generate and email PDFs in a background process when a form is submitted. Why's that so important? Well, PDF generation is a resource intensive task and users could be waiting between 1-10 seconds to see your form's Confirmation page."
---

A big feature of Gravity PDF v5 is the ability to generate and email PDFs in a background process when a form is submitted. Why's that so important? Well, PDF generation is a resource-intensive task and users could be waiting between 1-10 seconds [to see your form's Confirmation page](https://docs.gravityforms.com/configuring-confirmations/) – the actual amount of time spent generating the PDFs will depend on your hosting provider, the complexity of your PDF(s) and the number of documents that need to be generated. When background processing is enabled, the PDF generation is deferred and, like magic, that wait time is significantly reduced. 

https://www.youtube.com/watch?v=BbhVfv2AD0M

Background Processing is also integrated with [Gravity Forms Resend Notification feature](https://docs.gravityforms.com/resend-notifications/) so you can bulk send Notifications with PDF attachments without your server suffering timeout or memory-related problems.

### Is your Website Compatible?

Not all websites/servers are able to use the new Background Processing feature. The best way to check is by [heading to Gravity Forms System Status page](https://docs.gravityforms.com/checking-environment-details/), locating the *WordPress Environment* section and verifying **Background tasks** has a green tick. The *WordPress Cron* or *WordPress Alternative Cron* also need to be enabled and will display "Yes" if one of them is active. 

![](https://resources.gravitypdf.com/uploads/2018/09/background-tasks.png)

If you find that either *Background tasks* or the *WordPress Cron* is disabled, [the Gravity Forms team have put together an excellent guide to assist with troubleshooting](https://docs.gravityforms.com/troubleshooting-background-issues/#admin-ajax-request-fails).
