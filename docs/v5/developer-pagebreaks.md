---
title: "Controlling Pages with Pagebreaks in Custom Templates"
sidebar_label: "Page Breaks"
description: "A custom HTML tag allows you to manually create new pages in your PDF. It goes hand in hand with the @page CSS property to give you total control."
---

## Introduction 

The PDF software, [mPDF](http://mpdf.github.io/), introduces a custom HTML tag called `<pagebreaks/>` which you can use to create new pages in your PDF. It goes hand in hand with the `@page` CSS property, and when used together they give you precise control over the look and feel of each page of your document.

## Pagebreak 

You can explicitly add page breaks to your PDF using the `<pagebreaks/>` HTML tag. And while there are a large number of attributes this tag supports – like page margins and sheet size – we prefer to forgo them and use `@page` instead ([discussed here](#at-page)).

In its most basic form, you can add pagebreaks as simply as:

```html
<p>My content here...</p>

<!-- Basic Page Break -->
<pagebreak/>

<p>This is on a new page</p>
```

When used this way the new page will use the same size and margins as your previous page.

When using [page numbering in the header or footer](developer-headers-and-footers.md#reserved-variables) you can also use the `<pagebreaks/>` tag to reset the page number.

```html
<!-- Reset the page number back to 1 -->
<pagebreak resetpagenum="1"/>

<!-- Reset the page number to 5 -->
<pagebreak resetpagenum="5"/>
```

## @page 

We briefly touched on using `@page` when [discussing headers and footers](developer-headers-and-footers.md#displaying-headers-and-footers). This special CSS property can be used to control margins, headers/footers and backgrounds:

```css
@page {
   margin: 3mm;
   background: #EEE;
}
```

However, it can also be used to target specific pages in your PDF document using *Named @page selectors* in conjunction with the `<pagebreaks>` tag. When using named @page selectors you can also control the paper size and orientation.

Let's take a look at a simple example:

```html
<style>
   @page rotated {
      size: landscape;
   }
</style>

<p>My first page</p>

<pagebreak page-selector="rotated"/>

<p>This is on a landscape page</p>
```

In the above example we've told the PDF engine to use the page selector *rotated* in the `<pagebreak>` tag. This then applies the `@page rotated` properties to your new page.

Feel free to use multiple named @page selectors in your PDF template:

```html
<style>
   @page a5 {
      paper-size: 148mm 210mm;
   }

   @page largemargins {
      margin: 30%;
   }
</style>

<p>My first page</p>

<pagebreak page-selector="a5"/>

<p>This is on an A5 document</p>

<pagebreak page-selector="largemargins"/>

<p>Still on an A5 document (because the last page used A5 and we didn't override it), but with large margins.</p>
```

## Samples and Further Reading 

[We've put together a sample PDF templates showing off how page breaks can be effectively used.](https://gist.github.com/jakejackson1/4de8fffb77672868be29)

For more information about the methods discussed we recommend reviewing the mPDF documentation:

-   [`<pagebreaks>`](http://mpdf.github.io/reference/html-control-tags/pagebreak.html)
-   [`@page`](http://mpdf.github.io/paging/using-page.html)
-   [Supported CSS](http://mpdf.github.io/css-stylesheets/supported-css.html)
