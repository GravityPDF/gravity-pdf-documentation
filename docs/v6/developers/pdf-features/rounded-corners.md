---
title: "Custom Template Round Corners using Simple CSS"
sidebar_label: "Rounded Corners"
description: ""
---

## Introduction 

The CSS3 `border-radius` property can be applied to all block elements to easily enhance the look and feel of your PDFs. The software is configured to automatically add appropriate padding to the container when rounded corners are enabled.

## CSS Format 

Rounded corners can be enabled using both the CSS3-spec short and long-hand properties:

```css
//short-hand
border-radius: 4em;

//long-hand
border-top-left-radius: 4em;
border-top-right-radius: 4em;
border-bottom-right-radius: 4em;
border-bottom-left-radius: 4em;
```

You can also control both the horizontal and vertical radius using short and long-hand CSS:

```css
//short-hand
border-radius: 2em 1em 4em / 0.5em 3em;

//long-hand
border-top-left-radius: 2em 0.5em;
border-top-right-radius: 1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius: 1em 3em;
```

## Examples 

```html
<!-- Standard Border Radius -->
<div style="border-radius: 5px; height: 30mm; background: grey;"></div>

<!-- Standard Border Radius with larger corners -->
<div style="border-radius: 20px; height: 30mm; background: grey;"></div>

<!-- Only round one corner on the container -->
<div style="border-top-left-radius: 60px; height: 30mm; background: grey;"></div>

<!-- Create a circle using percentages and a square container -->
<div style="border-radius: 50%; height: 40mm; width: 40mm; background: grey;"></div>

<!-- Control the horizontal and vertical corner radius -->
<div style="border-radius: 2em 1em 4em / 0.5em 3em; height: 40mm; width: 40mm; background: grey;"></div>

<!-- Border Radius with 2px border -->
<div style="border-radius: 10px; height: 30mm; border: 2px solid black;"></div>
```	

[Download example PDF template file showing off rounded corners](https://gist.github.com/jakejackson1/c3b8202c29b768741ea7).
