---
title: "How to display the Gravity Perks Nested Forms table in PDFs?"
sidebar_label: "Display Nested Forms Table"
description: ""
---

:::info After a no-code solution?
The [Gravity PDF Core Booster extension](https://gravitypdf.com/shop/core-booster-add-on/) provides [three layout options for Nested Forms](../extensions/core-booster-add-on.md#nested-forms) – two of which are table variants. You can also selectively include individual nested form fields, and reorder those fields for the PDF.
:::

You can output the <a href="https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78" rel="sponsored">Gravity Wiz Nested Forms</a> field in Core and Universal PDF templates as a table using the following snippet:

```
add_action( 'after_setup_theme', function() {
	if ( class_exists( '\GFPDF\Helper\Fields\Field_Form' ) ) {
		class Field_Form_Original extends \GFPDF\Helper\Fields\Field_Form {
			public function html( $value = '', $label = true ) {
			add_filter( 'gpnf_template_args', function( $args ) {
					$args['template'] = 'nested-entries-detail-simple';
					return $args;
				} );

				$html = GFCommon::get_lead_field_display( $this->field, $this->get_value(), $this->entry['currency'] );
				$html = apply_filters( 'gform_entry_field_value', $html, $this->field, $this->entry, $this->form );

				$html = str_replace( '<th ', '<th align="left" ', $html );

				return \GFPDF\Helper\Helper_Abstract_Fields::html( $html );
			}
		}

		add_filter( 'gfpdf_field_class_form', function( $class, $field, $entry ) {
			return new Field_Form_Original( $field, $entry, GPDFAPI::get_form_class(), GPDFAPI::get_misc_class() );
		}, 10, 3 );
	}
} );
```

The table columns used are those selected in the _Summary Fields_ setting for the Nested Form field in the Form Editor. Place the snippet in your active theme's `functions.php` file (or a similar location).
