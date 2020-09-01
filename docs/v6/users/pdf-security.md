---
title: "Protocols in Place to Protect Your Data"
sidebar_label: "PDF Security"
description: "Ensuring your data is protected is top priority and we've implemented security protocols to prevent unauthorised access to PDF documents."
---

![Access Denied to PDF](https://resources.gravitypdf.com/uploads/2015/10/access-denied.png) 

Ensuring your data is protected is our *top priority* and we've implemented a number of security protocols to prevent unauthorised access to PDF documents generated with Gravity PDF. **All PDF rendering is done directly on your web server** and no third-party service has access to your data. 

Once you've installed the plugin it's **strongly recommended** you review the security settings and **thoroughly test** they are working correctly.

## Default Security 

:::note tl;dr
The default security settings allow the user who submits the entry to view their own PDF. Site Administrators and Network Super Administrators can view all PDFs.
:::

The software ships with conservative defaults that provides a well-balanced mix of PDF access and security. By default, the following users will be able to access PDFs:

1.  Administrator and Super Administrator users (if running multisite) can access all PDFs.

2.  Any user with a [WordPress role](https://codex.wordpress.org/Roles_and_Capabilities) that has the [`gravityforms_view_entries` capability](https://www.gravityhelp.com/documentation/article/role-management-guide/) (by default this is only Administrators and Super Administrators) can access all PDFs. You can change this behaviour by modifying the [User Restrictions](global-settings.md#user-restriction) option in the global settings, or adding the `gravityforms_view_entries` capability to an existing role (use a [role editor plugin](https://wordpress.org/plugins/search.php?q=role+editor)).

3.  The original Gravity Form entry owner (the end-user who completed the form) can access their PDF. The protocols used to determine if a user is the owner include:
    - The software will compare the user's IP address against the one stored with the entry and if they match the PDF will be displayed. Because [IP addresses do change](http://whatismyipaddress.com/keeps-changing), a time-based security measure has also been implemented which only allows logged-out user access to the PDF for 20 minutes by default after submitting the form. This behaviour can be changed using the [Logged Out Timeout](global-settings.md#logged-out-timeout) option in the global settings.
    - If the user's IP doesn't match, or the 20-minute timeout window has expired, AND the entry owner was originally logged in when completing the form they will be redirected to a login page. Once authenticated, the software will compare the user's ID with the one stored in the entry. If they match the PDF will be displayed.
    - If a user is already logged in we'll do the user ID comparison without the need to login again.
    - To correctly test the owner security policy you'll need to submit a new entry using a web proxy like [hide.me](https://hide.me/en/proxy) so that the IP address differs from your own.

:::caution
By default, Gravity Forms will not handle proxy-based IP addresses automatically (Cloudflare, Load Balancer and WAF Firewalls are affected). In such cases our IP-based access policy mentioned below will not work. If you are affected you can [use the `gform_ip_address` filter](https://docs.gravityforms.com/gform_ip_address/) to return the correct user IP.
:::

4. An alternative to the IP-based authentication mentioned in #3 above is signed PDF URLs (added in Gravity PDF 5.1), which correctly authenticates a user even if you've disabled IP addresses using Gravity Forms 2.4+ GDPR features.     
    - Signed URLs are only available using the [gravitypdf] shortcode [with the `signed` attribute](shortcodes.md#signed-attribute). Anyone with access to the signed link can view the PDF (regardless of their user privileges, if any), provided the link hasn't expired.
    - By default, the signed URL will have a 20-minute timeout window. This behaviour can be changed globally using the [Logged Out Timeout](global-settings.md#logged-out-timeout) settings, or per [gravitypdf] shortcode [by including the `expires` attribute](shortcodes.md#expires-attribute).
    - When the timeout period expires, Gravity PDF will fallback to the standard security policies outlined in #1/2/3 above. 
    - Signed URLs do not work across protocols. For example, you cannot display the shortcode on a HTTP page while the PDF loads over HTTPS (or vice versa). 

## PDFs and the File System 

:::note tl;dr
PDFs stored on the disk have a limited lifespan, and are protected from direct access on Apache and Litespeed web servers. Other servers aren’t automatically protected and it’s advisable to use [the `gfpdf_tmp_location` filter](../developers/filters/gfpdf_tmp_location.md) to change the PDF directory to somewhere outside your public directory structure.
:::

Currently, the only time a PDF is actually saved to disk is when it's configured to be [attached to a form's notification(s)](setup-pdf.md#notifications), or the [*Always Save PDF* setting](setup-pdf.md#save-pdf) is enabled (use Always Save in conjunction with [the `gfpdf_post_save_pdf` action](../developers/actions/gfpdf_post_save_pdf.md) to copy PDFs to another directory). The PDF temporary directory defaults to `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/tmp/` and generated documents stored here are cleaned up automatically from the disk once the Gravity Forms submission process has been completed. Any stray documents older than 12 hours are also automatically cleaned up. The PDFs are not cached on the file system and they are dynamically generated upon request.

## Prevent Owner Access 

If your PDF is never meant to be viewed by the end user you can enable the [*Restrict Owner*](setup-pdf.md#restrict-owner) security setting. This will ensure only logged in users with roles assigned the capabilities set in the global [*User Restriction*](global-settings.md#user-restriction) setting have access to the document.

## Enable Public Access 

If you want to enable public access to the PDFs generated from your Gravity Form you can do so with the [*Enable Public Access*](setup-pdf.md#enable-public-access) option. Use this option sparingly as it will allow anyone worldwide to access PDFs generated from your form – search engines may even index the documents (but are discouraged to do so). In the majority of cases the standard security protocols are sufficient.

## Sensitive User Information 

If you are collecting sensitive data from your users there are a number of best-practice protocols you should consider implementing to protect that information. These include:

1.  Install an [SSL certificate](https://www.namecheap.com/support/knowledgebase/article.aspx/786/38/what-is-an-ssl-certificate-and-what-is-it-used-for) and correctly enable HTTPS on your website. For better trust between you and your users [you might opt for an EV Certificate](https://www.namecheap.com/security/ssl-certificates/extended-validation.aspx). [Let's Encrypt](https://letsencrypt.org/) offer free SSL certificates for those with a dedicated server, and many web hosts now offer free certificates via Let's Encrypt. Test your HTTPS implementation by [running an SSL Server test](https://www.ssllabs.com/ssltest/) – aim for an "A+".
2.  Use dedicated web hosting (or similar). Ensure the hosting service you choose meets your country's regulations in regard to the data being collected – an example being [Amazon's Cloud Compliance](http://aws.amazon.com/compliance/).

3.  If you collect and store credit card details on your server you must [be PCI-compliant](https://www.pcisecuritystandards.org/merchants/). Even if you aren't storing payment details, the user information you are storing may be sensitive enough that you could follow PCI best-practice.

4.  Encrypt your dedicated server's file system as well as the database.

5.  Ensure WordPress and its plugins are regularly updated.

6.  Do not send sensitive user information via email. This includes in the email body or as an attachment. Instead use the [`[gravitypdf]` shortcode](shortcodes.md) to send a link to the PDF, or place a download link [on the confirmation page](shortcodes.md#confirmation).

7.  Enable PDF password protection and use a strong password (the longer the better). PDFs use 128-bit encryption.

8.  Implement strong password policies, [enhance your password encryption](https://github.com/roots/wp-password-bcrypt), and enable two-step authentication for all accounts.

9.  Install security plugins like [Sucuri Security](https://wordpress.org/plugins/sucuri-scanner/), [Wordfence Security](https://wordpress.org/plugins/wordfence/) or [iThemes Security](https://wordpress.org/plugins/better-wp-security/) (to prevent conflicts only install and run one of these security plugins).

The list above is just some of the ways you can keep your website and user data secure. Remember, security is not "set and forget". It is an on-going process and you should remain ever vigilant.
