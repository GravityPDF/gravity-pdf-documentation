---
title: "PDF Download Link / URL"
sidebar_label: "PDF Download Link"
description: "You can add a Gravity PDF download link to Gravity Forms Confirmation and Notifications with the [gravitypdf] shortcode."
---

## Before you get started...

There are a number of security protocols in place to prevent unauthorised access to PDF documents. Before using the PDF shortcode or merge tag it's **highly recommended** you [review the documentation detailing PDF security](pdf-security.md) so that your users don't get an `access denied` error when attempting to view or download the PDFs.

For the best balance between security and access, it is recommended to enable signed PDF URLs so that anyone with access to the link can view the document for a specific time period (which you define).

:::info What are Signed PDF URLs?
They are special auto-expiring URLs that allow _anyone_ with the link to view the PDF. They are useful if you want to share the URL via email to a third party, don't want to store IP addresses with entries, or would like to display the link on a page restricted to specific user role(s). Both Shortcode and Merge Tag options support signed URLs, **but the feature has to be enabled** (see below). [Find out more about the PDF security and how Signed PDF URLs fit in the picture](pdf-security.md#default-security).
:::

## Shortcode or Merge Tag?

You can dynamically display a link or URL to a Gravity Forms entry PDF using one of two options:

1. [Shortcode](#shortcode) (recommended)
2. [Merge Tag](#merge-tag)

We recommend using the Shortcode method when possible because it not only generates the correct URL to the PDF, but it automatically wraps it up in an anchor tag so that it becomes a clickable link. The merge tag has its uses though, especially when you want to include the PDF URL in a HTML attribute (WordPress' security doesn't allow shortcodes to be processed when in HTML attributes).

:::note
The PDF Link/URL can only be generated once the entry has been created and saved in Gravity Forms. This is because you need a valid entry ID to generate it.
:::

## Shortcode

You can easily add a PDF download link to Gravity Forms [Confirmations](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/) and/or [Notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) with the `[gravitypdf]` shortcode. Using the optional [*Entry Attribute*](#entry-semi-optional) you can include the shortcode on any WordPress page (good for Page Confirmations). If you only need the raw PDF URL, you can [add the `raw` shortcode attribute](#raw-optional) or use the [PDF Merge Tag](#using-the-merge-tag) instead.

### Using the Shortcode 

![A "Download PDF" column on the PDF list](https://resources.gravitypdf.com/uploads/2021/08/v6-PDF-shortcode-column.png) 

A *Download Shortcode* column can be found on the [PDF form list](managing-pdfs.md#download-shortcode) page, which includes each PDF's shortcode. Just copy and paste the shortcode sample to your confirmation or notification and click save. The default behaviour is to generate a download link to the PDF with the text `Download PDF`. Simple!

#### Confirmation Types 

[Confirmations](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/) are what's shown to the user after they complete a form. They come in three flavours:

1.  [Text Confirmations](#text-confirmation)
2.  [Page Confirmations](#page-confirmation)
3.  [Redirect Confirmations](#redirect-confirmation)

If you enjoy video tutorials, watch this 14-minute video with Gravity PDF's lead developer as he takes you through using the [gravitypdf] shortcode with all three confirmation types. 

https://www.youtube.com/watch?v=4NPsz_f9iGI

##### Text Confirmation

![The \[gravitypdf\] shortcode in the Gravity Forms text confirmation](https://resources.gravitypdf.com/uploads/2021/03/v6-Text-confirmation.png) 

The [text confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#text-confirmations) is the simplest Gravity Forms confirmation type and allows you to add a message using the WordPress classic editor, which is then shown to the user right after submission. Copy and paste the Gravity PDF shortcode found on the [PDF form list](managing-pdfs.md) and save the confirmation. 

Submit a test entry and verify the PDF link is displayed correct, and you can view the document when selected.

##### Page Confirmation

![The \[gravitypdf\] shortcode in the Gravity Forms page confirmation](https://resources.gravitypdf.com/uploads/2021/04/v6-Page-Confirmation.png) 

The [page confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#page-confirmations) allows you to redirect users to an existing WordPress page. First, copy the Gravity PDF shortcode found on the [PDF form list](managing-pdfs.md) and place it on the WordPress page you're sending the users to. Once done, go back to your page confirmation configuration and enable the `Pass Field Data Via Query String` option. Add `entry={entry_id}` to the field that appears and click save.

Submit a test entry and verify the PDF link is displayed correct, and you can view the document when selected.

##### Redirect Confirmation

![The \[gravitypdf\] shortcode in the Gravity Forms redirect confirmation](https://resources.gravitypdf.com/uploads/2021/03/v6-Redirect-Confirmations.png)

The [redirect confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#redirect-confirmation) allows you to send the user to another location upon completing their form. If you choose, you can redirect the user straight to a PDF. To get it functioning you need to copy and paste the Gravity PDF shortcode found on the [PDF form list](managing-pdfs.md) and then save.

Submit a test entry and verify the PDF link is displayed correct, and you can view the document when selected.

:::note
If using the [signed PDF URL feature](#signed-optional) with the redirect method, the `Pass Field Data Via Query String` option will be ignored.
::: 

#### Usage in Notifications 

![Adding the shortcode to notifications](https://resources.gravitypdf.com/uploads/2021/03/v6-Notification-Example.png) 

Gravity Forms [Notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) are automated emails sent after the form is submitted. If you would prefer not [sending the PDF as an email attachment](setup-pdf.md#notifications) (usually for security reasons), you can use the `[gravitypdf]` shortcode to include a link to the PDF. Because of the default [security protocols](pdf-security.md), this method is very effective when the recipient has a WordPress user account. If users aren't logged in when completing the form, or you want to email a link to the document to a third party, use the [signed PDF URL feature](#signed-optional).

### Building the Shortcode 

While we provide a [quick and easy way](#using-the-shortcode) to get a particular PDF's `[gravitypdf]` shortcode, it's also useful to know what each attribute does, and how it affects the display of the PDF download link that gets generated.

#### Attributes 

The `[gravitypdf]` shortcode is customisable and there are a number of attributes which can be used to change the default behaviour.

##### ID (required) 
* The `ID` attribute is required and refers to the ID assigned to a particular form's PDF. The easiest way to get the ID is to use the sample shortcode on the [PDF form list](managing-pdfs.md), as it includes the PDF ID already. However you can find a PDF's ID [in the URL when updating the PDF settings](viewing-pdfs.md). This is denoted by the `pid` parameter.
* *Example:* `[gravitypdf id="560f2ef799945"]`

##### Name (optional) 
* This attribute doesn't affect the shortcode in any way, but does allow you to quickly determine which PDF it references.
* *Example:* `[gravitypdf name="Proposal" id="560f2ef799945"]`

##### Text (optional) 
* This attribute allows you to change the generated link's text which the end-user will see.
* If the `text` attribute isn't present, it will default to *Download PDF*.
* *Example:* `[gravitypdf id="560f2ef799945" text="Save PDF"]`

##### Type (optional) 
* The `type` attribute has two valid parameters: `download` and `view`. When the `download` option is set, and a user clicks the PDF link, a save dialog box will open or the file will be automatically saved to the user's computer (depending on browser settings). When the `view` option is set, the PDF will be rendered in the web browser.
* If the `type` attribute isn't present, it will default to `download`.
* *Example:* `[gravitypdf id="560f2ef799945" type="view"]` or `[gravitypdf id="560f2ef799945" type="view" text="View PDF"]`

##### Signed (optional) 
* The `signed` attribute tells Gravity PDF to generate a secure PDF URL that auto-expires after a set period. Anyone with access to the signed link can view the PDF (regardless of their user privileges, if any), provided the link hasn't expired. 
* Signed PDF URLs is an alternative authentication method to the default IP-based authentication. It functions correctly even if you've [disabled IP addresses using Gravity Forms Personal Data feature](https://docs.gravityforms.com/personal-data-settings/).
* *Example:* `[gravitypdf id="560f2ef799945" signed="1"]`

##### Expires (optional) 
* The `expires` attribute works in conjunction [with the `signed` attribute](#signed-optional) and it changes the default signed URL timeout period. 
* If the attribute isn't included, the signed URL will fallback to the global [Logged Out Timeout](global-settings.md#logged-out-timeout) setting (20-minutes by default).
* [Valid expires formats can be found in the PHP documentation](https://www.php.net/manual/en/datetime.formats.relative.php).
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="5 minutes"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="7 days"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="2 weeks"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="1 month"]`

##### Class (optional) 
* The `class` attribute allows you to set a specific class on the generated PDF anchor tag (`<a></a>`). This is useful when you want to style the link a certain way.
* If the `class` attribute isn't present it will default to `gravitypdf-download-link`.
* *Example:* `[gravitypdf id="560f2ef799945" class="my-custom-button-class"]` or `[gravitypdf id="560f2ef799945" class="my-custom-button-class a-second-class"]`
  
##### Print (optional) 
* The `print` attribute will automatically open a print dialog box when the PDF is opened.
* *Example:* `[gravitypdf id="560f2ef799945" print="1"]`

##### Entry (semi-optional) 
* When the shortcode is used in Gravity Forms Confirmations or Notifications this attribute can be omitted (as we already know which entry is being processed). 
* If you want to use the shortcode outside of Gravity Forms you need to use this attribute and include the appropriate entry ID.
* You can also set the entry ID via a URL parameters (the "query string") and omit this attribute. If the `entry` or `lid` URL parameter exist, its value will be used to lookup the entry (see [*Page Confirmation*](#page-confirmation) for more details).
* *Example:* `[gravitypdf id="560f2ef799945" entry="250"]` or `[gravitypdf id="560f2ef799945"]` with a URL like `https://example.com/?entry=250`

##### Raw (optional) 
* Instead of generating a link to the PDF, when the `raw` attribute is enabled a URL will be displayed.
* *Example:* `[gravitypdf id="560f2ef799945" raw="1"]`

### Common Problem 

If the [gravitypdf] shortcode doesn't display a link to the PDF, an error likely occurred. To verify this, enable [Debug Mode](global-settings.md#debug-mode) in the Global PDF Settings and test again using an Administrator WordPress account. An error message will be displayed on the screen where the shortcode has been rendered and provide more information about why nothing was displayed.

## Merge Tag

Gravity Forms merge tags are placeholders that are replaced with dynamic information in notification emails, confirmation pages, PDFs, and more. [Take a look at the Gravity Forms documentation to get a better understanding of them](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Using the Merge Tag 

![Gravity PDF Merge Tags are included in the merge tag selector automatically](https://resources.gravitypdf.com/uploads/2021/03/v6-Updating-Merge-Tags.png) 

When you've PDFs configured on a form, Gravity PDF merge tags are automatically included in the merge tag selector on the form settings pages. The merge tag selector is a button denoted by `{..}`. When selected, a list will be displayed with merge tags you can insert into the current setting. You'll find the available PDFs listed under the _Custom_ heading at the bottom and prefixed with the text "PDF:".

Unlike the shortcode, the merge tags are converted to a URL only ([akin to using the `raw` shortcode attribute](#raw-optional)). The benefit over shortcodes is they can be placed inside HTML attributes `<a href="{Label:pdf:6063bd0362dda}">...</a>`, and can be used anywhere Gravity Forms supports merge tags in general.

### Building the Merge Tag

While the basic PDF merge tag is available in the selector, it's useful to know what each parameter is, and what modifiers are available to change the functionality.  

#### Usage / Structure

```
{[label]:pdf:[id]} --> {Report:pdf:6063bd0362dda}

{:pdf:[id]} --> {:pdf:6063bd0362dda}

{[label]:pdf:[id]:[modifier]} --> {Report:pdf:6063bd0362dda:download}
```

* **[label]** (optional): A user-define name used for readability. When using the merge tags selector the [PDF Label](setup-pdf.md#label) will be used.
* **:pdf:** (required): A static identifier used to determine this tag is for Gravity PDF
* **[id]** (required): A dynamic identifier assigned to a particular form's PDF. The easiest way to get the ID is to use the merge tag selector. However, you can find a PDF's ID [in the URL when updating the PDF settings](viewing-pdfs.md). This is denoted by the `pid` parameter.
* **[modifier]** (optional): Optional parameters that change the way the URL is generated (see below)

#### Available Modifiers

All modifiers are optional, and should be included after the `[id]`. They are also stackable – in any order – by separating each modifier with a `:`.

##### Download
* Generates a URL that forces the PDF to be downloaded, instead of being viewed directly in the browser.
* _Example:_ `{Report:pdf:6063bd0362dda:download}`

##### Print
* Generates a URL that forces the print dialog box to open when the PDF is viewed (viewer dependant)
* _Example:_ `{Report:pdf:6063bd0362dda:print}`

##### Signed
* Generate a secure PDF URL that auto-expires after a set period. Anyone with access to the signed link can view the PDF (regardless of their user privileges, if any), provided the link hasn't expired.
* Signed PDF URLs is an alternative authentication method to the default IP-based authentication. It functions correctly even if you've [disabled IP addresses using Gravity Forms Personal Data feature](https://docs.gravityforms.com/personal-data-settings/).
* You can pass an optional expiration value (separated by a comma `,`) which changes the default signed URL timeout period. [Valid formats can be found in the PHP documentation](https://www.php.net/manual/en/datetime.formats.relative.php).
* If no expiration value is included, the signed URL will fallback to the global [Logged Out Timeout](global-settings.md#logged-out-timeout) setting (20-minutes by default).
* _Example:_ `{Report:pdf:6063bd0362dda:signed}`
* _Example:_ `{Report:pdf:6063bd0362dda:signed,5 minutes}`
* _Example:_ `{Report:pdf:6063bd0362dda:signed,7 days}`
* _Example:_ `{Report:pdf:6063bd0362dda:signed,2 weeks}`
* _Example:_ `{Report:pdf:6063bd0362dda:signed,1 month}`

##### Multiple Modifiers

Include multiple modifiers (in any order):

* _Example:_ `{Report:pdf:6063bd0362dda:signed:download}`
* _Example:_ `{Report:pdf:6063bd0362dda:signed:print:download}`
* _Example:_ `{Report:pdf:6063bd0362dda:print:signed,5 minutes}`
* _Example:_ `{Report:pdf:6063bd0362dda:download:print:signed,2 weeks}`

### Common Problems 

If a URL isn't displayed when the PDF merge tag is processed it's likely the PDF doesn't exist for the current form, it has been deactivated, or the [conditional logic doesn't pass](setup-pdf.md#conditional-logic). To determine the exact reason it wasn't generated, enable [Gravity Forms logging](https://docs.gravityforms.com/logging-and-debugging/) and then replicate the issue. In the Gravity PDF log file search for `PDF Merge tag is not valid` and review the logged information.

#### PDF ID Invalid
```log
2021-04-01 04:29:59 (+00:00) - ERROR --> PDF Mergetag is not valid
|--> {"error":"You must pass in a valid PDF ID","tag":["{Zadani:pdf:6048493b8acce1}","6048493b8acce1",""]}
```

In the sample log, the merge tag wasn't displayed because the PDF cannot be found in the current form (denoted by the `error` message). Verify the PDF exists from the [form PDF list page](managing-pdfs#activate--deactivate-pdfs). Then use the merge tag selector to update the merge tag.

#### PDF Not Active
```log
2021-04-01 04:26:33 (+00:00) - ERROR --> PDF Mergetag is not valid
|--> {"error":"PDF is not currently active","tag":["{Zadani:pdf:6048493b8acce}","6048493b8acce",""]}
```

In the sample log, the merge tag wasn't displayed because the PDF is not currently active (denoted by the `error` message). To fix, go to the [form PDF list page](managing-pdfs#activate--deactivate-pdfs) and reactivate. 

#### Conditional logic did not pass
```log
2021-04-01 04:31:53 (+00:00) - ERROR --> PDF Mergetag is not valid
|--> {"error":"Conditional logic did not pass","tag":["{Zadani:pdf:6048493b8acce}","6048493b8acce",""]}
```

In the sample log, the merge tag wasn't displayed because the current entry being processed did not pass the PDF's conditional logic (denoted by the `error` message). Provided your conditional logic is correct, this may not be a problem at all. [Double check the PDF Conditional Logic setting](setup-pdf.md#conditional-logic).