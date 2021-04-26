---
title: "Gravity PDF CSS Ready Class Support"
sidebar_label: "Legacy Column Support"
description: "Gravity PDF supports columns in Core and Universal templates through the use of Gravity Forms CSS Ready Classes."
---

![Snapshot of the CSS Ready PDF Classes](https://resources.gravitypdf.com/uploads/2015/10/css-ready.png) 

In the Core PDF templates (and some [Universal templates](https://gravitypdf.com/store/#universal)), two/three/four legacy column support is provided [through the use of CSS Ready Classes](https://docs.gravityforms.com/css-ready-classes/).

:::caution
CSS Ready Classes are only supported in PDFs when [Gravity Forms Legacy mode is enabled](https://docs.gravityforms.com/guide-to-gravity-forms-2-5-for-theme-developers/#legacy-mode) via `Form Settings -> Enable legacy markup`.
:::

## Supported Classes 

Gravity PDF supports the following official CSS Ready Classes:

-   `gf_left_half` (two-column layout)
-   `gf_right_half` (two-column layout)
-   `gf_left_third` (three-column layout)
-   `gf_middle_third` (three-column layout)
-   `gf_right_third` (three-column layout)

When not already in a column the following *List* classes are also supported:

-   `gf_list_2col`
-   `gf_list_3col`
-   `gf_list_4col`
-   `gf_list_5col`

## Four Column Classes 

[This four-column CSS code](https://gist.github.com/WebEndevSnippets/5555354) has become increasingly popular for Gravity Forms users and so we have added full support for these classes in Gravity PDF (make sure to include the custom CSS with your theme to get the same effect on the front end). 

To start using in your PDF, add the classes `gf_first_quarter`, `gf_second_quarter`, `gf_third_quarter` and `gf_fourth_quarter` to your Gravity Forms fields and supported PDF templates will automatically create a four column layout to match.

## Adding to Form

[pic]

Add the appropriate CSS Ready Class to your field's __Custom CSS Class__ setting in the Form Editor, which is located under the _Appearance_ setting. 