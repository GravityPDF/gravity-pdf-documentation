---
title: "Accessing Product Data"
sidebar_label: "Accessing Product Data"
description: ""
---

We've made it easy to access product data in custom templates. You can choose to output the standard product table, or utilise the <code>$form_data['products']</code> array to have granular control over its display.
<h2>Product Data</h2>
The <code>$form_data</code> array contains two unique keys for access product information: <code>$form_data['products']</code> and <code>$form_data['products_totals']</code>. The code sample below is what your product data may look like:

    [products] => Array
    (
        [1] => Array
            (
                [name] => Product Name
                [price] => $10.00
                [price_unformatted] => 10.00
                [options] => Array
                    (
                        [0] => Array
                            (
                                [field_label] => Option
                                [option_name] => First Option
                                [option_label] => Option: First Option
                                [price] => 20
                                [price_formatted] => $20.00
                            )

                        [1] => Array
                            (
                                [field_label] => Option
                                [option_name] => Second Option
                                [option_label] => Option: Second Option
                                [price] => 30
                                [price_formatted] => $30.00
                            )

                    )

                [quantity] => 5
                [subtotal] => 300
                [subtotal_formatted] => $300.00
            )
           
    )

    [products_totals] => Array
    (
        [subtotal] => 300
        [shipping] => 30
        [total] => 330
        [shipping_formatted] => $30.00
        [subtotal_formatted] => $300.00
        [total_formatted] => $330.00
    )

And here's an example of how to access the product information in your custom template:

```
<?php echo $form_data['products'][1]['name']; ?>

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
```

<h2>Product Table</h2>
You can add the product table to your custom template by simply adding the following line:

```
GFPDFEntryDetail::product_table($form, $lead);
```

&nbsp;

<img class="aligncenter size-full wp-image-4995" src="https://resources.gravitypdf.com/uploads/sites/2/edd/2014/12/product-table.gif" alt="A snapshot of what the standard product table looks like." width="653" height="161" /> This is how the product table will look in your custom PDF.