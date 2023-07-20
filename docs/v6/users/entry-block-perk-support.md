---
title: "Gravity Wiz Entry Block Support"
sidebar_label: "Entry Block Perk"
description: "The Entry Block Perk is the new kid on the block for displaying and editing Gravity Forms entries on the frontend of your website."
---

<a href="https://gravitywiz.com/documentation/gravity-forms-entry-blocks/?ref=78" rel="sponsored">Gravity Wiz's Entry Block Perk</a> uses the WordPress block editor to allow you to configure and display Gravity Forms entries on the frontend of your website.

## Add PDF Download Link

You can include a PDF Download link in any of the Entry Block's variations using either [the [gravitypdf] shortcode](shortcodes-and-mergetags.md#building-the-shortcode), or the [PDF merge tag](shortcodes-and-mergetags.md#building-the-merge-tag) in combination with a _Button_ block.

:::info
If you are not <a href="https://gravitywiz.com/documentation/gravity-forms-entry-blocks/?ref=78#who-can-view-entries" rel="sponsored">filtering entries by the current logged-in user</a>, you should enable the signed URL feature. Signed URLs are supported for both [the [gravitypdf] shortcode](shortcodes-and-mergetags.md#signed-optional) and [PDF merge tags](shortcodes-and-mergetags.md#signed). Find out more [by reviewing the PDF Permissions section](#permissions).
:::

![The frontend Table variant showing a new custom column to download PDFs for the Gravity Wiz Entry Block perk](https://resources.gravitypdf.com/uploads/2022/05/gravity-wiz-entry-block-table-variant-front-end-2.png)
_The frontend Table variant showing a new custom column to download PDFs_

### Entry Table

The Entry Table variant allows you to control the specific table columns that are displayed on the frontend. To add a PDF Download Link to the table you need to open the _Select a Column_ dropdown (found under the _Summary Columns_ section) and choose the _Custom_ option:

![Selecting a Custom column from the Summary Columns setting in the Table Variant of the Gravity Wiz Entry Block perk](https://resources.gravitypdf.com/uploads/2022/05/gravity-wiz-entry-block-table-variant-add-custom-column.png)

After the new column is added, select the _Open Options_ spanner/wrench icon to bring up the **Summary Column Options** dialog box. Here you will be able to set the label and contents for the new column.

#### Shortcode

[You can copy and paste your form's `[gravitypdf]` shortcode](shortcodes-and-mergetags.md#using-the-shortcode) straight into the _Content_ field and a PDF Download link will automatically be displayed on the frontend.

![Adding the [gravitypdf] shortcode to a new column in the Table Variant of the Gravity Wiz Entry Block perk](https://resources.gravitypdf.com/uploads/2022/05/gravity-wiz-entry-block-table-variant-edit-custom-column-shortcode.png)

#### Merge tag

If you want control of the anchor tag markup [you can use the associated PDF merge tag instead of a shortcode](shortcodes-and-mergetags.md#using-the-merge-tag). This is useful if you wanted the PDF to open up in a new browser tab (`<a target="_blank" ... />`) or to include a wrapper around the link (because your theme auto-applies specific styles to this markup structure).

![Adding an anchor tag that will open in a new window to view a PDF in the Table Variant of the Gravity Wiz Entry Block perk](https://resources.gravitypdf.com/uploads/2022/05/gravity-wiz-entry-block-table-variant-edit-custom-column-mergetag.png)

### Entry Loop, Single Entry, Edit Single Entry

Unlike the table view, all other variants make full use of the available blocks in the editor. This means you need to add a new block to the variant you are interested in to include a PDF Download Link.

![A Shortcode and Button Group block in the Block Editor with a PDF download link added using both the PDF shortcode and merge tag](https://resources.gravitypdf.com/uploads/2022/05/gravity-wiz-entry-block-single-variant-shortcode-and-mergetag-pdf-links.png)

#### Shortcode

You can add a _Shortcode_ block or copy/paste the `[gravitypdf]` shortcode straight into a new paragraph to include a PDF Download Link in one of these variants.

#### Merge tag

Add a _Button_ block and add the Gravity PDF merge tag for the button's link. Alternatively, you can highlight text in a paragraph block and use the PDF merge tag for the link.

## Permissions

Because of [Gravity PDF's security](pdf-security.md), default access to view or download PDFs is restricted to the entry owner, or users with a capability found in the [User Restriction setting](global-settings.md#user-restriction). Unless you <a href="https://gravitywiz.com/documentation/gravity-forms-entry-blocks/?ref=78#permissions" rel="sponsored">are creating a member's area so the current logged-in user can download their own PDFs</a>, or a simple CRUD system for site admins, you should enable the Signed PDF feature so the public can access the PDF documents.

If using the `[gravitypdf]` shortcode you should [include the `signed="1"` attribute](shortcodes-and-mergetags.md#signed-optional):

`[gravitypdf name="Default Template" id="56ea5a3b2c684" text="Download PDF" signed="1"]`

If using a PDF merge tag you [should include the `signed` modifier](shortcodes-and-mergetags.md#signed):

`{Default Template:56ea5a3b2c684:signed}`
