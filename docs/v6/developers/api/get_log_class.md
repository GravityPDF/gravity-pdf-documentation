---
title: "Gravity PDF API – get_log_class()"
sidebar_label: "get_log_class()"
description: "Gravity PDF implements the PSR-3 logging library, Monolog, to handle all it's logging requirements. Use this method to access the log class."
---

## Description 

Gravity PDF implements the [PSR-3](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md) logging library, [Monolog](https://github.com/Seldaek/monolog), to handle all it's logging requirements. When in production the logger doesn't save any logs unless it's enabled through Gravity Forms in-built logging setting, or when using the [Gravity Forms Logging Add-on](https://docs.gravityforms.com/logging-add-on/). Once you've enabled logging, we'll save the appropriate logs to disk for later review – errors and higher or notices and higher, depending on the log setting you selected.

When using the logging class all logs will automatically include the following details:

-   Function/method being called
-   Class called from (if applicable)
-   URL
-   Peak memory usage
-   File and line number called from
-   User IP
-   Timestamp

## Version 

This method was introduced in Gravity PDF 4.0.

## Return 

### \\Monolog\\Logger \| object
* The logging class

## Usage 

The following snippet shows you how to use this method and write to our log file:

```
add_action( 'init', function() {
    if ( class_exists( 'GPDFAPI' ) ) {
        /* Get Gravity PDF logging class */
        $logs = GPDFAPI::get_log_class();

        /* Write logs to file */
        $logs->addNotice( 'My plugin started operation X' );
        $logs->addWarning( 'Nonce Check Failed' );
        $logs->addError( 'Invalid ID number' );
        $logs->addCritical( 'Security issue: lack of User Capabilities' );
        $logs->addAlert( 'Plugin compatibility issue' );
        $logs->addEmergency( 'Plugin exploded' );

        /* You can also pass additional properties to the log by included a second argument as an array */
        $logs->addError( 'Invalid ID number', array(
            'form_id' => '5', /* This would usually be a variable */
        ) );
    }
} );
```

## Source Code 

This method is located in `api.php`.
