<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$tabs = new FieldsBuilder('tabs');

$tabs
    ->addRepeater('tabs')
        ->addImage('img')
        ->addGroup('content', ['label'=>''])
            ->addText('name', ['label'=>'Nazwa sekcji'])
            ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2])
            ->addTextarea('text', ['label'=>'Treść','new_lines'=>'br', 'rows'=>4])
            ->addLink('link', ['label'=>'Link']);

return $tabs;