---
title: "gfpdf_field_section_break_html"
sidebar_label: "gfpdf_field_section_break_html"
description: "This filter can be used to change the inner HTML mark-up that's wrapped around Section Break fields. This mark-up is then sent to the PDF renderer."
---



## Description 

This filter can be used to change the inner HTML mark-up that's wrapped around Section Break fields. This mark-up is then sent to the PDF renderer. 

## Version 

This filter was introduced in Gravity PDF 4.1.

## Parameters 

### $html | string
*  The formatted HTML for the section field

### $title | string
*  The Section Break title text

### $description | string
*  The Section Break description text

### $value | array
*  An associative array containing the 'title' and 'description' keys

### $field | array
*  The Gravity Form field currently being processed

### $form | array
*  The current Gravity Form array

### $entry | array
*  The raw Gravity Form Entry array.

### $class | object
*  The Gravity PDF Section Break field wrapper class

## Usage 

This snippet simplifies the mark-up for the Section Break:

```
add_action( 'gfpdf_field_section_break_html', function( $html, $title, $description, $value, $field, $form, $entry, $class ) {

    $html = "
    	<div class='field'>
    		<em>{$title}: </em> $description
    	</div>
    ";

    return $html;

}, 10, 8 );
```

If you wanted to restrict this to a particular Gravity Form you could use this snippet:

```
add_action( 'gfpdf_field_section_break_html', function( $html, $title, $description, $value, $field, $form, $entry, $class ) {

    if ( 10 == $form['id'] ) {
        $html = "
    	    <div class='field'>
    	  	    <em>{$title}: </em> $description
    	    </div>
        ";
    }

    return $html;

}, 10, 8 );
```

## Source Code 

This filter is located in the `Field_Section::html()` method of `/src/helper/fields/Field_Section.php`.