---
title: "gfpdf_signature_width"
sidebar_label: "gfpdf_signature_width"
description: "To get an optimal display for the signature in our PDFs we decrease the size of the image by a 66%. Use this filter to change that."
---

## Description 

To get an optimal display for the signature in our PDFs we decrease the size of the image by about 66%. This creates a signature at a good size and resolution in your PDF. However, you can use this filter to make a signature smaller or larger. 

## Parameters 

### $optimised_width | mixed
*  The optimal width of the signature for quality. Reduced by 66% of the original size.

### $original_width | string
*  The original width of the signature in pixels.

## Usage 

This snippet shows you how you increase the signature size and instead only reduce the width by 50%:

```
add_action( 'gfpdf_signature_width', function( $optimised_width, $original_width ) {
	return $original_width / 2;
}, 10, 2 );
```

## Source Code 

This filter is located in the `Field_Signature::value()` method of `/src/helper/fields/Field_Signature.php`.