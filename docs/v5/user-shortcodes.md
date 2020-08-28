---
title: "PDF Download Link for Confirmation and Notifications"
sidebar_label: "PDF Download Link"
description: "You can add a Gravity PDF download link to Gravity Forms Confirmation and Notifications with the [gravitypdf] shortcode."
---

![The PDF Form List Page](https://resources.gravitypdf.com/uploads/2015/10/shortcode-sample-v5.png)

## Getting the PDF Download Link 

You can add a PDF download link to Gravity Forms [Confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/) and [Notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) with the [gravitypdf] shortcode. Using the optional [*Entry Attribute*](#entry-attribute) you can include the shortcode on any WordPress page. If you only need the raw PDF URL, you can [add the `raw` shortcode attribute](user-shortcodes.md#raw-attribute) or use the [PDF Mergetags](#using-the-mergetag). 

## Security 

![Access denied security message](https://resources.gravitypdf.com/uploads/2015/10/security-restrictions.png) 

There are a number of security protocols in place to prevent unauthorised access to PDF documents. Before using this shortcode it's *highly recommended* you [review the documentation detailing PDF security](user-pdf-security.md).

## Using the Shortcode 

![A "Download PDF" column on the PDF list](https://resources.gravitypdf.com/uploads/2015/10/download-pdf-column.png) 

We wanted to make it as simple as possible to use the `[gravitypdf]` shortcode in your form's confirmations and notifications. With that in mind, we added a *Download PDF* column to the [PDF form list](user-managing-pdfs.md#download-shortcode), which has a sample shortcode for each PDF you have set up. Just copy and paste the shortcode sample to your confirmation or notification and click save[^1]. The default behaviour is to generate a download link to the PDF with the text *Download PDF*. Simple!

### Confirmation Types 

The Gravity Forms [Confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/) is what gets shown to the user after they complete a form. They come in three flavours:

1.  [Text Confirmations](#text-confirmation)
2.  [Page Confirmations](#page-confirmation)
3.  [Redirect Confirmations](#redirect-confirmation)

We've ensured the `[gravitypdf]` shortcode works with as little configuration as possible across all confirmation types.

#### Text Confirmation

![The \[gravitypdf\] shortcode in the Gravity Forms text confirmation](https://resources.gravitypdf.com/uploads/2015/10/text-confirmation.png) 

The [text confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#text-confirmations) is the simplest Gravity Forms confirmation type. When selected, you can enter a message using the WordPress editor. To get it functioning you just need to copy and paste the sample shortcode found on the [PDF form list](user-managing-pdfs.md).

#### Page Confirmation

![The \[gravitypdf\] shortcode in the Gravity Forms page confirmation](https://resources.gravitypdf.com/uploads/2015/10/page-redirect.png) 

The [page confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#page-confirmations) allows you to redirect users to an existing WordPress page. This method is not quite "copy and paste", but it's close. To get it functioning you need to copy the sample shortcode found on the [PDF form list](user-managing-pdfs.md#download-shortcode) and place it on the WordPress page you're sending your user to. Once done, go back to your confirmation configuration and enable the `Pass Field Data Via Query String` option. Add `entry={entry_id}` to the field that appears and click save.

#### Redirect Confirmation 

![The \[gravitypdf\] shortcode in the Gravity Forms redirect confirmation](https://resources.gravitypdf.com/uploads/2015/10/redirect-confirmation-e1541561008512.png) 

The [redirect confirmation](https://docs.gravityforms.com/configuring-confirmations-in-gravity-forms/#redirect-confirmation) allows you to send the user to another location upon completing their form. If you choose, you can redirect the user straight to a PDF. To get it functioning you need to copy and paste the sample shortcode found on the [PDF form list](user-managing-pdfs.md#download-shortcode).

:::info
If using the [signed PDF URL feature](user-shortcodes.md#signed-attribute) with the redirect method, the `Pass Field Data Via Query String` option will be ignored.
::: 

### Usage in Notifications 

![Adding the shortcode to notifications](https://resources.gravitypdf.com/uploads/2015/10/notification-example.png) 

Gravity Forms [Notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) are automated emails sent after the form is submitted. If you would prefer not [sending the PDF as an email attachment](user-setup-pdf.md#notifications) (usually for security reasons) you can use the `[gravitypdf]` shortcode and create a direct link to the PDF. Because of the default [security protocols](user-pdf-security.md), this method is very effective when the recipient has a WordPress user account. 

If users aren't logged in when completing the form, use the [signed PDF URL feature](user-shortcodes.md#signed-attribute) or add the shortcode to the [confirmation page](#confirmation) instead.

### Building the Shortcode 

While we provide a [quick and easy way](#using-the-shortcode) to get a particular PDF's `[gravitypdf]` shortcode, it's also useful to know what each attribute does, and how it affects the display of the PDF download link that gets generated.

#### Attributes 

The `[gravitypdf]` shortcode is customisable and there are a number of attributes which can be used to change the default behaviour.

##### ID (required) 
* The `ID` attribute is required and refers to the ID assigned to a particular form's PDF. The easiest way to get the ID is to use the sample shortcode on the [PDF form list](user-managing-pdfs.md), as it includes the PDF ID already. However you can find a PDF's ID [in the URL when updating the PDF settings](user-viewing-pdfs.md). This is denoted by the `pid` parameter. */wp-admin/admin.php?page=gf\_edit\_forms&view=settings&subview=pdf&id=2&pid=**560f2ef799945***
* *Example:* `[gravitypdf id="560f2ef799945"]`

##### Name (optional) 
* This attribute doesn't effect the shortcode in any way, but does allow you to quickly determine which PDF it references.

##### Text (optional) 
* This attribute allows you to change the generated link's text which the end-user will see.
* If the `text` attribute isn't present it will default to *Download PDF*.
* *Example:* `[gravitypdf id="560f2ef799945" text="View PDF"]`

##### Type (optional) 
* The `type` attribute has two valid parameters: `download` and `view`. When the `download` option is set, and a user clicks the PDF link, a save dialog box will open – allowing a user to download and then view the PDF locally. When the `view` option is set the PDF will be rendered in their web browser.
* If the `type` attribute isn't present it will default to `download`.
* *Example:* `[gravitypdf id="560f2ef799945" type="view"]` or `[gravitypdf id="560f2ef799945" type="view" text="View PDF"]`

##### Signed (optional) 
* The `signed` attribute tells Gravity PDF to generate a secure PDF URL that auto-expires after a set period. Anyone with access to the signed link can view the PDF (regardless of their user privileges, if any), provided the link hasn't expired. 
* Signed PDF URLs is an alternative authentication method to the default IP-based authentication. It functions correctly even if you've disabled IP addresses using Gravity Forms 2.4+ GDPR feature.
* Signed URLs do not work across protocols. For example, you cannot display the shortcode on a HTTP page while the PDF loads over HTTPS (or vice versa). 
* *Example:* `[gravitypdf id="560f2ef799945" signed="1"]`
* Added in Gravity PDF 5.1

##### Expires (optional) 
* The `expires` attribute works in conjunction [with the `signed` attribute](#signed-attribute) and it changes the default signed URL timeout period. 
* If the attribute isn't included, the signed URL will fallback to the global [Logged Out Timeout](user-global-settings.md#logged-out-timeout) setting (20-minutes by default).
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="5 minutes"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="7 days"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="2 weeks"]`
* *Example:* `[gravitypdf id="560f2ef799945" signed="1" expires="1 month"]`
* Added in Gravity PDF 5.1

##### Class (optional) 
* The `class` attribute allows you to set a specific class on the generated PDF anchor tag (`<a></a>`). This is useful when you want to style the link a certain way.
* If the `class` attribute isn't present it will default to `gravitypdf-download-link`.
* *Example:* `[gravitypdf id="560f2ef799945" class="my-custom-button-class"]` or `[gravitypdf id="560f2ef799945" class="my-custom-button-class a-second-class"]`

##### Print (optional) 
* The `print` attribute will automatically open a print dialog box when the PDF is viewed.
* *Example:* `[gravitypdf id="560f2ef799945" print="1"]`

##### Entry (semi-optional) 
* When the shortcode is used in Gravity Form confirmations or notifications this attribute can be omitted (as we already know which entry is being processed). However, if you want to use the shortcode outside of that environment you need to pass in the Gravity Form entry ID.
* Alternatively, instead of passing the entry ID directly to the shortcode you can set the ID via URL parameters (the "query string"). If the `entry` or `lid` URL parameters exist its value will be used as the ID (see [*Page Confirmation*](#page-confirmation) for more details).
* *Example:* `[gravitypdf id="560f2ef799945" entry="250"]` or `[gravitypdf id="560f2ef799945"]` with a URL like `http://test.com/?entry=250`

##### Raw (optional) 
* Instead of generating a link to the PDF, when the `raw` attribute is enabled the raw PDF URL will be displayed.
* *Example:* `[gravitypdf id="560f2ef799945" raw="1"]`
* Added in Gravity PDF 5.1

### Common Problem 

If the [gravitypdf] shortcode doesn't display a link to the PDF, an error likely occurred. To verify this, enable [Debug Mode](user-global-settings.md#debug-mode) in the Global PDF Settings and test again using an Administrator WordPress account.

## Using the Mergetag 

![Gravity PDF Mergetags are included in the merge tag selector automatically](https://resources.gravitypdf.com/uploads/2015/10/updating-merge-tags.png) 

If you don't need a HTML download link to the PDF, but do want to access the raw PDF URL you can use the PDF Mergetags. These are included automatically in the Gravity Forms Merge Tag selector and can be used anywhere merge tags are supported. 

If you'd like the raw signed PDF URL, [use the `raw` attribute](#raw-attribute) with the [gravitypdf] shortcode.

[^1]: The [Page confirmation](#page-confirmation) method requires a little extra configuration than text and redirect confirmations.
