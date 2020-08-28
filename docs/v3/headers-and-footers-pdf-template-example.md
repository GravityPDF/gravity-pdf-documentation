---
title: "Example of Header and Footers in Custom PDF Templates"
sidebar_label: "Headers and Footers"
description: ""
---

<h2>Headers and Footers</h2>
The plugin ships with a number of PDF templates showing off the features of mPDF. <a href="/v3/wheres-configuration-folder/">These can be found in your <em>PDF_EXTENDED_TEMPLATES</em> directory</a>.
<h3>Overview</h3>
<div class="message">To easily switch between custom PDF templates change the <code>template</code> query string parameter to the template name when viewing a PDF via your admin area.</div>
This page has both basic and advanced header and footer template files available.

Template Name: <code>example-header-and-footer_06.php </code>
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-header-and-footer_06.php</strong></code>

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-header-and-footer_06.pdf">Download Example PDF</a>

Template Name: <code>example-advanced-headers_07.php </code> (<a href="https://github.com/blueliquiddesigns/gravity-forms-pdf-extended/blob/master/initialisation/templates/example-advanced-headers_07.php">View Source Code</a>)
Example URL: <code>https://test.com/?gf_pdf=1&amp;fid=3&amp;lid=40&amp;<strong>template=example-advanced-headers_07.php</strong></code>

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/example-advanced-headers_07.pdf">Download Example PDF</a>

mPDF has advanced header and footer control that allows you to have a different header/footer on the first page, alternate header/footers on odd and even pages, and display the page number, total number of pages.
<h3>Creating Headers and Footers</h3>
Headers and footers can be defined anywhere in the <code>&lt;body&gt;</code> of the document but we recommend adding them before any other HTML is outputted. mPDF uses the custom HTML elements <code><a href="http://mpdf.github.io/reference/html-control-tags/htmlpageheader.html">&lt;htmlpageheader&gt;</a></code>and <code><a href="http://mpdf.github.io/reference/html-control-tags/htmlpagefooter.html">&lt;htmlpagefooter&gt;</a></code> to define PDF header and footer templates. Once defined they should be set with either the <code>@page</code> method or using the setter tags <code><a href="http://mpdf.github.io/reference/html-control-tags/sethtmlpageheader.html">&lt;sethtmlpageheader&gt;</a></code> and <code><a href="http://mpdf.github.io/reference/html-control-tags/sethtmlpagefooter.html">&lt;sethtmlpagefooter&gt;</a></code>. We document both methods in the example templates.
<h4>Headers</h4>
<div class="note">Do not use a <code>name</code> attribute starting with <code>html_ </code> when defining headers or footers. This prefix is reserved.</div>
<code>&lt;htmlpageheader name="MyCustomHeader"&gt;&lt;/htmlpageheader&gt;</code>

The <code>&lt;htmlpageheader&gt;</code> tag allows you to define a header template. Everything inside the <code>&lt;htmlpageheader&gt;</code> tag will be rendered in the header.

```html
<htmlpageheader name="MyCustomHeader">
	<table style="border-bottom: 1px solid #000000; vertical-align: bottom; font-family: serif; font-size: 9pt; color: #000088;" width="100%">
		<tbody>
			<tr>
				<td width="50%">Title</td>
				<td style="text-align: right; font-weight: bold;" width="50%">Logo</td>
			</tr>
		</tbody>
	</table>
</htmlpageheader>
```

<h4>Footers</h4>
<div class="note">Do not use a <code>name</code> attribute starting with <code>html_ </code> when defining headers or footers. This prefix is reserved.</div>
<code>&lt;htmlpagefooter name="MyCustomFooter&gt;&lt;/htmlpagefooter&gt;</code>

The <code>&lt;htmlpagefooter&gt;</code> tag allows you to define a footer template. Everything inside the <code>&lt;htmlpagefooter&gt;</code> tag will be rendered in the footer.

```html
<htmlpagefooter name="MyCustomFooter">
	<table style="vertical-align: bottom; font-family: serif; font-size: 8pt; color: #000000; font-weight: bold; font-style: italic;" width="100%">
		<tbody>
			<tr>
				<td width="33%"><span style="font-weight: bold; font-style: italic;">{DATE j-m-Y}</span></td>
				<td style="font-weight: bold; font-style: italic;" align="center" width="33%">{PAGENO}/{nbpg}</td>
				<td style="text-align: right;" width="33%">My document</td>
			</tr>
		</tbody>
	</table>
</htmlpagefooter>
```

<h3>Assigning Headers and Footers</h3>
There are two different methods to assign headers and footers: using <code>@page</code>or mPDFs custom HTML setter tags <code>&lt;sethtmlpageheader&gt;</code>and <code>&lt;sethtmlpagefooter&gt;</code>.
<h3>@page</h3>
This technique can be viewed in the <code>example-header-and-footer_06.php</code> template and is the preferred method. <a href="http://mpdf.github.io/paging/using-page.html"><code>@page</code></a>is a powerful CSS selector which gives you control over the look and feel of individual pages in your PDF. This includes setting headers and footers.

```html
<style>
	@page {
		/* ensure you append the header/footer name with 'html_' */
		header: html_MyCustomHeader; /* sets <htmlpageheader name="MyCustomHeader"> as the header */
		footer: html_MyCustomFooter; /* sets <htmlpagefooter name="MyCustomFooter"> as the footer */
	}
</style>
```

<code>@page</code>also has three pseudo selectors - :first, :left and :right - so you can set different headers and footers on the first page, and odd an even pages.

```html
<style>
	/* first PDF page */
	@page :first {
		/* ensure you append the header/footer name with 'html_' */
		header: html_P1Header; /* sets <htmlpageheader name="P1Header"> as the header */
		footer: html_P1Footer; /* sets <htmlpagefooter name="P1Footer"> as the footer */
	}

	/* odd / left PDF page */
	@page :left {
		/* ensure you append the header/footer name with 'html_' */
		header: html_leftHeader; /* sets <htmlpageheader name="leftHeader"> as the header */
		footer: html_leftFooter; /* sets <htmlpagefooter name="leftFooter"> as the footer */
	}

	/* even / right PDF page */
	@page :right {
		/* ensure you append the header/footer name with 'html_' */
		header: html_rightHeader; /* sets <htmlpageheader name="rightHeader"> as the header */
		footer: html_rightFooter; /* sets <htmlpagefooter name="rightFooter"> as the footer */
	}
</style>
```

<a href="http://mpdf.github.io/paging/using-page.html">See the mPDF documentation for more details on @page</a>.
<h3>HTML Setters</h3>
<code>&lt;sethtmlpageheader [name] [value] [show-this-page] /&gt;</code>
<code>&lt;sethtmlpagefooter [name] [value] [show-this-page] /&gt;</code>

The use of the <code>&lt;sethtmlpageheader /&gt;</code>or <code>&lt;sethtmlpagefooter /&gt;</code> tag will set a header/footer. If you want to ensure the header/footer is set on the current page you should use the <code>show-this-page="1"</code>attribute.

```html
<sethtmlpageheader name="Header" value="on" /> <!-- Activates <htmlpageheader name="Header"> on the NEXT PDF page -->
<sethtmlpageheader name="Header" show-this-page="1" value="on" /> <!-- Activates <htmlpageheader name="Header"> on the CURRENT PDF page -->
<sethtmlpageheader value="off" /> <!-- Disables the header on the NEXT PDF page -->

<sethtmlpagefooter name="Footer" value="on" /> <!-- Activates <htmlpagefooter name="Footer"> on the NEXT PDF page -->
<sethtmlpagefooter name="Footer" show-this-page="1" value="on" /> <!-- Activates <htmlpagefooter name="Footer"> on the CURRENT PDF page -->
<sethtmlpagefooter value="off" /> <!-- Disables the footer on the NEXT PDF page -->
```

<div class="message">Headers and Footers have access to <a href="/v3/reserved-variables/">a number of reserved variables</a> which allow it to display the current and total page names.</div>
<h3>More Information</h3>
<ul>
	<li><code><a href="http://mpdf.github.io/reference/html-control-tags/htmlpageheader.html">&lt;htmlpageheader&gt;</a></code></li>
	<li><code><a href="http://mpdf.github.io/reference/html-control-tags/htmlpagefooter.html">&lt;htmlpagefooter&gt;</a></code></li>
	<li><code><a href="http://mpdf.github.io/reference/html-control-tags/sethtmlpageheader.html">&lt;sethtmlpageheader&gt;</a></code></li>
	<li><code><a href="http://mpdf.github.io/reference/html-control-tags/sethtmlpagefooter.html">&lt;sethtmlpagefooter&gt;</a></code></li>
	<li><code><a href="http://mpdf.github.io/paging/using-page.html">@page</a></code></li>
</ul>