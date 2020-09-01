---
title: "Why aren't Columns Showing in PDF?"
sidebar_label: "Why aren't Columns Showing in PDF?"
description: "Gravity PDF attempts to match the same layout as your form when using CSS Ready Classes. We support two- and three-column layouts."
---

![Gravity PDF Three Column Layout Support using CSS Ready Classes](https://resources.gravitypdf.com/uploads/2016/05/three-column-layout.png)
_Gravity PDF Three Column Layout Support using CSS Ready Classes_

[In Core and some Universal PDFs](css-ready-classes.md), Gravity PDF attempts to match the same layout as your form [when using CSS Ready Classes](https://docs.gravityforms.com/css-ready-classes/). For instance, if you use the `gf_left_half` and `gf_right_half` classes on two fields that are next to each other in the form builder this will create a two column layout in the PDF (and your form). We also support three column layouts with the `gf_left_third`, `gf_middle_third` and `gf_right_third` field classes.

Provided you aren't using a half or three column layout on checkbox or radio button fields, we also support `gf_list_2col`, `gf_list_3col`, `gf_list_4col` and `gf_list_5col` classes in the PDF. **The class `gf_list_inline` is not supported.**

If you want to use columns in your custom PDF templates, you'll need to copy the appropriate CSS from our core template files and use a format like this:

```html
<!-- Two Column Layout -->
<div class="row-separator">
   <div class="gf_left_half">
     <!-- Left Column -->
   </div>
   <div class="gf_right_half">
     <!-- Right Column -->
   </div>
</div>

<!-- Three Column Layout -->
<div class="row-separator">
   <div class="gf_left_third">
     <!-- Left Column -->
   </div>
   <div class="gf_middle_third">
     <!-- Middle Column -->
   </div>
   <div class="gf_right_third">
     <!-- Right Column -->
   </div>
</div>

<!-- Add Five Column List Layout -->
<div class="row-separator">
    <ul class="gf_list_5col">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</div>
```
