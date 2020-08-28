---
title: "CSS and HTML Support"
sidebar_label: "CSS and HTML Support"
description: ""
---

While mPDF is able to convert HTML and CSS to a representative PDF document it does have its limitations in certain areas, including floats and positioning, cascading styles and changing display properties on HTML tags.

If you plan to create complex PDFs we recommend you review the in-depth mPDF documentation on its <a href="http://mpdf.github.io/html-support/html-tags.html">HTML</a> and <a href="http://mpdf.github.io/css-stylesheets/supported-css.html">CSS</a> support.
<h3>TL;DR HTML</h3>
<div class="message">We strongly recommend you review the mPDF manual for full details on <a href="http://mpdf.github.io/html-support/html-tags.html">supported HTML tags and attributes</a>.</div>
<div class="note"><strong>Note: </strong>All HTML elements are hard coded as either block or inline elements. This cannot be changed using CSS’s <code>display</code> property.</div>
Most HTML 4 and 5 tags are recognised and (to some extent) supported in mPDF. For the best results you should follow the <a href="https://www.w3.org/TR/xhtml1/">XHTML specification</a> when building your PDF templates.

Along with the standard HTML tag support, <a href="http://mpdf.github.io/reference/html-control-tags/overview.html">there are a number of custom HTML tags that mPDF introduces</a> to give you control of your PDF document. These include header and footers, page breaks, bookmarks, table of contents and annotations.
<h3>TL;DR CSS</h3>
<div class="message">We strongly recommend you review the mPDF manual for full details on <a href="http://mpdf.github.io/css-stylesheets/supported-css.html">supported CSS selectors and attributes</a>.</div>
CSS styles can be declared in a stylesheet that has been included with <code>&lt;link /&gt;</code> or <code>@media</code>. You can also include styles in the <code>&lt;head&gt;</code> section using <code>&lt;style&gt;&lt;/style&gt;</code> tags or inline <code>&lt;div style="background: #EEE"&gt;</code>.

The following CSS selectors can be used in mPDF. Lower styles and attributes in the list will override higher styles and attributes.
<ul>
	<li><code>p &#123; font-size:12pt; color:#880000; &#125;</code></li>
	<li><code>.stylename &#123; font-size:9pt; &#125;</code></li>
	<li><code>#style &#123; font-size:9pt; &#125;</code></li>
	<li><code>&lt;div align="center"&gt;</code></li>
	<li><code>&lt;p style="font-family:monospace;"&gt;</code></li>
</ul>
<h4>Cascading Limitations</h4>
There is limited support for cascaded CSS when used with block-level elements. You <strong>cannot</strong> use cascading styles with any HTML tag that is not <strong>explicitly</strong> <a href="http://mpdf.github.io/about-mpdf/limitations.html">set as a block-level element</a>.

<strong>Valid Cascading CSS</strong>
<ul>
	<li><code>div.topic table td &#123;...&#125;</code></li>
	<li><code>div #my-id &#123;...&#125;</code></li>
	<li><code>table tr &#123;...&#125;</code></li>
	<li><code>div p.my-class &#123;...&#125;</code></li>
</ul>
<strong>Invalid Cascading CSS</strong>
<ul>
	<li><code>div.my-class a &#123;...&#125;</code></li>
	<li><code>a#my-id &#123;...&#125;</code></li>
	<li><code>span.my-class &#123;...&#125;</code></li>
	<li><code>body.class div &#123;...&#125;</code> - In mPDF the <code>body</code> tag is neither inline or block so cannot be used in a cascade.</li>
</ul>
We advise you keep your CSS selectors as simple as possible and assign a class or ID to the elements you need to target.
<ul>
	<li><code>#my-id &#123;...&#125;</code></li>
	<li><code>.my-class &#123;...&#125;</code></li>
</ul>
<h4>Float Limitations</h4>
Only block-level elements with fixed-widths can be floated in mPDF. Keep in mind <a href="https://css-tricks.com/the-css-box-model/">the standard box-model applies</a> so floating two elements left with a 50% width and any borders or padding won't produce a two-column layout (the second box would be pushed down below the first). In the scenario, you would need to subtract the border and padding from the width to successfully float the blocks side by side.

<a href="http://mpdf.github.io/what-else-can-i-do/floating-blocks.html">You can read more about floats in the mPDF documentation</a>.
<h4>Fixed Position Limitations</h4>
Only block-level elements that are direct children of the <code>&lt;body&gt;</code> tag can be <code>fixed</code> or <code>absolute</code> positioned. Fixed-position or floating elements nested inside other fixed-position or floating elements are not supported.

<code>fixed</code> elements will be restricted to inside the page's margins, while <code>absolute</code> elements treats the entire page as the container.

<a href="http://mpdf.github.io/what-else-can-i-do/fixed-position-blocks.html">You can read more about fixed-positioning in the mPDF documentation</a>.