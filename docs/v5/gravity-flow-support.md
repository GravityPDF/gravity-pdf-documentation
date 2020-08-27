---
title: "Gravity Flow Support"
sidebar_label: "Gravity Flow Support"
description: ""
---

![Gravity Flow Workflow Setup](https://resources.gravitypdf.com/uploads/2016/06/approval-step.png) 

[The Gravity Flow plugin](https://gravityflow.io/?ref=12) is a powerful workflow management system which includes basic Gravity PDF integration for its Approval, User Input and Notification workflow steps. For full details on setting up Workflows in Gravity Flow [please refer to their documentation](http://docs.gravityflow.io/).

## Approval Workflow

![Attach PDF to Workflow email](https://resources.gravitypdf.com/uploads/2016/06/attach-pdf.png)

When setting up the Approval Workflow you'll be able to attach a PDF to the Assignee Email, Rejection Email and Approval Email notifications. To do this check the *Attach PDF* checkbox and select a PDF you want included. Be aware that [Gravity PDF Conditional Logic](user-setup-pdf.md#conditional-logic) **is not supported** and the PDF you setup will always be attached to the email.

## User Input Workflow

When setting up the User Input Workflow you can attach a PDF to the email notification. Like in the Approval Workflow, click the Attach PDF checkbox and select a PDF you want included. [Gravity PDF Conditional Logic](user-setup-pdf.md#conditional-logic) **is also not supported** in this Workflow.

## Notification Workflow

![Notification Workflow](https://resources.gravitypdf.com/uploads/2016/06/notification-workflow.png) 

As this Workflow actually sends the standard Gravity Forms notification, Gravity PDF is fully supported – including Gravity PDF Conditional Logic. All you have to do is [configure Gravity PDF to attach PDF(s) to notifications](user-setup-pdf.md#notifications) and select the notification(s) you want to send in the Workflow.
