---
title: "Example of Adding Custom Page Sizes to PDF Templates"
sidebar_label: "Change Document Size"
description: ""
---

<h2>Change Document Size</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
Template Name: <code>example-different-page-size_08.php</code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-different-page-size_08.php</strong></code>

mPDF allows the document size and layout to be changes on a per-page basis, giving you finite control over the output of your PDF document.

Pagebreaks can be controlled using the <code>&lt;pagebreak&gt;</code> tag or via <em>Named</em> <code><a href="http://mpdf.github.io/paging/using-page.html">@page</a></code> elements. However the simplest technique is to use the <code>&lt;pagebreak&gt;</code> tag.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-different-page-size_08.pdf">Download Example PDF</a>

<h3>Example</h3>

```html
<!-- set the next page to A6 -->
<pagebreak sheet-size="A6" />
    
<!-- set the next page using a custom size -->
<pagebreak sheet-size="70mm 150mm" />

<!-- set the next page to landscape -->
<pagebreak orientation="landscape" />

<!-- combine the sheet size and orientation -->
<pagebreak sheet-size="A4" orientation="landscape" />

```

While the examples are basic, <a href="http://mpdf.github.io/reference/html-control-tags/pagebreak.html">the <code>&lt;pagebreak&gt;</code> element attributes can be complex</a> so we advise you read the mPDF documentation before using it.