---
title: "Example of Text and Image Watermarks in PDF Templates"
sidebar_label: "Watermarks"
description: ""
---

<h2>Watermarks</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> URL query string parameter to the template name when viewing a PDF via your admin area.</div>
<div class="message">The Watermark functions were added in Gravity PDF v3.4.0</div>
Template Name: <code>example-watermark09.php </code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-watermark09.php</strong></code>

The watermark is a semi-transparent background printed on each page. Text and image watermarks can be applied using a custom HTML tag, and you have control over the watermark opacity.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2014/05/example-watermark09.pdf">Download Example PDF</a>

<h3>Text Watermark</h3>
<code>&lt;watermarktext content [ alpha ] /&gt;</code>
<div class="warning">The watermark <code>content</code> attribute must have special characters properly encoded. This includes the <code>&lt;</code>, <code>&gt;</code>, <code>'</code>, <code>"</code> and <code>&amp;</code> symbols. We recommend using <code>htmlspecialchars</code>to prevent any problems.</div>
<div class="message">Setting the <code>content</code> attribute blank will clear the watermark.</div>

```html
<!-- Setting watermark to Draft's with a 0.1 transparency -->
<watermarktext content="<?php echo htmlspecialchars("DRAFT'S", ENT_QUOTES); ?>" alpha="0.1" />

<!-- Setting watermark to Private with a 0.5 transparency -->
<watermarktext content="<?php echo htmlspecialchars("PRIVATE", ENT_QUOTES); ?>" alpha="0.5" />

<!-- Disabling watermark -->
<watermarktext content="" />
```

<h3>Image Watermark</h3>
<code>&lt;watermarkimage  src [ alpha ] [ size ] [ position ] /&gt;</code>

The image watermark only requires the <code>src</code> attribute. The <code>alpha</code>, <code>size</code> and <code>position</code> attributes are all optional.

<strong>SRC</strong>
The URL or PATH to the image. We recommend using the <strong>image path</strong> as it has better support across a range of hosting environments.

<strong>SIZE</strong>
<code>D</code> Default size (original size of image) - depends on DPI settings
<code>P</code>Resize to fit the full page size, keeping aspect ratio
<code>F</code> Resize to fit the print-area (frame) respecting current page margins, keeping aspect ratio
<code>INT</code> Resize to full page size minus a margin set by this integer in millimetres, keeping aspect ratio
2 comma-separated numbers (<code>$width, $height</code>): Specify a size; units are in millimetres
DEFAULT: "<code>D</code>"

<strong>POSITION</strong>
<code>P</code> Centered on the whole page area
<code>F</code> Centered on the page print-area (frame) respecting page margins
2 comma-separated numbers (<code>$x, $y</code>): Specify a position; units are in millimetres
DEFAULT: "P"

```html
<!-- Image watermark using the original size and centered on the page -->
<watermarkimage src"/path/to/images/gravitypdf.jpg" alpha="0.1" size="D" position="P" />

<!-- Image watermark resized to full page size and centered on the page print area -->
<watermarkimage src"/path/to/images/gravitypdf.jpg" alpha="0.5" size="P" position="F" />

<!-- Image watermark with default size positioned at 1mm from the top and 1mm from the left (X, Y) -->
<watermarkimage src"/path/to/images/gravitypdf.jpg" alpha="0.1" size="D" position="50,10" />

<!-- Image watermark with a 50x50mm image centered on the whole page -->
<watermarkimage src"/path/to/images/gravitypdf.jpg" alpha="0.5" size="50, 50" position="P" />
```

<h3>mPDF Documentation</h3>
<ul>
	<li><a href="http://mpdf.github.io/reference/html-control-tags/watermarktext.html">Text Watermark</a></li>
	<li><a href="http://mpdf.github.io/reference/html-control-tags/watermarkimage.html">Image Watermark</a></li>
</ul>