---
title: "gfpdf_field_class"
sidebar_label: "gfpdf_field_class"
description: "When rendering PDFs we broke out the functionality which handles the display of Gravity Form fields. Each field is now handled by it's own class."
---

## Description 

When rendering PDFs we split the Gravity Form fields display into its own class, which all extend our common abstract class `GFPDF\Helper\Helper_Abstract_Fields` (yes, we use namespaces). This filter makes it easy to customise the output of individual fields types by allowing you to overriding or extend the field's class. 

The most likely things you'll want to override in a field's class is the `value()` or `html()` method, as it control the retrieval of the field's entry information and the HTML output, respectively. However, you can completely change all properties of a field if you desire.

In the [usage](#usage) section we show you how to override an existing field's `value()` method to change the output. But for a more in-depth look at how to extend the `GFPDF\Helper\Helper_Abstract_Fields` class we recommend you review the field classes found in `/src/helper/fields/`.

You can also use the filter `gfpdf_field_class_$type`, where type refers to the Gravity Form field type (textarea, select, signature ect). 

## Parameters 

### $class | object
*  The current field class loaded. These classes are located in `src/helper/fields/`

### $field | array
*  The current Gravity Form field being processed.

### $entry | array
*  The raw Gravity Form Entry array.

### $form | array
*  The current Gravity Form array

## Usage 

The following snippet shows you how to use the filter to override the Textarea class. The actual filter is easy to use but you'll also need to create a separate file for your field:

```
add_filter( 'gfpdf_field_class', function( $class, $field, $entry ) {
	/* Only override the textarea field */
	if ( 'textarea' == $field['type'] ) {
		/* Include the new field class which will override the current textarea class */
		require_once( __DIR__ . '/Prefix_Allcaps_Textarea_Field.php' );

		/* Initialise the new class so it can be returned */
		$class = new GFPDF\Helper\Fields\Prefix_Allcaps_Textarea_Field( $field, $entry, GPDFAPI::get_form_class(), GPDFAPI::get_misc_class() );
	}

	return $class;
}, 10, 3 );
```

Alternatively we could have used the `gfpdf_field_class_$type` filter and removed the IF statement:

```
add_filter( 'gfpdf_field_class_textarea', function( $class, $field, $entry ) {
	/* Include the new field class which will override the current textarea class */
	require_once( __DIR__ . '/Prefix_Allcaps_Textarea_Field.php' );

	/* Initialise the new class so it can be returned */
	$class = new GFPDF\Helper\Fields\Prefix_Allcaps_Textarea_Field( $field, $entry, GPDFAPI::get_form_class(), GPDFAPI::get_misc_class() );

	return $class;
}, 10, 3 );
```

And here's the accompanying `Prefix_Allcaps_Textarea_Field.php` file which should be in the same directory as the file the `gfpdf_field_class` filter above is placed:

```
<?php

/**
 * The following class should be placed in a separate PHP file in the same directory as the file you included the `gfpdf_field_class` filter.
 * We'll override the current Textarea_Field class with out new Prefix_Allcaps_Textarea_Field class.
 * This will allow us to force allcaps on all textarea fields in the PDFs
 */
namespace GFPDF\Helper\Fields;

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Controls the display and output of the textarea field
 *
 */
class Prefix_Allcaps_Textarea_Field extends Field_Textarea {

	/**
	 * Get the standard GF value of this field
	 *
	 * @return string|array
	 *
	 * @since 4.0
	 */
	public function value() {

		if ( $this->has_cache() ) {
			return $this->cache();
		}

		$this->cache( nl2br( mb_strtoupper( $this->get_value() ) ) );

		return $this->cache();
	}
}
```

It's worth noting that developers who add *new* fields to Gravity Forms don't need to use this filter to switch out the class. You just need to create a class that extends `GFPDF\Helper\Helper_Abstract_Fields` and include it during the `init` action. Just make sure you adhere to the appropriate naming convention – see `Helper_Misc::get_field_class($type)` for an example of the correct class name (when using the `gfpdf_field_class` filter above you don't need to worry about adhering to a specific naming convention). 

```
add_action( 'init', function() {
	/**
	 * Include the new field class
	 * It's best to match the class name and the filename.
	 * When adding new fields The class name format should be "Field_$type". Where type is in proper case.
	 */
	require_once( __DIR__ . '/Field_Colorpicker.php' ); /* See the classes found in `/src/helper/fields/` for examples of this file's structure */
} );
```
 
## Source Code 

This filter is located in the `Model_PDF::get_field_class()` method of `/src/model/Model_PDF.php`.