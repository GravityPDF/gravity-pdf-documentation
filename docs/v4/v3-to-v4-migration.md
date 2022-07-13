---
title: "How to: Gravity PDF v3 to v4 Migration"
sidebar_label: "v3 to v4 Migration"
description: "Gravity PDF 4.0 is a major release and while we've gone to great lengths to ensure it's backwards-compatible we weren't able to achieve 100% coverage."
---

### Before You Begin 

Gravity PDF 4.0 is a major release and while we've gone to great lengths to ensure it's backwards-compatible we weren't able to achieve 100% coverage. Based on our testing we expect 20% of current users will have template display issues (most of these are minor margin and padding problems) and 2-3% won't be able to upgrade at all. Because of this we **strongly recommend testing the update in a staging environment** beforehand. 

**Jump To Section**

* [Gravity PDF v3 End of Life](#v3-eol)
* [Compatibility Issues](#compatibility-issues)
    * [New Software Requirements](#new-software-requirements)
    * [Roadblocks](#roadblock)
    * [Gravity PDF Tier 2](#gravity-pdf-tier-2)
    * [PDF Display Issues](#pdf-display-issues)
    * [Conditional Logic in PDFs](#conditional-logic-in-pdfs)
    * [Gravity PDF Customers](#gravity-pdf-customers)
* [Upgrading to Gravity PDF v4](#upgrading-to-v4)
    * [Optional Tasks](#optional-tasks)
        * [PDF Links](#pdf-links)
        * [Update PDF Templates](#update-pdf-template)
    * [Developer Notes](#developer-notes)
* [Rollback to v3](#rollback)
* [Help and Support](#help-and-support)

### Gravity PDF v3 End of Life 

Our team realises many users may be locked into using Gravity PDF v3 for the foreseeable future, which is why we will continue providing security and compatibility patches until June 20 2017 (12 months after Gravity PDF v4 is released).

**Update: the support period for v3 has ended. Upgrade to v4 as soon as possible!**

### Compatibility Issues 

Below you'll find the main problems that can occur during an upgrade to Gravity PDF v4 and ways you can go about overcoming them (if any). 

#### New Software Requirements 

Both the server and software requirements have changed. Gravity PDF 4.2 requires the following:

* PHP 5.4+ (PHP 7+ is recommended)
* WordPress 4.4+
* Gravity Forms 1.9+

Verify you meet these requirements by navigating `Forms -> Settings -> PDF` in your WP Admin area and viewing the system status. 

Also, the v4 package includes additional fonts that allows the correct display of most languages. However, this means the total plugin size is increased to 60MB when unzipped – the v3 package is only 39MB when unzipped. Make sure you have enough disk space available before upgrading.

#### Roadblocks 

During the Gravity PDF v3 life cycle we experimented with a couple of different add-ons. These included:

1. Gravity Forms PDF Extended Shortcodes plugin 
1. Gravity Forms PDF Extended Multiple Reports

Due to major architecture changes in v4, users who rely on these plugins will not be able to upgrade directly (or at all).

If you are using the *Gravity Forms PDF Extended Shortcodes plugin* your migration path is to replace it with the excellent premium add-on, <a href="https://gravityview.co/?ref=186" rel="sponsored">GravityView</a> – you'll need access to their <a href="https://gravityview.co/extensions/advanced-filter/?ref=186" rel="sponsored">Advanced Filtering extension</a> to create a similar member's area. GravityView has all the features of the Shortcode plugin (and then some), all wrapped in a great easy-to-use UI. Right now Gravity PDF 4.0 has basic support for GravityView and we will be enhancing this in the future. 

If you are using the *Gravity Forms PDF Extended Multiple Reports* plugin unfortunately there is not a migration path for you yet. We'll be looking at creating a premium add-on with similar (but not the same) features in future. For the time being you'll need to continue using Gravity PDF v3.

#### Gravity PDF Tier 2 

Also known as *Gravity Forms PDF Extended Business Plus*, the Gravity PDF Tier 2 add-on is fully supported in Gravity PDF v4. However, *there are exceptions*... 

In Gravity PDF v4 we've included a major update to the PDF software, mPDF. One of the changes in this update includes better margin, padding and line-height support. The downside is this **can adversely affect some Tier 2 templates**. In our testing we found the main cause for concern was PDF checkbox values like "ticks" and "crosses" which are incorrectly positioned. If that's the case your PDF template would need to be resynced to be v4 compatible. If you are a Gravity PDF customer [please read this notice](#gravity-pdf-customers).

Also, if you have `WP_DEBUG` enabled your Tier 2 PDFs will throw notices that will prevent the PDFs from being displayed. If you experience these notices you should ensure `WP_DEBUG` is set to `false` (if you are in a production environment you should have `WP_DEBUG` disabled anyway). We'll be working on updating the Tier 2 add-on to be fully 4.0 compatible in future.

#### PDF Display Issues 

As we mentioned in the [Tier 2 section above](#gravity-pdf-tier-2), mPDF had a major update. This may effect the look and feel of all v3 PDFs generated with Gravity PDF. 

You should *thoroughly test your PDFs in a staging environment before doing the update on your production website*.

#### Conditional Logic in PDFs 
To prevent PDF generation issues, and potential security problems, the `$form_data` array values are now encoded with `esc_html()`, which converts the characters `<`, `>`, `"`, `'` and `&` to their appropriate HTML entities. If you are using PHP conditionals in your templates and your string comparison contains one of these characters you'll need to use the WordPress function `esc_html()` to get the desired result.

```{.language-php}
if ( esc_html( 'Honey & Spice' ) == $form_data['field'][5] ) {
   //conditional output here
}
```

#### Gravity PDF Customers 

If you're a Gravity PDF customer, have utilised our services in the past 12 months – the finalised payment made on or after June 20 2015 – and have found problems using Gravity PDF v4 with the custom PDF template(s) we created for you please [get in touch with our support team](https://gravitypdf.com/integration-services/contact/) and **we'll update your PDF template at no charge**. 

For customers who had work completed before June 20 2015 and are having PDF display problems after upgrading to Gravity PDF v4 we'll update all the PDF templates we created for you, and give you another 12 months of support, at a flat rate of $99AUD. [Just fill out our contact form](https://gravitypdf.com/integration-services/contact/) to get your upgrade project started.

### Upgrading to Gravity PDF v4 

Now you are aware of the [potential issues that can occur during an upgrade](#compatibility-issues), let's go through the steps needed to complete v3 to v4 migration.

The actual migration process is relatively painless thanks to our automated v3 to v4 configuration feature! 

To upgrade simply:

1. Use WordPress's plugin update feature on Gravity PDF
1. After v4 is successfully installed you'll be redirected to the Gravity PDF *What's New* page. From here you'll be able to get a quick overview of all the new features found in v4. 
1. Next, navigate to the Gravity Forms tab and you'll be prompted to run the v3 to v4 configuration migration. Click *Begin Migration* to start the process.
   ![Gravity PDF v3 to v4 Migration Process](https://resources.gravitypdf.com/uploads/2016/02/begin-migration.png)

1. If all goes well you'll be greeted with the message "Migration Successful."
1. Finally test your PDFs are correctly generating by navigating to an entry you previously had a PDF configured on and clicking "View PDF". 

#### Optional Tasks 

The following are optional tasks you can take after completing the migration process. It's not necessary but will ensure you have the smoothest experience while using v4.

##### Review Settings 

All Gravity PDF settings in v4 are now located in the database and you can change them through our all-new UI. We recommend you [review the global PDF settings](user-global-settings.md), as well as each [individual PDF form settings](user-setup-pdf.md).

##### PDF Links 

While your v3 PDF links will continue to function as expected, we recommend you upgrade all PDF links on Gravity Form confirmation pages with the [v4 shortcode equivalent](user-shortcodes.md#gravitypdf-shortcode). This will use the new PDF link structure and make it much easier for you to manage in future. 

##### Update PDF Templates 

While your v3 PDF templates will continue to function as expected, to take full advantage of v4 when using a default template(s) we recommend you swap to one of the four free PDF templates that ship with v4.

For those using `default-template.php` or `default-template-two-rows.php` templates you should consider changing to *Focus Gravity*. If you are using the `default-template-no-style.php` template try out *Blank Slate*. Both these templates are feature compatible with their v3 counterparts. 

#### Developer Notes 

**Manual Initialisation**

In Gravity PDF v3 we only initialised the software on certain pages. However, in Gravity PDF v4 the software is initialised on all pages (with the appropriate components loaded when needed). This change means Gravity PDF is always listening to see if Gravity Forms sends a notification emails, and will attach the appropriate PDFs. 

If you previously added code to manually initialised Gravity PDF it should be removed, as it will cause problems with v4:

```

//Remove any code that is similar to this
add_action('init', 'pdf_init', 15); 

function pdf_init()
{
  /* place code in here */
    global $gfpdf;
    if(!is_object($gfpdf) && class_exists('RGForms')) /* small extra check so no error is thrown when GF is disabled */
    {
        $gfpdf = new GFPDF_Core();
    }
}
```

**gfpdfe_mpdf_class/gfpdfe_mpdf_class_pre_render/gfpdfe_pre_render_pdf**

If you are using the filter `gfpdfe_mpdf_class`, `gfpdfe_mpdf_class_pre_render` or `gfpdfe_pre_render_pdf`  you'll need to ensure your code correctly returns the `$mpdf` object (some of our v3 examples of these filters omitted this). 

**Multisite**

For users with older multisite installations (pre-WP 3.5) we've [fixed an issue which saw Gravity PDF's Working Directory segregated](https://github.com/GravityPDF/gravity-pdf/issues/271) due to how uploads were handled in older versions of WordPress. This means all your multisite configuration directories are now correctly located in `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/`. However, we didn't include a migration script to handle any custom templates you might have. You should check `/wp-content/blogs.dir/` folders for a `PDF_EXTENDED_TEMPLATES` directory, copy over any of your custom templates and then remove these extra `PDF_EXTENDED_TEMPLATES` directories (they're safe to keep if you don't want to remove them). 

### Rollback to v3 

If something broke during the v4 update all is not lost and you can rollback to v3 without too much difficulty. 

First, if you are experiencing the "white screen of death" [please follow these instructions](user-white-screen-of-death.md) to help resolve the problem.

If you've still got full control over your website, but there's some compatibility issues with v4, we recommend [installing the WP Rollback plugin](https://wordpress.org/plugins/wp-rollback/). With little effort on your behalf you can downgrade from v4 to v3. Once installed, just click the *Rollback* link on the Gravity PDF row on the plugin's page, then select the latest stable release of v3 and rollback. 

![Rolling back Gravity PDF to v3](https://resources.gravitypdf.com/uploads/2016/02/wp-rollback.png)

If you already ran the v3 to v4 migration you'll need to login to your FTP, [locate the PDF working directly](developer-first-custom-pdf.md#working-directory) and rename the `configuration.archive.php` file back to `configuration.php`. 

Finally, navigate to `Forms -> PDF -> Settings` and reinitialise the plugin. Done.

### Help and Support 

If you run into trouble during your migration [get in touch with our friendly support team](https://gravitypdf.com/support/) and we will be happy to assist you. 
