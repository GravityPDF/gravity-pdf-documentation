---
title: "Why aren't Columns Showing in PDFs?"
sidebar_label: "Columns not Working"
description: "Discover why Core / Universal templates may not display fields in columns and ways to fix."
---

![Gravity PDF Three Column Layout Support using CSS Ready Classes](https://resources.gravitypdf.com/uploads/2016/05/three-column-layout.png)
_Gravity PDF Three Column Layout Support using CSS Ready Classes_

## Drag and Drop

[Drag and Drop columns](https://docs.gravityforms.com/working-with-columns/) is a new feature in Gravity Forms 2.5 which all Core and the majority of [Universal PDF](http://gravitypdf.com/store/#universal) templates support out of the box. That is, the PDFs will automatically display fields in columns to match the form layout. 

:::note
If you upgrade to Gravity Forms 2.5, all your existing forms will be in [Legacy Mode](#legacy-mode) and you have to turn it off to enable Drag and Drop columns.
:::

The primary reason for Drag and Drop columns not working in PDFs (aside from those listed in the [Developers section](#developers)) is your using an outdated template file.

If it's a Universal template, [login to your GravityPDF.com account](https://gravitypdf.com/account/), download the latest version of that template, and reinstall [via the Template Manager](pdf-template-manager.md#install). If your license has lapsed, you will need to purchase a new one. 

If you're using a Core PDF, your [template overrides](@TODO) are outdated and don't include the new CSS required to support Gravity Forms 2.5 columns. You can double check this in the [Gravity PDF-section of the System Status page](@TODO). The solution is to either:

1. [Delete the template override file via the PDF Template Manager](pdf-template-manager.md#delete). Gravity PDF will then load the new Core template shipped with version 6. **Only use this method if you haven't made any direct modifications to the Core template you are deleting.**

2. Using FTP, or your host's File Manager, modify the Core template override file(s) [in the PDF Working Directory](@TODO) and add in this new CSS: https://github.com/GravityPDF/gravity-pdf/blob/development/src/templates/zadani.php#L49-L97

## Legacy Mode

If your form [has Legacy Markup enabled](https://docs.gravityforms.com/guide-to-gravity-forms-2-5-for-theme-developers/#legacy-mode) Gravity PDF will use the [CSS Ready Classes](css-ready-classes.md) to output columns in Core and [Universal PDFs](http://gravitypdf.com/store/#universal). 

If you previously relied on CSS Ready Classes in your form but have since disabled the Legacy Markup setting, Gravity PDF will ignore any CSS Ready Classes in favour of Drag and Drop columns. To fix, you can either enable legacy markup again, or update your form to use drag and drop columns instead.

The `gf_inline` and `gf_list_inline` CSS Ready Classes are not supported by Gravity PDF.

## Unsupported Templates

Due to their design, the following Universal PDFs don't support columns:

1. [Cellulose](https://gravitypdf.com/shop/cellulose/)
1. [Formium](https://gravitypdf.com/shop/formium/)
1. [Formialt](https://gravitypdf.com/shop/formialt/)
1. [Leo](https://gravitypdf.com/shop/leo/)

## Developers
Columns are usually enabled by default (depending on the template), but can be disabled through various means:

1. Modify a Core/Universal template file and set `enable_css_ready_classes` to `false` in the `$html_config['meta']` configuration array. The associated column CSS may also be deleted.
   
2. Use the filter `gfpdf_field_container_class` to override the default HTML container wrapper. The associated column CSS in the template may also be deleted. **Note: the filter may not be located directly in the template file, and could be added anywhere WordPress hooks are supported.**

If any of the above is implimented, you need to rollback those changes to get columns working again in the associated Core/Universal template file(s).


