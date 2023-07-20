---
title: "GravityView Support"
sidebar_label: "GravityView Support"
description: ""
---

The <a href="https://gravityview.co/?ref=186" rel="sponsored">third party GravityView plugin</a> is the best way to display Gravity Forms entries on your website, and Gravity PDF includes a basic integration which allows you to display PDF download links in your Views.

To do this you'll need to use [GravityView's Custom Content Field](http://docs.gravityview.co/article/111-using-the-custom-content-field). Go edit your View in the admin area, click the `+ Add Field` button in the *Multiple Entries* or *Single Entry* tab, scroll to the bottom of the pop up that appears and click *Custom Content*. Next, go to your form's [Manage PDF page](user-managing-pdfs.md), copy the `[gravitypdf]` shortcode in the list and paste it into the View's Custom Content Field. Save the View and go check if it's working.

<img src="https://resources.gravitypdf.com/uploads/2016/06/GravityViewCustomContent.png" alt="Adding a Gravity PDF shortcode to GravityView's Custom Content field" width="952" height="642" class="size-full wp-image-9638" /> Adding a Gravity PDF shortcode to GravityView's Custom Content field

<img src="https://resources.gravitypdf.com/uploads/2016/06/GravityViewList.png" alt="The PDF Download links added to a GravityView table" width="700" height="276" class="size-full wp-image-9637" /> The PDF Download links added to a GravityView table

Because of [Gravity PDF's default security](user-pdf-security.md) following the steps described above is only useful when:

1. Using <a href="https://gravityview.co/extensions/advanced-filter/?ref=186" rel="sponsored">GravityView's Advanced Filter extension</a> to [show the entries from the current logged in user](https://docs.gravityview.co/article/203-how-to-show-only-results-submitted-by-the-current-user).

1. Use a Membership plugin that allows you to show/hide content based on user roles ([Paid Memberships Pro](https://wordpress.org/plugins/paid-memberships-pro/) comes to mind). Then you can display the GravityView to a user with a Role that includes one of the capabilities found in Gravity PDF's [User Restriction setting](user-global-settings.md#user-restriction) – by default this is only the Administrator role. Not sure what Roles and Capabilities are? [Here's a great article from WPShout discussing the finer points](https://wpshout.com/working-with-wordpress-user-roles-and-capabilities/).

If you are positive you want to **allow anyone** to access the PDFs you can [enable Public Access mode](user-setup-pdf.md#enable-public-access) which disables all PDF security. **Only do this if your PDFs do not contain sensitive user information**.

