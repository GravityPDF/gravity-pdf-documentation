---
title: "gfpdf_hide_consent_field_if_empty"
sidebar_label: "gfpdf_hide_consent_field_if_empty"
description: "A filter that allows you to hide Consent fields from Core / Universal PDFs if user has not given consent."
---

## Description 

This filter allows you to hide specific Consent fields from Core / Universal PDF templates if a user has not ticked the box/given their consent.

## Version 

This filter was introduced in Gravity PDF 6.6.0

## Parameters 

### $remove_if_empty | bool
* A boolean that will determine if the current consent field should be output in the PDF if a user has not ticked the box/given consent. Defaults to false.

### $field | \GF_Field_Consent
*  The current Consent field being processed

### $entry | array
*  The raw Gravity Forms Entry array.

### $form | array
*  The current Gravity Forms array

## Usage 

This example will hide all Consent fields in all Core / Universal PDFs if a user has not given their consent:

``` 
add_filter( 'gfpdf_hide_consent_field_if_empty', function( $remove_if_empty, $field, $entry, $form ) {
    return true;
}, 10, 4 );
```

This example is similar to the above, but restricts this functionality to a Gravity Form with the ID of 8:

```
add_filter( 'gfpdf_hide_consent_field_if_empty', function( $remove_if_empty, $field, $entry, $form ) {
    if ( (int) $form['id'] === 8 ) {
        return true;
    }
    
    return $remove_if_empty;
}, 10, 4 );
```

## Source Code 

This filter is located in the `Field_Consent::html()` method of `/src/Helper/Fields/Field_Consent.php`.
    