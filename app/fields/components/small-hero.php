<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$small_hero = new FieldsBuilder('small-hero');

$small_hero
    ->addImage('img')
    ->addGroup('content', ['label'=>''])
        ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2]);

return $small_hero;