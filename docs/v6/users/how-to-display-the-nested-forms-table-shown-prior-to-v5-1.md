---
title: "How to display the Gravity Perks Nested Forms table in PDFs?"
sidebar_label: "Display Nested Forms Table"
description: ""
---

You can output the [Gravity Wiz Nested Forms](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) field in Core and Universal PDF templates as a table using the following snippet (add to your theme's `functions.php` file):

```
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
```

The table columns used are those selected in the _Summary Fields_ setting for the Nested Form field in the Form Editor.