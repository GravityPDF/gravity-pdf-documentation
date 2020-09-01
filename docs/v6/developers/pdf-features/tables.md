---
title: "Custom Template Table Formating and its Quirks in PDFs"
sidebar_label: "Tables"
description: "There is quite good support for HTML tables in mPDF, but it does have its quirks. Use tables for tabular data and you'll find them a treat."
---

## Introduction 

There is quite good support for HTML tables in [mPDF](http://mpdf.github.io/), but it does have its quirks. The two biggest issues you might face when using tables are:

1.  **Unsupported Block Elements**. All block elements included in table cells are ignored. The content will still be displayed but you won't be able to directly style the elements using CSS (you can still apply styles to the table cell directly).

2.  **Autosizing.** On a website, if a table is too large for its container it might overflow outside it, or use a horizontal scroll bar. Because PDFs cannot do those things it instead alters the column widths and font sizes. Basically, mPDF places more priority on producing a pleasing, efficiently laid out table than it does respecting defined widths and sizes. [But there are ways to minimise this effect](#table-rendering).

Because of these two issues tables have limited use when designing your PDF layout. We've found [carefully calculated floats](floats.md) is the better option for producing more complex designs. Use tables for tabular data and you'll find them a treat.

![Example of Tables rendered in mPDF](https://resources.gravitypdf.com/uploads/2015/11/table-preview.png)

## Table Rendering 

The table autosizing feature can sometimes cause issues with your layouts. One way to prevent unnecessary font resizing is to set a special `autosize` attribute to `1` and the table overflow to `wrap` when defining the table:

```html
<table autosize="1" style="overflow: wrap">

</table>
```

Other problems with cell width can occur when you have fixed widths applied to `<td>` or `<th>` tags. To prevent problems follow these guidelines:

1. You can set the width of a cell [using any Length measuring unit supported by mPDF](http://mpdf.github.io/css-stylesheets/supported-css.html). The most common are `mm`, `%`, `px` and `in`, while the easiest to work with is percentages `%`. 

2.  Only add a width to the first row in your table – either inline, or using CSS classes.

3.  Don't add a width to at least one of your columns.

```html
<table autosize="1">
   <!-- Set the cell widths in the first row -->
   <tr>
        <td width="30%">Cell 1</td>
        <td width="30%">Cell 2</td>
        <td>Cell 3</td><!-- This column will fill the rest of the table width (about 40%, minus the border width)
   </tr>

   <!-- No need to set them for any other rows -->
   <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 2</td>
   </tr>
</table>
```

## Repeating Header and Footers 

If a table extends across multiple pages the `<thead></thead>` and `<tfoot></tfoot>` elements will be automatically appended and prepended to the table for each new page.

## Rotating Table 

Tables can be rotated 90 degrees clockwise or counter-clockwise so they fit nicely on portrait documents. This feature can be applied using the CSS `rotate` property.

```css
#clockwise {
   rotate: 90;
}

#counterclockwise {
   rotate: -90;
}
```

## Example 

[We’ve put together a sample showing off the table support in Gravity PDF](https://gist.github.com/jakejackson1/de009962d7ec776d223c).

For more information about the methods discussed we recommend reviewing the mPDF documentation:

-   [Tables](http://mpdf.github.io/tables/tables.html)
-   [Table Layout](http://mpdf.github.io/tables/table-layout.html)
-   [Auto Table Layout](http://mpdf.github.io/tables/table-layout.html)
-   [Border Collapse](http://mpdf.github.io/tables/border-collapse.html)
-   [Supported HTML](http://mpdf.github.io/html-support/html-tags.html)
-   [Supported CSS](http://mpdf.github.io/css-stylesheets/supported-css.html)
