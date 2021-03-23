---
title: "How to display the Nested Forms table shown prior to v5.1?"
sidebar_label: "How to display the Nested Forms table shown prior to v5.1?"
description: ""
---

We officially added support for the [Gravity Wiz Nested Forms plugin](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) to Core and Universal PDF templates in Gravity PDF 5.1, but to do that we had to change the layout. If you'd like to re-enable the table-based layout that was shown prior to this, add the following snippet to your active theme's `functions.php` file:

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