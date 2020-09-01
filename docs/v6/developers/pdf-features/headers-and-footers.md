---
title: "Custom Template Headers and Footers Example"
sidebar_label: "Headers and Footers"
description: "Headers and footers are a powerful feature of the PDF rendering software, mPDF. We'll show you how to configure and enable them."
---

## Introduction 

Headers and footers are a powerful feature of the PDF rendering software, [mPDF](http://mpdf.github.io/). They aren't just limited to every page either, you have granular control over which pages your headers and footers display on.
![Example of PDF header and footer](https://resources.gravitypdf.com/uploads/2015/11/header-footer-support.png)

## Defining Headers/Footers 

The first thing you need to do is define a header/footer in your PDF template, then you tell the software when to display it. The two tags to define headers/footers are `<htmlpageheader name="">` and `<htmlpagefooter name="">`.

The headers/footers HTML tags can be included anywhere inside your template but we recommend including it at the beginning of your HTML section (after the styles).

### Headers 

The `<htmlpageheader>` tag allows you to define a header template and everything inside the tag will be rendered at the top of your page. The tag has one required attribute `name` which acts as an ID for your header. Just ensure you don't use a name that begins with `html_`, as that prefix is reserved.

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

### Footers 

The `<htmlpagefooter>` tag allows you to define a footer template and everything inside the tag will be rendered at the bottom of your page. The tag has one required attribute `name` which acts as an ID for your footer. Just ensure you don't use a name that begins with `html_`, as that prefix is reserved.

```html
    <htmlpagefooter name="MyCustomFooter">
        <table style="vertical-align: bottom; font-family: serif; font-size: 8pt; color: #000000; font-weight: bold; font-style: italic;" width="100%">
            <tbody>
                <tr>
                    <td width="33%"><span style="font-weight: bold; font-style: italic;">Copyright 2016</span></td>
                    <td style="font-weight: bold; font-style: italic;" align="center" width="33%">{PAGENO}/{nbpg}</td>
                    <td style="text-align: right;" width="33%">My document</td>
                </tr>
            </tbody>
        </table>
    </htmlpagefooter>
```

## Displaying Headers/Footers 

There are two different methods to assign headers and footers:

1.  Using the special CSS selector `@page`
2.  Using mPDF's custom HTML setter tags `<sethtmlpageheader>` and `<sethtmlpagefooter>`

**Setting your own header or footer in your PDF template [will override the core header and footer fields](template-configuration-and-image.md#configuration-structure)**.

### @page 

Using `@page` is the preferred way to set a header or footer in the PDF as it has less quirks and keeps your HTML mark-up cleaner.

```html
<style>
    @page {
        header: html_MyCustomHeader; /* display <htmlpageheader name="MyCustomHeader"> on all pages */
        footer: html_MyCustomFooter; /* display <htmlpagefooter name="MyCustomFooter"> on all pages */
    }
</style>
```

You can also apply headers and footers to the first page of your document using the pseudo selector `:first`.

```html
<style>
    /* Displays on all pages of the PDF */
    @page {
        header: html_MyCustomHeader; 
    }

    /* Overrides the @page header and displays on the first page of the PDF */
    @page :first {
        header: html_MyCustomHeader; 
    }
</style>
```

You can get more specific with named `@page` selectors but [we'll discuss those in the `<pagebreak>` section](pagebreaks.md).

### Inline HTML 

The use of the `<sethtmlpageheader />` or `<sethtmlpagefooter />` tag will set a header/footer on the current page in the document. While using [@page](#@page) is preferred, these tags do have their usefulness. Because there's currently no `@page :last` pseudo selector we can use them at the end of our PDF template to display a header/footer on the very last page.

```html
<sethtmlpageheader name="html_MyCustomHeader" show-this-page="1" value="on" />
<sethtmlpagefooter name="html_MyCustomFooter" value="on" />
```

The extra attribute `show-this-page` in the header tag is required because the PDF software has already finished writing the page header. This tells it to go back and set our new header, otherwise it will wait until the next page. You can also turn headers/footers off for specific pages:

```html
<sethtmlpageheader value="off" />
<sethtmlpagefooter value="off" />
```

## Reserved Variables 

Header and Footers have access to the following reserved variables that can be used to display the current page number and the total page number:

-   `{PAGENO}` – Will be replaced by the current page number.
-   `{nb}` – Will return the total number of pages in the PDF document

## Samples and Further Reading 

We've put together two sample PDF templates showing off the two header and footer methods we discussed above:

1.  [Example 1 – @page](https://gist.github.com/jakejackson1/7d62b713e51f8e956a91)
2.  [Example 2 – Inline HTML](https://gist.github.com/jakejackson1/af2f81d4c3e61bb2da01)

For more information about the methods discussed we recommend reviewing the mPDF documentation:

-   [`@page`](http://mpdf.github.io/paging/using-page.html)
-   [`<htmlpageheader>`](http://mpdf.github.io/reference/html-control-tags/htmlpageheader.html)
-   [`<htmlpagefooter>`](http://mpdf.github.io/reference/html-control-tags/htmlpagefooter.html)
-   [`<sethtmlpageheader>`](http://mpdf.github.io/reference/html-control-tags/sethtmlpageheader.html)
-   [`<sethtmlpagefooter>`](http://mpdf.github.io/reference/html-control-tags/sethtmlpagefooter.html)
