---
title: "Custom Template Image Support in your PDFs"
sidebar_label: "Images"
description: "The PDF engine, mPDF, which Gravity PDF uses supports the following image formats: .jpg, .png, .gif, .svg, .bmp and .wmf."
---

## Introduction 

The PDF engine Gravity PDF uses, [mPDF](http://mpdf.github.io), supports the following image formats:

-   `png` with transparency or alpha channel
-   `jpg` or `jpeg`
-   `gif` with transparency
-   `svg`
-   `bmp`
-   `wmf`

To display images in your PDF template use the standard `<img src="" />` HTML tag.

The software will accept a URL or absolute path to the image file, although we've found [using an absolute path to the image](development-helper-parameters.md#useful-paths-and-urls) offers better cross-server compatibility and it's the recommended solution.

![Sample of mPDF image support](https://resources.gravitypdf.com/uploads/2015/11/image-support.png)

## Performance 

Images can slow the PDF generation time. If you are rendering an image heavy document and it is taking considerable time to generate you can optimise the process by:

1.  Run your images through a compression service like [TinyPNG](https://tinypng.com/) and/or resize the image to a smaller format.
2.  Use absolute paths to the images
3.  Use JPG images over the other file types as they are quicker to process
4.  PNGs with no alpha channel or transparency come in a close second to JPGs.

## Float Support 

There is partial support for floating images in mPDF, however the following limitations apply:

-   You can only have one floated image left and one floated right per container.
-   Unlike your browser (which will overflow the image out of the container), the containing HTML element is extended at the bottom if necessary to enclose the floated image.
-   Floats are ignored if the image is too wide for the container, inside a table, or `page-break-inside: avoid` is set.

## Further Reading  

[View the mPDF documentation](http://mpdf.github.io/what-else-can-i-do/images.html) for more information about image support.
