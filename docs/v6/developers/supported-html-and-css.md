---
title: "Supported HTML and CSS in Custom Templates"
sidebar_label: "Supported HTML and CSS"
description: "The PDF software we use to generate documents, mPDF, is quite good with its HTML and CSS support but it does have its limitations and quirks."
---

## Introduction 

The PDF software we use to generate documents, [mPDF](http://mpdf.github.io/), is quite good with its HTML and CSS support, but it does have its limitations and quirks. Areas it falls down in are floats and positioning, cascading styles and widow and orphan support.
![Example of mPDFs background and borders features](https://resources.gravitypdf.com/uploads/2015/11/supported-html-and-css.png)

## HTML Support 

Most HTML 4 and 5 tags are recognised and, to some extent, supported in mPDF – including nested tables. For the best results you should [follow the XHTML specification](http://www.w3.org/TR/xhtml1/) and create valid HTML when building your PDF templates. A lot of display issues arise from a missing closing tag, or incorrectly nested HTML.

Along with the standardised HTML tag support, there is also [custom HTML tags which mPDF introduced](http://mpdf.github.io/reference/html-control-tags/overview.html) to give you more control over your PDF. These include header and footers, page breaks, bookmarks, table of contents and annotations. One of the biggest quirks you'll need to get use to is that all HTML elements are hard coded as either `block` or `inline` elements and they cannot be changed using the CSS `display` property.

For full details on supported HTML tags and attributes [we recommend you review the mPDF manual](http://mpdf.github.io/html-support/html-tags.html).

## CSS Support 

CSS styles can be declared in an external stylesheet and included via `<link />` or `@media`, included inline using `<style></style>` tags or using the `style` attribute directly on a HTML element: `<div style="background: #EEE;">`.

Because HTML elements are hard coded to `block` or `inline` only certain CSS can be applied to particular HTML. If you're creating a custom template we strongly recommend you review the mPDF manual [on supported CSS for each HTML element](http://mpdf.github.io/css-stylesheets/supported-css.html).

The following CSS selectors can be used in mPDF. Lower styles and attributes in the list will override higher styles and attributes.

-   `p { font-size:12pt; color:#880000; }`
-   `.stylename { font-size:9pt; }`
-   `#style { font-size:9pt; }`
-   `<div align="center">`
-   `<p style="font-family:monospace">`

### Cascading Limitations 

An area mPDF falls down in is its cascading CSS support. There's limited support for block-level elements and no support for inline elements.
**Valid Cascading CSS Include**

-   `div.topic table td {...}`
-   `div #my-id {...}`
-   `table tr {...}`
-   `div p.my-class {...}`

**Invalid Cascading CSS Include**

-   `div.my-class a {...}`
-   `a#my-id {...}`
-   `span.my-class {...}`

That's not to say you cannot apply styles to inline elements. You just cannot use them in a cascading fashion. To get around this issue we recommend applying ID and class attributes to all elements you want to style and target them directly.

-   `#my-id {...}`
-   `.my-class {...}`

### Float Limitation 

![Example of float and fixed positioning support](https://resources.gravitypdf.com/uploads/2015/11/float-and-positioning.png)
Only block-level elements with fixed-widths can be floated in mPDF. Keep in mind the [standard box-model applies](http://css-tricks.com/the-css-box-model/), so floating two elements left with a 50% width and any borders or padding won’t produce a two-column layout (the second box would be pushed down below the first). In this scenario, you would need to subtract the border and padding from the width to successfully float the blocks side by side.

[You can read more about floats in the mPDF documentation](http://mpdf.github.io/what-else-can-i-do/floating-blocks.html).

### Fixed Position Limitations 

Only top-level block elements can be `fixed` or `absolute` positioned. Fixed-position or floating elements nested inside other fixed-position or floating elements are not supported. Fixed elements will be restricted to inside the page margins, while absolute elements treats the entire page as the container.

[You can read more about fixed-positioning in the mPDF documentation](http://mpdf.github.io/what-else-can-i-do/fixed-position-blocks.html).
