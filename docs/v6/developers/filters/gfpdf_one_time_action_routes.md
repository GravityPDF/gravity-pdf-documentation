---
title: "gfpdf_one_time_action_routes"
sidebar_label: "gfpdf_one_time_action_routes"
description: "Gravity PDF can create one-time action messages to be displayed to the user while in the WordPress admin area. We show you how."
---

## Description 

Gravity PDF can create one-time action messages to be displayed to the user while in the WordPress admin area. We use these to prompt important actions like the v3 to v4 Migration and our plugin review notice. 

Our one-time actions handles security related to XSS and user permissions. It also handles all the logic related to showing, running, hiding and dismissing one-time actions. 

If your plugin needs to run important functionality that requires user interaction for Gravity PDF users the `gfpdf_one_time_action_routes` is the perfect solution.

## Parameters 

### $routes | array
* A multidimensional array containing all the logic needed for our action. A route array should contain the following array keys: `action`, `action_text`, `condition`, `process`, `view`, `capability`. You can optionally include the `view_class` key as well.

### $routes Key-Pair Details 

It's very important you include ALL required route keys and set up appropriate functions for the `condition`, `process` and `view` keys. Below is more information about what each key does and what its value should be.

### action
*  The *action* key is an individual route's ID. This should be unique and we recommend prefixing it to prevent clashing with any other routes. 

### action_text
*  This is the text displayed in the primary action button for the route. You should make this translation-ready by wrapping the text inside the `__()` function. 

### condition
*  This key should reference a valid callback function or method by following the PHP `call_user_func()` standards.
*  Ensure your callback returns a boolean value. If it's `true` your one-time action will be shown to the user (unless it has been dismissed).

### process
*  This key should reference a valid callback function or method by following the PHP `call_user_func()` standards.
*  Use this callback to actually run your action. It doesn't need to return anything and if you want to output anything to the user you should use the `Helper_Notices::add_notice()` or `Helper_Notices::add_error()` methods. 
*  On success you should manually dismiss the notice to prevent any extra processing when loading in the admin area. See the [usage](#add-one-time-action) instructions below for more details.

### view
*  This key should reference a valid callback function or method by following the PHP `call_user_func()` standards.
*  Ensure your callback returns your message (exactly how shortcodes function). If you want to keep to Gravity PDF's one-time action styles wrap your message in `<div style="font-size:15px; line-height: 25px"></div>` tags. 
*  Your view will also need to include the `View_Actions::get_action_buttons()` method after your message HTML. See the [usage](#add-one-time-action) instructions below for more details.

### capability
*  Add the minimum [WordPress capability](https://codex.wordpress.org/Roles_and_Capabilities) (or [Gravity Form capability](https://docs.gravityforms.com/role-management-guide/)) a user needs to have to see and run the one-time action.

### view_class
*  Use this key to add a class to the WordPress notice container. 

## Usage 

Because `gfpdf_one_time_action_routes` calls multiple functions, which you need to define, it's much more involved that your standard WordPress filter. But it's also extreamly powerful when used correctly. 

### Add One-Time Action 

Below is the basic structure used to create one-time actions for Gravity PDF. While we've included the callback functions inline, you can reference any function or method that the PHP `call_user_func()` function supports.

```language-php
add_filter( 'gfpdf_one_time_action_routes', function( $routes ) {

	/**
	 * Add our own one-time action to check if we can enabled advanced logging...
	 */
	$routes[] = array(
		'action'      => 'prefix_advanced_logging',
		'action_text' => __( 'Enable Advanced Logging', 'prefix-text-domain' ),

		'condition'   => function() {

			/**
			 * If our option doesn't exist in the database the 'view' should be displayed to the user (if they meet the approrpiate 'capability')
			 * This condition will be ignored if a user has already dismissed your route or the action has already been run and you've manually dismissed the route
			 */
			if( get_option( 'prefix_advanced_logging' ) ) {
				return false;
			}

			return true;
		},

		'process' => function() {

			/**
			 * The user wants to enable advanced logging
			 * Do any process handling here.
			 *
			 * In our case we'll just mark this as enabled in the database and handle the actual "advanced logging" elsewhere.
			 */
			update_option( 'prefix_advanced_logging', true );

			/**
			 * Show a success notice to the user so they know the one-time action is completed
			 *
			 * If you wanted to show an error instead use $notice->add_error()
			 */
			$notice = GPDFAPI::get_notice_class();
			$notice->add_notice( __( 'Advanced Logging Enabled', 'prefix-text-domain') );

			/**
			 * If your one-time action needs to monitor the status of WordPress for any changes (like our migration script which detects the existance of the `configuration.php` file)
			 * you don't need to manually clear the notice. Just make sure your 'condition' becomes 'false' after this function runs.
			 *
			 * If however your action doesn't need to monitor the status of WordPress and is truely a one-time action you should manually dismiss it.
			 * This prevents the 'condition' function from being run on WP admin pages in future and reduces unnecessary processing
			 */
			$model = GPDFAPI::get_mvc_class( 'Model_Actions' );
			$model->dismiss_notice( 'prefix_advanced_logging' );

		},

		'view' => function( $type, $button_text ) {
			/* $type references the action ID (in our case 'prefix_advanced_logging') */
			/* $button_text references the action_text key (in our case 'Enable Advanced Logging') */

			/* Get the Action_View class instance so we can run get_action_buttons() after our HTML */
			$view = GPDFAPI::get_mvc_class( 'View_Actions' );

			$html = '<div style="font-size:15px; line-height: 25px">
						<strong>' . __( 'Do you want to enable advanced logging in Gravity PDF', 'prefix-text-domain' ) . '</strong>
					</div>';

			/* If we didn't want to automatically include the dismiss button we could have set the third parameter in get_action_buttons() to 'disable' */
			$buttons = $view->get_action_buttons( $type, $button_text );

			return $html . $buttons;

		},

		'capability'  => 'update_plugin', /* users with this capability can see this action */
	);

	return $routes;

} );
```

### Remove One-Time Action 

If you want to remove an existing one-time action you can do so with the following code:

```language-php
add_filter( 'gfpdf_one_time_action_routes', function( $routes ) {

	/* Loop over the routes and remove any we don't want */
	foreach ( $routes as $id => $route ) {
		if ( 'review_plugin' == $route['action'] ) {
			unset( $routes[ $id ] );
		}
	}

	return $routes;
} );
```

## Source Code 

This filter is located in the `Controller_Actions::get_routes()` method of `/src/controller/Controller_Actions.php`.

An example of the `condition` function can be seen in the `Model_Actions::migration_condition()` method of `/src/model/Model_Actions.php`.

An example of the `process` function can be seen in the `Model_Actions::begin_migration()` method of `/src/model/Model_Actions.php`.

An example of the `view` function can be seen in the `View_Actions::migration()` method of `/src/view/View_Actions.php`.