<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$flex = new FieldsBuilder('flex');

$flex
    ->addRepeater('flex')
        ->addImage('img')
        ->addGroup('content', ['label'=>''])
            ->addSelect('position', ['label'=>'Pozycja zdjęcia'])
                ->addChoice('left')
                ->addChoice('right')
            ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2])
            ->addTextarea('text', ['label'=>'Treść','new_lines'=>'br', 'rows'=>4])
            ->addLink('link', ['label'=>'Link']);

return $flex;                                            