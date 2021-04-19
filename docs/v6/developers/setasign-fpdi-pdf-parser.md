---
title: "How to integrate Setasign FPDI PDF-Parser with Gravity PDF"
sidebar_label: "Setasign PDF-Parser"
description: ""
---

Because Gravity PDF prefixes the PHP namespaces for all composer-managed files (to prevent conflicts with other plugins), special consideration needs to be taken if you would like to [integrate the Setasign FPDI PDF-Parser](https://www.setasign.com/products/fpdi-pdf-parser/details/) with Gravity PDF.

:::info
Gravity PDF does not provide free support to developers who want to auto-fill existing PDFs with Gravity PDF. If you are interested in that feature, you can utilise [Gravity PDF's Bespoke PDF service](https://gravitypdf.com/bespoke/) or pay for premium support.
:::

To add support, right after you [add the autoloading code for the PDF-Parser](https://manuals.setasign.com/fpdi-pdf-parser-manual/v2/installation/#index-2) you need to include these class aliases:

```
require_once __DIR__ . '/FPDI_PDF-Parser/src/autoload.php';

/* Alias our vendor prefixed classes back to their original class name */
$alias = [
	'\setasign\Fpdi\PdfParser\PdfParser',
	'\setasign\Fpdi\PdfParser\StreamReader',
	'\setasign\Fpdi\PdfParser\PdfParserException',
	'\setasign\Fpdi\PdfParser\CrossReference\CrossReference',
	'\setasign\Fpdi\PdfParser\CrossReference\CrossReferenceException',
	'\setasign\Fpdi\PdfParser\CrossReference\ReaderInterface',
	'\setasign\Fpdi\PdfParser\Filter\FilterException',
	'\setasign\Fpdi\PdfParser\Type\PdfArray',
	'\setasign\Fpdi\PdfParser\Type\PdfDictionary',
	'\setasign\Fpdi\PdfParser\Type\PdfIndirectObject',
	'\setasign\Fpdi\PdfParser\Type\PdfIndirectObjectReference',
	'\setasign\Fpdi\PdfParser\Type\PdfType',
	'\setasign\Fpdi\PdfParser\Type\PdfTypeException',
	'\setasign\Fpdi\PdfParser\Type\PdfNumeric',
	'\setasign\Fpdi\PdfParser\Type\PdfStream',
	'\setasign\Fpdi\PdfParser\Type\PdfToken',
];

foreach( $alias as $class ) {
	class_alias( '\GFPDF_Vendor' . $class, $class );
}

/* Alias the commercial FPDI Parser classes to our prefixed class name */
$alias = [
	'\setasign\FpdiPdfParser\PdfParser\CrossReference\CompressedReader',
	'\setasign\FpdiPdfParser\PdfParser\CrossReference\CorruptedReader',
	'\setasign\FpdiPdfParser\PdfParser\CrossReference\CrossReference',
	'\setasign\FpdiPdfParser\PdfParser\Filter\Predictor',
	'\setasign\FpdiPdfParser\PdfParser\Filter\PredictorException',
	'\setasign\FpdiPdfParser\PdfParser\PdfParser',
];

foreach( $alias as $class ) {
	class_alias( $class, '\GFPDF_Vendor' . $class );
}
```

Where possible, it's best to include these aliases just before you begin using Gravity PDF. This will reduce the chance of conflicting with another plugin that includes the same libraries.
