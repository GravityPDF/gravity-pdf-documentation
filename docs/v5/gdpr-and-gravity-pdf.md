---
title: "GDPR and Gravity PDF - How Gravity PDF uses your data."
sidebar_label: "GDPR and Gravity PDF"
description: "The Gravity PDF plugin does not collect or store personal data. It's an extension for Gravity Forms which can be used to collect and store personal data."
---

:::info
The General Data Protection Regulation (GDPR) (EU) [2016/679](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32016R0679) is a regulation in EU law on data protection and privacy for all individuals within the European Union. It also addresses the export of personal data outside the EU. The GDPR aims primarily to give control to citizens and residents over their personal data and to simplify the regulatory environment for international business by unifying the regulation within the EU. *[Source: Wikipedia](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)*
:::

The [Gravity PDF plugin](https://wordpress.org/plugins/gravity-forms-pdf-extended/) does not collect or store personal data. It's an add-on/extension for the [Gravity Forms plugin](https://www.gravityforms.com/) which can be used to collect and store personal data ([see Gravity Forms GDPR recommendations](https://docs.gravityforms.com/wordpress-gravity-forms-and-gdpr-compliance/)). Here's some helpful information about what the Gravity PDF plugin does and does not do in regards to the data captured using Gravity Forms:

-   The plugin **generates PDF documents on your server** using the data collected via Gravity Forms. It does **NOT** transmit that data to an external source for any reason.
-   The plugin can automatically attach the generated PDF to a [Gravity Forms Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) email [when configured to do so](user-setup-pdf.md#notifications). This functionality is disabled by default.
-   The plugin generates PDFs on demand and these are not permanently stored on your filesystem. [See our documentation on PDF Security](user-pdf-security.md) for more information about why a PDF might be temporarily saved to your filesystem.
-   As of Gravity PDF 5.1, [Signed PDF URLs can be used to allow logged out users to view a PDF](https://gravitypdf.com/news/gravity-pdf-5-1-has-landed/#signed-pdf-urls) and does not use IP-based security.
-   The plugin does **NOT** create, edit or delete the data you collected using Gravity Forms.
-   By default, the plugin does **NOT** send any telemetry about your website back to GravityPDF.com.

Under some circumstances the Gravity PDF plugin or premium extension(s) can send data externally:

-   If you [search our knowledge base from the Gravity PDF Settings Help tab](user-global-settings.md#help) an API request will be made to GravityPDF.com with your search parameters.
-   If you [purchase and install an extension from our online store](https://gravitypdf.com/extension-shop/) the extension plugin will periodically make an API request to GravityPDF.com to validate your license key and/or check for plugin updates. Your website's domain name and license key (if any) are the only identifiable information sent.

Should you have any questions about the Gravity PDF plugin and the GDPR please email privacy@gravitypdf.com.
