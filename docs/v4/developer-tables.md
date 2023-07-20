---
title: "Table Formating and its Quirks in PDFs – PDF Development"
sidebar_label: "Tables"
description: "There is quite good support for HTML tables in mPDF, but it does have its quirks. Use tables for tabular data and you'll find them a treat."
---

### Introduction

There is quite good support for HTML tables in [mPDF](http://mpdf.github.io/), but it does have its quirks. The two biggest issues you might face when using tables are:

1. **Unsupported Block Elements**. All block elements included in table cells are ignored. The content will still be displayed but you won't be able to directly style the elements using CSS (you can still apply styles to the table cell directly).

1. **Autosizing.** On a website, if a table is too large for its container it might overflow outside it, or use a horizontal scroll bar. Because PDFs cannot do those things it instead alters the column widths and font sizes. Basically, mPDF places more priority on producing a pleasing, efficiently laid out table than it does respecting defined widths and sizes. [But there are ways to minimise this effect](#table-rendering).

Because of these two issues tables have limited use when designing your PDF layout. We've found [carefully calculated floats](developer-floats.md) is the better option for producing more complex designs. Use tables for tabular data and you'll find them a treat.

![Example of Tables rendered in mPDF](https://resources.gravitypdf.com/uploads/2015/11/table-preview.png)

### Table Rendering

The table autosizing feature can sometimes cause issues with your layouts. One way to prevent unnecessary font resizing is to set a special `autosize` attribute to `1` and the table overflow to `wrap` when defining the table:

```{.language-html}
<table autosize="1" style="overflow: wrap">
</table>
```

Other problems with cell width can occur when you have fixed widths applied to `<td>` or `<th>` tags. To prevent problems you should follow these notes:

1. Instead of using pixels or millimetres for cell widths, use percentages instead and *don't add a width* to one of your columns.

1. We recommend you apply the width to every row – either inline, or using CSS classes. Remember, each row's cell width must be the same as the last rows. If you do need to change cell width at some point you could either:
     * Add extra columns and use `colspan` to create a more robust structure
     * Use a `<table>` inside your table cell – the HTML becomes complex very quickly so try steer clear.

1. If you do need to add a width to *all* columns, ensure the column width percentages add up to 100%. Keep in mind the [standard box-model applies](https://css-tricks.com/the-css-box-model/) so left and right padding on your cells should be included in your width calculations. To get around this behaviour don't add a width to one of your columns so it's automatically calculated.

```{.language-html}
<table autosize="1">
   <tr>
        <td width="30%">Cell 1</td>
        <td width="70%">Cell 2</td>
   </tr>

   <tr>
        <td width="30%">Cell 1</td>
        <td width="70%">Cell 2</td>
   </tr>
</table>
```

### Repeating Header and Footers

If a table extends across multiple pages the `<thead></thead>` and `<tfoot></tfoot>` elements will be automatically appended and prepended to the table for each new page.

### Rotating Table

Tables can be rotated 90 degrees clockwise or counter-clockwise so they fit nicely on portrait documents. This feature can be applied using the CSS `rotate` property.

```{.language-css}
table#clockwise {
   rotate: 90;
}

table#counterclockwise {
   rotate: -90;
}
```

### Example
[We’ve put together a sample showing off the table support in Gravity PDF](https://gist.github.com/jakejackson1/de009962d7ec776d223c).

For more information about the methods discussed we recommend reviewing the mPDF documentation:

* [Tables](http://mpdf.github.io/tables/tables.html)
* [Table Layout](http://mpdf.github.io/tables/table-layout.html)
* [Auto Table Layout](http://mpdf.github.io/tables/table-layout.html)
* [Border Collapse](http://mpdf.github.io/tables/border-collapse.html)
* [Supported HTML](http://mpdf.github.io/html-support/html-tags.html)
* [Supported CSS](http://mpdf.github.io/css-stylesheets/supported-css.html)