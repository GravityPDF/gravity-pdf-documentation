---
title: "GravityView Support is Built-in to Gravity PDF"
sidebar_label: "GravityView"
description: "GravityView is a superb way to display Gravity Forms entries on the front-end of your website, and Gravity PDF is fully supported."
---

import ResponsiveEmbed from 'react-responsive-embed'

<p><a href="https://www.gravitykit.com/features/?ref=186" rel="sponsored">The GravityView plugin</a> is one of the best way to display Gravity Forms entries publicly on your website. Basic GravityView support is built right into Gravity PDF, and advanced support is available <a href="https://gravitypdf.com/shop/pdf-for-gravityview-add-on/">using the <em>PDF for GravityView</em> extension</a>. The documentation on this page will only cover the basic support, and you should <a href="../v6/extensions/pdf-for-gravityview-add-on/">refer to the <em>PDF for GravityView</em> documentation for the advanced feature-set</a>.</p>

:::tip
[_PDF for GravityView_ is a premium Gravity PDF extension](https://gravitypdf.com/shop/pdf-for-gravityview-add-on/) which offers deep integration with the View Editor. This [turns GravityView into a powerful PDF builder](https://gravitypdf.com/news/turning-gravityview-into-a-powerful-pdf-builder-tool/), and makes it easy to generate PDFs of your Views. You'll save hours compared to [replicating your view in code using a custom template](developer-first-custom-pdf.md).
:::

## Add PDF Download Link to View

You can easily add PDF Download links to your View. To do this you'll need to use [GravityView's Custom Content Field](http://docs.gravityview.co/article/111-using-the-custom-content-field). Go edit your View in the admin area, click the `+ Add Field` button in the *Multiple Entries* or *Single Entry* tab, and click *Custom Content*. Next, go to your form's [Manage PDF page](user-managing-pdfs.md), copy the `[gravitypdf]` shortcode in the list and paste it into the View's Custom Content Field. Save the View and go check if it's working.

![Adding a Gravity PDF shortcode to GravityView's Custom Content field](https://resources.gravitypdf.com/uploads/2016/06/GravityViewCustomContent.png)
_Adding a Gravity PDF shortcode to GravityView's Custom Content field._

![The PDF Download links added to a GravityView table](https://resources.gravitypdf.com/uploads/2016/06/GravityViewList.png)
_The PDF Download links added to a GravityView table_

Because of [Gravity PDF's security](user-pdf-security.md), by default access to the PDFs is restricted to the entry owner or users with a capability found in the [User Restriction setting](user-global-settings.md#user-restriction). That means that you'd need to:

1.  Using <a href="https://gravityview.co/extensions/advanced-filter/?ref=186" rel="sponsored">GravityView's Advanced Filter extension</a> to [show the entries from the current logged in user](https://docs.gravityview.co/article/203-how-to-show-only-results-submitted-by-the-current-user).

2.  Using a Membership plugin that allows you to show/hide content based on user roles ([Paid Memberships Pro](https://wordpress.org/plugins/paid-memberships-pro/) comes to mind). You can display the GravityView to a user with a Role that includes one of the capabilities found in Gravity PDF's [User Restriction setting](user-global-settings.md#user-restriction) – by default, this is only the Administrator role. Not sure what Roles and Capabilities are? [Here's a great article from WPShout discussing the finer points](https://wpshout.com/working-with-wordpress-user-roles-and-capabilities/).

## Public Access

If you'd like anyone with access to your View to securely download the PDF(s), you can [take advantage of signed PDF URLs](user-shortcodes.md#signed-optional) introduced in Gravity PDF 5.1. Just amend the [gravitypdf] shortcode added to the Custom Content Field and include the `signed="1"` attribute:

`[gravitypdf name="Default Template" id="56ea5a3b2c684" text="Download PDF" signed="1"]`
