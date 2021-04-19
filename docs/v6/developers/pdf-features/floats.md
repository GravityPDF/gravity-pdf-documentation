---
title: "Custom Template Float Support"
sidebar_label: "Floats"
description: "The CSS property float is partially supported, allowing block elements to be placed alongside one another. There's certain limitations to note."
---

## Introduction 

The CSS property `float` is *partially* supported, allowing block elements to be placed alongside one another. However, there are certain limitations you should be aware of before using them:

1.  Floats only work for block elements (remember, [all HTML is hard-coded as either block or inline](supported-html-and-css.md#html-support)).

2.  Block elements need to have a width set (fixed or percentage-based)

3.  Floats inside floats are not supported (with the exception of images)

4.  Text next to floats should wrap correctly, but backgrounds and borders may overlap

5.  Margins can create issues for floats. Use padding instead.

6.  You should manually clear all floats to prevent issues when the floated element is not the last elements in the document

7.  The standard box-model applies, so if you have two floats with a 50% width and either of them has padding, margin or borders, they will not fit side-by-side.

## Columns 

Creating floating columns is one of the best uses for floats. The key is to ensure you calculate the box-model correctly, and to do that we'll steer clear of margins and borders for our floated container.

### Two-Column Layout 

Here's a simple two-column layout with a small gap between the containers:

```html
<style>
    .row {
        clear: both;
        margin-bottom: 5mm;
    }

    .col {
        float: left;
    }

    .col-1-2 {
        width: 49%;
        padding-right: 1%;
    }
</style>

<div class="row">
    <div class="col col-1-2" height="40mm">
        This is my left column
    </div>

    <div class="col col-1-2" height="40mm">
        This is my right column
    </div>
</div>
```

As you can see you've applied a 49% width to both containers, which adds up to 98%. We've then applied a 1% right padding to both blocks, which makes up the missing 2%. We could have just as easily applied `padding: 0 0.5%;` to both containers which would add half-a-percent of padding to both containers left and right sides. The key is to ensure you're not going over 100%.

## Borders and Padding 

To apply border and padding to the floated elements, you need to create an inner container which you'll then target with the appropriate CSS. Continuing on from our previous example, you can apply borders and padding to the inner block without affecting the floats:

```html
<style>
    .col-1-2 {
        width: 49%;
        padding-right: 1%;
    }

    .inner {
        padding: 10px;
        border: 1px solid #000;
    }
</style>

<div class="col col-1-2">
    <div class="inner" height="40mm">
        This is my left column
    </div>
</div>
```

## Example 

[We've put together a sample showing off the float support in Gravity PDF](https://gist.github.com/jakejackson1/6308db75277e54db47d9).
