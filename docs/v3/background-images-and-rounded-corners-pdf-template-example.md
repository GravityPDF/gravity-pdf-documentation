---
title: "Example of Background Images and Rounded Corners in PDF"
sidebar_label: "Background Images and Rounded Corners"
description: ""
---

<h2>Background Images and Rounded Corners</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
Template Name: <code>example-backgrounds-and-borders02.php</code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-backgrounds-and-borders02.php</strong></code>

mPDF has great support for background colour, images and even gradients. Along with this, it supports border-radius so you can easily add rounded corners to your PDFs.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-backgrounds-and-borders02.pdf">Download Example PDF</a>
<h3>Defining Gradients</h3>
mPDF follows the CSS3 specification for defining gradients. You can set the gradient using <code>background: linear-gradient()</code> and <code>background: radial-gradient()</code>.

<strong>Example:</strong>

```css
/* start linear gradient from the bottom and render upwards – blue at bottom and white at the top */
background: linear-gradient(bottom, #0b91c2, #FFFFFF);

/* start linear gradient from the top and render downwards. #e1e1e1 will cover 65% of the area. */
background: linear-gradient(top, #e1e1e1 65%, #c7c7c7);

/* run a linear gradient at 45 degrees to the element. */
background: linear-gradient(45deg, blue, yellow);

/* Using three colours in the gradient and controlling the percentage they cover. */
background: linear-gradient(top, blue, yellow %75, red %10);

/*create a radial gradient with the circle in the centre */
background: radial-gradient(center circle, red, green);

/*create a radial gradient with the circle in the top left */
background: radial-gradient(center circle, red, green);

/* have the circle in the bottom left corner using three colours */
background: radial-gradient(farthest-side at left bottom, red, yellow 50px, green);
```

<div class="note">Background colour is the only property that can be set on inline elements. Background image and gradient can be set on block elements, @page and the body tag.</div>
<div class="message"><code>background-images</code> support JPG, GIF, PNG, WMF and SVG images.</div>
You can view the W3 specification which details the usage of these CSS statements.
<ul>
	<li>CSS3 linear gradients - <a href="https://dev.w3.org/csswg/css3-images/#linear-gradients">https://dev.w3.org/csswg/css3-images/#linear-gradients</a></li>
	<li>CSS3 radial gradients - <a href="https://dev.w3.org/csswg/css3-images/#radial-gradients">https://dev.w3.org/csswg/css3-images/#radial-gradients</a><i> </i></li>
</ul>
<h3>Rounded Corners</h3>
mPDF also supports the CSS3-spec <code>border-radius</code> property. You can use the default <code>border-radius</code> syntax to define all corners:

<code>border-radius: 4em;</code>

Or set an individual radius on each corner:

```css
border-top-left-radius:     4em;
border-top-right-radius:    4em;
border-bottom-right-radius: 4em;
border-bottom-left-radius:  4em;
```

View the mPDF documentation <a href="http://mpdf.github.io/what-else-can-i-do/backgrounds-borders.html">for more details about background images/gradients and border radius</a>.