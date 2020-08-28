---
title: "Gravity PDF CSS Ready Class Support"
sidebar_label: "CSS Ready Classes"
description: "In version 4.0 we redesigned Gravity PDF to better support CSS Ready Classes. If you add columns to your form they will be reflected in the PDF as well."
---

![Snapshot of the CSS Ready PDF Classes](https://resources.gravitypdf.com/uploads/2015/10/css-ready.png) 

Gravity Forms display forms in a single column, but sometimes you want to condense everything and display the fields in two or three columns. This is why Gravity Forms introduced [CSS Ready Classes back in version 1.5](https://www.gravityhelp.com/documentation/article/css-ready-classes/). They included a number of pre-set class names that allow you to easily style your form.

Until recently Gravity PDF suffered from the same issue – only a single column PDF was generated. But in version 4.0 we redesigned the system to better support this feature. If you add columns to your Gravity Form they will be reflected in the PDF as well.

---

### Supported Classes 

Gravity PDF supports the following official CSS Ready Classes:

* `gf_left_half` (two-column layout)
* `gf_right_half` (two-column layout)
* `gf_left_third` (three-column layout)
* `gf_middle_third` (three-column layout)
* `gf_right_third` (three-column layout)

When not already in a column the following *List* classes are also supported:

* `gf_list_2col`
* `gf_list_3col`
* `gf_list_4col`
* `gf_list_5col`

Bare in mind that Gravity PDF filters out empty fields by default which can cause issues with the column structure. If the PDF template supports it, you should enable the [*Show Empty Fields*](user-setup-pdf.md#show-empty-fields) option to prevent display issues.

### Four Column Classes 

**Four Column Classes are only supported in Gravity PDF 4.1 or higher**

[This four-column CSS code](https://gist.github.com/WebEndevSnippets/5555354) has become increasingly popular for Gravity Forms users and so we have added full support for these classes in Gravity PDF (make sure to include the custom CSS with your theme to get the same effect on the front end).

To start using in your PDF, add the classes `gf_first_quarter`, `gf_second_quarter`, `gf_third_quarter` and `gf_fourth_quarter` to your Gravity Form fields and supported PDF templates will automatically create a four column layout to match. 

> If you've previously run the [Setup Custom Templates](user-global-settings.md#custom-templates) tool when creating custom templates in a version of Gravity PDF below 4.1 you'll need to re-run the tool. Alternatively you can [copy the new PDF template changes](https://github.com/GravityPDF/gravity-pdf/pull/561/files) to your modified custom PDF template.