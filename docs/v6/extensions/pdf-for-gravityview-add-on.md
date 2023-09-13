---
title: "PDF for GravityView Plugin Documentation: How to Install and Configure"
sidebar_label: "PDF for GravityView"
description: "This Gravity PDF extension makes it simple to generate and email PDFs of GravityView Single Entry Layouts."
---

import ResponsiveEmbed from 'react-responsive-embed'

![The PDF for GravityView extension cover art. It includes an icon of a List Single Entry GravityView, with a smaller icon in the bottom corner signifying a PDF of the view can be downloaded. The text 'PDF for GravityView' is displayed.](https://resources.gravitypdf.com/uploads/2023/03/pdf-for-gravityview-cover-image-r1.png)

*PDF for GravityView* is a premium plugin for Gravity PDF that can automatically generate and email PDFs that closely matches the content and layout of a [GravityView Single Entry Layout](https://gravity.guide/lesson/creating-the-view-single-entries-layout/). The plugin is deeply integrated with the View Editor, so you'll be able to use the tools you know and love to create highly personalized PDFs.

You can purchase the *PDF for GravityView* plugin from the [Extension Shop](https://gravitypdf.com/shop/pdf-for-gravityview-add-on/). This guide will walk you through installing and configuring *PDF for GravityView* to its full potential.

:::info
PDFs are only generated for the Single Entry Layout. But what exactly is the Single Entry Layout? When you create a view, there are three different layouts available: Multiple Entries, Single Entry, and Edit Entry. The Single Entry Layout [displays more information about a specific entry](https://gravity.guide/lesson/creating-the-view-single-entries-layout/) and is currently the only layout that can be turned into a PDF.
:::

## Installation

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Prerequisites

The following plugins are required to make use of *PDF for GravityView*:

* <a href="https://rocketgenius.pxf.io/c/1211356/445235/7938" rel="sponsored">Gravity Forms</a> (any license type)
* [Gravity PDF](../users/installation.md)
* <a href="https://www.gravitykit.com/pricing/?ref=186" rel="sponsored">GravityView v2.16+</a> (any license type)

If any of the prerequisites aren't met, the plugin will show an appropriate error message on the Plugins admin screen after activation.

## View Types

Depending on your license type, [GravityView offers up to five different view types](https://docs.gravitykit.com/article/400-what-are-the-differences-between-the-view-types). To various degrees, _PDF for GravityView_ supports all five view types natively.

### Table / DataTables
<div class="two-column-grid">
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Table-DataTables-v1.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Table-DataTables-v1.png" alt="An example of a PDF generated from a Table / DataTables Single Entry Layout View" /></a>
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Table-DataTables-v2.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Table-DataTables-v2.png" alt="A screenshot of the Single Entry Layout section of the GravityView Editor for a Table View" /></a>
</div>

The _Table_ and _DataTables_ layouts display the Single Entry in a tabular layout, with the label in a narrower left column and the value in a wider right column. _PDF for GravityView_ has very good support for these view types, and the generated PDF will match the original layout quite accurately. While the PDF does quite well at replicating your View layout, there are some "gotchas" to be aware of:

1. GravityView provides very minimal styles for the table output by these views (eg. it doesn't include table borders), and this let's your chosen WordPress theme take over the table design. Because PDFs aren't theme-aware, we've opted to mimic GravityView's default behavior and disable table borders (refer to the developer section about overriding this behavior).

1. If you've only added fields to your view that don't have a label, the narrow left column is still output in both your View and the PDF. This may not be so noticeable when viewing your website, but the PDF will appear to have a large left margin  (refer to the developer section about overriding this behavior).

### List / Map

<div class="two-column-grid">
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-List-Map-v1.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-List-Map-v1.png" alt="An example of a PDF generated from a List / Map Single Entry Layout View" /></a>
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-List-Map-v2.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-List-Map-v2.png" alt="A screenshot of the Single Entry Layout section of the GravityView Editor for a List View" /></a>
</div>

The _List_ and _Map_ layouts display the Single Entry in a similar card-style layout. There's a Title and Subheading in the header of the card. In the card body is a two column layout, with the left column narrower than the right. While the card footer is split into two equal sized columns.

_PDF for GravityView_ has  good support for these view types, and the generated PDF will match the original layout fairly accurately. While the PDF does quite well at replicating your View layout, there are some "gotchas" to be aware of:

1. The Entry Map field included in [GravityView's Maps Layout](https://www.gravitykit.com/extensions/maps/) isn't currently supported. You should [exclude that field from the PDF](#exclude-from-pdf) to prevent a display problem.

1. In the card body of the _List_ layout, the right column can wrap around the left column if the content extends beyond the left-column height. Both the PDF and the _Map_ layouts make use of real columns for the card body, and the content will not wrap.

### DIY

<div class="two-column-grid">
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-DIY-v2-a.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-DIY-v2-a.png" alt="An example of a PDF generated from a DIY Single Entry Layout View" /></a>
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-DIY-v3.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-DIY-v3.png" alt="A screenshot of the Single Entry Layout section of the GravityView Editor for a DIY View" /></a>
</div>

The _DIY_ view only has basic PDF support. Unlike the other view types, _DIY_ views don't have a fixed layout or structure, and you can literally design anything. When you combine that with a PDF engine that doesn't support modern CSS layout properties, like Flexbox or Grid (plus a bunch of layout quirks of its own), you'll get less-than-ideal results when using the DIY layout you've built for the modern web.

The good news is _PDF for GravityView_ includes features that can help improve the PDF output from *DIY* layouts. If you have fields that display poorly in the PDF, you can use the [Exclude from PDF](#exclude-from-pdf) setting to remove them without affecting your website view. You can then use the [Only Include in PDF](#only-include-in-pdf) setting to add new fields specifically for the PDF. That approach should cover the majority of use-cases. However, if you've a really complex layout [you may need to create a template override for your view](#template-overrides) and use PHP/HTML/CSS to get the best result.

## Configuring

_PDF for GravityView_ is deeply integrated into GravityView, and most configuration is done directly in the _View Editor_.

### Settings

![A screenshot showing all available settings for the PDF in the GravityView Editor](https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Single-Entry-PDF-Settings.png)

[In the View Settings Meta Box](https://docs.gravitykit.com/article/382-the-view-settings-meta-box) you'll find a new menu item called **Single Entry PDF**. The following settings are available:

#### Filename
* The filename is what the generated PDF will be called when saved. For example, `My_Personal_Flyer.pdf`
* **If you leave the value empty, your View name will automatically be used for the filename.**
* [Gravity Forms merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported in the filename. Any merge tags will be converted to the appropriate value when the PDF is saved. For example, `{Name:3}_Personal_Flyer.pdf` will become `Gravity PDF_Personal_Flyer.pdf` if a user entered *GravityPDF* for field ID 3 in the form.
* If you use merge tags, either use a field marked required or include static text alongside the merge tag to prevent an empty filename.
* While the following characters will be saved, they are automatically converted to an underscore when generating the PDF: `/ " * ? | :`. This is to prevent problems saving the PDFs to disk on some operating systems.

#### Paper Size
* Use this option to set the PDF paper size.
* This field defaults to the [Default Paper Size](../users/global-settings.md#default-paper-size) option in the global settings.
* Common paper sizes like A4, US Letter and Legal are available. The ISO-standard A, B and C paper sizes, as well as RA and SRA, can also be selected.
* Custom Paper Sizes are not currently supported in _PDF for GravityView_ ([let us know if this feature is important to you](https://gravitypdf.com/support/))

#### Paper Orientation
* This allows you to change the paper orientation from portrait to landscape. A page displayed in portrait mode is taller than it is wide. Inversely, landscape pages are wider than they are tall.
* The field defaults to Portrait.

#### Page Margin
* This allows you to change the page margin used throughout the PDF. 
* The following units are supported when setting the page margin: `mm in px % cm` eg. `20mm`, `1in`, `50px`, `5%`, or `2cm`.
* This setting [supports CSS shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) to apply a different margin value to each side of the page eg. `1in 0.5in` will set the top and bottom margin to 1 inch, and the left and right margin to 0.5 inch; `50px 100px 25px` will set the top margin to 50px, the left/right margin to 100px, and the bottom margin to 25px; `10mm 5mm 10mm 20mm` will set the top and bottom margins to 10mm, the right margin to 5mm and the left margin to 20mm.
* The default value is `20mm`

#### Font
* Select the font to be used in your PDF.
* This field defaults to the [Default Font](../users/global-settings.md#default-font-type) option in the global settings.
* If none of the existing fonts suit your needs, additional fonts can be installed on [Gravity PDF's Global PDF Settings page](../users/global-settings.md#fonts).

#### Font Size
* Control the font size used in the PDF.
* The field defaults to the [Default Font Size](../users/global-settings.md#default-paper-size) option in the global settings.

#### Font Color
* Control the font colour used in the PDF.
* The field defaults to the [Default Font Color](../users/global-settings.md#default-font-colour) option in the global settings.

#### Header
* Add a header to each page of your PDF document using the WordPress Classic Editor. You can use the media library to include a simple logo. Or add a more robust three-column table ([try this code snippet](https://gist.github.com/jakejackson1/997b5dedf0a5e665e8ef)).
* Gravity Forms merge tags can be used in the header.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the header.
* Unlike Gravity PDF Core, images will **not** have their height restricted. After inserting an image from the media library you may need to scale it down to suit.

#### Footer
* Add a footer to each page of your PDF document using the WordPress Classic Editor. You can use the media library to include images. Or add a more robust three-column table that includes the page number and date ([try this code snippet](https://gist.github.com/jakejackson1/e6179a96cd97ef0a8457)).
* Gravity Forms merge tags can be used in the footer.
* The special tags `{PAGENO}` – which displays the current page number – and `{nbpg}` – which displays the total number of pages in the document – can be used in the footer.
* Unlike Gravity PDF Core, images will **not** have their height restricted. After inserting an image from the media library you may need to scale it down to suit.

#### Background Color
* Set the background color for all pages in the PDF
* By default, this is set to white (hex `#FFFFFF`)

#### Background Image
* Set the background image to be used for all pages in the PDF
* For the best results, create an image with the same dimensions as the [Paper Size](#paper-size) and then run through an image optimization tool before you upload.
* This is disabled by default

#### Show Title?
* Display the Single Entry Title (found in the _Single Entry_ View Settings) at the beginning of the PDF. If empty, the View Title will be used.
* This is enabled by default.

#### Additional CSS
* Add CSS to further customize the look and feel of the PDF document. [See the developer section for examples of common selectors and styles](#css).
* To inspect the HTML used for a PDF, administrator users can [enable PDF Debug Mode](../users/global-settings.md#debug-mode) and then [add the HTML helper parameter](../developers/helper-parameters.md#html1) to the Single Entry View PDF URL.
* Be aware that [only a subset of CSS is supported by Gravity PDF](../developers/pdf-features/supported-html-and-css.md#css-support).

### Watermark Settings

If the [Gravity PDF Watermark extension](watermark-add-on.md) is activated on your site, you'll be able to add a text or image watermark to your PDFs. The following settings are available:

#### Enable Watermark
*  Toggle to enable the text/image watermark feature.

#### Image Watermark
*  Display an image watermark on each page of your PDF, vertically and horizontally centred.
*  For the best results, use a transparent PNG image the same dimensions as the [Paper Size](#paper-size).
*  To ensure your PDF generates quickly and the PDF file size stays small, we recommend using an image under 1MB. [Try run the image through a compression tool like TinyPNG](https://tinypng.com/).

#### Text Watermark
*  Display a text watermark diagonally-centred on each page of your PDF.
*  Valid UTF-8 character can be displayed, provided the [Watermark Font](#watermark-font) supports it.
*  Text and Image Watermarks can be used concurrently.
*  Merge tags are supported

#### Watermark Font
*  Select the font to use for the [Text Watermark](#text-watermark).
*  Additional fonts can be installed [via the Font Manager](../users/custom-fonts.md).

#### Opacity
*  Control the transparency of both the Image and Text Watermarks by selecting a value between 0 and 100%.
*  A 0% opacity is completely transparent, while 100% opacity is not transparent at all.

### Fields

_PDF for GravityView_ registers new fields that can be used when building a View. [They can be added to your View just like any other field](https://docs.gravitykit.com/article/734-getting-started-adding-fields-to-the-multiple-entries-and-single-entry-pages). However, unlike standard form fields, they are limited to specific View layouts (see below).

#### Link to Single Entry PDF

<div class="two-column-grid">
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-add-pdf-link.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-add-pdf-link.png" alt="A screenshot showing filtered field search results in the GravityView Editor, with the two new PDF fields displayed. The Link to Single Entry PDF field is focused." /></a>
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Link-Single-Entry-PDF-Settings.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Link-Single-Entry-PDF-Settings.png" alt="A screenshot showing all available settings for the Link to Single Entry PDF field in the GravityView Editor" /></a>
</div>

Add the "Link to Single Entry PDF" field and it will display a link to view/download the PDF for your View. It can be added to both the Multiple Entries and Single Entry layout.

The following settings allow you to customize the appearance, display, and functionality of the field:

##### Open in a New Window
* When enabled, the PDF link will open a new browser tab or window
* This setting is disabled by default

##### Link Text
* The PDF link text to display in the View
* Merge tags are supported
* The default value is "View PDF"

##### Force Download
* When enabled, a save dialog box will open / the PDF will be downloaded automatically (depending on the browser settings). When disabled, the document will open directly in the browser window
* This setting is disabled by default

##### Use Smart Loading Indicator
* When [Force Download](#force-download) and this setting is toggled on, a user-friendly loading indicator is shown to the user while the PDF is generated/downloaded.
* This setting is only available when the [Gravity PDF Enhanced Download extension](https://gravitypdf.com/shop/enhanced-download-add-on/) is installed.

##### Show Label
* [Displays the field label in the view](https://docs.gravitykit.com/article/72-working-with-field-labels)
* This setting is enabled by default

##### Custom Label
* When [Show Label](#show-label) is enabled, you can control the text to use for the field label. The text "Link to Single Entry PDF" will be used if this setting is set to an empty value
* The default value is "PDF"

##### Visibility
* This field supports the same visibility settings as other GravityView fields, including _Make visible only to logged-in users_ and _Conditional Logic_ ([if the Advanced Filter extension is enabled](https://www.gravitykit.com/extensions/advanced-filter/)).

##### Custom CSS Class
* CSS classes that will be added to the field's HTML container
* Merge tags are supported

##### Link Expiration
* The length of time a PDF link will remain valid.
* The default value is "1 day"

#### Share Single Entry PDF

<div class="two-column-grid">
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-share-pdf.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-share-pdf.png" alt="A screenshot showing filtered field search results in the GravityView Editor, with the two new PDF fields displayed. The Share Single Entry PDF field is focused." /></a>
    <a href="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Share-Single-Entry-PDF-Settings.png"><img src="https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Share-Single-Entry-PDF-Settings.png" alt="A screenshot showing all available settings for the Share Single Entry PDF field in the GravityView Editor" /></a>
</div>

Add the "Share Single Entry PDF" field to a View and users will be able to enter an email address into a form and have the PDF sent as an attachment to that email. The field can only be added to the Single Entry layout, and should only be included once (any additional fields will be ignored).

The following settings allow you to customize the appearance, display, and functionality of the field:

##### Confirmation Message
* The message to display on-screen after a user enters a valid email address and submit the form
* Merge tags and most HTML tags are supported
* The default is "Thanks! An email has been sent to the address provided."

##### Notification From Name
* The name you would like the notification email sent from
* Merge tags are supported
* Defaults to an empty value

##### Notification From Email
* The authorized email address you would like the notification sent from. To avoid deliverability issues, always use your site domain in the From Email.
* Merge tags are supported
* This default is "{admin_email}"

##### Notification Subject
* The subject line to use for the notification email
* Merge tags are supported
* The default is "A PDF has been shared with you"

##### Notification Message
* The message to use for the email notification
* Merge tags and most HTML tags are supported
* The special merge tag `{gv_entry_link}` will display a link to the Single Entry View the PDF was generated from
* The default is "A PDF has been shared with you from {gv_entry_link} and is attached."

##### Show Label
* [Displays the field label in the view](https://docs.gravitykit.com/article/72-working-with-field-labels)
* This setting is enabled by default

##### Custom Label
* When [Show Label](#show-label) is enabled, you can control the text to use for the field label. The text "Share Single Entry PDF" will be used if this setting is set to an empty value
* The default value is "Share this Listing"

##### Instructions
* The message to display to the user informing them what entering an email address and submitting the form does
* Merge tags and most HTML tags are supported
* The default value is "Enter an email address and a PDF of this listing will be sent as an attachment."

##### Email Field Label
* The Email Address field label
* The default value is "Email"

##### Submit Button Label
* The text to display in the form submit button
* The default value is "Share"

##### Visibility
* This field supports the same visibility settings as other GravityView fields, including _Make visible only to logged-in users_ and _Conditional Logic_ ([if the Advanced Filter extension is enabled](https://www.gravitykit.com/extensions/advanced-filter/)).

##### Custom CSS Class
* CSS classes that will be added to the field's HTML container
* Merge tags are supported

#### Other

![A screenshot showing the new visibility settings for most fields in the GravityView Editor](https://resources.gravitypdf.com/uploads/2023/04/pdf-for-gravityview-Other-visibility-settings.png)

Because the content of the PDF is derived from the fields in your view, new visibility settings have been added to most fields. This gives you greater control over what is, and is not, included in the PDF.

##### Exclude from PDF
* Enable this setting if a field in your View **should** be displayed on your website, but not displayed in your PDF
* This setting is disabled by default and all Single Entry View fields ([except the exclusions](#exclusions)) will be automatically included in the PDF

##### Only Include in PDF
* Enable this setting if a field in your View **should not** be displayed on your website, but should be displayed in the PDF
* This setting is disabled by default

:::info
Don't enable the _Exclude from PDF_ and _Only Include in PDF_ settings at the same time. If you do, the field will be excluded from both the website and the PDF.
:::

### Exclusions

The following GravityView fields are always excluded in the PDF:

* Link to Single Entry PDF
* Share Single Entry PDF
* Link to Edit Entry
* Duplicate Entry
* Delete Entry
* Approve Entries
* Unsubscribe (Cancel Subscription)

## Limitations

1. PDFs are only generated from the Single Entry Layout. PDFs of the Multiple Entries and Edit Entry Layouts isn't currently supported ([let us know if this feature is important to you](https://gravitypdf.com/support/)). If you need a PDF of your Multiple Entries Layout, [the GravityView Datatable extension](https://www.gravitykit.com/extensions/datatables/) includes basic PDF support.
1. There is only rudimentary support for [GravityView's DIY Layout](https://www.gravitykit.com/extensions/diy-layout/).
1. Embedding a View into the Single Entry Layout of another View via the Custom Content field isn't supported
1. Entry Map field included in [GravityView's Maps Layout](https://www.gravitykit.com/extensions/maps/) isn't currently supported ([let us know if this feature is important to you](https://gravitypdf.com/support/)).

## Translations

The *PDF for GravityView* plugin has been translated in the following languages with the help of AI:

* English
* French
* Spanish
* German
* Dutch
* Portuguese
* Chinese (Simple)
* Russian

To translate the plugin into other languages [you can follow this How To Guide](https://gravitypdf.com/news/how-to-translate-gravity-pdf-strings-into-different-languages/) – the text domain for _PDF for GravityView_ is `pdf-for-gravityview`.

## Troubleshooting

This section details common problems you might come across when using _PDF for GravityView_, and how you can troubleshoot them. If you run into a problem you cannot resolve, [you can always open a support ticket and our friendly team will be happy to help](https://gravitypdf.com/support/#support-form).

### The PDF is no longer accessible

Each PDF Download link is valid for a specific time after it is displayed in a View (defaults to 1 day / 24 hours). If you attempt to access that link after the timeout period you will receive this error message. Normally, a fresh link is generated on each page load. But if you've page caching enabled on your website with an expiration period longer than the PDF link, you may experience this error message unexpectedly. To fix the problem, ensure the [Link Expiration setting](#link-expiration) is greater than your page cache expiration.

### There was a problem processing the request

For security reasons, each PDF Download link uses a signed URL which is tamper proof. If the URL is tampered with, a user will receive this error message. Accessing the View and using a fresh PDF Download link should resolve the issue.

### There was a problem with the request

This error may occur if the GravityView or associated entry has been deleted and cannot be found, or the View is modified to make use of a different Gravity Form. Accessing the View and using a fresh PDF Download link should resolve the issue.

### The Notification Email with the PDF Wasn't Received

Just like Gravity Forms, the [_Share Single Entry PDF_](#share-single-entry-pdf) field makes use of [WordPress' wp_mail() function](https://developer.wordpress.org/reference/functions/wp_mail/) to send emails. WordPress will either interact with your web server to send the email, or use the configured SMTP / third-party email provider, to deliver the email.

To troubleshoot an email deliverability issue:

1. Ensure WordPress and all your plugins at up to date
1. Verify you are [using a valid From Address](https://docs.gravityforms.com/troubleshooting-notifications/#h-use-a-valid-from-address)
1. Use SMTP or a third-party email provider to deliver your WordPress emails. There are [plenty of plugins in the WordPress.org repository](https://wordpress.org/plugins/search/smtp/) that will help you set this up.
1. [Enable Gravity Forms Logging](https://docs.gravityforms.com/troubleshooting-notifications/#h-enable-logging)
1. [Check for a Plugin/Theme Conflict](https://docs.gravityforms.com/troubleshooting-notifications/#h-check-for-plugin-or-theme-conflicts)

### How do I use my own font in the PDF?

[Any Custom Font you have configured in Gravity PDF](https://docs.gravitypdf.com/v6/users/custom-fonts) will be available to use in your View's PDF. Use the Font Manager to install the font(s) first, and then [update the PDF Font setting in your View](#font).

## Developers

Developers can further customize _PDF for GravityView_ by overriding one of the View PDF templates, or using one of the hooks provided.

### CSS

Here are useful CSS you can [add to the Additional CSS setting](#additional-css) to change the look and feel of the PDF.

#### Table

Add a border to the individual cells of the table:

```css
.label, .value {
  border: 1px solid #333333;
}
```

Increase the padding within the table cells:

```css
.row-separator td {
  padding: 10px;
}
```

Make the labels display in uppercase:

```css
.label {
  text-transform: uppercase;
}
```

Add a background color to every even row in the table:

```css
table.view tr:nth-child(even) td {
  background: #EEEEEE;
}
```

#### List

Make the Listing Title display in uppercase:

```css
.gv-list-view-title h3 {
	text-transform: uppercase;	
}
```

Change the background color of the Listing Header, as well as the font color of the Listing Title/Subtitle:

```css
.gv-list-view-title {
	background: #1D2475;
    color: #FFFFFF;
}

.gv-list-view-title h3,
.gv-list-view-title h4 {
	color: #FFFFFF;	
}
```

Change the background and text color of the Listing Footer:

```css
.gv-list-view-footer {
	background: #1D2475;
	color: #FFFFFF;	
}

.gv-list-view-footer a {
  color: #FFFFFF;
}
```

Adjust how much space the Image takes up in the main content area:
```css
.gv-list-view-content-image {
	width: 50%;	
}
```

Make the labels bold in the Image and Other Fields section:

```css
.gv-list-view-content .gv-field-label {
  font-weight: bold;
}
```

#### Map

Make the Title display in uppercase:

```css
.gv-map-view-title h3 {
	text-transform: uppercase;	
}
```

Change the background color of the Header, as well as the font color of the Title/Subtitle:

```css
.gv-map-view-title {
	background: #1D2475;
    color: #FFFFFF;
}

.gv-map-view-title h3,
.gv-map-view-title h4 {
	color: #FFFFFF;	
}
```

Change the background and text color of the Listing Footer:

```css
.gv-map-view-footer {
	background: #1D2475;
	color: #FFFFFF;	
}

.gv-map-view-footer a {
  color: #FFFFFF;
}
```

Adjust how much space the Image takes up in the main content area:
```css
.gv-map-view-content-image {
	width: 50%;	
}
```

Make the labels bold in the Image and Other Fields section:

```css
.gv-map-view-content .gv-field-label {
  font-weight: bold;
}
```

#### DIY

Increase the size of the PDF title:

```css
#form_title {
  font-size: 200%;
}
```

Adjust the styles of a H1 heading tag:

```css
h1 {
  color: #1D2475;
  text-transform: uppercase;
  font-size: 180%;
}
```

Make a blockquote more prominent:

```css
blockquote {
  border-left: 5px solid #1D2475;
  margin-left: 0;
  padding-left: 20px;
  font-size: 150%;
  font-style: italic;
}
```

### Hooks

These hooks are available for developers to further customize the extension:

* [gfpdf_gv_template_styles](hooks/pdfgv/gfpdf-gv-template-styles.md)
* [gfpdf_gv_show_label](hooks/pdfgv/gfpdf-gv-show-label.md)

### API

A public API was introduced in v0.8 to help developers simplify common tasks when extending the software. You can easily call any method using `\PDFGV_API::method_name()`.

* [Creating a Single Entry Layout View PDF](api/pdfgv/create-single-entry-pdf.md)
* [Getting the Single Entry PDF Settings](api/pdfgv/get-single-entry-pdf-settings.md)

### Template Overrides

Gravity PDF Core has [long-supported _Template Overrides_](https://docs.gravitypdf.com/v6/developers/template-hierarchy) so that developers can easily customize any of the templates that ship with the plugin. _PDF for GravityView_ follows this same pattern, and you can [copy the templates to the PDF Working Directory](https://docs.gravitypdf.com/v6/developers/first-custom-pdf#pdf-working-directory) and make changes without them being overridden during a plugin update.

The plugin includes the following PDF templates:

* `src/Pdf/Templates/gravityview-single-entry-list-template.php`: used for any Listing/List View
* `src/Pdf/Templates/gravityview-single-entry-table-template.php`: used for any Table / Datatables View
* `src/Pdf/Templates/gravityview-single-entry-map-template.php`: used for any Map View
* `src/Pdf/Templates/gravityview-single-entry-diy-template.php`: used for any DIY View

### Customize a Specific View PDF

The above PDF templates are used for any configured PDF in any View (the specific template used depends on the view layout). But there are circumstances where you may want to customize a PDF for a specific View only. To do so, you can copy the correct template file to the PDF Working Directory and then rename so the View ID is included in the filename.

Say you've a View using the Table Layout with a View ID of `885` ([grab the ID from the Embed Shortcode](https://docs.gravitykit.com/article/73-using-the-shortcode)). You would copy the file `src/Pdf/Templates/gravityview-single-entry-table-template.php` from the plugin to the PDF Working Directory, which on a default installation is in `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/`. Finally, rename the template to `gravityview-single-entry-table-template-885.php` and then make your modifications. Any changes you make will only apply to the PDF generated for View ID 885.

### How Do I Display X, Y, Z in the PDF?

The GravityView PDF templates are more complex than standard Core templates, and how to modify the code to achieve the results you want is outside the scope of our support. If you'd like assistance with any modifications, [we do offer a Bespoke PDF Custom Development service](https://gravitypdf.com/bespoke/) and are more than happy to help.
