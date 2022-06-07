---
title: "gfpdf_current_form_object"
sidebar_label: "gfpdf_current_form_object"
description: ""
---

## Description 

This filter is useful if you want to manipulate the `$form` object specifically when a PDF is being processed. The filter is used in multiple locations throughout the code and, if needed, you can use `$method` to target to only modify `$form` during a specific class/function/method. 

## Version 

This filter was introduced in Gravity PDF 6.3.

## Parameters 

### $form | array
*  The Gravity Forms array

### $entry | array
*  The raw Gravity Forms Entry array.

### $type | string
* The class/function/method the filter is being applied.
* Valid options include:
  * initialize_pdf_class
  * get_form_data
  * get_core_template_styles
  * generate_html_structure
  * process_and_save_pdf
  * generate_pdf
  * trigger_post_save_pdf
  * get_pdf_display_list
  * get_active_pdfs
  * get_pdf_name
  * apply_backwards_compatibility_filters
  * helper_abstract_fields

## Usage 

The following will reorder Gravity Forms fields in Core / Universal PDFs:

```
add_filter( 'gfpdf_current_form_object', function( $form, $entry, $type ) {
    if ( $type === 'generate_html_structure' ) {
      /* Move the 3rd and 4th fields to the end of the form for the PDF only */
      $extracted_fields = array_splice( $form['fields'], 2, 2 );
      $form['fields'] = array_merge( $form['fields'], $extracted_fields );
    }

    return $form;
}, 10, 3 );
```

## Source Code 

This filter is located in the following methods and files:

* `Helper_PDF::__construct()` method in `/src/Helper/Helper_PDF.php`.
* `Helper_Abstract_Fields::__construct()` method in `/src/Helper/Helper_Abstract_Fields.php`.
* `Model_PDF::get_form_data()` method in `/src/Model/Model_PDF.php`.
* `View_PDF::get_core_template_styles()` method in `/src/View/View_PDF.php`.
* `View_PDF::generate_html_structure()` method in `/src/View/View_PDF.php`.
* `Model_PDF::process_and_save_pdf()` method in `/src/Model/Model_PDF.php`.
* `View_PDF::generate_pdf()` method in `/src/View/View_PDF.php`.
* `Model_PDF::trigger_post_save_pdf()` method in `/src/Model/Model_PDF.php`.
* `Model_PDF::get_pdf_display_list()` method in `/src/Model/Model_PDF.php`.
* `Model_PDF::get_active_pdfs()` method in `/src/Model/Model_PDF.php`.
* `Model_PDF::get_pdf_name()` method in `/src/Model/Model_PDF.php`.
* `Model_PDF::apply_backwards_compatibility_filters()` method in `/src/Model/Model_PDF.php`.
