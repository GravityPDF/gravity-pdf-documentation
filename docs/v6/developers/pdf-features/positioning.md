---
title: "Custom Template Fixed and Absolute Positioning in PDFs"
sidebar_label: "Positioning"
description: "Like floats, the PDF software does support fixed and absolute positioning of block elements in PDFs, but there are specific restrictions. Let's discuss."
---

## Introduction 

Like [floats](floats.md), the PDF software does support `fixed` and `absolute` positioning of block elements in PDFs, but there are specific restrictions. These include:

1.  Only block elements can be `fixed` or `absolute` positioned (remember, [all HTML is hard-coded as either block or inline](supported-html-and-css.md#html-support)).

2.  The element you want positioned needs to be a top-level tag. Positioning won't work if the element is nested.

3.  All positioning is relative to the current PDF page

4.  You cannot nest fixed position elements inside other fixed position elements

5.  Positioning is overridden if it would position the element off the page

## Absolute Positioning 

Absolute positioning treats the whole physical page as the containing element, irrespective of the page margins. That means if we set the top and left CSS attributes to zero your HTML would be at the very top-left corner of the page.

```html
<body>
    <div style="position: absolute; top: 0; left: 0">I'm outside the page margins</div>
    <div style="position: absolute; top: 0; right: 0">I'm outside the page margins</div>
    <div style="position: absolute; bottom: 0; left: 0">I'm outside the page margins</div>
    <div style="position: absolute; bottom: 0; right: 0">I'm outside the page margins</div>
</body>
```

## Fixed Positioning 

As oppose to absolute positioning, fixed positioned elements adhere to the page margins (set using the CSS margin attribute in `@page`), using it as the container. That means setting the top and left CSS attributes to zero would show your HTML positioned at the very beginning of the page margins.

```html
<body>
    <div style="position: fixed; top: 0; left: 0">I'm inside the page margins</div>
    <div style="position: fixed; top: 0; right: 0">I'm inside the page margins</div>
    <div style="position: fixed; bottom: 0; left: 0">I'm inside the page margins</div>
    <div style="position: fixed; bottom: 0; right: 0">I'm inside the page margins</div>
</body>
```

## Rotated Elements 

Like tables, fixed or absolute positioned elements can be rotated 90 degrees clockwise and anti-clockwise:

```html
<style>
    #rotated {
        position: absolute;
        top: 50mm;
        left: 100mm;

        width: 30mm;
        height: 40mm;

        background: grey;
        rotate: -90;
    }
</style>

<div id="rotated">Rotated</div>
```

## Auto Fit Text 

One of the great features of positioned elements is the ability to have the text resize to fit the container. This is very useful when working with dynamic data from Gravity Forms.

```html
<style>
    #rotated {
        position: absolute;
        top: 50mm;
        left: 100mm;

        font-size: 20pt;

        width: 30mm;
        height: 5mm;
        overflow: visible;
    }
</style>

<div id="rotated">My Very Long Text Too Big For Container</div>

<pagebreak/>

<div id="rotated" style="overflow: auto">My Very Long Text Too Big For Container</div>
```

## Example 

[We've put together a sample showing off the positioning support in Gravity PDF](https://gist.github.com/jakejackson1/995559887bbad94b167f).
