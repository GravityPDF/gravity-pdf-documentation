---
title: "How to increase your WordPress Memory Limit for Gravity PDF"
sidebar_label: "Increasing Memory Limit"
description: "WordPress memory is different to server memory. Your VPS may have 4GB of memory, but WordPress and PHP are only allocated a small portion of this."
---

:::info 
The following article is technical in nature so if you don't feel comfortable making changes to files via (s)FTP, or from your hosting control panel, you should contact your web hosting provider for assistance.
:::

When talking about a *memory limit*, we're referring to PHP's maximum allowed memory per process. That just means the number of resources your website is allowed to use while processing a request – or in our case, generating a PDF. When we talk about WordPress's maximum memory limit, we're really referring to PHP's maximum memory limit. 

It's worth stating that WordPress memory is different to server memory. Your VPS may have 4GB of memory, but WordPress and your web server are only allocated a small portion of this. 

Below are ways you can try increasing your memory limit. Their effectiveness will depend entirely on your hosting provider.

## Adjusting Memory Limit

### wp-config.php 

You can try changing your WP Memory directly in PHP. Edit your WordPress `wp-config.php` file and add the following before the `/* That's all, stop editing! Happy blogging. */` line:

```
define( 'WP_MEMORY_LIMIT', '128M' ); /* change this to a higher value like 256MB or 512MB if needed */
```

More details about the `WP_MEMORY_LIMIT` constant [can be found in the WordPress documentation](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP).

### php.ini 

If the `wp-config.php` method didn't work for you and you have access to your `php.ini` file, try changing the `memory_limit` line to the following:

    memory_limit = 128M;

A lot of shared and managed hosting don't allow you to edit the main `php.ini` file, but some do allow you to upload your own version which overrides these parameters. Check your web hosting provider's documentation to see if they support this.

### .htaccess 

If none of the above two options works, you can try changing the memory limit using the `.htaccess` file. Be aware that if this doesn't work, **it may cause a 500 Internal Server Error** (remove the line if this happens).

    php_value memory_limit 128M

## Still got a problem? Contact Your Hosting Provider 

If none of the methods above work for you, then get in touch with your web hosting provider and ask them for assistance.
