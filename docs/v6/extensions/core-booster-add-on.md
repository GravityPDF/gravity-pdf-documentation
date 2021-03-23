---
title: "Core Booster Documentation: How to Install and Configure"
sidebar_label: "Core Booster"
description: "Core Booster is a premium plugin for Gravity PDF that adds a number of enhancements to the Core (free) and Universal PDF templates (premium)."
---

![Core Booster add-on](https://resources.gravitypdf.com/uploads/edd/2017/06/cover-artwork-2.png)

*Core Booster* is a premium plugin for Gravity PDF that adds a number of enhancements to the Core and Universal PDF templates. The Core PDF templates are the free designs that [ship with Gravity PDF](https://wordpress.org/plugins/gravity-forms-pdf-extended/), and the Universal templates are the [premium designs from our Template Shop](https://gravitypdf.com/template-shop/#universal).

You can purchase the Core Booster plugin from our [Extension Shop](https://gravitypdf.com/shop/core-booster-add-on/). This guide will walk you through installing and configuring *Core Booster* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Configuring 

This extension adds a number of new features to Core and Universal templates. All functionality can be enabled from the *Template* tab when [editing the PDF settings](../users/setup-pdf.md#template-tab).

![The new options this extension adds to Core and Universal templates](https://resources.gravitypdf.com/uploads/2017/06/core-booster-options.png)

Refer to the sections below for information on what each feature does and how to enable it:

-   [Customise Fields](#customise-fields)
-   [Display Notes](#display-notes)
-   [Show All Available Options](#show-all-available-options)
-   [Toggle Option Label / Value](#toggle-option-label--value)
-   [Show Field Descriptions](#show-field-descriptions)
-   [Group / Ungroup Product Fields](#group--ungroup-product-fields)
-   [Toggle Field Labels](#toggle-field-labels)

### Customise Fields 

https://www.youtube.com/watch?v=C_ox0hj3ZHk&rel=0

#### Display Fields 
*  This feature allows you to control which fields are displayed or excluded in the current PDF. You can create multiple PDFs on the same form with different fields selected.
*  This setting will override the [rudimentary "exclude" CSS class](../users/hide-form-fields.md).
*  The fields you included will be displayed in the original order used [in the Form Editor](https://docs.gravityforms.com/form-editor/). You cannot re-order the fields. 
*  As of v1.3.0, this setting can be toggled on or off (default off). When on, you can pick and choose the fields to display. When off, all form fields will automatically be considered for display in the PDF.
*  To control the display of HTML fields you first need to [enable the Show HTML Fields setting](user-setup-pdf.md#show-html-fields).
* To control the display of Product fields you first need to [set the Group Product setting to "No"](#group--ungroup-product-fields).

### Display Notes 

https://www.youtube.com/watch?v=R02My16tHA4&rel=0

#### Show Entry Notes 
*  This feature allows you to display the Entry Notes at the bottom of the PDF. 
*  Regardless of template used, the Notes will match the layout and style used in Gravity Forms.
*  This feature is disabled by default. 

### Show All Available Options 

https://www.youtube.com/watch?v=Rj3GdkQv0R4&rel=0

#### Show Field Options 
* This feature allows you to control if all available options are shown in the PDF for Radio, Checkbox, Select and Multiselect (RCSM) fields.
* If a user selected an option, it'll show up as an ☒, if the option isn't selected it'll be an empty ballot box instead ☐
* You can individually enable this functionality for each field type. For example, you can set only Radio fields to show all options, and leave the other fields using the standard Gravity PDF output.
* If you aren't using a layout column on your RCSM field (usually using the CSS classes, like `gf_left_half`, `gf_left_third` or `gf_first_quarter`) you can create up to five option columns. Use the CSS classes `gf_list_2col`, `gf_list_3col`, `gf_list_4col`, or `gf_list_5col` to enable this functionality.
* **Note:** Option columns don't work in the templates *Formium*, *Colossus* or *Cellulose* as they utilise layout columns internally.
* Product fields that utilise an RCSM field are compatible [provided you ungroup the products](#group--ungroup-product-fields).
* You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](../users/setup-pdf.md#template) for Core and Universal PDF templates.

### Toggle Option Label / Value 

https://www.youtube.com/watch?v=oE7aNOWHndU&rel=0

#### Option Field Display 
* This feature allows you to control whether Radio, Checkbox, Select and Multiselect (RCSM) fields will show the selected option label or value in the PDF.
* This setting will apply to all RCSM fields in your form, including Product fields that utilise RCSM field types.
* To utilise this feature correctly, you need to take advantage of RCSM field's "Use Value" option in the Form Editor. *Values must be unique and cannot contain any HTML markup or special characters*.
* You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](../users/setup-pdf.md#template) for Core and Universal PDF templates.

### Show Field Descriptions 

https://www.youtube.com/watch?v=F2hANc35XE4&rel=0

#### Show Field Description? 
* When enabled, a field's description will be displayed alongside the user's response.
* The description position is [determined by your Form Settings](https://docs.gravityforms.com/form-settings/#form-layout) and can be placed above or below the user's response in the PDF.
* You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](../users/setup-pdf.md#template) for Core and Universal PDF templates.

### Group / Ungroup Product Fields 

https://www.youtube.com/watch?v=I7KtEI-KHgA&rel=0

#### Group Products? 
* Disable this feature to prevent products from being grouped at the end of a PDF. Instead, they'll be displayed in the order they appear in your Form Editor. 
* As of Gravity PDF 5.1, you can completely remove the Product table. Prior to 5.1, to remove you have to ungroup the products and remove them [using the Customise Field setting](#customise-fields).
* You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](../users/setup-pdf.md#template) for Core and Universal PDF templates.

### Toggle Field Labels 

https://www.youtube.com/watch?v=uKTLW_HsiWs&rel=0

#### Field Label Display 
* This feature gives you four different ways to display the field labels in the PDF:
    1.  Display the Standard/Field Label for all fields
    2.  Display the Admin Field Label for all fields
    3.  Display the Admin Field Label for fields that have one, otherwise fall back to the Standard/Field Label
    4.  Disable the Field Label

* This feature applies to all Gravity Form fields that support an Admin Field label
* You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](../users/setup-pdf.md#template) for Core and Universal PDF templates.
