---
title: "Protocols in Place to Protect Your Data"
sidebar_label: "PDF Security"
description: "Ensuring your data is protected is top priority and we've implemented security protocols to prevent unauthorised access to PDF documents."
---

import ResponsiveEmbed from 'react-responsive-embed'

![Password Protected PDF](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Security-e1618787341558.png)

Ensuring your data is protected is our *top priority*, and we've implemented a number of security protocols to prevent unauthorised access to PDF documents generated with Gravity PDF. **All PDF rendering is done directly on your web server**, and no third-party service has access to your data. 

Once you've installed the plugin, it's **strongly recommended** you review the security settings and **thoroughly test** they are working correctly.

If you'd like to know specifics about the settings that control security features in Gravity PDF, and see those protocols in action, Gravity PDF's lead developer has put together a 12-minute video:

<ResponsiveEmbed src="https://player.vimeo.com/video/665431791?dnt=1" allowFullScreen />

**Note: the video doesn't cover every security feature, and you should still review the documentation below.**

## Default Security 

:::note tl;dr
The default security settings allow the user who submits the entry to view their own PDF using user-account authentication or IP-matching. Site Administrators and Network Super Administrators can view all PDFs.
:::

The software ships with conservative defaults that provides a well-balanced mix of PDF access and security. By default, the following users will be able to access PDFs:

1.  Administrator and Super Administrator users (if running multisite) can access all PDFs.

2.  Any user with a [WordPress role](https://codex.wordpress.org/Roles_and_Capabilities) that has the [`gravityforms_view_entries` capability](https://docs.gravityforms.com/role-management-guide/) (by default this is only Administrators and Super Administrators) can access all PDFs. You can change this behaviour by modifying the [User Restrictions](global-settings.md#user-restriction) option in the global settings, or adding the `gravityforms_view_entries` capability to an existing role (use a [role editor plugin](https://wordpress.org/plugins/search.php?q=role+editor)).

3.  The original Gravity Forms entry owner (the end-user who completed the form) can access their PDF. The protocols used to determine if a user is the owner include:
    - The software will compare the user's IP address against the one stored with the entry, and if they match, the PDF will be displayed. Because [IP addresses do change](http://whatismyipaddress.com/keeps-changing), a time-based security measure has also been implemented which only allows logged-out user access to the PDF for 20 minutes by default after submitting the form. This behaviour can be changed using the [Logged Out Timeout](global-settings.md#logged-out-timeout) option in the global settings.
    - If the user's IP doesn't match, or the 20-minute timeout window has expired, AND the entry owner was originally logged in when completing the form they will be redirected to a login page. Once authenticated, the software will compare the user's ID with the one stored in the entry. If they match, the PDF will be displayed.
    - If a user is already logged in, we'll do the user ID comparison without the need to login again.
    - To correctly test the owner security policy, you'll need to submit a new entry using a web proxy like [hide.me](https://hide.me/en/proxy) so that the IP address differs from your own.

:::caution
By default, Gravity Forms will not handle proxy-based IP addresses automatically (Cloudflare, Load Balancer and WAF Firewalls are affected). In such cases our IP-based access policy mentioned below will not work. If you are affected you can [use the `gform_ip_address` filter](https://docs.gravityforms.com/gform_ip_address/) to return the correct user IP, or utilise Signed PDF URLs instead (see below).
:::

4. An alternative to the IP-based authentication is signed PDF URLs, which correctly authenticates any user with the link even if you've disabled IP addresses using [Gravity Forms Personal Data settings](https://docs.gravityforms.com/personal-data-settings/).     
    - Signed URLs are available using the [[gravitypdf] shortcode with the `signed` attribute](shortcodes-and-mergetags.md#signed-optional) or the [PDF Merge tag with the `:signed` merge tag modifier](shortcodes-and-mergetags#signed). Anyone with access to the signed link can view the PDF (regardless of their user privileges, if any), provided the link hasn't expired.
    - By default, the signed URL will have a 20-minute timeout window. This behaviour can be changed globally using the [Logged Out Timeout](global-settings.md#logged-out-timeout) settings, or per PDF link by including the `expires` attribute/modifier.
    - When the timeout period expires, Gravity PDF will fallback to the standard security policies outlined in #1/2/3 above. 
    - Signed URLs do not work across protocols. For example, you cannot display the shortcode on a HTTP page while the PDF loads over HTTPS (or vice versa). 

## PDFs and the File System 

:::note tl;dr
PDFs stored on the disk have a limited lifespan, and are protected from direct access on Apache and Litespeed web servers. Other servers aren’t automatically protected, and it’s advisable to use [the `gfpdf_tmp_location` filter](../developers/filters/gfpdf_tmp_location.md) to change the PDF directory to somewhere outside your public directory structure.
:::

During form submission, a PDF is only saved to disk when it's configured to be [attached to a form's notification(s)](setup-pdf.md#notifications), or you've hooked into [the `gfpdf_post_save_pdf` action](../developers/actions/gfpdf_post_save_pdf.md). The PDF temporary directory defaults to `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/tmp/` and generated documents stored here are cleaned up automatically from the disk once the Gravity Forms submission process has been completed. Any files older than 12 hours in the PDF temporary directory are also automatically deleted on the next scheduled cron cleanup. 

When viewing or downloading PDFs via the links in the admin area, using the `[gravitypdf]` shortcode or mergetags, the PDFs are always dynamically generated upon request and they are not saved / cached on the file system.

If you are a developer and are programically sending Notification emails or [generating PDFs via the API](../developers/api/create_pdf), the PDFs will be saved to the temporary directory and cached for about 12 hours (depending on your cron schedule). Subsequent Notifications sent or PDFs generated via the API during this period will reuse the cached document. For this reason, we strongly recommended deleting the PDF from disk once you've finished using it; it prevents caching problems if an entry is updated and reduces the likelyhood of an unauthorised user accessing the document. You can also impliment the [gfpdf_override_pdf_bypass](../developers/filters/gfpdf_override_pdf_bypass) filter to fix the caching issue.

## Prevent Owner Access 

If your PDF is never meant to be viewed by the end user you can enable the [*Restrict Owner*](setup-pdf.md#restrict-owner) security setting. This will ensure only logged in users with roles assigned the capabilities set in the global [*User Restriction*](global-settings.md#user-restriction) setting have access to the document.

## Enable Public Access 

If you want to enable public access to the PDFs generated from your Gravity Form, you can do so with the [*Enable Public Access*](setup-pdf.md#enable-public-access) option. Use this option sparingly as it will allow anyone worldwide to access PDFs generated from your form – search engines may even index the documents (but are discouraged to do so). In the majority of cases, the standard security protocols are sufficient.

## Sensitive User Information 

If you are collecting sensitive data from your users, there are a number of best-practice protocols you should consider implementing to protect that information. These include:

1.  Install an [SSL certificate](https://www.namecheap.com/support/knowledgebase/article.aspx/786/38/what-is-an-ssl-certificate-and-what-is-it-used-for) and correctly enable HTTPS on your website. For better trust between you and your users, [you might opt for an EV Certificate](https://www.namecheap.com/security/ssl-certificates/extended-validation.aspx). [Let's Encrypt](https://letsencrypt.org/) offer free SSL certificates for those with a dedicated server, and many web hosts now offer free certificates via Let's Encrypt. Test your HTTPS implementation by [running an SSL Server test](https://www.ssllabs.com/ssltest/) – aim for an "A+".
2.  Use dedicated web hosting (or similar). Ensure the hosting service you choose meets your country's regulations in regard to the data being collected – an example being [Amazon's Cloud Compliance](http://aws.amazon.com/compliance/).

3.  If you collect and store credit card details on your server, you must [be PCI-compliant](https://www.pcisecuritystandards.org/merchants/). Even if you aren't storing payment details, the user information you are storing may be sensitive enough that you could follow the PCI requirements.

4.  At Rest Encryption on your dedicated server file system and database.

5.  Ensure WordPress and its plugins are regularly updated.

6.  Do not send sensitive user information via email. This includes in the email body or as an attachment. Instead, use the [`[gravitypdf]` shortcode](shortcodes-and-mergetags.md) to send a link to the PDF, or place a download link [on the confirmation page](shortcodes-and-mergetags.md#confirmation).

7.  Enable PDF password protection and use a strong password (the longer, the better). PDFs use 128-bit encryption.

8.  Implement strong password policies, [enhance your password encryption](https://github.com/roots/wp-password-bcrypt), and enable two-step authentication for all accounts.

9.  Install security plugins like [Sucuri Security](https://wordpress.org/plugins/sucuri-scanner/), [Wordfence Security](https://wordpress.org/plugins/wordfence/) or [iThemes Security](https://wordpress.org/plugins/better-wp-security/) (to prevent conflicts only install and run one of these security plugins).

The list above is just some ways you can keep your website and user data secure. Remember, security is not "set and forget". It is an ongoing process, and you should remain ever vigilant.
