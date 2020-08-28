---
title: "Reserved Variables"
sidebar_label: "Reserved Variables"
description: ""
---

mPDF has a number of reserved keywords that can be placed in your HTML templates that allows you to output the page number, total document pages, the date, and the sum of a table's column.
<table class="code_display">
<tbody>
<tr>
<th>Variable</th>
<th>Description</th>
</tr>
<tr>
<td>&#123;nb?&#125;</td>
<td>Will return the total number of pages in the PDF document.</td>
</tr>
<tr>
<td>&#123;PAGENO&#125;</td>
<td>Will be replaced by the current page number. Only available in the header or footer.</td>
</tr>
<tr>
<td>&#123;DATE d/m/Y&#125;</td>
<td>Will be replaced by today's date. The date format can use any value that PHP's <a href="https://www.php.net/manual/en/function.date.php">date()</a> function uses. Only available in the header or footer. We advice you use the date passed through the $form_data array instead.</td>
</tr>
<tr>
<td>&#123;colsum&#125;, &#123;colsum<i>N</i>&#125;</td>
<td>The total values in the corresponding column will output at the end of the table. Only available in a table footer - <code>&lt;tfoot&gt;&lt;td&gt;&#123;colsum&#125;&lt;/td&gt;&lt;/tfoot&gt;</code>.
<strong>Note</strong>: An optional integer <code><i>N </i></code>parameter will specify a fixed number of decimal places.</td>
</tr>
</tbody>
</table>
For the full details about reserved template variables <a href="http://mpdf.github.io/what-else-can-i-do/replaceable-aliases.html">view the mPDF documentation</a>.