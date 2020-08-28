---
title: "Example of Floated and Fixed Positioning in PDF Templates"
sidebar_label: "Floats and Fixed Positioning"
description: ""
---

<h2>Floats and Fixed Positioning</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
Template Name: <code>example-float-and-positioning05.php</code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;amp;fid=3&amp;amp;lid=40&amp;amp;<strong>template=example-float-and-positioning05.php</strong></code>

Floats and fixed positioning is partially supported in mPDF but doesn’t conform to all requirements of the W3 CSS2 specification.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-float-and-positioning05.pdf">Download Example PDF</a>

<h3>Floats Limitations</h3>
<ul>
	<li>Only block elements can be floated.</li>
	<li>Floats only work if a width is set on the element
<div class="message"><a href="https://css-tricks.com/the-css-box-model/">The standard box-model applies</a> so floating two elements left with a 50% width and any borders or padding won’t produce a two-column layout (the second box would be pushed down below the first).</div></li>
</ul>

<h3>Clearing Floats</h3>
The CSS <code>clear</code> property can be set on all block elements, as well as <code>&amp;lt;hr&amp;gt;</code> and <code>&amp;lt;br &amp;gt;</code> tags.
<h3>Positioning Limitations</h3>
The CSS <code>position</code> property supports the <code>fixed</code> and <code>absolute</code> values. The absolute parameter will treat the entire page as the containing element while <code>fixed</code> is bound to the page margin container.
<ul>
	<li>Only block-level elements can be positioned.</li>
	<li>The block-level element you want positioned <strong>needs to be a direct child of the <code>&lt;body&gt;</code> tag</strong>. Positioning won't work if the element is nested.</li>
	<li>All positioning is relative to the current page.</li>
	<li>Setting <code>overflow: auto</code> causes text to auto fit within the block size.</li>
	<li>You cannot nest fixed position or floated elements inside other fixed position elements.
<div class="note">Setting <code>overflow: auto;</code> on positioned elements can cause long PDF generation times.</div></li>
</ul>

<h3>Rotating Positioned Elements</h3>
<a href="/v3/tables-pdf-template-example/">Like the CSS table <code>rotate</code> property</a>, positioned elements can also be rotated 90 degrees. 

```css
#ID {
  position: absolute;
  top: 50%;
  left: 5mm;
  rotate: 90;
}
```

<h3>mPDF Documentation</h3>
<ul>
	<li><a href="http://mpdf.github.io/what-else-can-i-do/floating-blocks.html">CSS Floats</a></li>
	<li><a href="http://mpdf.github.io/what-else-can-i-do/fixed-position-blocks.html">CSS Fixed Positioning</a></li>
</ul>