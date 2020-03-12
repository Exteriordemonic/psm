<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$text = new FieldsBuilder('text');

$text
    ->addGroup('text', ['label'=>''])
        ->addWysiwyg('content', ['label'=>'']);
        ;
return $text;