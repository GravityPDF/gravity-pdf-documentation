---
title: "Form Data Array in Custom PDF Templates – Developers"
sidebar_label: "PHP Form Data Array"
description: "Take full control over your custom PDF templates for Gravity PDF by using native PHP instead of merge tags and conditional shortcodes."
---

## Introduction 

[Gravity Forms merge tags and conditional shortcodes](mergetags-and-conditional-shortcodes.md) are useful PDF-building tools, but there are drawbacks. For instance, *you cannot create nested conditionals* or do any *post-processing to the entry data* – you aren't able to determine the age of someone by their date of birth, or convert a field to upper case. To achieve this behaviour we need to utilise PHP and the `$form_data` associative array – a formatted version of the `$entry` object.

## Template Tutorial – Part 3 

![Gravity PDF PHP template](https://resources.gravitypdf.com/uploads/2015/11/pdf-template-sample.png)
First, we're going to convert the template we did in the [Part 2 exercise](mergetags-and-conditional-shortcodes.md#template-tutorial) from merge tags/conditional shortcodes to PHP. Then we'll look at the two post-processing use-cases we discussed [in the introduction](#introduction). Finally, we'll take a closer look at the `$form_data` array.

### Convert Merge tags to PHP 

Our [*Hello World* template](https://gist.github.com/jakejackson1/6c0a5268fa23ba51a285) included merge tags for field #1 and field #3 – our name field and drop down, respectively. Their equivalent access keys in the `$form_data` array are `$form_data['field'][1]['first']` and `form_data['field'][3]`. So we'll update the PDF template to:

    <p>You're from <?= $form_data['field'][3]; ?>, <?= $form_data['field'][1]['first']; ?>? How cool is that!</p>

:::info
The `$form_data` array is grouped into a number of different sub-arrays, but the most common is `$form_data['field']`. As the name suggests, it contains the field data for *most* Gravity Forms field – add-ons that add new fields are stored in separate sub-arrays.
:::

To keep your code cleaner you could set these values as variables earlier in the template and output the variable names in the template instead:

```
<?php 
   $location = $form_data['field'][3];
   $name     = $form_data['field'][1]['first'];
?>

<p>You're from <?= echo $location; ?>, <?= echo $name; ?>? How cool is that!</p>
```

If you're accessing a lot of fields from `$form_data['field']` you might like to assign it a shorter variable name:

```
<?php 
   $f        = $form_data['field'];
   $location = $f[3];
   $name     = $f[1]['first'];
?>

<p>You're from <?= $location; ?>, <?= $name; ?>? How cool is that!</p>
```

### Convert Conditional Shortcode to PHP 

:::info
When doing conditionals with the `$form_data` array, if your string comparison contains any of the following characters `<`, `>`, `"`, `'` or `&` you'll need to use the WordPress function `esc_html()` to get the desired result.
Example: `if ( $form_data['field'][5] === esc_html( 'Honey & Spice' ) ):'`
:::

The conditional shortcodes we used in our *Hello World* template are basic `IF x = y THEN` logic. Now we have access to the location field in PHP it's trivial to replace in PHP:

```
<?php if ( $location === 'Earth' ): ?>
    <p>The birth-rate on Earth has dropped almost 25% in the past 50 years due to colonisation of the solar system.</p>
<?php endif; ?>

<?php if ( $location === 'Moon' ): ?>
    <p>The lunar colony was first established in 2115 with a population of 200. Now it supports over 900,000 people.</p>
<?php endif; ?>

<?php if ( $location === 'Mars' ): ?>
    <p>Mars was the second body to be colonised in the solar system in 2135, 20 years after the moon.</p>
<?php endif; ?>

<?php if ( $location === 'Titan' ): ?>
    <p>Titan's colony is only recently established. You're one of only 500 people currently living there!</p>
<?php endif; ?>
```

You could have also use a `switch` statement if you wanted:

```
switch ( $location ) {
    case 'Earth':
        echo '<p>The birth-rate on Earth has dropped almost 25% in the past 50 years due to colonisation of the solar system.</p>';
    break;

    case 'Moon':
        echo '<p>The lunar colony was first established in 2115 with a population of 200. Now it supports over 900,000 people.</p>';
    break;

    case 'Mars':
        echo '<p>Mars was the second body to be colonised in the solar system in 2135, 20 years after the moon.</p>';
    break;

    case 'Titan':
        echo "<p>Titan's colony is only recently established. You're one of only 500 people currently living there!</p>";
    break;
}
```

And IF/ELSE conditions are simple too:

```
<?php if ( $location === 'Earth'  ): ?>
    <p>The birth-rate on Earth has dropped almost 25% in the past 50 years due to colonisation of the solar system.</p>
<?php else: ?>
    <p>Planning a vacation? Earth has thousands of beautiful destinations.</p>
<?php endif; ?>
```

[Download the completed Hello World PDF template for Part 3](https://gist.github.com/jakejackson1/c7dea5d0953374970f71).

## Doing More With PHP 

With the full power of PHP at your fingertips post-processing Gravity Form data becomes easy. Case in point, it's relatively simple to determine the age of someone using their date of birth.

Let's go back to the *Hello World* sample form and add a date field. For simplicities sake, name it *Date of Birth* and change the *Date Format* to `dd-mm-yyyy` then save your form (the date format is important to prevent ambiguity when using PHP's `strtotime()` function). Finally, submit a new entry and enter a date of birth.

Now let's add our PHP logic to display the age in your PDF template:

```
<?php 
   $dob            = $form_data['field'][4]; /* change the ID if your date field has something different */
   $dob_iso_format = date( 'Y-m-d', strtotime( $dob ) );
   $dob_datetime   = new DateTime( $dob_iso_format );
   $age            = $dob_datetime->diff( new DateTime( 'today' ) )->y;
?>

<p>Congratulations! You're <?= $age; ?> years old.</p>
```

Another example is converting case. It's simple to convert entry data to upper case, lower case or sentence case. Just run the field through a PHP function like `mb_strtoupper()` or `strtoupper()` (we recommend using the multibyte PHP functions where possible).

```
<?php 
   $location = mb_strtoupper( $form_data['field'][3], 'UTF-8' ); /* strtoupper( $form_data['field'][3] ) is also suitable */
?>

<?= $location; ?>
```

PDF templates are just PHP files that are loaded in WordPress. Anything you can do in WordPress you can do in the PDF templates. For instance, you can output entire posts in a PDF:

```
<?php 
   $post = get_post( 120 ); /* get the post with an ID of 120 */
   echo apply_filters( 'the_title', $post->post_title ); /* output the post title */
   echo apply_filters( 'the_content', $post->post_content ); /* output the post content */
?>
```

## Form Data Array Up Close 

The `$form_data` array is used to access the Gravity Form entry information, but, unlike merge tags, there's no selector to show you what's actually in the array. That's why we've added a `data` URL parameter which shows you the complete contents of the `$form_data` array.

To see the array, first view a PDF in your admin area. When it loads add `?data=1` to the URL and reload. The address should look similar to this:

    https://gravitypdf.com/pdf/12i410491024123/100/?data=1

If we take a look at the `$form_data` array from the [tutorial](#template-tutorial--part-3) above you'll see a simple structured associative array:

    Array
    (
        [form_id] => 22
        [entry_id] => 134
        [form_title] => Hello World
        [form_description] => Gravity PDF tutorial form used in our development documentation.
        [date_created] => 2/11/2015
        [date_created_usa] => 11/2/2015
        [pages] => 
        [misc] => Array
            (
                [date_time] => 2015-11-02 03:06:50
                [time_24hr] => 03:06
                [time_12hr] => 3:06am
                [is_starred] => 0
                [is_read] => 0
                [ip] => 192.168.13.1
                [source_url] => 
                [post_id] => 
                [currency] => USD
                [payment_status] => 
                [payment_date] => 
                [transaction_id] => 
                [payment_amount] => 
                [is_fulfilled] => 
                [created_by] => 1
                [transaction_type] => 
                [user_agent] => Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0
                [status] => active
            )

        [field] => Array
            (
                [1.Name] => Array
                    (
                        [prefix] => 
                        [first] => Jake
                        [middle] => 
                        [last] => Jackson
                        [suffix] => 
                    )

                [1] => Array
                    (
                        [prefix] => 
                        [first] => Jake
                        [middle] => 
                        [last] => Jackson
                        [suffix] => 
                    )

                [Name] => Array
                    (
                        [prefix] => 
                        [first] => Jake
                        [middle] => 
                        [last] => Jackson
                        [suffix] => 
                    )

                [3.Where do you live?] => Mars
                [3] => Mars
                [Where do you live?] => Mars
                [3.Where do you live?_name] => Mars
                [3_name] => Mars
                [Where do you live?_name] => Mars
            )
    )

As we mentioned earlier, our main sub-key is `$form_data['field']`, but there are other important details like the submission date `$form_data['date_created']` and the entry owner's user ID `$form_data['misc']['created_by']`. Each Gravity Form is unique and will create a different `$form_data` array. Gravity Form Add-Ons like Survey and Signature also add their own unique sub-keys in the array.

You will also notice in our `$form_data['field']` array there are three different references (array keys) for the same field. The keys without any ID are present for legacy reasons, while keys with the ID-and-field-combination make it easier to distinguish what field you are trying to reference. With that said, we recommend accessing the field data using the ID in your templates.

## Accessing Common Field Data 

The `$form_data` variable is an associative array, so more experienced PHP developers should have no problem accessing the information they need. However, large forms can make this array intimidating for first time template builders. Below are examples of how to access the most common Gravity Forms fields.

### Standard Fields 

#### Single Line Text 

```
/* 20 is the ID of our field */
echo $form_data['field'][20]; 
```

#### Paragraph Text 

```
/* 35 is the ID of our field */
echo $form_data['field'][35]; 
```

#### Drop Down 

```
/* 3 is the ID of our field */
echo $form_data['field'][3]; /* for selected Drop Down value */
echo $form_data['field']['3_name']; /* for selected Drop Down name */
```

#### Multiselect  

```
/* 5 is the ID of our field */
if ( is_array( $form_data['field'][5] ) ) {
    echo implode( '<br>', $form_data['field'][5] ); /* output value of each selected item */
}

if ( is_array( $form_data['field']['5_name'] ) ) {
    echo implode( '<br>', $form_data['field']['5_name'] ); /* output name of each selected item */
}

/* Output in a list */
if ( is_array( $form_data['field'][5] ) ) {
    echo '<ul>';

    foreach( $form_data['field'][5] as $item ) {
        echo "<li>$item</li>";
    }

    echo '</ul>';
}
```

#### Number 

```
/* 25 is the ID of our field */
echo $form_data['field'][25]; 
```

#### Checkbox 

```
/* 43 is the ID of our field */
if ( is_array( $form_data['field'][43] ) ) {
    echo implode( '<br>', $form_data['field'][43] ); /* output value of each selected item */
}

if ( is_array( $form_data['field']['43_name'] ) ) {
    echo implode( '<br>', $form_data['field']['43_name'] ); /* output name of each selected item */
}

/* Output in a list */
if ( is_array( $form_data['field'][43] ) ) {
    echo '<ul>';

    foreach ( $form_data['field'][43] as $item ) {
        echo "<li>$item</li>";
    }

    echo '</ul>';
}
```

#### Radio Buttons 

```
/* 12 is the ID of our field */
echo $form_data['field'][12]; /* for selected Radio Button value */
echo $form_data['field']['12_name']; /* for selected Radio Button name */
```

#### Hidden 

```
/* 9 is the ID of our field */
echo $form_data['field'][9]; 
```

#### HTML 

```
/* 15 is the ID of our field */
echo $form_data['html_id'][15]; /* not found in the 'fields' sub-key */
```

#### Section 

```
/* 82 is the ID of our field */
echo $form_data['section_break'][82]['title']; /* not found in the 'fields' sub-key */
echo $form_data['section_break'][82]['description']; /* not found in the 'fields' sub-key */
```

### Advanced Fields 

#### Name 

```
/* 11 is the ID of our field */
echo $form_data['field'][11]['prefix'];
echo $form_data['field'][11]['first'];
echo $form_data['field'][11]['middle'];
echo $form_data['field'][11]['last'];
echo $form_data['field'][11]['suffix'];

/* Outputs name as a string and strips any empty fields */
echo implode( ' ', array_filter( $form_data['field'][11] ) );
```

#### Date 

```
/* 60 is the ID of our field */
echo $form_data['field'][60]; 
```

#### Time 

```
/* 62 is the ID of our field */
echo $form_data['field'][62]; 
```

#### Phone 

```
/* 142 is the ID of our field */
echo $form_data['field'][142]; 
```

#### Address 

```
/* 16 is the ID of our field */
echo $form_data['field'][16]['street'];
echo $form_data['field'][16]['street2'];
echo $form_data['field'][16]['city'];
echo $form_data['field'][16]['state'];
echo $form_data['field'][16]['zip'];
echo $form_data['field'][16]['country'];

/* Outputs in a standard format */
echo ( strlen( $form_data['field'][16]['street2'] ) === 0 ) ? $form_data['field'][16]['street'] : $form_data['field'][16]['street'] . ', ' . $form_data['field'][16]['street2'];
echo '<br>';
echo $form_data['field'][16]['city'] . ' ' . $form_data['field'][16]['state'] . ' ' . $form_data['field'][16]['zip'];
```

#### Website 

```
/* 120 is the ID of our field */
echo $form_data['field'][120]; 
```

#### Email 

```
/* 250 is the ID of our field */
echo $form_data['field'][250]; 
```

#### File Upload 

```
/* 48 is the ID of our field */
if ( is_array( $form_data['field'][48] ) ) {
    echo implode( '<br>', $form_data['field'][48] ); /* output URL of each selected item */
}

if ( is_array( $form_data['field']['48_path'] ) ) {
    echo implode( '<br>', $form_data['field']['48_path'] ); /* output PATH of each selected item */
}

/* Add images to PDF */
if ( is_array( $form_data['field']['48_path'] ) ) { /* make sure you use the PATH */  
    $allowed_extensions = array( 'jpg', 'jpeg', 'png', 'gif' );

    foreach ( $form_data['field']['48_path'] as $path ) { 
         $extension = strtolower( pathinfo( $path, PATHINFO_EXTENSION ) );

         if( in_array( $extension, $allowed_extensions ) && is_file( $path ) ) { /* verify path has an image extension and it exists on the server */
              echo '<img src="'. $path .'" width="200" />';
         }
    }
}
```

#### List 

```
/* 177 is the ID of our field */
echo $form_data['field'][177]; /* outputs pre-formatted list */

/* Single Column List */
if ( is_array( $form_data['list'][177] ) ) {
    foreach ( $form_data['list'][177] as $item ) {
        echo $item . '<br>';
    }

    echo $form_data['list'][177][0]; /* output column 1 */
    echo $form_data['list'][177][2]; /* output column 3 */
}

/* Multi Column List */
if ( is_array( $form_data['list'][177] ) ) {
    foreach ( $form_data['list'][177] as $row ) {
          /* Uses the column names as array keys */
          echo $row['Column 1'] . ' | ';
          echo $row['Column 2'] . ' | ';
          echo $row['Column 3'] . '<br>';
    }

    echo $form_data['list'][177][0]['Column 1']; /* output row 1 column 1 */
    echo $form_data['list'][177][2]['Column 3']; /* output row 3 column 3 */
}
```

#### Signature 

```
/* 
 * 39 is the ID of our field 
 * The signature details isn't in the 'field' sub-key
 */
echo $form_data['signature_details_id'][39]['img']; /* a <img /> HTML tag that includes the signature */
echo $form_data['signature_details_id'][39]['path']; /* the full path to the signature */
echo $form_data['signature_details_id'][39]['url']; /* the URL to the signature */
echo $form_data['signature_details_id'][39]['width']; /* the signature width in pixels */
echo $form_data['signature_details_id'][39]['height']; /* the signature height in pixels */

/* Output signature if it exists (this prevents a red X showing up in the PDF when the image doesn't exist) */
if ( is_file( $form_data['signature_details_id'][39]['path'] ) ) {
    echo '<img src="'. $form_data['signature_details_id'][39]['path'] . '" width="150" />'; /* best to use the path to reference the image and check it exists on the server first */
}
```

#### Consent Field 

```
/*
* 6 is the ID of our field
*/
$form_data['field'][6]['value']; /* If consented, will display '1', otherwise blank. */
$form_data['field'][6]['label']; /* If consented, will display the consent Label, otherwise blank. */
$form_data['field'][6]['description']; /* Will display the Consent field description, regardless of selection */
```

#### Chained Selects 

You'll need [the Chained Selects add-on](https://www.gravityforms.com/add-ons/chained-selects/) to use this field type.

```
/* 
 * 3 is the ID of our field 
 */
echo $form_data['field'][3][0]; /* The first user-selection in the chain */
echo $form_data['field'][3][1]; /* The second user-selection in the chain */

/* Output all answers, separated by a comma */
echo implode( ', ', $form_data['field'][3] );
```

#### Slim Image Cropper 

You'll need [the Slim Image Cropper for Gravity Forms add-on](https://codecanyon.net/item/slim-image-cropper-for-gravity-forms/19606752) to use this field type.

```
/*
* 3 is the ID of our field
*/
$form_data['field'][3]['url']; /* The URL of the uploaded image */

$path = isset( $form_data['field'][3]['path'] ) ? $form_data['field'][3]['path'] : ''; /* The path to the uploaded image (if we can locate it) */
if ( is_file( $path ) ) {
   echo '<img src="'. $path .'" width="200" />';
}
```

#### Nested Forms 

You'll need [the Gravity Perk Nested Forms add-on](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) to use this field type.

```
/* 
* 3 is the ID of our field 
*/
$nested_ids = explode( ',', $form_data['field'][3] );
foreach ( $nested_ids as $id ) {
    $nested_form_data = GPDFAPI::get_form_data( $id );
    if ( ! is_wp_error( $nested_form_data ) ) {
        /* Output required content for this entry */
    }
}
```

#### Repeater 

The Repeater field contains an array of your field data, using the same structure as would be found in the `$form_data['field']` array key. 

For a simple single-level repeater:

```
<!-- The ID of our repeater field is 3 -->
<?php foreach ( $form_data['repeater'][3] as $data ): ?>
    <div class="users">
        <!-- The sub-field IDs will be unique to your repeater field -->
        <p>Name: <?= $data[1]['first'] ?> <?= $data[1]['last'] ?></p>
        <p>Email: <?= $data[2] ?></p>
    </div>
<?php endforeach; ?>
```

For a multi-level repeater (in this case, three levels):

```
<!-- The ID of our repeater field is 3 -->
<?php foreach ( $form_data['repeater'][3] as $data ): ?>
    <div class="users">
        <!-- The sub-field IDs will be unique to your repeater field -->
        <p>Name: <?= $data[1]['first'] ?> <?= $data[1]['last'] ?></p>
        <p>Email: <?= $data[2] ?></p>

        <?php foreach ( $data[3] as $jobs ): ?>
            <div style="border: 1px solid #000; margin-bottom: 10px">
                <p>Expertise: <?= $jobs[4] ?></p>
                <p>Years: <?= $jobs[5] ?></p>

                <ul class="urls">
                    <?php foreach ( $jobs[6] as $urls ): ?>
                        <li><?= $urls[7] ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endforeach; ?>
    </div>
<?php endforeach; ?>
```

### Post Fields 

#### Title 

```
/* 29 is the ID of our field */
echo $form_data['field'][29]; 
```

#### Body 

```
/* 55 is the ID of our field */
echo $form_data['field'][55]; 
```

#### Except 

```
/* 30 is the ID of our field */
echo $form_data['field'][30]; 
```

#### Tags 

```
/* 17 is the ID of our field */
echo $form_data['field'][17]; 

/* Create a tags array and output each tag on a new line */
$tags = explode( ',', $form_data['field'][17] );
echo implode( '<br>', $tags );
```

#### Category 

```
/* 5 is the ID of our field */

/* Accessing Category data when using Drop Down or Radio Button Fields */
echo $form_data['field'][5]; /* for selected category ID */
echo $form_data['field']['5_name']; /* for selected Category name */

/* Accessing Category data when using Multiselect or Checkbox Fields */
if ( is_array( $form_data['field'][5] ) ) {
    echo implode( '<br>', $form_data['field'][5] ); /* output ID of each selected item */
}

if ( is_array( $form_data['field']['5_name'] ) ) {
    echo implode( '<br>', $form_data['field']['5_name'] ); /* output name of each selected item */
}
```

#### Post Image 

```
/* 15 is the ID of our field */

if ( sizeof( $form_data['field'][32] ) > 0 ) {
    echo $form_data['field'][32]['url'];
    echo $form_data['field'][32]['path'];
    echo $form_data['field'][32]['title'];
    echo $form_data['field'][32]['caption'];
    echo $form_data['field'][32]['description'];

    /* Output image to PDF */
    if ( is_file( $form_data['field'][32]['path'] ) ) {
        echo '<img src="'. $form_data['field'][32]['path'] . '" width="300" />'; /* best to use the path and check it exists on the server first */
    }
}
```

#### Custom Field 

The Custom Field can be configured to any field type in the [Standard](#standard-fields) or [Advanced](#advanced-fields) fields sections. Refer to that particular field for output details.

### Pricing Fields 

#### Product 

```
/* 300 is the ID of our field */
echo $form_data['field'][300]; 

/* Advanced Product Information */
echo $form_data['products'][300]['name'];
echo $form_data['products'][300]['price']; /* formatted price $100.00 */
echo $form_data['products'][300]['price_unformatted']; /* 100.00 */
echo $form_data['products'][300]['quantity'];
echo $form_data['products'][300]['subtotal']; /* unformatted price (100.00) including any options */
echo $form_data['products'][300]['subtotal_formatted']; /* formatted price ($100.00) including any options */

/* Any options are also available in the $form_data['products'][300]['options'] array */
```

#### Quantity 

```
/* 310 is the ID of our field */
echo $form_data['field'][310]; 

/**
 * Advanced Product Option Information is available through the parent product field it's assigned to
 * For example, if this field is linked to product field #300 and would be accessible via $form_data['products'][300]['quantity']
 */
echo $form_data['products'][300]['quantity'];
```

#### Option 

```
/* 320 is the ID of our field */
echo $form_data['field'][320]; 

/** 
 * Advanced Product Option Information are available through the parent product field it's assigned to 
 * For example, if this field is linked to product field #300 and would be accessible via $form_data['products'][300]['options']
 */
echo $form_data['products'][300]['options'][0]['field_label'];
echo $form_data['products'][300]['options'][0]['option_name'];
echo $form_data['products'][300]['options'][0]['option_label'];
echo $form_data['products'][300]['options'][0]['price']; /* unformatted price (100.00) */
echo $form_data['products'][300]['options'][0]['price_formatted']; /* formatted price ($100.00) */

foreach ( $form_data['products'][300]['options'] as $option ) {
    echo $option['field_label'] . '<br>';
}
```

#### Shipping 

```
/* 330 is the ID of our field */
echo $form_data['field'][330]; 

/**
 * Advanced shipping information is available through the $form_data['products_totals'] sub-key
 */
echo $form_data['products_totals']['shipping']; /* unformatted (100.00) */
echo $form_data['products_totals']['shipping_formatted']; /* formatted ($100.00) */
echo $form_data['products_totals']['shipping_name']; /* selected shipping option name */
```

#### Total 

```
/* 340 is the ID of our field */
echo $form_data['field'][340]['total']; /* unformatted (100.00) */
echo $form_data['field'][340]['total_formatted']; /* formatted ($100.00) */

/**
 * Total information can also be accessed via the $form_data['products_totals'] sub-key
 */
echo $form_data['products_totals']['subtotal']; /* unformatted (100.00) before shipping is applied */
echo $form_data['products_totals']['subtotal_formatted']; /* formatted ($100.00) before shipping is applied */

echo $form_data['products_totals']['total']; /* unformatted (100.00) after shipping is applied */
echo $form_data['products_totals']['total_formatted']; /* formatted ($100.00) after shipping is applied */
```
