<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$hero = new FieldsBuilder('hero');

$hero
    ->addGroup('hero', ['label'=>''])
        ->addGroup('bg', ['label'=>'', 'wrapper'=>['width'=>'50%']])
            ->addImage('img')
            ->addFile('movie')
        ->endGroup()
        ->addGroup('content', ['label'=>'', 'wrapper'=>['width'=>'50%']])
            ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2])
            ->addTextarea('text', ['label'=>'Treść','new_lines'=>'br', 'rows'=>4])
        ;
return $hero;