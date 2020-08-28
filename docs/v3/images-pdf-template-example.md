---
title: "An Example of Images in Custom PDF Templates"
sidebar_label: "Images"
description: ""
---

<h2>Images</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
Template Name: <code>example-images03.php</code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-images03.php</strong></code>

The image example displays all supported image formats in mPDF. It also highlights the <code>opacity</code> and <code>rotate</code> CSS properties. Support image formats include GIF, PNG, JPG, WMF, SVG, BMP.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-images03.pdf">Download Example PDF</a>

<div class="message">Images are hard-coded to be inline elements.</div>
<div class="warning">Images can be memory intensive. If you are concerned about performance you should always use the JPG format.</div>
<h3>Float Support</h3>
There is partial support for floating images in mPDF however the following limitations apply:
<ul>
	<li>You can only have one floated image left and one floated right per container.</li>
	<li>Unlike your browser (which will overflow the image out of the container), the containing HTML element is extended at the bottom if necessary to enclose the floated image.</li>
	<li>Floats are ignored if the image is too wide for the container, inside a table, or div page-break-inside: avoid is set.</li>
</ul>
View the mPDF documentation <a href="http://mpdf.github.io/what-else-can-i-do/images.html">for more information about image support</a>.