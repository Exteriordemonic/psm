<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$food = new FieldsBuilder('food');

$food
    ->setLocation('post_type', '==', 'oferty');
  
$food
    ->addTab('Ustawienia główne', ['placement' => 'left'])
        ->addFile('menu')
    ->addTab('Zdjęcia', ['placement' => 'side'])
        ->addImage('hover', ['label'=>'Zdjęcia po najechaniu myszką'])
    ->addFields(get_field_partial('partials.builder'));
return $food;