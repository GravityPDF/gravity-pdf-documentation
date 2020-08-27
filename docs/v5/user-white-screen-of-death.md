---
title: "White Screen of Death or Endless Gravity Forms Spinner"
sidebar_label: "White Screen of Death"
description: "If you are experiencing the \"white screen of death\", or when submitting Gravity Forms the page loads endlessly you should follow these steps."
---

### Troubleshooting PHP Errors 

If you are experiencing the "white screen of death", or when submitting Gravity Forms the page loads endlessly, you should follow these steps to try to resolve the problem:

1.  If you are **unable to access your WordPress admin area** you should FTP into your website and rename or delete the `/wp-content/plugins/gravity-forms-pdf-extended/` folder. Once done, attempt to access your admin area again. This technique will automatically disable Gravity PDF, so if it's the problem you should get access back to your website (try refreshing the page a couple of times if the problem persists). If it doesn't fix the problem, the issue is likely unrelated to Gravity PDF.

2.  If you still have full or partial access to your admin area you can verify Gravity PDF is the problem by disabling it on your plugins page. If the problem persists after disabling the software then the issue is unrelated to Gravity PDF. When this is the case you should disable all plugins then enable them one by one until you discover the problem plugin.

3.  Once you've determined Gravity PDF is the issue, you'll want to review your error logs. If you are unsure where to find these you can enable error logging in your browser:

    1.  FTP into your website and download the `wp-config.php` file.
    2.  Look for the line `define('WP_DEBUG', false);` and change `false` to `true`. If the line is not present in the file you can add it to the top of the file (on the line after `<?php`).
    3.  Save and then upload the file back to your server. If it worked you'll start seeing PHP errors at the top of your browser window which can help you debug the issue.

4.  If the problem occurs when submitting a Gravity Form first ensure AJAX is disabled by removing `ajax="true"` from the *[[gravityform]]* shortcode. Once done, submit the form and review the error messages to help you debug the problem.

5.  If the problem occurs while trying to open the PDF, try view the PDF from your admin area and review the error messages to help you debug the problem.

6.  Once finished set `WP_DEBUG` back to `false` in your `wp-config.php` file and upload the file.

If you are unsure how to resolve the errors [get in touch with our support team](https://gravitypdf.com/support/) and our friendly staff will provide feedback on how you can resolve the issue.