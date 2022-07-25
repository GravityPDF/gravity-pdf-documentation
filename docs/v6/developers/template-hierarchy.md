---
title: "File and Template Overrides / Hierarchy"
sidebar_label: "Template Overrides"
description: "Gravity PDF has a template hierarchy much like WordPress theme and child themes. You can override Core PDF templates, configuration and images."
---

## Introduction 

We [touched on the template hierarchy](first-custom-pdf.md#template-hierarchy) when you created your first custom PDF template. The hierarchy allows you to copy Core template files to the PDF Working Directory and modify them without worrying about your changes being overridden when you update the plugin. If you're on a multisite installation the template hierarchy includes an additional tier, so it's important to be aware of the loading order.

## Hierarchy

### Standard WordPress

![WordPress Standard Template Hierarchy](https://resources.gravitypdf.com/uploads/2015/11/WordPress-Standard-Hierarchy.png)

On a standard WordPress installation, the template hierarchy is straightforward. Files in the [PDF Working Directory](first-custom-pdf.md#pdf-working-directory) override templates with the same name that ship with the plugin.

### Multisite WordPress

![WordPress Multisite Template Hierarchy](https://resources.gravitypdf.com/uploads/2015/11/WordPress-Multisite-Hierarchy.png)

To allow more flexibility with PDF templates, Multisite installations add another layer to the template hierarchy. Each site in a Multisite installation [gets its own PDF Working Directory](first-custom-pdf.md#multisite-structure), so different sites can have their own templates that won't be included for other subsites. If installing a template via the [PDF Template Manager](../users/pdf-template-manager.md), it'll be saved in the subsite directory and not directly in the [Working Directory](first-custom-pdf.md#pdf-working-directory).

Individual subsite templates override any global templates in the `PDF_EXTENDED_TEMPLATES` directory (which apply to all Multisite installations), which in turn override the Core Gravity PDF templates (like in a [standard WordPress installation](#standard-wordpress)).

## Where are the Core template files?

You can find the Core templates in the [`/wp-content/plugins/gravity-forms-pdf-extended/src/templates/` directory](https://github.com/GravityPDF/gravity-pdf/tree/development/src/templates) on a normal WordPress installation.

## How do I modify Core templates?

With an FTP client or your hosting File Manager, copy the [core template you want to modify](https://github.com/GravityPDF/gravity-pdf/tree/development/src/templates) to the PDF Working Directory. You can optionally copy over the associated configuration and image files, adhering to the same folder structure used in the plugin.

```text
+-- PDF_EXTENDED_TEMPLATES
|   +-- zadani.php
|   +-- /config/
|       +-- zadani.php
|   +-- /images/
|       +-- zadani.png
```

On a multisite installation you can use the structure above if you want the Core template modification to be available to all sites in your network, or only make it available to a single subsite.

```text
+-- PDF_EXTENDED_TEMPLATES
|   +-- /5/
|       +-- zadani.php
|       +-- /config/
|           +-- zadani.php
|       +-- /images/
|           +-- zadani.png
```

Once done, you're free to modify the CSS in the Core template – [`?html=1` helper](helper-parameters.md#html1) will help you target the appropriate HTML – or include additional content before or after the fields. If you want to modify the mark-up for individual fields the following filters may be useful to you:

* [`gfpdf_pdf_field_content`](filters/gfpdf_pdf_field_content.md)
* [`gfpdf_field_label`](filters/gfpdf_field_label.md)
* [`gfpdf_field_html_value`](filters/gfpdf_field_html_value.md)
* [`gfpdf_field_section_break_html`](filters/gfpdf_field_section_break_html.md)
* [`gfpdf_show_field_value`](filters/gfpdf_show_field_value.md)
* [`gfpdf_signature_width`](filters/gfpdf_signature_width.md)
* [`gfpdf_disable_product_table`](filters/gfpdf_disable_product_table.md)

### How do I update outdated templates?

If you get a warning on the [System Status page](../users/system-status.md) about having an outdated PDF template, it means the version of the template shipped with in Gravity PDF core is higher than the version of your template override stored in the PDF Working Directory. You could ignore the warning, but you may miss out on new features that get added ([like Drag and Drop column support in Gravity Forms 2.5](../users/why-arent-columns-showing-in-pdf.md)). 

To resolve the warning you've two options available:

1. If you are certain you haven't made any modifications to the Core template(s), you can delete those template files via the [PDF Template Manager](../users/pdf-template-manager.md#delete) and your site will go back to using the template shipped with the plugin.
1. If you did modify a Core template, you will need to manually copy the changes over to your override file. For the Gravity PDF 6.0 update, [this CSS was added to each Core template to support Drag and Drop columns](https://github.com/GravityPDF/gravity-pdf/blob/6.0.0-RC2/src/templates/zadani.php#L49-L97). You should also update the version number in the template header.