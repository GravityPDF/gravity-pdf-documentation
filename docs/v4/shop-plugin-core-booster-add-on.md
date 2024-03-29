---
title: "Core Booster - A premium extension for Gravity PDF"
sidebar_label: "Core Booster"
description: "Core Booster is a premium plugin for Gravity PDF that adds a number of enhancements to the Core (free) and Universal PDF templates (premium)."
---

import ResponsiveEmbed from 'react-responsive-embed'

![Core Booster add-on](https://resources.gravitypdf.com/uploads/edd/2017/06/cover-artwork-2.png)

*Core Booster* is a premium plugin for Gravity PDF that adds a number of enhancements to the Core and Universal PDF templates. The Core PDF templates are the free designs that [ship with Gravity PDF](https://wordpress.org/plugins/gravity-forms-pdf-extended/), and the Universal templates are the [premium designs from our Template Shop](https://gravitypdf.com/template-shop/#universal).

You can purchase the Core Booster plugin from our [Extension Shop](https://gravitypdf.com/shop/core-booster-add-on/). This guide will walk you through installing and configuring *Core Booster* to its full potential.

### Installation

[Please follow our installation guide](shop-installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

### Configuring

This extension adds a number of new features to Core and Universal templates. All functionality can be enabled from the *Template* tab when [editing the PDF settings](user-setup-pdf.md#template).

![The new options this extension adds to Core and Universal templates](https://resources.gravitypdf.com/uploads/2017/06/core-booster-options.png)

Refer to the sections below for information on what each feature does and how to enable it:

* [Show All Available Options](#available-options)
* [Toggle Option Label / Value](#toggle-option-value)
* [Show Field Descriptions](#show-field-description)
* [Group / Ungroup Product Fields](#group-ungroup-products)
* [Toggle Field Labels](#toggle-field-labels)

#### Show All Available Options
<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/Rj3GdkQv0R4" />

Show Field Options
:    This feature allows you to control if all available options are shown in the PDF for Radio, Checkbox, Select and Multiselect (RCSM) fields.
:    If a user selected an option it'll show up as an ☒, if the option isn't selected it'll be an empty ballot box instead ☐
:    You can individually enable this functionality for each field type. For example, you can set only Radio fields to show all options, and leave the other fields using the standard Gravity PDF output.
:    If you aren't using a layout column on your RCSM field (usually using the CSS classes, like `gf_left_half`, `gf_left_third` or `gf_first_quarter`) you can create up to five option columns. Use the CSS classes `gf_list_2col`, `gf_list_3col`, `gf_list_4col`, or `gf_list_5col` to enable this functionality.
:    **Note:** Option columns don't work in the templates *Formium*, *Colossus* or *Cellulose* as they utilise layout columns internally.
:    This feature does not currently apply to Product fields that utilise an RCSM field.
:    You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](user-setup-pdf.md#template) for Core and Universal PDF templates.

#### Toggle Option Label / Value
<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/oE7aNOWHndU" />

Option Field Display
:    This feature allows you to control whether Radio, Checkbox, Select and Multiselect (RCSM) fields will show the selected option label or value in the PDF.
:    This setting will apply to all RCSM fields in your form, including Product fields that utilise RCSM field types.
:    To utilise this feature correctly you need to take advantage of RCSM field's "Use Value" option in the Form Editor. *Values must be unique and cannot contain any HTML markup or special characters*
:    You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](user-setup-pdf.md#template) for Core and Universal PDF templates.

#### Show Field Descriptions
<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/F2hANc35XE4" />

Show Field Description?
:    When enabled, a field's description will be displayed alongside the user's response.
:    The description position is [determined by your Form Settings](https://www.gravityhelp.com/documentation/article/form-settings/#form-layout) and can be placed above or below the user's response in the PDF.
:    You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](user-setup-pdf.md#template) for Core and Universal PDF templates.

#### Group / Ungroup Product Fields
<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/I7KtEI-KHgA" />

Group Products?
:    Disable this feature to prevent products from being grouped at the end of a PDF. Instead, they'll be displayed in the order they appear in your Form Editor.
:    When products aren't grouped together you can hide them [using our special `exclude` CSS class](user-hide-form-fields.md).
:    **Note:** this option isn't currently available in the *Colossus* or *Cellulose* templates as they have Group Products disabled by default.
:    You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](user-setup-pdf.md#template) for Core and Universal PDF templates.

#### Toggle Field Labels
<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/uKTLW_HsiWs" />

Field Label Display
:    This feature gives you three different ways to display the field labels in the PDF:

     1. Display the Standard/Field Label for all fields
     2. Display the Admin Field Label for all fields
     3. Display the Admin Field Label for fields that have one, otherwise fall back to the Standard/Field Label
:    This feature applies to all Gravity Form fields that support an Admin Field label. This does not include Product fields while grouped together in the Product table.
:    You can find this setting at the bottom of the *Template* tab when [editing the PDF Settings](user-setup-pdf.md#template) for Core and Universal PDF templates.



