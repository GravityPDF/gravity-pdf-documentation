---
title: "Gravity PDF API – get_notice_class()"
sidebar_label: "get_notice_class()"
description: "If you extend Gravity PDF, this methods allows you to easily display a message or error to the user in the WP Admin area."
---

## Description 

If you extend Gravity PDF, this methods allows you to easily display a message or error to the user in the WP Admin area. When using this class, you'll need to trigger the message/error before the `admin_notices` or `network_admin_notices` WordPress hooks.

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### \\GFPDF\\Helper\\Helper\_Notices \| object
* The notices class

## Usage 

The following snippet shows you the usage of our notice class in a basic admin action your plugin might implement:

```
add_action( 'admin_init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF notice class */
        $notice = GPDFAPI::get_notice_class();

        /* Listen for one of your plugin's actions and verify the current user can perform it */
        if ( isset( $_POST['prefix_plugin_action'] ) ) {

            /* Verify the current user has the correct capabilities to run the action */
            if ( ! current_user_can( 'activate_plugins' ) ) {
                $notice->add_error( __( 'Access denied', 'prefix-text-domain' ) );
                return;
            }

            /* Check the nonce to prevent XSS attacks */
            if ( ! wp_verify_nonce( $_POST['prefix_plugin_action'], 'prefix_plugin_action' ) ) {
                $notice->add_error( __( 'There was a problem processing the action.', 'prefix-text-domain' ) );
                return;
            }

            /* User passed all authentication checks, so lets process the action */

            /* Action was successful so lets tell the user */
            $notice->add_notice( __( 'Action successful.', 'prefix-text-domain' ) );

        }
    }
} );
```

## Source Code 

This method is located in `api.php`, and the notice class can be found in `src/helper/Helper_Notices.php`
