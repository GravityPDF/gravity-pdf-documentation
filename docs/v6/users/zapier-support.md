---
title: "Zapier Add-On Support"
sidebar_label: "Zapier Add-on"
description: "Gravity PDF fully integrates with Gravity Forms Zapier add-on, so you can pass the PDF URL(s) through to your favorite service."
---

![Gravity Forms Zapier Add-On activated on the Gravity Forms -> Addon admin page](https://resources.gravitypdf.com/uploads/2022/05/v6.3-gf-zapier-addon.png)

[Gravity Forms Zapier add-on](https://www.gravityforms.com/add-ons/zapier/) allows you to connect your Gravity Forms data to a huge number of different web services through "zaps" you configure. In Gravity PDF 6.3+ native support has been added and you can easily pass your PDF URL(s) to other services via Zapier.

## Getting Started

In v4 of the Zapier add-on the majority of the configuration is done directly in Zapier when you set up a zap. This includes mapping the Gravity Forms entry data. If your form has any PDFs configured, when you set up a _Trigger_ in Zapier you'll now see four data points for every PDF you've available when doing the _Test Trigger_ step for Gravity Forms (eg. if you've three PDFs configured on your form you'll have 12 different PDF download URLs available). 

![Zapier's Test Trigger showing the new PDF URLs available for use with zaps](https://resources.gravitypdf.com/uploads/2022/05/v6.3-zapier-review-pdf-urls-for-gravity-forms-data.png)
_Verify the PDF download URLs are available when testing the Zapier trigger_

Every PDF configured in Gravity Forms will have the following download URLs available in Zapier:

1. Standard PDF download URL
2. Signed PDF download URL valid for 1 week
3. Signed PDF download URL valid for 1 month
4. Signed PDF download URL valid for 1 year

[Refer to the Security section](#security) for more information about the types of PDF URLs available.

Once you've confirmed the PDF data points are available in your trigger you can map them in the _Set up action_ step when you configure your _Action_.

![Mapping a PDF download URL to a Google Sheet column in Zapier](https://resources.gravitypdf.com/uploads/2022/05/v6.3-zapier-connect-form-data-to-google-sheet-action.png)
_Map Gravity Forms data when setting up a Zapier Action, including the PDF download URL_

After testing your action and enabling the zap, new Gravity Forms entries will get processed and the PDF URL (and any other data points you mapped) will be saved to the third-party service.

![A Google Sheet that contains a row for each Gravity Forms entry that is processed by Zapier. Each row includes a PDF download URL.](https://resources.gravitypdf.com/uploads/2022/05/v6.3-zapier-google-sheet-content.png)
_A Google Sheet that includes PDF download URLs which has been populated with Zapier_

## Security

There are a number of security protocols in place to prevent unauthorised access to PDF documents. Before using this feature it's **highly recommended** you [review the documentation detailing PDF security](pdf-security.md).

To allow anyone with access to the PDF URL to view the document you should choose one of the three signed PDF URLs that are available when configuring your zaps. The signed URLs will expire one week / month / year after being generated.
