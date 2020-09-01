---
title: "Custom Template Background Colour, Gradient and Image Support in PDFs"
sidebar_label: "Backgrounds"
description: "Background colours, gradients and images can be applied to all block HTML elements in the PDF, including the whole page."
---

## Introduction 

Background colours, gradients and images can be applied to all block HTML elements in the PDF, including the whole page, while inline HTML elements only support the background colour property.

On block-level elements there's good support for most image CSS properties which give you precise control over background images, image resolution, opacity and transparency.

![Showing off the different background types supported](https://resources.gravitypdf.com/uploads/2015/11/backgrounds.png)

The following background-related CSS properties are supported on block-level elements:

-   `background`
-   `background-image`
-   `background-position`
-   `background-repeat`
-   `background-color`
-   `background-size`
-   `background-image-resolution`
-   `background-image-opacity`

## Background Colour 

Background colours can be set using the `background` or `background-color` CSS properties. The following colour definitions are supported and can be used to set a background colour:

-   `rgb(255, 255, 255)`
-   `rgba(255, 255, 255, 1)` – the last value is the alpha transparency and should be between 0-1.
-   `rgb(100%, 100%, 100%)`
-   `hsl(360, 100%, 100%)`
-   `hsla(360, 100%, 100%, 1)` – the last value is the alpha transparency and should be between 0-1.
-   `cmyk(100, 100, 100, 100)`
-   `cmyka(100, 100, 100, 100, 1)` – the last value is the alpha transparency and should be between 0-1.
-   `spot(PANTONE 534, 100%, 85, 65, 47, 9)` – defined as: name, tint, C, M, Y, K.

```html
<!-- Standard Hex Backgronud colour -->
<div style="background: #4a85e7">
    This is my content
</div>

<!-- RGB() Background Colour -->
<div style="background: rgb(74, 133, 231)">
    This is my content
</div>

<!-- RGBA() Background Colour (Transparency) -->
<div style="background: rgba(74, 133, 231, 0.5)">
    This is my content
</div>

<!-- CMYK() Background Colour -->
<div style="background: cmyk(100, 100, 100);">
    This is my content
</div>

<!-- Inline background Colour -->
This is inline content <span style="background: yellow">that should be highlighted</span> and go and do this.
```

## Background Gradient 

Both background linear and radial gradients are supported and can be applied using the `background-image` property, which follows the CSS3-specification.

Most properties in this specification are supported, including: multiple colour-stops, opacity, gradient axis (linear) and shape and extent (radial). However some gradient line definitions like `to right corner` or `to bottom left` don't work as expected – but `right`, `left`, or `45degs` works correctly.

**Linear Gradient Examples**

```html
<!-- Background Linear Gradient -->
<div style="background-image: linear-gradient(red, orange); height: 20mm">
    This is my content
</div>

<!-- Left-To-Right Background Linear Gradient -->
<div style="background-image: linear-gradient(right, red, orange); height: 20mm">
    This is my content
</div>

<!-- Diagonal Background Linear Gradient -->
<div style="background-image: linear-gradient(45deg, red, orange); height: 20mm">
    This is my content
</div>

<!-- Multi-colour Linear Gradient -->
<div style="background-image: linear-gradient(left, red, #f06d06, rgb(255, 255, 0), green); height: 20mm">
    This is my content
</div>
```

**Radial Gradient Examples**

```html
<!-- Standard Radial Gradient -->
<div style="background-image: radial-gradient(yellow, orange); height: 20mm">
    This is my content
</div>

<!-- Radial Gradient with a circle -->
<div style="background-image: radial-gradient(circle, yellow, orange); height: 20mm">
    This is my content
</div>

<!-- Radial Gradient with a circle that doesn't extend past the container -->
<div style="background-image: radial-gradient(circle closest-side, yellow, orange); height: 20mm">
    This is my content
</div>

<!-- Radial Gradient with a circle in the top right -->
<div style="background-image: radial-gradient(circle at top right, yellow, orange); height: 20mm">
    This is my content
</div>
```

## Background Images 

Background images can be included using the URL or full local path – the preferred method using [one of the absolute path constants](helper-parameters.md#useful-paths-and-urls) – to the image. You can use the `background` or `background-image`, `background-position`, `background-size` and `background-repeat` CSS properties to control the image display. *Currently unsupported is multiple background images per container*.

```
<!-- Basic Background Image with no constraints -->
<div style="background: url(<?= __DIR__ ?>/images/image.png); height: 40mm">
    This is my content
</div>

<!-- Basic Background Image with a Y-constraint -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-repeat: repeat-y; height: 40mm">
    This is my content
</div>

<!-- No-repeat Background Image center-aligned horizontally and vertically -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png) background-repeat: no-repeat; background-position: 50% 50%; height: 40mm">
    This is my content
</div>

<!-- Standard background using large image -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); height: 40mm">
    This is my content
</div>

<!-- Tiling large background image -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-size: 300px 200px; height: 40mm">
    This is my content
</div>

<!-- Ensure the container contains the background image -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-size: contain; height: 40mm">
    This is my content
</div>
```

Along with the standard CSS-specified background properties, there's also the `background-image-resize` property which allows you more granular control to shrink or resize the image to match the container. Available options for `background-image-resize` include:

-   `0` – no resize (default)
-   `1` – Shrink to fit container width (keep aspect ratio)
-   `2` – Shrink to fit container height (keep aspect ratio)
-   `3` – Shrink to fit container width and/or height (keep aspect ratio)
-   `4` – Resize to fit container width (keep aspect ratio)
-   `5` – Resize to fit container height (keep aspect ratio)
-   `6` – Resize to fit width and height

Using `background-image-resize` is like any other CSS property:

```
<!-- Shrink image to fit container width (keep aspect ratio) -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 1; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>

<!-- Shrink to fit container height (keep aspect ratio) -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 2; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>

<!-- Shrink to fit container width and/or height (keep aspect ratio) -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 3; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>

<!-- Resize to fit container width (keep aspect ratio) -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 4; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>

<!-- Resize to fit container height (keep aspect ratio) -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 5; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>

<!-- Resize to fit width and height -->
<div style="background-image: url(<?= __DIR__ ?>/images/image.png); background-image-resize: 6; background-repeat: no-repeat; height: 40mm">
    This is my content
</div>
```

Finally, backgrounds can be applied to entire pages using the `@page` CSS selector.

```
<style>
    @page {
        background: url(<?= __DIR__ ?>/images/image.png) no-repeat 0 0;
        background-image-resize: 4; /* see http://mpdf.github.io/css-stylesheets/supported-css.html for details on this option */
    }
</style>
```

[Download example PDF template file showing off backgrounds](https://gist.github.com/jakejackson1/3dd390739b21292a1c20).
