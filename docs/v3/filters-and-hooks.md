---
title: "Filters and Hooks"
sidebar_label: "Filters and Hooks"
description: ""
---

<div class="message">All filters and hooks should be placed in your active theme's <code>functions.php</code> file</div>
<h2>Filters</h2>
<strong>gfpdfe_template_location</strong>
<strong>gfpdfe_template_location_uri</strong>
<div class="note">Added is v3.7.0.</div>
If you want to place the <a href="/v3/wheres-configuration-folder/">PDF_EXTENDED_TEMPLATES directory</a> in an alternate location you can use these two filters to do so. To ensure the software continues functioning <strong>you must implement both filters</strong> correctly. The example below shows you how to configure the software to look for the folder in the WordPress root directory, however you can store it anywhere.

```
/*
 * Change the PDF Template Location 
 */
add_filter('gfpdfe_template_location', 'gfpdfe_change_pdf_location', 10, 3);

function gfpdfe_change_pdf_location($path, $basedir, $basefolder)
{
	/* set to base WP directory */
	return ABSPATH . $basefolder . '/'; /* the trailing slash is important! */
}

add_filter('gfpdfe_template_location_uri', 'gfpdfe_change_pdf_location_uri', 10, 3);

function gfpdfe_change_pdf_location_uri($url, $baseurl, $basefolder)
{
	/* set to base WP URI */
	return site_url('/') . $basefolder . '/'; /* the trailing slash is important! */
}
```

<strong>gfpdfe_signature_width</strong>
<div class="note">Added is v3.7.1.</div>
<div class="message">This filter applies to the default PDF templates only.</div>
Use this function is you want to change the signature width.

```
/**
 * Change the signature image size in the default templates
 * @var Integer $pdf_width The optimal signature image width in pixels
 * @var Integer $original_width The original image size in pixels
 * @return Integer The modified image width
 */
function gfpdfe_change_signature_width($pdf_width, $original_width) {
	/* increase the image size by 50px */
	return $pdf_width + 50;
}

add_filter('gfpdfe_signature_width', 'gfpdfe_change_signature_width', 10, 2);
```

<strong>gfpdfe_pdf_name</strong>
<div class="note">Added in v3.1.0.</div>
Allowing developers to further modify a PDF name outside of <code>configuration.php</code>. This is useful if you have a special case naming convention based on user input.

```
function gfpdfe_pdf_name_alteration($name, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify the PDF name for
     */
     if($lead['form_id'] == 6)
     {
        /*
         * Change the PDF name based on user input
         * In this case $lead[3] refers to an age field
         */
         if($lead[3] >= 21)
         {
            $name = 'Legal Drinking Age.pdf';
         }
         else
         {
            $name = 'Underage.pdf';         
         }
     }
      
     /* remember to return $name as this is a filter */
     return $name;
}
 
add_filter('gfpdfe_pdf_name', 'gfpdfe_pdf_name_alteration', 10, 3);
```

<strong>gfpdfe_template</strong>
<div class="note">Added in v3.1.0.</div>
Allowing developers to dynamically call a template file based on user input. This allows full control over the template file being used to generate the PDF.

```
function gfpdfe_template_alteration($template, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify the PDF name for
     */
     if($lead['form_id'] == 6)
     {
        /*
         * Change the PDF template based on user input
         * In this case $lead[3] refers to an age field
         */
         if($lead[3] >= 21)
         {
            return 'legal-drinking-age-template.php';
         }
         else
         {
            return 'underage-template.php';            
         }
     }
      
     /* remember to return $template as this is a filter */
     return $template;
}
 
add_filter('gfpdfe_template', 'gfpdfe_template_alteration', 10, 3);
```

<strong>gfpdfe_orientation</strong>
<div class="note">Added in v3.4.0.</div>
Allowing developers to dynamically change the PDF orientation. Usefully if you want to allow users to select the PDF orientation in the form.

```
function gfpdfe_orientation_alteration($orientation, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify
     */
     if($lead['form_id'] == 6)
     {
        /*
         * Change the PDF template based on user input
         * In this case $lead[5] refers to a radio button field with the two options 'Portrait' or 'Landscape'.
         */
         if($lead[5] == 'Landscape')
         {
            return 'landscape';
         }
         else
         {
           return 'portrait';
         }
     }
       
     /* remember to return $orientation as this is a filter */
     return $orientation;
}
  
add_filter('gfpdf_orientation', 'gfpdfe_orientation_alteration', 10, 3);
```

<strong>gfpdfe_security</strong>
<div class="note">Added in v3.4.0.</div>
Allowing developers to dynamically change the PDF security. Usefully if you want to allow users to select the PDF security options in the form.

```
function gfpdfe_security_alteration($security, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify
     */
     if($lead['form_id'] == 10)
     {
        /*
         * Change the security settings based on user input
         * In this case $lead[1] refers to a radio button field with the two options 'Disable Security' or 'Enable Security'
         */
         if($lead[1] == 'Enable Security')
         {
            return true; /* the return value must be a boolean - either true or false */
         }
         else
         {
           return false; /* the return value must be a boolean - either true or false */
         }
     }
       
     /* remember to return $security as this is a filter */
     return $security;
}
  
add_filter('gfpdf_security', 'gfpdfe_security_alteration', 10, 3);    
```

<strong>gfpdfe_password</strong>
<div class="note">Added in v3.4.0.</div>
<div class="note">The 'security' option must be true for the password to be applied</div>
Allowing developers to dynamically change the PDF password. Useful if you want the user to be able to password protect their document.

```
function gfpdfe_password_alteration($password, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify
     */
     if($lead['form_id'] == 16)
     {
        /*
         * Change the password to one entered by the user in the form
         * In this case $lead[5] refers to the password field
         */
        return $lead[5];
     }
       
     /* remember to return $password as this is a filter */
     return $password;
}
  
add_filter('gfpdf_password', 'gfpdfe_password_alteration', 10, 3);    
```

<strong>gfpdfe_master_password</strong>
<div class="note">Added in v3.4.0.</div>
<div class="note">The <code>security</code> option must be true for the password to be applied</div>
Allowing developers to dynamically change the PDF master password. The master password is used to prevent changes to the security settings of the document.

```
function gfpdfe_master_password_alteration($password, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify
     */
     if($lead['form_id'] == 16)
     {
        /*
         * Change the password to one entered by the user in the form
         * In this case $lead[6] refers to the password field
         */
        return $lead[6];
     }
       
     /* remember to return $password as this is a filter */
     return $password;
}
  
add_filter('gfpdf_master_password', 'gfpdfe_master_password_alteration', 10, 3);     
```

<strong>gfpdf_privilages</strong>
<div class="note">Added in v3.4.0.</div>
<div class="note">The 'security' option must be true for the password to be applied</div>
<div class="message">The return value must be a combination this array: <code>array(&amp;#39;copy&amp;#39;, &amp;#39;print&amp;#39;, &amp;#39;modify&amp;#39;, &amp;#39;annot-forms&amp;#39;, &amp;#39;fill-forms&amp;#39;, &amp;#39;extract&amp;#39;, &amp;#39;assemble&amp;#39;, &amp;#39;print-highres&amp;#39;)</code></div>
Allowing developers to dynamically change the PDF privileges which is used to restrict what a user can do with the document.

```
function gfpdfe_privilages_alteration($privs, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify
     */
     if($lead['form_id'] == 17)
     {
        /*
         * Set the security privilages based on user input
         * In this case $lead[8] is a checkbox field with the following values:
         * Label: Copy  Value: copy
         * Label: Print   Value: print
         * Label: High Resolution Print   Value: print-highres
         *
         */       
         
        /* get the $form field information */
        $field = array();
        foreach($form['fields'] as $fields)
        {
            if($fields['id'] == 8)
            {
                $field = $fields;
                break;
            }
        }
         
        $field_data = array_filter(RGFormsModel::get_lead_field_value($lead, $field));
 
        return $field_data; /* note: the return values MUST be a combination of the following list - array('copy', 'print', 'modify', 'annot-forms', 'fill-forms', 'extract', 'assemble', 'print-highres'); */
     }
       
     /* remember to return $password as this is a filter */
     return $privs;
}
  
add_filter('gfpdf_privilages', 'gfpdfe_privilages_alteration', 10, 3);            
```

<strong>gfpdf_rtl</strong>
<div class="note">Added in v3.4.0.</div>
Allowing developers to dynamically change the PDF RTL option.

```
function gfpdfe_rtl_alteration($rtl, $form, $lead)
{
    /*
     * Check if it is the form we would like to modify the PDF name for
     */
     if($lead['form_id'] == 10)
     {
        /*
         * Change the security settings based on user input
         * In this case $lead[1] refers to a radio button field with the two options 'Standard Left to Right Language' or 'Right to Left Language'
         */
         if($lead[1] == 'Right to Left Language')
         {
            return true;
         }
         else
         {
           return false;
         }
     }
       
     /* remember to return $rtl as this is a filter */
     return $rtl;
}
 
add_filter('gfpdf_rtl', 'gfpdfe_rtl_alteration', 10, 3);      
```

<h2>Hooks</h2>
<strong>gfpdf_post_pdf_save</strong>
<div class="note">Added in v3.4.0.</div>
<div class="warning">If you are using the 'notification' config option you should <strong>NOT</strong> move the PDF during this hook. If you do the PDF will <strong>never</strong> be attached to the notification.</div>
This hook fires right after the PDF has been saved to the server, which only happens when the entry is created and either the 'save' option is true or the 'notification' is being sent.

```
/**
 * Fires right after the PDF has been saved to the server, when the entry was been created.
 * Note: This won't fire if the download or view PDF options are selected (like when viewing the PDF through the admin area)
 * It only applies when the entry is originally submitted and the PDF is configured to send a notification, or the 'save' option is selected
 * @param  integer $id        The entry ID this PDF applies to
 * @param  array $arguments The PDF configuration array
 * @param  string $filename  the path to the saved PDF document
 */
function gfpdfe_post_pdf_save($form_id, $lead_id, $arguments, $filename)
{
    /*
     * This hook is useful if you want to move the PDFs to a new location
     */
    $pdf_name = basename($filename);
 
    /* use this command to 'move' the PDF */
    rename($filename, '/path/you/want/pdf/stored/in/' . $pdf_name);
 
    /* use this command to make a copy of the PDF */
    copy($filename, '/path/you/want/pdf/stored/in/' . $pdf_name);
 
    /* you might only want to do this on a per-form basis, or use the form ID or name in the new path */
    if($form_id == 6)
    {
        /* use this command to make a copy of the PDF */
        copy($filename, '/path/you/want/pdf/stored/in/' . $pdf_name);      
    }
 
    if($form_id == 6)
    {
        /* Use the $form title in the URL
         * Depending on what name you use and your server OS, this might need parsing the form name further to remove invalid folder characters
         */
        $form = RGFormsModel::get_form_meta($form_id);
        $form_title = $form['title'];  
 
        /* this assumes the directory already exists */
        copy($filename, '/path/you/want/pdf/stored/in/' . $form_title. '/' . $pdf_name);       
    }
}
 
add_action('gfpdf_post_pdf_save', 'gfpdfe_post_pdf_save', 10, 4);
```