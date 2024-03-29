---
title: "Gravity Flow Support"
sidebar_label: "Gravity Flow"
description: "Gravity Flow is a powerful tool that makes building workflows and processes with Gravity Forms simple and straightforward."
---

![A screenshot of a Gravity Flow form feed being configured in the WordPress admin area. The Approval step is selected.](https://resources.gravitypdf.com/uploads/2021/04/v6-GravityFlow-Approval-Step-Screenshot.png)

<a href="https://gravityflow.io/?ref=12" rel="sponsored">The Gravity Flow plugin</a> is a powerful workflow management system which includes basic Gravity PDF integration for its Approval, User Input and Notification workflow steps. For full details on setting up Workflows in Gravity Flow [please refer to their documentation](http://docs.gravityflow.io/).

## Approval Workflow

![A screenshot with the Attach PDF(s) setting highlighted when configuring a Gravity Flow form feed in the WordPress admin area.](https://resources.gravitypdf.com/uploads/2022/03/v62.-Gravity-Flow-PDF-Attachment.png)

When setting up the Approval Workflow you'll be able to attach a PDF to the Assignee Email, Rejection Email and Approval Email notifications. To do this check the appropriate PDFs under the *Attach PDF(s)* setting. Be aware that [Gravity PDF Conditional Logic](setup-pdf.md#conditional-logic) **is not supported** and the PDF you setup will always be attached to the email.

## User Input Workflow

When setting up the User Input Workflow you can attach a PDF to the email notification. Like in the Approval Workflow, check the appropriate PDFs under the *Attach PDF(s)* setting. [Gravity PDF Conditional Logic](setup-pdf.md#conditional-logic) **is also not supported** in this Workflow.

## Notification Workflow

![A screenshot of a Gravity Flow form feed being configured in the WordPress admin area. The Notification step is selected and an Admin Notification is checked.](https://resources.gravitypdf.com/uploads/2021/03/Gravity-Flow-Notification-Workflow.png)

As this Workflow actually sends the standard Gravity Forms Notification, Gravity PDF is fully supported – including [Gravity PDF Conditional Logic](setup-pdf.md#conditional-logic). All you have to do is [configure Gravity PDF to attach PDF(s) to notifications](setup-pdf.md#notifications) and select the notification(s) you want to send in the Workflow.

## Workflow Inbox

![A screenshot of the Gravity Flow Inbox. The user is viewing a submission on the User Input step. The mouse is hover over a View PDF hyperlink in the Gravity PDF meta box.](https://resources.gravitypdf.com/uploads/2024/02/gravity-flow-index-pdf-metabox.png)

From Gravity PDF v6.8, a View/Download PDF metabox is displayed in the sidebar of the Workflow Inbox – in both the admin area and block/shortcode. The metabox will only display [for logged-in users with a valid capability](global-settings.md#user-restriction).
