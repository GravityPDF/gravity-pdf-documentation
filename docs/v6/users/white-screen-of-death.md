---
title: "White Screen of Death or Endless Gravity Forms Spinner"
sidebar_label: "White Screen of Death"
description: "If you are experiencing the \"white screen of death\", or when submitting Gravity Forms the page loads endlessly you should follow these steps."
---

### Troubleshooting PHP Errors

If you are experiencing the "white screen of death", or when submitting Gravity Forms the page loads endlessly, you should follow these steps to try to resolve the problem:

1.  If you are **unable to access your WordPress admin area**, you should use an FTP client or your hosting File Manager to rename or delete the `/wp-content/plugins/gravity-forms-pdf-extended/` directory. Once done, attempt to access your admin area again. This technique will automatically disable Gravity PDF on the website. If it was the cause of the problem you will now be able to access your site again (try refreshing the page a couple of times if the problem persists). If it doesn't fix the problem, the issue is likely unrelated to Gravity PDF.

2.  If you still have full or partial access to your admin area you can verify Gravity PDF is the problem by disabling it on your plugins page. If the problem persists after disabling the software, then the issue is unrelated to Gravity PDF. When this is the case, [you can do conflict testing and enable troubleshooting mode](https://docs.gravityforms.com/conflict-testing-using-health-check-plugin/#enabling-the-troubleshooting-mode-for-gravity-forms-) on each plugin (retesting as you go) until you find the one causing the issue.

3.  Once you've determined Gravity PDF is the issue, you'll want to review your error logs in your hosting control panel. If you are unable to locate this, you can enable WordPress debug mode and see errors on screen. The [WP Debugging plugin by Andy Fragen](https://wordpress.org/plugins/wp-debugging/) is an easy way to turn on debug mode.

4.  If the problem occurs when submitting a form, first ensure AJAX is disabled by toggling off that setting in the Form block or by removing `ajax="true"` from the [gravityform] shortcode. Once done, submit the form and review the error messages to help you debug the problem.

5.  If the problem occurs while trying to open the PDF, try view the PDF from your admin area and review the error messages to help you debug the problem.

6.  Once finished, deactivate and delete any debugging plugins you installed.

If you are unsure how to resolve the errors, [get in touch with our support team](https://gravitypdf.com/support/) and our friendly staff will provide feedback on how you can resolve the issue.