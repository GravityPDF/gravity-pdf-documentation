---
title: "Creating A Custom PDF Template With The $form_data Array"
sidebar_label: "Templates with $form_data Array"
description: ""
---

<div class="message">If you haven't <a href="/v3/custom-templates-introduction/">read our introduction guide to custom templates</a>, do this first.</div>
Displaying Gravity Form entries using the $form_data array is a little trickier than using merge tags, but it's a much more robust solution and the one we recommend you use. Why? Because you can manipulate the entry data using any PHP or WordPress functions.

Here's an example illustrating why we recommend this method.

```
/* an example showing fixed interest repayments, compounded monthly  */
$loan_amount           = $form_data['field'][21]; /* field 21 represents a number field where users enter the amount of money they want to borrow */
$loan_term             = 240; /* 240 months, which is 20 years. */

$interest_rate         = 5.25; /* 5.25% per annum */
$monthly_interest_rate = $interest_rate / 1200; /* get the correct monthly interest rate */

$monthly_repayments    = ($monthly_interest_rate * $loan_amount) / (1 - pow((1 + $monthly_interest_rate), $loan_term * - 1)); /* do our compounded monthly repayments */
$rounded_repayments    = round($monthly_repayments, 2); /* round the results to two decimal places */

```

<h3>Getting Started with the $form_data Array</h3>
We've put together a video highlighting how to view, access and use the $form_data array. Before you watch this video you should view our <a href="/v3/custom-templates-with-mergetags/#video">Getting Started with Merge Tags</a> video.

https://www.youtube.com/watch?v=FRzVEuwD_8Y

For those who want more of a breakdown on how to use and access the <code>$form_data</code> array read on.
<h3>Using the $form_data array</h3>
Once you have created a custom PDF template and configured the software to use that template on your form the next step is viewing the <code>$form_data</code> keys so you can use it in your PDF template. You can do this by adding <code>&amp;data=1</code> to your URL when viewing your PDF template via the admin area.

First, view your PDF <a href="/v3/custom-templates-introduction/#entries-list">from the entries list page</a>. Then modify the URL with the <code>&amp;data=1</code> code. For example, the full PDF URL might look like this:

<code>https://gravitypdf.com/?gf_pdf=1&amp;fid=3&amp;lid=20&amp;template=my-custom-template.php&amp;data=1</code>

<span data-rel="content">Below is an example of what the $form_data array structure might looks like for your form:</span>

    Array
    (
        [form_id] => 4
        [entry_id] => 919
        [form_title] => Gravity PDF
        [form_description] => Test Form to show off Gravity PDF.
        [date_created] => 23/10/2014
        [date_created_usa] => 10/23/2014
        [pages] => Array
            (
                [0] => Step 1
                [1] => Step 2
                [2] => 
            )
    
        [misc] => Array
            (
                [date_time] => 2014-10-23 09:03:41
                [time_24hr] => 09:03
                [time_12hr] => 9:03am
                [is_starred] => 0
                [is_read] => 1
                [ip] => 58.166.123.106
                [source_url] => https://gravitypdf.com/?gf_page=preview&id=4
                [post_id] => 279
                [currency] => USD
                [payment_status] => 
                [payment_date] => 
                [transaction_id] => 
                [payment_amount] => 
                [is_fulfilled] => 
                [created_by] => 1
                [transaction_type] => 
                [user_agent] => Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0
                [status] => active
            )
    
        [field_descriptions] => Array
            (
                [1] => Description
                [2] => 
                [3] => 
                [4] => 
                [5] => 
                [6] => 
                [7] => 
                [8] => 
                [9] => 
                [10] => 
                [11] => 
                [12] => 
                [31] => Section...
                [13] => 
                [35] => 
                [14] => 
                [15] => 
                [16] => 
                [37] => 
                [17] => 
                [18] => 
                [19] => 
                [20] => 
                [21] => 
                [30] => 
                [24] => 
                [25] => 
                [26] => 
                [27] => 
                [28] => 
                [29] => 
                [32] => 
                [33] => 
            )
    
        [field] => Array
            (
                [1.Single Line Text] => Single Line Test
                [1] => Single Line Test
                [Single Line Text] => Single Line Test
                [2.Paragraph Text] => Paragraph Test
                [2] => Paragraph Test
                [Paragraph Text] => Paragraph Test
                [3.Drop Down] => Second Choice
                [3] => Second Choice
                [Drop Down] => Second Choice
                [3.Drop Down_name] => Second Choice
                [3_name] => Second Choice
                [Drop Down_name] => Second Choice
                [4.Multi Select] => 
                [4] => 
                [Multi Select] => 
                [4.Multi Select_name] => 
                [4_name] => 
                [Multi Select_name] => 
                [5.Number] => 1231
                [5] => 1231
                [Number] => 1231
                [6.Checkboxes] => Array
                    (
                        [0] => First Choice
                        [1] => Second Choice
                        [2] => Third Choice
                    )
    
                [6] => Array
                    (
                        [0] => First Choice
                        [1] => Second Choice
                        [2] => Third Choice
                    )
    
                [Checkboxes] => Array
                    (
                        [0] => First Choice
                        [1] => Second Choice
                        [2] => Third Choice
                    )
    
                [7.Radio Buttons] => Second Choice
                [7] => Second Choice
                [Radio Buttons] => Second Choice
                [7.Radio Buttons_name] => Second Choice
                [7_name] => Second Choice
                [Radio Buttons_name] => Second Choice
                [9.Name] => Array
                    (
                        [prefix] => Mr.
                        [first] => First
                        [middle] => Middle
                        [last] => Last
                        [suffix] => Suffix
                    )
    
                [9] => Array
                    (
                        [prefix] => Mr.
                        [first] => First
                        [middle] => Middle
                        [last] => Last
                        [suffix] => Suffix
                    )
    
                [Name] => Array
                    (
                        [prefix] => Mr.
                        [first] => First
                        [middle] => Middle
                        [last] => Last
                        [suffix] => Suffix
                    )
    
                [10.Date] => 10/09/2014
                [10] => 10/09/2014
                [Date] => 10/09/2014
                [11.Time] => 10:10 am
                [11] => 10:10 am
                [Time] => 10:10 am
                [12.Phone] => (123) 456-7899
                [12] => (123) 456-7899
                [Phone] => (123) 456-7899
                [13.Address] => Array
                    (
                        [street] => 12 Fake St
                        [street2] => Line 21
                        [city] => City
                        [state] => NSW
                        [zip] => 2441
                        [country] => Australia
                    )
    
                [13] => Array
                    (
                        [street] => 12 Fake St
                        [street2] => Line 21
                        [city] => City
                        [state] => NSW
                        [zip] => 2441
                        [country] => Australia
                    )
    
                [Address] => Array
                    (
                        [street] => 12 Fake St
                        [street2] => Line 21
                        [city] => City
                        [state] => NSW
                        [zip] => 2441
                        [country] => Australia
                    )
    
                [35.Address] => Array
                    (
                        [street] => 12 Fake St
                        [street2] => Line 21
                        [city] => City
                        [state] => NSW
                        [zip] => 2441
                        [country] => Australia
                    )
    
                [35] => Array
                    (
                        [street] => 12 Fake St
                        [street2] => Line 21
                        [city] => City
                        [state] => NSW
                        [zip] => 2441
                        [country] => Australia
                    )
    
                [14.Website] => https://www.test.com
                [14] => https://www.test.com
                [Website] => https://www.test.com
                [15.Email] => test@test.com
                [15] => test@test.com
                [Email] => test@test.com
                [16_path] => Array
                    (
                        [0] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/259.png
                    )
    
                [16.File_path] => Array
                    (
                        [0] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/259.png
                    )
    
                [16.File] => Array
                    (
                        [0] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/259.png
                    )
    
                [16] => Array
                    (
                        [0] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/259.png
                    )
    
                [File] => Array
                    (
                        [0] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/141009152725_0001.pdf
                        [1] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/2014_10_21_CR_Imports_200182.pdf
                    )
    
                [37_path] => Array
                    (
                        [0] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/141009152725_0001.pdf
                        [1] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/2014_10_21_CR_Imports_200182.pdf
                    )
    
                [37.File_path] => Array
                    (
                        [0] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/141009152725_0001.pdf
                        [1] => /home/gravitypdf/public_html/app/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/2014_10_21_CR_Imports_200182.pdf
                    )
    
                [37.File] => Array
                    (
                        [0] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/141009152725_0001.pdf
                        [1] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/2014_10_21_CR_Imports_200182.pdf
                    )
    
                [37] => Array
                    (
                        [0] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/141009152725_0001.pdf
                        [1] => https://resources.gravitypdf.com/uploads/gravity_forms/4-868f4621538a77008f5a772adcf266ce/2014/10/2014_10_21_CR_Imports_200182.pdf
                    )
    
                [36.List] => 
    Row 1
    Row 2
    Row 3
    Row 4
    
                [36] => 
    Row 1
    Row 2
    Row 3
    Row 4
    
                [List] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [36.List_name] => 
    Row 1
    Row 2
    Row 3
    Row 4
    
                [36_name] => 
    Row 1
    Row 2
    Row 3
    Row 4
    
                [List_name] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [17.List] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [17] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [17.List_name] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [17_name] => 
    Column 1	Column 2	Column 3
    Col1	Col2	Col3
    Col2	col2	col2
    col3	col3	col3
    col4	col4	col4
    
                [18.Post Title] => Post Title
                [18] => Post Title
                [Post Title] => Post Title
                [19.Post Body] => Post Body
                [19] => Post Body
                [Post Body] => Post Body
                [20.Post Excerpt] => Post Excerpt
                [20] => Post Excerpt
                [Post Excerpt] => Post Excerpt
                [21.Post Tags] => tag1, tag2, tag3
                [21] => tag1, tag2, tag3
                [Post Tags] => tag1, tag2, tag3
                [24.Post Custom Field] => Custom Post Field
                [24] => Custom Post Field
                [Post Custom Field] => Custom Post Field
                [27.Option] => Third Option ($70.00)
                [27] => Third Option ($70.00)
                [Option] => Third Option ($70.00)
                [27.Option_name] => Third Option ($70.00)
                [27_name] => Third Option ($70.00)
                [Option_name] => Third Option ($70.00)
                [28.Shipping] => Third Choice ($9.10)
                [28] => Third Choice ($9.10)
                [Shipping] => Third Choice ($9.10)
                [28.Shipping_name] => Third Choice ($9.10)
                [28_name] => Third Choice ($9.10)
                [Shipping_name] => Third Choice ($9.10)
            )
    
        [html] => Array
            (
                [0] => 
    
    This is my HTML text block. This is only included when the 'default-show-html' => true configuration option is enabled on your configuration form node.
    
    {Single Line Text:1}
    
    
                [1] => 
                [2] => 
    
    PDF Preview Block
    
    [pdfpreview]
    
    
            )
    
        [list] => Array
            (
                [36] => Array
                    (
                        [0] => Row 1
                        [1] => Row 2
                        [2] => Row 3
                        [3] => Row 4
                    )
    
                [17] => Array
                    (
                        [0] => Array
                            (
                                [Column 1] => Col1
                                [Column 2] => Col2
                                [Column 3] => Col3
                            )
    
                        [1] => Array
                            (
                                [Column 1] => Col2
                                [Column 2] => col2
                                [Column 3] => col2
                            )
    
                        [2] => Array
                            (
                                [Column 1] => col3
                                [Column 2] => col3
                                [Column 3] => col3
                            )
    
                        [3] => Array
                            (
                                [Column 1] => col4
                                [Column 2] => col4
                                [Column 3] => col4
                            )
    
                    )
    
            )
    
        [products] => Array
            (
                [25] => Array
                    (
                        [name] => Product Name
                        [price] => $100.00
                        [price_unformatted] => 100.00
                        [options] => Array
                            (
                                [0] => Array
                                    (
                                        [field_label] => Option
                                        [option_name] => Third Option
                                        [option_label] => Option: Third Option
                                        [price] => 70
                                        [price_formatted] => $70.00
                                    )
    
                            )
    
                        [quantity] => 3
                        [subtotal] => 510
                        [subtotal_formatted] => $510.00
                    )
    
            )
    
        [products_totals] => Array
            (
                [subtotal] => 510
                [shipping] => 9.1
                [total] => 519.1
                [shipping_formatted] => $9.10
                [subtotal_formatted] => $510.00
                [total_formatted] => $519.10
            )
    
    )

<h3>Accessing the example $form_data array</h3>
Now you are able to view the <code>$form_data</code>array you can use the access keys to output the entry information in the form. To guide you in this task we've put together examples for displaying the fields shown in the example above.

```
<?php echo $form_data['form_title']; ?>
<?php echo $form_data['form_description']; ?>
<?php echo $form_data['date_created']; /* d/m/Y format */ ?>
<?php echo $form_data['date_created_usa']; /* m/d/Y format */ ?>

<?php echo $form_data['pages'][0]; /* page 1 title */ ?>
<?php echo $form_data['pages'][1]; /* page 2 title */ ?>

<?php echo $form_data['field_descriptions'][1]; /* field 1 description */ ?>
<?php echo $form_data['field_descriptions'][2]; /* field 2 description */ ?>

<?php echo $form_data['misc']['date_time']; /* Y-m-d h:m:s format */ ?>
<?php echo $form_data['misc']['ip']; ?>
<?php echo $form_data['misc']['created_by']; /* user ID shown if logged in when filling out form */ ?>
<?php echo $form_data['misc']['transaction_id']; /* if using Paypal Add On (or similar) you can get the Transaction ID if the payment has been received */ ?>

<?php echo $form_data['field']['8.Text']; ?>
<?php echo $form_data['field']['9.Multi Select'][0]; ?>
<?php echo $form_data['field']['16.File'][0]; /* get the first uploaded file */ ?>

<?php echo $form_data['field']['17.List']; /* output the HTML list format */ ?>

<?php
/* loop through multi select array */
foreach($form_data['field']['9.Multi Select'] as $val) {
?>
    <li><?php echo $val; ?></li>
<?php } /* close foreach loop */ ?>

<?php /* output the 'name' field */ ?>	
<?php echo $form_data['field']['1.Name']['prefix']; ?>
<?php echo $form_data['field']['1.Name']['first']; ?>
<?php echo $form_data['field']['1.Name']['last']; ?>
<?php echo $form_data['field']['1.Name']['suffix']; ?>

<?php /* output an 'address' field */ ?>		
<?php echo $form_data['field']['5.Address']['street']; ?>
<?php echo $form_data['field']['5.Address']['street2']; ?>
<?php echo $form_data['field']['5.Address']['city']; ?>
<?php echo $form_data['field']['5.Address']['state']; ?>
<?php echo $form_data['field']['5.Address']['zip']; ?>
<?php echo $form_data['field']['5.Address']['country']; ?>

<?php /* output product field #25's 'name' */ ?>		
<?php echo $form_data['products'][25]['name']; ?>

<?php
/* loop through all products */
foreach($form_data['products'] as $product) {
?>
    <?php echo $product['name']; ?>
    <?php echo $product['price']; ?>
    <?php echo $product['quantity']; ?>
    <?php echo $product['subtotal_formatted']; ?>
    <br>
<?php
    /* Inner loop to loop through options field */
    foreach($product['options'] as $option) {
    ?>
        <?php echo $option['field_label']; ?>
        <?php echo $option['option_name']; ?>
        <?php echo $option['option_label']; ?>
        <?php echo $option['price_formatted']; ?>
        <br>
    <?php } /* close option loop */ ?>
?>
<?php } /* close foreach loop */ ?>

<?php echo $form_data['products_totals']['shipping_formatted']; ?>
<?php echo $form_data['products_totals']['subtotal_formatted']; ?>
<?php echo $form_data['products_totals']['total_formatted']; ?>

<?php
/* alternatively you can output a nicely formatted products table by calling the following */
GFPDFEntryDetail::product_table($form, $lead);
?>

<?php echo $form_data['html'][0]; /* output first HTML block */ ?>
<?php echo $form_data['html'][1]; /* output second HTML block */ ?>

<?php echo $form_data['pages'][0]; /* output a form page name */ ?>

<?php echo $form_data['field_descriptions'][31]; /* output a field description value */ ?>

<?php echo $form_data['list'][17][0]['Column 1']; /* output first column in first row of the list field with an id of #17 */ ?>
<?php echo $form_data['list'][17][0]['Column 2']; /* output second column in first row of the list field with an id of #17 */ ?>

<?php echo $form_data['list'][17][1]['Column 1']; /* output first column in second row of the list field with an id of #17 */ ?>
<?php echo $form_data['list'][17][2]['Column 2']; /* output second column in second row of the list field with an id of #17 */ ?>

<?php echo $form_data['signature_details_id'][9]['img']; ?>
<?php echo $form_data['signature_details_id'][9]['path']; ?>
<?php echo $form_data['signature_details_id'][9]['url']; ?>
```

&nbsp;