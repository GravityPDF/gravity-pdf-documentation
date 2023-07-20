---
title: "Accessing Survey, Poll and Quiz Data"
sidebar_label: "Accessing Survey, Poll and Quiz Data"
description: ""
---

This pages is for developers creating custom PDFs. It outlines ways of accessing the survey, poll and quiz data in the <code>$form_data</code> array.

<strong>Jump to:</strong>
<ul>
	<li><a href="#survey">Survey</a></li>
	<li><a href="#quiz">Quiz</a></li>
	<li><a href="#poll">Poll</a></li>
</ul>
<h2 id="survey">Survey</h2>
The new <code>$form_data['survey']</code> key holds survey-based field information such as the score, likert, rank data and the global survey results.

While the survey field has a number of different formats, only the three new formats - likert, rank and rating - are located in the <code>survey</code> key. The standard form fields - radio, checkbox, input and textarea - are all still stored in the <code>$form_data['field']</code> key.

The code sample below is what your survey data may look like when accessed through the <code>$form_data['survey']</code> key.

    [survey] => Array
        (
            [likert] => Array
                (
                    [1] => Array
                        (
                            [col] => Array
                                (
                                    [glikertcol1904a7c7f] => 1 (poor)
                                    [glikertcol11f49a188] => 2
                                    [glikertcol1e0593770] => 3
                                    [glikertcol189144c5a] => 4
                                    [glikertcol17fcece6b] => 5 (excellent)
                                )

                            [rows] => Array
                                (
                                    [Living Room] => Array
                                        (
                                            [1 (poor)] => selected
                                            [2] =>
                                            [3] =>
                                            [4] =>
                                            [5 (excellent)] =>
                                        )

                                    [Bathroom] => Array
                                        (
                                            [1 (poor)] =>
                                            [2] => selected
                                            [3] =>
                                            [4] =>
                                            [5 (excellent)] =>
                                        )

                                    [Shower] => Array
                                        (
                                            [1 (poor)] =>
                                            [2] =>
                                            [3] =>
                                            [4] => selected
                                            [5 (excellent)] =>
                                        )

                                    [Bedroom] => Array
                                        (
                                            [1 (poor)] =>
                                            [2] =>
                                            [3] => selected
                                            [4] =>
                                            [5 (excellent)] =>
                                        )

                                    [Kitchen] => Array
                                        (
                                            [1 (poor)] =>
                                            [2] =>
                                            [3] =>
                                            [4] =>
                                            [5 (excellent)] => selected
                                        )

                                )

                        )

                )

            [rank] => Array
                (
                    [2] => Array
                        (
                            [0] => Pink
                            [1] => Green
                            [2] => Yellow
                            [3] => Blue
                            [4] => Red
                        )

                )

            [rating] => Array
                (
                    [3] => Array
                        (
                            [0] => Neutral
                        )

                )

        )

<h3>Access Survey $form_data information</h3>
<h3>LIKERT</h3>
Specific to the survey add on, likerts (those nice form table layouts) come in single and multi-row flavours. The column and row access details will change depending on the values you set in your form, but the following code snippets will give you a good indication of how to access the data.

<strong>EASY LIKERT OUTPUT</strong>
If you just want to display a formatted likert field in your PDF you can use the following command in your custom template.

```
/* change $field_id to the form field ID */
echo GFPDFEntryDetail::get_likert($form, $lead, $field_id);
```

<strong>ADVANCED LIKERT OUTPUT</strong>
For those who need to access specific information about the likert field, the column and row information is stored in the $form_data['survey']['likert'] key.

```
<?php

/* output likert column (in this case the first column) with field ID of 1 */
echo $form_data['survey']['likert'][1]['col']['glikertcol1b6380a6f']; /* column 1 - 1 (poor) */
echo $form_data['survey']['likert'][1]['col']['glikertcol17fcece6b']; /* column 5 - 5 (excellent) */
 
 
/* output multi likert row with field ID of 1 */
echo $form_data['survey']['likert'][1]['rows']['Living Room']['1 (poor)']; /* row 1, column 1 - selected */
 
/* output multi likert row with field ID of 1 */
echo $form_data['survey']['likert'][1]['rows']['Shower']['4']; /* row 3, column 4 - selected */


/* loop through a multi row likert box and output the header and row information */
$likert = $form_data['survey']['likert'][1];

/* we'll format the likert in a table */
echo '<table><tr><th></th>';

/* output the column titles */
foreach($likert['col'] as $id => $title)
{
    echo "<th class='$id'>$title</th>";
}
echo '</tr>';

/* output the rows */
foreach($likert['rows'] as $row => $cols)
{
?> 
    <tr>
        <td><?php echo $row; ?></td>
            <?php foreach($cols as $col_id => $selected): ?>         
                <td>
                    <?php if($selected === 'selected'): ?>
                        Display a check box or X to show this was selected
                     <?php endif; ?>
                </td>       
            <?php endforeach; ?>    
        </tr>
<?php  
}

/* close the table */
echo '</table>';
```

<h3>RANK</h3>
The survey rank field can be accessed using $form_data['survey']['rank'] and is accessible using the field ID.

```
echo $form_data['survey']['rank'][2][0]; /* First rank option */

/* loop through and output the rank options */
foreach($form_data['survey']['rank'][2] as $item)
{
    echo $item .'<br>';
}
```

<strong>GLOBAL</strong>
There is also a echo <code>$form_data['survey']['global']</code> key which contains statistical summary of ALL the survey entries. What you see in this array will depend on your form and number of entries. But its purpose is to give you a summary of the results from ALL submitted entries - including averages, totals for each field options and entry count.

These statistics are great if you want to generate charts based on your data.
<h2 id="quiz">Quiz</h2>
We introduced the <code>$form_data['quiz']</code> key which contains the quiz configuration, a snapshot of the entry's results and the global form results. Along with the new key, the <code>$form_data['field']['quiz']</code> fields have a new structure which makes it easy to determine the user's answer, and if they were correct.

```
Array
(
   [quiz] => Array
        (
            [config] => Array
                (
                    [grading] => passfail
                    [passPercent] => 100
                    [grades] => Array
                        (
                            [0] => Array
                                (
                                    [text] => A
                                    [value] => 90
                                )

                            [1] => Array
                                (
                                    [text] => B
                                    [value] => 80
                                )

                            [2] => Array
                                (
                                    [text] => C
                                    [value] => 70
                                )

                            [3] => Array
                                (
                                    [text] => D
                                    [value] => 60
                                )

                            [4] => Array
                                (
                                    [text] => E
                                    [value] => 0
                                )

                        )

                )

            [results] => Array
                (
                    [score] => 3
                    [percent] => 100
                    [is_pass] => 1
                    [grade] => A
                )
        )

    [field] => Array
        (
            [1.Quiz 1_name] => Array
                (
                            [text] => Third Choice
                            [isCorrect] => 1
                )

            [1] => Array
                (
                            [text] => Third Choice
                            [isCorrect] => 1
                )

            [2.Quiz 2_name] => Array
                (
                            [text] => First Choice
                            [isCorrect] => 0
                )

            [2] => Array
                (
                            [text] => First Choice
                            [isCorrect] => 0
                )
       )
)
```

<strong>ACCESSING QUIZ FIELDS AND RESULTS</strong>

```
echo $form_data['field'][1]['text']; /* outputs user's answer 'Third Choice' */
echo $form_data['field'][1]['isCorrect']; /* outputs whether they got the answer correct or not. Outputs '1' */

/* Give the user feedback on their answer */
if($form_data['field'][1]['isCorrect'] == 1)
{
    echo 'You got the answer correct!';
}
else
{
    echo 'You answered incorrectly.';
}

/* The entry results are in the $form_data['quiz'] key */
$quiz = $form_data['quiz'];

echo $quiz['results']['score']; /* output overall score - prints 3 */
echo $quiz['results']['percent'] . '%'; /* outputs overall percent - prints 100% */
echo $quiz['results']['is_pass']; /* if 1 then the user passed. If blank they failed - prints 1 */
echo $quiz['results']['grade']; /* outputs the grade (if configured) - prints A */

/* check if the user passed */
if($quiz['results']['is_pass'] == 1)
{
    echo 'You passed';
}
else
{
    echo 'You failed';
}
```

<strong>ACCESSING QUIZ GLOBAL INFORMATION</strong>
Like the Survey global information, the <code>$form_data['quiz']['global']</code> key contains the number of entries, all the field data (and how many were correct), plus additional details like the pass rate, score frequency and grade frequency.
<h2 id="poll">Poll</h2>
We've introduced a <code>$form_data['poll']</code> key which has global information about the poll results. An individual entry's poll information will remain in the $form_data['field'] key and can be accessed <a href="/v3/custom-templates-introduction/">as you would any other field</a>.

    Array
    (
        [poll] => Array
            (
                [global] => Array
                    (
                        [entry_count] => 5
                        [field_data] => Array
                            (
                                [1] => Array
                                    (
                                        [misc] => Array
                                            (
                                                [label] => Poll Field 1
                                            )
    
                                        [First Choice] => 1
                                        [Second Choice] => 3
                                        [Third Choice] => 1
                                    )
    
                                [2] => Array
                                    (
                                        [misc] => Array
                                            (
                                                [label] => Poll Field 2
                                            )
    
                                        [First Choice] => 1
                                        [Second Choice] => 0
                                        [Third Choice] => 0
                                    )
    
                                [3] => Array
                                    (
                                        [misc] => Array
                                            (
                                                [label] => Poll Field 3
                                            )
    
                                        [First Choice] => 0
                                        [Second Choice] => 1
                                        [Third Choice] => 1
                                    )
    
                            )
    
                    )
    
            )
    )

<strong>GLOBAL DATA</strong>
Poll's <code>$form_data['poll']['global']</code> key contains the number of poll entries, as well as the overall response count for each field option.