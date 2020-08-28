---
title: "Gravity PDF API – get_misc_class()"
sidebar_label: "get_misc_class()"
description: "Get access to the common class methods uses in the Gravity PDF plugin. There's over 25 different methods to utilise. "
---

## Description

Get access to the common class methods uses in the Gravity PDF plugin. You might use methods like `is_gfpdf_page()` to check if the current page being loaded is a Gravity PDF page, or get the current Gravity PDF field class name based on the field type. There's more than 25 different methods to use so we recommend reviewing the `src/helper/Helper_Misc.php` file for full details.

## Version

This method was introduced in Gravity PDF 4.0.

## Return

\\GFPDF\\Helper\\Helper\_Misc \| object
* The misc class

## Usage

This snippet shows how to access our miscellaneous class and check if we're currently on a Gravity PDF admin page:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF misc class */
        $misc = GPDFAPI::get_misc_class();

        /* Check if we are on a Gravity PDF admin page */
        if ( $misc->is_gfpdf_page() ) {
            //load scripts or styles on the Gravity PDF admin page here
        }
    }
} );
```

## Source Code

This method is located in `api.php` and the misc class can be found in `src/helper/Helper_Misc.php`.
