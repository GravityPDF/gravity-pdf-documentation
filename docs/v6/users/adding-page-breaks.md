---
title: "Add Page Breaks to Core and Universal PDF Templates"
sidebar_label: "Adding Page Breaks"
description: "You can force a page breaks before certain fields in Core and Universal PDF templates using a special CSS class in the Gravity Forms Editor."
---

You can force a page breaks before certain fields in Core and [Universal PDF templates](https://gravitypdf.com/template-shop/#universal) using a special CSS class in the Gravity Forms Editor.

## Add Pagebreak before Field

![Add 'pagebreak' class to Gravity Form Field](https://resources.gravitypdf.com/uploads/2017/06/pagebreak.png)

To create a pagebreak in the PDF, you need to add the CSS class `pagebreak` to a field in the Gravity Forms Editor. You can do this by:

1.  Navigating to your form's editor
2.  Select the field you want forced onto a new page in the PDF
3.  Open the `Appearance` tab and add `pagebreak` to the `Custom CSS Class` field. If a class is already included ensure you add a space between it and `pagebreak`
4.  Save your form

This technique works for all fields that support Custom CSS Classes, except *Product* fields when grouped in the product table ([use the Core Booster extension to ungroup products](https://gravitypdf.com/shop/core-booster-add-on/#product-fields)).