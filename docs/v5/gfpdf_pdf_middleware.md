---
title: "gfpdf_pdf_middleware"
sidebar_label: "gfpdf_pdf_middleware"
description: "Our middleware is used as the bridge between our user and their ability to access the requested PDF. It's our security layer."
---

## Description 

Middleware is a term used to define a bridge between two operations. In this case, our middleware is used as the bridge between our user and their ability to access the requested PDF. Or in other words, our middleware acts as the security layer. A user has to flow through each middleware filter and pass each test before they can view the PDF. If a middleware filter returns `WP_Error` the user will be denied access to the PDF.

By default we have seven security tests in place to protect your PDFs. These include a check on the PDFs public status, the state, conditional restrictions, the ownership, timeout checks, IP matching and the current user's capabilities. 

This filter allows you to remove any of the existing middleware and replace them with your own custom authentication. For instance, you might like to use API keys to do all your authentication. Or create a one-time access link. This filter allows you to do all that and more. But keep security at the forefront of your mind. **By changing the default operation you could unintentionally give unauthorised users access to sensitive information.** *You have been warned!*

Another key consideration when working with this filter and Gravity PDF is that each PDF is generated using a unique URL and should be treated as separate page in WordPress. A PDF has no notion of the post or page it's been linked from so you can't do specific actions based on `is_page()` or `is_post()` – you would need to pass that information as URL parameters instead. 

The important part to remember about working with our middleware is that filters should only return `WP_Error` when the check fails. If a check passes we just return the value of `$error` and let the process continue.

## Parameters 

### $error | mixed
*  A `WP_Error` is returned on failure. Anything else is considered valid.

### $entry | array
*  The raw Gravity Form Entry array.

### $settings | array
*  The current PDF settings being processed

## Usage 

This snippet shows you can how can remove existing middleware. In this case we are effectively enabling public access to all Gravity PDF documents (we do NOT recommend doing this):

```
add_action( 'init', function() {

	/* Get the Controller_PDF class so we can remove middleware filters */
	$pdf = GPDFAPI::get_mvc_class( 'Model_PDF' );

	remove_filter( 'gfpdf_pdf_middleware', array( $pdf, 'middle_owner_restriction' ), 40 );
	remove_filter( 'gfpdf_pdf_middleware', array( $pdf, 'middle_logged_out_timeout' ), 50 );
	remove_filter( 'gfpdf_pdf_middleware', array( $pdf, 'middle_auth_logged_out_user' ), 60 );
	remove_filter( 'gfpdf_pdf_middleware', array( $pdf, 'middle_user_capability' ), 70 );
} );
```

This snippet shows you how you can add your own authentication middleware to Gravity PDF using an API key:

```
add_action( 'gfpdf_pdf_middleware', function( $error, $entry, $settings ) {
	/* Don't bother running this check if an error has already been triggered */
	if ( ! is_wp_error( $error ) ) {
		/* We are passing in an api_key and valid nonce to do our verification. If they don't exist we'll let the other middleware handle the authentication process */
		if( isset( $_GET['api_key'] ) && isset( $_GET['_nonce'] ) ) {
			$api   = $_GET['api_key'];
			$nonce = $_GET['_nonce'];

			/* Verify our nonce we set earlier and we have a logged in user. The nonce should be set during the display of the PDF link. */
			if ( ! wp_verify_nonce( $nonce, 'gfpdf_auth_api_' . $api ) || ! is_user_logged_in() ) {
				/* Nonce or logged in user checks failed. Throw an error */
				return new WP_Error( 'api_failure', __( 'There was an issue doing the authentication. Please try again.', 'prefix-text-domain' ) );
			}

			/* Verify the API key is assigned to the current user. 'prefix-gfpdf-api-key' is user meta data you would have set earlier */
			$is_valid =  get_user_meta( get_current_user_id(), 'prefix-gfpdf-api-key', true );

			/* If the API key doesn't match we'll throw an error */
			if( $is_valid != $api ) {
				return new WP_Error( 'api_auth_failure', __( 'Invalid API key', 'prefix-text-domain' ) );
			}
		}
	}

	return $error;
}, 10, 3 );

```

## Source Code 

This filter is located in the `Model_PDF::process_pdf()` method of `/src/model/Model_PDF.php`.