---
title: "Gravity PDF API – get_templates_class()"
sidebar_label: "get_templates_class()"
description: "Get access to the template management class methods uses in the Gravity PDF plugin. There's over 20 different methods to utilise."
---

## Description

Get access to the template management class methods uses in the Gravity PDF plugin. You might use methods like `get_template_info_by_id()` to get more information about the template currently configured on a form. There's more than 20 different methods to use, so we recommend reviewing the `src/helper/Helper_Templates.php` file for full details.

## Version

This method was introduced in Gravity PDF 4.1.

## Return

\\GFPDF\\Helper\\Helper\_Templates \| object
* The template management class

## Usage

This snippet shows how to retrieve the template header information based on the ID:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF template class */
        $templates = GPDFAPI::get_templates_class();
        
        $zadani_template_info = $templates->get_template_info_by_id( 'zadani' );
    }
} );
```

## Source Code

This method is located in `api.php`, and the misc class can be found in `src/helper/Helper_Templates.php`.
