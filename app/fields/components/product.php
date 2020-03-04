<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$product = new FieldsBuilder('product');

$product
    ->addImage('img')
    ->addGroup('content', ['label'=>''])
        ->addTextarea('title', ['label'=>'Tytuł','new_lines'=>'br', 'rows'=>2])
        ->addTextarea('text', ['label'=>'Treść','new_lines'=>'br', 'rows'=>4])
        ->addLink('link', ['label'=>'Link'])
        ;

return $product;                                            