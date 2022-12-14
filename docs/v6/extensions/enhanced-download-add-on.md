---
title: "Enhanced Download Plugin Documentation: How to Install and Configure"
sidebar_label: "Enhanced Download"
description: "This Gravity PDF extension enables a friendly loading indicator when downloading Gravity PDF-generated documents."
---

import ResponsiveEmbed from 'react-responsive-embed'

![The Enhanced Download extension cover art. It includes an icon of a PDF document and an arrow pointing downward. The text 'Enhanced Download' is displayed.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-cover-art1.png)

*Enhanced Download* is a premium plugin for Gravity PDF that can display a user-friendly modal window + loading indicator when a PDF is generated on the server. It is a useful feature when Gravity PDF is generating complex PDFs that can take a few seconds (or more) to generate, or when you've [set up a Redirect Confirmation to a PDF](../users/shortcodes-and-mergetags.md#redirect-confirmation).  

You can purchase the *Enhanced Download* plugin from the [Extension Shop](https://gravitypdf.com/shop/enhanced-download-add-on/). This guide will walk you through installing and configuring *Enhanced Download* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Configuring

![A live screenshot of the Enhanced Download modal window in the loading state. The modal includes an animated icon, the message 'Your PDF is being prepared for you now. This may take a few moments to process. We thank you for your patience!', and a close button.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-loading-indicator-in-action.jpg)

### PDF Download Link

You can enhance [\[gravitypdf\] download links](../users/shortcodes-and-mergetags.md#shortcode) by adding the attribute `enhanced="1"` to any usage of the shortcode displayed on your website – [provided `type` is set to `download`, or is omitted](../users/shortcodes-and-mergetags.md#type-optional). 

Enhanced PDF download links can be used in:

* [Text Confirmations](../users/shortcodes-and-mergetags.md#text-confirmation)
* [Page Confirmations (Posts or Pages)](../users/shortcodes-and-mergetags.md#page-confirmation)
* [GravityView](../users/gravityview-support.md)
* [Entry Blocks](../users/entry-block-perk-support.md)

**Examples**
```
[gravitypdf id="560f2ef799945" text="Download PDF" enhanced="1"]
[gravitypdf id="560f2ef799945" type="download" text="Download PDF" enhanced="1"]
[gravitypdf id="560f2ef799945" text="Download PDF" signed="1" enhanced="1"]
[gravitypdf id="560f2ef799945" text="Get PDF" enhanced="1"]
[gravitypdf id="560f2ef799945" text="Download PDF" entry="{entry_id}" enhanced="1"]
```

:::info
The [gravitypdf] shortcode is unique to each PDF configured on your form, so you cannot directly copy/paste the examples above. You will need to [get the appropriate shortcode from your form's PDF List page](https://docs.gravitypdf.com/v6/users/managing-pdfs) and then add `enhanced="1"` yourself.
:::

### Redirect Confirmation

If you are using a [PDF Redirect Confirmation](../users/shortcodes-and-mergetags.md#redirect-confirmation) to directly download a PDF on form submission, _Enhanced Download_ will automatically enable [when your form is embedded with AJAX](https://docs.gravityforms.com/adding-a-form-using-blocks/#h-gravity-forms-block-settings). An important caveat is all confirmations configured on the form (excluding [Save and Continue](https://docs.gravityforms.com/save-continue-gravity-forms/#h-confirmations-notifications)) must be PDF Redirects.  

After the loading indicator has been displayed and subsequently closed by a user, Gravity Forms' _duplicate submission prevention_ feature is turned off by the plugin. This unlocks the current form so that it can be resubmitted. Without _Enhanced Download_, the form submission button is permanently disabled and users need to do a hard refresh/fill out the form again to download a new PDF. This is cumbersome if someone made a typo while filling out the form, or if a user wanted to explore different variations on the PDF ([the Previewer add-on](previewer-add-on.md) is a good option as well). This change improves the overall user experience when using PDF Redirects, and prevents Gravity Forms UI from being left in a broken state after the redirect occurs.

:::info
If the possibility of duplicate submissions is problematic for you, switch to a Text Confirmation and [use the `[gravitypdf]` shortcode with the `enhanced="1"` attribute](#pdf-download-link).
:::

### Entry List and Details

When the [Entry List and Detail](#entry-list-and-detail) global setting is turned on, _Enhanced Download_ will be enabled when [downloading PDFs from the Entry List or Entry Details page in your admin area](https://docs.gravitypdf.com/v6/users/viewing-pdfs). 

For _Enhanced Download_ to function on the Entry List page, you'll need to ensure the [_Entry View_ setting is set to _Download_](../users/global-settings#entry-view). On the Entry Details page only the _download_ link enables _Enhanced Download_. The loading indicator will not be shown when using the _view_ link. 

### Global Settings

[[A screenshot of the plugin's global settings WordPress admin page, each of which are covered in detail in the next section of this documentation.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-extension-settings-1.png)

Located at `Forms -> Settings -> PDF -> Extensions` in your WordPress Admin area, a number of global settings are available for the plugin. 

#### Entry List and Detail
* Toggle this setting on if you'd like to enable the loading indicator when you download a PDF from the [Entry List](../users/viewing-pdfs.md#entry-list) or [Entry Detail](../users/viewing-pdfs.md#entry-details) admin pages.
* The loading indicator only works on the Entry List page when the [Entry View global setting](../users/global-settings.md#entry-view) is set to _Download_. [See Limitations for more info](#limitations).
* The loading indicator will only be displayed on the Entry Detail page for the PDF _Download_ link(s). [See Limitations for more info](#limitations).

#### String Localization

The following settings allow you to easily change the strings for the user-facing modal window / loading indicator shown when a PDF is being generated. This makes it easy to translate the front-end strings into your native language. 

:::caution Merge Tags Not Supported
You cannot use merge tags in any of the String Localization settings.
:::

##### Loading Title

* This message is spoken aloud [by screen readers](https://en.wikipedia.org/wiki/Screen_reader) when the loading indicator modal is first opened (right after a user begins the PDF download process). 
* HTML is not allowed in this setting.
* The default value is: `Generating PDF...` 

##### Loading Message

![A screenshot of the Enhanced Download modal window in the loading state. The Loading Message which starts with 'Your PDF is being prepared for you now' is highlighted in red.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-loading-message.png)

* This message displays on-screen when the loading indicator modal is first opened (right after a user begins the PDF download process).
* The following HTML tags are supported in this setting: `<b><strong><em><i><u>`
* The default value is: `Your PDF is being prepared for you now. This may take a few moments to process. We thank you for your patience!`

##### Completed Title

![A screenshot of the Enhanced Download modal window in the completed state. The Completed Title is highlighted in red and reads 'PDF Generated'.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-completed-title.png)

* This message displays on-screen when the PDF has been successfully generated on the server. It is also read aloud by screen readers. This message is shown at the same time as the browser opens a _Save Download_ dialog box for the PDF, or the browser automatically begins downloading the file (depends on the browser settings).
* HTML is not allowed in this setting.
* The default value is: `PDF Generated`

##### Completed Message

![A screenshot of the Enhanced Download modal window in the completed state. The Completed Message is highlighted in red and reads 'Your document has been downloaded automatically.'](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-completed-message.png)

* This message displays below the [Completed Title](#completed-title) and provides additional context to users.
* The following HTML tags are supported in this setting: `<b><strong><em><i><u>`
* The default value is: `Your document has been downloaded automatically.`

##### Error Title

![A screenshot of the Enhanced Download modal window in the error state. The Error Title is highlighted in red and reads 'PDF Generation Error'.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-error-title.png)

* This message displays on-screen when there is a problem generating the PDF, or the current user [fails the PDF security checks](../users/pdf-security.md). It is also read aloud by screen readers.
* HTML is not allowed in this setting.
* The default value is: `PDF Generation Error`

##### Error Message

![A screenshot of the Enhanced Download modal window in the error state. The Error Message is highlighted in red and reads 'There was a problem generating your PDF. Please retry the last action.'](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-error-message.png)

* This message displays below the [Error Title](#error-title) and provides additional context to users.
The following HTML tags are supported in this setting: `<b><strong><em><i><u>`
* The default value is: `There was a problem generating your PDF. Please retry the last action.`

:::note
There are a number of reasons why the Error Title and Message are shown, including fatal PHP errors, timeouts, and authorization checks failing. [Refer to the Troubleshooting guide for information about debugging this issue](#troubleshooting).
:::

##### Close Action

![A screenshot of the Enhanced Download modal window in the completed state. The Close Action is highlighted in red and reads 'close'.](https://resources.gravitypdf.com/uploads/2022/12/enhanced-download-close-button.png)

* The text to use for the _close_ button; users select it to close the modal window / loading indicator.
* When not in the _loading_ state, a user is able to click anywhere on the screen to close the modal. The modal can also be closed with the Escape key.
* HTML is not allowed in this setting.
* The default value is: `close`

### Limitations

* The loading indicator is disabled for any _view_ PDF links (`[gravitypdf type="view"]`). 
* [AJAX has to be enabled in the embedded form](https://docs.gravityforms.com/category/getting-started/add-form-to-site/) for _Enhanced Download_ to be enabled when using PDF Redirect Confirmations
* _Enhanced Download_ is [disabled during form submission](#redirect-confirmation) if all active Confirmations are not PDF Redirects (except Save and Continue confirmations)
* The loading indicator doesn't work when the [enhanced PDF download link](#pdf-download-link) `[gravitypdf enhanced="1"]` is used in Notifications. 
* The loading indicator displays a success message when the PDF is generated on the server and begins streaming to a client i.e. the download begins. It doesn't signify the PDF has been fully downloaded (it isn't possible to do reliably with available technology).  

## Performance

The plugin includes a ~2kb gzipped JavaScript (JS) file that is conditionally loaded in the footer of a page as a non-blocking request. When the plugin's JS is executed, a ~1kb gzipped CSS file is also fetched as a non-blocking request. 

The CSS and JS files are only included when the _Enhanced Download_ functionality is enabled for the current form, or the `[gravitypdf enhanced="1"]` shortcode is used on the page.

## Accessibility

The _Enhanced Download_ plugin follows the latest accessibility best practices for the loading indicator / modal window shown on the front-end of the website. [See the Developer section for a technical overview](#accessibility-overview).

## ePrivacy Directive and GDPR

_Enhanced Download_ makes use of a first-party persistent cookie to determine when a PDF has been successfully generated, fails to generate, or when a form validation checks fails.

### When is the cookie set?

The cookie is only set when a user clicks on a PDF download link that [has the enhanced attribute enabled](#pdf-download-link), or when an AJAX-enabled form is submitted [with a PDF Redirect Confirmation](#redirect-confirmation). 

### How long is the cookie set for?

The cookie is set with a 24-hour expiry, however under normal conditions the cookie is deleted as soon as one of the following occurs:

1. PDF is generated
1. PDF fails to generate / authentication fails
1. Form validation fails
1. 30-second timeout period lapses

That means the cookie is usually deleted no more than 30 seconds after being created. Due to browser incompatibility, a shorter expiry set on the cookie isn't possible.

### What information does the cookie hold?

At any given time, the cookie will hold one of the following values:

* `0` - initial value after creation
* `1` - value when a PDF has been successfully generated
* `2` - value when form validation fails

### What should I put in a Cookie Policy?

You can include the following information in your Cookie Policy (you'll need to make a determination about the category):

| Cookie Name                   | Purpose                                                        | Duration | Category                                 |
|-------------------------------|----------------------------------------------------------------|----------|------------------------------------------|
| GravityPdfGenerationCompleted | Determine the status of the form validation and PDF Generation | 24 Hours | **Strictly Necessary or Functionality**^ |

^ Whether the cookie falls under the **Strictly Necessary** or **Functionality** category depends specifically on how you are using Gravity Forms, Gravity PDF, and _Enhanced Download_ on your website. We cannot make that determination for you. If you decide the cookie falls under **Functionality**, you'll need to determine if consent is implied by submitting the form and/or selecting the PDF download link, or if you need to explicitly ask for consent beforehand.

When making your determination, be aware that are two different ways to use _Enhanced Download_:

1. When using the [PDF Redirect Confirmation with AJAX-enabled forms](#redirect-confirmation): the plugin will display the loading indicator on form submission. A message is shown when the PDF is successfully generated on the server, or an error message is shown if the PDF failed to be generated / the timeout period lapsed. The loading indicator is automatically closed if a form validation checks fail during submission. Importantly, upon closing the loading indicator the form will be unlocked so a user can make edits and/or resubmit to generate another PDF. When using a PDF Redirect Confirmation without _Enhanced Download_, the form will remain in a locked state after submission and a user cannot then edit and resubmit the form. 

1. When displaying a [PDF Download Link with the "enhanced" attribute](#pdf-download-link): the plugin will display the loading indicator when the link is selected. A message is shown when the PDF is successfully generated on the server, or an error message is shown if the PDF failed to be generated / the timeout period lapsed. The PDF Download Link will normally be used on a form's [Text or Page Confirmations](../users/shortcodes-and-mergetags.md#confirmation-types), in a [GravityView](../users/gravityview-support.md), or in an [Entry Block](../users/entry-block-perk-support.md). However, it can also be included on non-Gravity Forms related pages when the `entry` and `enhanced` attributes are provided to the `[gravitypdf]` shortcode.

### How do I disable the functionality if a user doesn't provide explicit consent?

If you've decided the cookie is not Strictly Necessary and you need to ask for explicit consent, you can [programmatically disable the _Enhanced Consent_ functionality using JavaScript when a user doesn't opt in](#disable-programmatically).

## Translations

The *Enhanced Download* plugin has been translated in the following languages:

* English
* French
* Spanish
* German

All strings in the loading indicator / modal window can be edited [via the extension settings](#string-localization). To translate both front- and back-end strings, [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/) – the text domain for _Enhanced Download_ is `gravity-pdf-enhanced-download`.

## Troubleshooting

This section details common problems you might come across when using _Enhanced Download_, and how you can troubleshoot them. If you run into a problem you cannot resolve, [you can always open a support ticket and our friendly team will be happy to help](https://gravitypdf.com/support/#support-form). 

### Loading Indicator / Modal Not Showing

**PDF Download Link**

When using _Enhanced Download_ [with the PDF Download link](#pdf-download-link), ensure that:

1. The [gravitypdf id="560f2ef799945" enhanced="1"] shortcode includes the `enhanced="1"` attribute.
1. The [gravitypdf id="560f2ef799945" enhanced="1" type="download"] has `type="download"` or it is omitted completely.
1. That your [gravitypdf] shortcode works correctly without _Enhanced Download_ and the PDF is correctly downloaded. If it doesn't, [configure the shortcode again](../users/shortcodes-and-mergetags.md) and verify it works before attempting to enable _Enhanced Download_ a second time.

**Redirect Confirmation:**

When using _Enhanced Download_ [with the PDF Redirect Confirmation](#redirect-confirmation), ensure that:

1. The Gravity Form has been [embedded on a page with the AJAX setting enabled](https://docs.gravityforms.com/category/getting-started/add-form-to-site/).
2. [All active confirmations for the form](https://docs.gravityforms.com/confirmations-listing/) are PDF Redirect Confirmations (excluding Save and Continue confirmations). You cannot use this feature with mixed Confirmation types, or Redirect Confirmations that don't point to a Gravity PDF-generated document.

**Entry List Admin Page**

To use _Enhanced Download_ on the Entry List admin page, ensure that:

1. The [Entry List and Detail setting](#entry-list-and-detail) is turned on.
2. The [Entry View global setting](../users/global-settings.md#entry-view) is set to _Download_.

**Entry Details Admin Page**

To use _Enhanced Download_ on the Entry Details admin page, ensure that:

1. The [Entry List and Detail setting](#entry-list-and-detail) is turned on.
2. You select the _Download_ button for a PDF and not the _View_ button.

**Email Notifications**

Using _Enhanced Download_ in Notification emails is not supported. To improve the user experience, try having [the PDF sent as an email attachment instead](../users/setup-pdf.md#notifications).

:::caution JavaScript is Required
_Enhanced Download_ relies on JavaScript being enabled in a user's browser to function. If it has been turned off, [the feature programmatically disabled by a developer](#disable-programmatically), or a plugin conflict is causing a JavaScript error, the modal may not be displayed. Try another computer/browser and [complete Gravity Forms Troubleshooting guide](https://docs.gravityforms.com/conflict-testing-using-health-check-plugin/) – with Gravity Forms, Gravity PDF, and _Enhanced Download_ enabled – to test if you might be affected by one of these issues.
:::

### PDF Generation Error

If the loading indicator displays an error message and the PDF isn't downloaded, one of two things happened:

1. A PHP error prevented the PDF being generated.
1. The current user doesn't have access to download the PDF.

To determine which it is, [enabling Gravity Forms Logging](https://docs.gravityforms.com/logging-and-debugging/) and then replicate the issue. Once done, open the Gravity PDF log file and search for "ERROR". You might find error messages like:

```
ERROR --> PDF Authentication Failure
ERROR --> PDF Generation Error.
```

If an authentication error occurred, you may need to [enable the Signed PDF URL feature](../users/shortcodes-and-mergetags.md#signed-optional). [Refer to the security documentation to understand your available options](../users/pdf-security#default-security).

A PDF Generation Error can occur for a number of reasons. The Gravity PDF log file includes information about the specific file, function, and line number that triggered the error.

If there are no errors shown in the log, a fatal PHP error might have occurred. To check, review your website's error logs from your web hosting control panel. Alternatively, [install and activate the WP Debugging plugin](https://wordpress.org/plugins/wp-debugging/) and then [view (not download) the PDF from the Entry Details page](../users/viewing-pdfs.md#entry-details). Any PHP errors should be displayed on-screen.

If you are unsure how to fix the problem, [provide all the information you've discovered – including logs and error messages – to our support team and we'll be happy to help](https://gravitypdf.com/support/#support-form).

## Developers 

This next bit is for developers who want to tweak how _Enhanced Download_ looks or functions. 

### Disable Programmatically

You can disable the overlay using JavaScript by dispatching a custom event with the status set to `false`:

```javascript
// Disable the Enhanced Download functionality (including the first-party cookie)
const overlayDisableEvent = new CustomEvent('gpdfEdOverlayStatus', {detail: false});
document.getElementById('c-gpdf-pretty-download-ui').dispatchEvent(overlayDisableEvent);

// Re-enable the Enhanced Download functionality
const overlayEnableEvent = new CustomEvent('gpdfEdOverlayStatus', {detail: true});
document.getElementById('c-gpdf-pretty-download-ui').dispatchEvent(overlayEnableEvent);
```

### CSS Variables

The plugin defines the following CSS variables that control the colors used in the _Enhanced Download_ overlay:

```css
:root {
  --gpdf-addon-ed-overlay-color: #fff;
  --gpdf-addon-ed-overlay-text-shadow-color: #0a0e14;
  --gpdf-addon-ed-overlay-focus-color: #efe108;
  --gpdf-addon-ed-overlay-background: rgba(0, 0, 0, 0.85) radial-gradient(rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.75));
}
```

* `--gpdf-addon-ed-overlay-color`: This variable holds the text and icon color used throughout the overlay. The default color is white.
* `--gpdf-addon-ed-overlay-text-shadow-color`: This variable holds the text shadow color used throughout the overlay. The default color is a very dark grey.
* `--gpdf-addon-ed-overlay-focus-color`: This variable holds the button focus outline color for the overlay's close button. The default color is bright yellow. 
* `--gpdf-addon-ed-overlay-background`: This variable holds the background color / gradient used for the overlay. By default, a radial gradient is used; but you could change it to any value supported by the `background` property, include a single, transparent color like `rgba(0, 0, 0, 0.85)`.

### Accessibility Overview

These best practices have been put in place when displaying the loading indicator / modal window to users:

1. The modal uses a `<div>` tag with `role="dialog"` and `aria-model="true"` to indicate to assistive technology that the modal's content is grouped and separated from the rest of the page content. It also tells users of assistive technology when the modal is opened, and interacting or accessing any content outside the modal will first require it be closed.
2. The modal window uses `aria-labelledby` and `aria-described` to provide an accessible name and description to assistive technology.
3. When the modal window is opened, the focus is trapped to the modal window itself and its focusable action: a close button. The close button is automatically focused.
4. The modal can be closed by selecting the close button, by using the Escape Key, or by clicking outside the modal when the window isn't in the loading state e.g. after the PDF has been generated.
5. When the modal is closed, it is hidden with `display: none` and won't be seen on-screen or by assistive technology.
6. The modal can be interacted with and closed using a keyboard or pointer device / touch.
7. The modal contains a `<div>` tag with `role="alertdialog"` and `aria-live="polite"` so assistive technology can read out changes in state.
8. [The color contrast in the modal passes WGAG 2.0 AAA requirements](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html).
