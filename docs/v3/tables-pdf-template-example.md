---
title: "Example of Table Support in PDF Templates"
sidebar_label: "Tables"
description: ""
---

<h2>Tables</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
Template Name: <code>example-tables04.php </code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-tables04.php</strong></code>

There is quite good support for tables in mPDF (compared with similar software packages). It even includes advanced features like auto scaling text, nested tables and 90 degree rotation.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-tables04.pdf">Download Example PDF</a>

<div class="warning">There is no block-level CSS support inside tables, however the content will be rendered. That means no CSS targeted at block-level elements inside a table will be applied.</div>
<h3>Rotating Table</h3>
Tables can be rotated 90 degrees so they fit nicely on portrait documents. This feature can be applied using the CSS <code>rotate: 90|-90;</code> property.

```css 
table {
   rotate: 90;
}
```

<h3>Autosizing</h3>
If a table's minimum width is too wide for the outer container it will automatically reduce the font size in order to fit. The minimum width is calculated by the sum of column widths required to fit the longest single word in the column.

If you want to prevent any unnecessary resizing for a particular table you can add the <code>autosize="1"</code> attribute to the table element <code>&lt;table autosize="1"&gt;</code>.
<h3>Repeating Header and Footers</h3>
If a table extends across multiple pages the <code>&lt;thead&gt;&lt;/thead&gt;</code> and <code>&lt;tfoot&gt;&lt;/tfoot&gt;</code> elements will be appended and prepended respectfully to each new page the <code>table</code> extends to.

Please read the mPDF documentation for <a href="http://mpdf.github.io/tables/tables.html">additional details on table configuration</a>.