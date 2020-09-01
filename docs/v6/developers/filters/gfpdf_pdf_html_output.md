---
title: "gfpdf_pdf_html_output"
sidebar_label: "gfpdf_pdf_html_output"
description: "This filter allows you to manipulate the PDF template HTML before it's sent to mPDF for rendering. This is a quick and dirty way to modify the PDF HTML/CSS."
---

## Description 

This filter allows you to manipulate the raw PDF template HTML before it's sent to mPDF for rendering. This is a quick and dirty way to modify the PDF HTML dynamically. If you are instead looking to modify a field's mark-up [there are better filters for the job](gfpdf_field_html_value.md). 

If you do use this filter we recommend making your changes using a DOM parser. Gravity PDF includes the [QueryPath library](http://api.querypath.org/docs/index.html), which is specifically designed to make it simple to manipulate HTML. 

## Parameters 

### $html | string
*  The PDF template HTML in string format

### $form | array 
*  The current Gravity Form array

### $entry | array 
*  The raw Gravity Form Entry array.

### $settings | array
*  The current PDF configuration array.

### $Helper_PDF | object
*  The initialised `GFPDFHelperHelper_PDF` class

## Usage 

This snippet uses the `GFPDF\\Helper\\Helper_QueryPath` class to load, manipulate and return our HTML. In this sample we're making the colour of all our v4 template labels red. 

```
add_filter( 'gfpdf_pdf_html_output', function( $html, $form, $entry, $settings, $Helper_PDF ) {

    /* Initialise like this */
    $qp = new GFPDF\\Helper\\Helper_QueryPath();
    $wrapper = $qp->html5( $html );

    $label = $wrapper->find( '.label strong' );

   /* Make all our field labels red */
    $label->css( 'color', 'red' );

    return $wrapper->top( 'html' )->innerHTML5();

}, 10, 5 );
```

You might also like to use this filter to insert new mark-up between certain fields. This snippet inserts a `<hr />` tag every three rows – but you could change that to a page break or any other HTML tag: 

```
add_filter( 'gfpdf_pdf_html_output', function( $html, $form, $entry, $settings, $Helper_PDF ) {

    $qp = new GFPDF\\Helper\\Helper_QueryPath();
    $wrapper = $qp->html5( $html );

    /* Insert a <hr> tag every three rows */
    $separator = $wrapper->find( '.row-separator:nth-of-type(3n)' );
    $separator->append( '<hr />' );

    return $wrapper->top( 'html' )->innerHTML5();

}, 10, 5 );
```

As you can see the Query Path library is very powerful and we *strongly recommend you use it for manipulating HTML*. 

If you need to, you also have the option to specifically target PDF templates assigned to individual Gravity Forms:

```
/* Only run this filter on Gravity Form #5 */
add_filter( 'gfpdf_pdf_html_output_5', function( $html, $form, $entry, $settings, $Helper_PDF ) { }, 10, 5 )
```

## Source Code 

This filter is located in the `Helper_PDF::render_html()` method of `/src/helper/Helper_PDF.php`.