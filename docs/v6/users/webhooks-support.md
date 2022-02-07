---
title: "Webhooks Add-On Support"
sidebar_label: "Webhooks Support"
description: "Gravity PDF fully integrates with Gravity Forms Webhooks add-on, so you can include the PDF URL(s) with your API calls."
---

import ResponsiveEmbed from ’react-responsive-embed’

![Gravity Forms Webhooks Add-On](https://resources.gravitypdf.com/uploads/2021/04/v6-GF-Webhook-Add-On.png)

[Gravity Forms Webhooks add-on](https://www.gravityforms.com/add-ons/webhooks/) allows you to configure and send form data to external APIs. Gravity PDF fully integrates with the Webhooks Add-On so you can include the PDF URL(s) with your API calls.

### Slack and Webhooks Add-on Integration

In this 8-minute video, Gravity PDF's lead developer takes you through using the Gravity Forms Webhooks Add-on and sending messages to Slack with the Gravity PDF URL included.

<ResponsiveEmbed src=“https://player.vimeo.com/video/671783546” allowfullscreen /> 

## Request Body

[A key setting of the Webhooks add-on is _Request Body_](https://docs.gravityforms.com/triggering-webhooks-form-submissions/#request-body), which is how you refine what data is sent with a request. You've the option to include all fields or select individual fields, and Gravity PDF works with both options.

## All Fields

![All Fields enabled](https://resources.gravitypdf.com/uploads/2021/04/v6-Request-Body-All-Fields.png)

Gravity Forms will send the entire unformatted entry with the request. Any active PDFs configured on the form, which also passes [the current entry conditional logic](setup-pdf.md#conditional-logic), will be added to the request body.

The key used for the individual PDFs uses the format `gpdf_{ID}`, where `{ID}` is the [PDF Setting ID](shortcodes-and-mergetags.md#id-required). 

```
array (
    ...
    'gpdf_6048493b8acce' => 'https://example.test/pdf/6048493b8acce/134/'
)
```

## Select Fields

![Select Fields enabled](https://resources.gravitypdf.com/uploads/2021/04/v6-Webhooks-Request-Body-Select-Fields-e1618790189623.png)

Gravity Forms will only send the data you configure under the _Field Values_ setting. You can include Gravity PDF URLs by selecting the _Add Custom Value_ option in the Value select box and then adding an appropriate [PDF merge tag](shortcodes-and-mergetags.md#merge-tag). All [merge tag modifiers](shortcodes-and-mergetags.md#available-modifiers) are supported.

## Security

There are a number of security protocols in place to prevent unauthorised access to PDF documents. Before using this feature it's **highly recommended** you [review the documentation detailing PDF security](pdf-security.md). To allow anyone with access to the URL to view the PDF you can [enable signed PDF URLs](shortcodes-and-mergetags.md#signed). You can only use signed PDF URLs with the [Select Fields](#select-fields) webhook method.