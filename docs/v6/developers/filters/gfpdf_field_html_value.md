---
title: "gfpdf_field_html_value"
sidebar_label: "gfpdf_field_html_value"
description: "This filter can be used to completely change the standard HTML mark-up that's wrapped around every field before being sent to the PDF renderer."
---

## Description 

This filter can be used to change the inner HTML mark-up in Core and Universal templates that's wrapped around most field – section fields, page fields and the product table are not run through this filter. This mark-up is then sent to the PDF renderer. You can target different field type (like textarea, radio and select) or just modify a single field. Your changes can also be applied to all forms or some. 

In most cases [the `gfpdf_pdf_field_content` filter](gfpdf_pdf_field_content.md) will be more suitable.

## Parameters 

### $html | string
*  The formatted HTML for the current field

### $value | string
*  The formatted user's response to the current field

### $show_label | boolean
*  Whether you should show or hide the label

### $label | string
*  The field label currently being processed

### $field | array
*  The Gravity Form field currently being processed

### $form | array
*  The current Gravity Form array

### $entry | array
*  The raw Gravity Form Entry array.

### $class | object
*  The Gravity PDF field wrapper class

## Usage 

This snippet allows you to inline the field label and value for most fields, while still adding all the necessary mark-up to support columns, pagebreaks and custom classes.

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

	$type  = $field->get_input_type();

	$html = '<div id="field-' . $field->id . '" class="gfpdf-' . $type . ' gfpdf-field ' . $field->cssClass . '">
					<div class="inner-container">';

	$html .= '<span class="label"><strong>' . $label . '</strong></span> ';

	/* If the field value is empty we'll add a non-breaking space to act like a character and maintain proper layout */
	if ( strlen( trim( $value ) ) === 0 ) {
		$value = ' ';
	}

	$html .= '<span class="value">' . $value . '</span>'
	         . '</div>'
	         . '</div>';

	return $html;

}, 10, 8 );
```

This snippet simplifies the mark-up for most Gravity Form fields ([see notes in the description above](#description) about unsupported fields):

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

    $html = "
    	<div class='field'>
    		<em>{$label}: </em> $value
    	</div>
    ";

    return $html;

}, 10, 8 );
```

If you wanted to restrict this to a particular Gravity Form you could use this snippet:

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

	if ( 10 == $form['id'] ) {
	    $html = "
	    	<div class='field'>
	    		<em>{$label}: </em> $value
	    	</div>
	    ";
	}

    return $html;

}, 10, 8 );
```

And if you wanted to only change the mark-up for a specific field type you could include this snippet:

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

	if ( 'textarea' == $field->type ) {
	    $html = "
	    	<div class='textarea-field'>
	    		$value
	    	</div>
	    ";
	}

    return $html;

}, 10, 8 );
```

Or you can remove any Hidden field types from the PDF entirely:

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

	if ( 'hidden' === $field->type ) {
		return '';
	}

	return $html;

}, 10, 8 );
```

You can also include additional field information by using our DOM manipulation library, QueryPath. In this example we include a field's description below the label:

```
add_filter( 'gfpdf_field_html_value', function( $html, $value, $show_label, $label, $field, $form, $entry, $class ) {

    /* Check if the field has a description */
    if ( isset( $field->description ) && 0 < strlen( $field->description ) ) {

        /*
         * We're using the new `GFPDF\\Helper\\Helper_QueryPath` class.
         * It acts like jQuery for PHP which makes it very handy
         */
        $qp = new GFPDF\Helper\Helper_QueryPath();
        $wrapper = $qp->html5( $html );

        /* Insert our description after the field label */
       $description = $qp->html5( '<br>' . wp_kses_post( $field->description ) );
       $wrapper->find( '.label strong' )->after( $description );

        /*
         * Query Path likes to make valid HTML from fragments like we passed, which means the HTML we need is inside '<html></html>' tags
         * To fix this we'll extract the innerHTML of the <html> tag
         */
        return $wrapper->top( 'html' )->innerHTML5();
    }

    /* If there is no description we'll just return the HTML as is */
    return $html;
}, 10, 8 );
```

## Source Code 

This filter is located in the `Helper_Abstract_Fields::html()` method of `/src/helper/abstract/Helper_Abstract_Fields.php`.