<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$hero = new FieldsBuilder('hero');

$hero
    ->addRepeater('hero')
        ->addImage('img')
        ->addFile('movie')
        ->addGroup('content', ['label'=>''])
            ->addText('name', ['label'=>'Nazwa sekcji'])
            ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2])
            ->addTextarea('text', ['label'=>'Treść','new_lines'=>'br', 'rows'=>4])
            ->addLink('link', ['label'=>'Link']);

return $hero;
return $hero;