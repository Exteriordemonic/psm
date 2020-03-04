<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$rooms = new FieldsBuilder('rooms');

$rooms
    ->setLocation('post_type', '==', 'pokoje');
  
$rooms
    ->addTab('Ustawienia główne', ['placement' => 'left'])
        ->addText('ppl', ['label'=>'liczba osób', 'wrapper'=>['width'=>'33%']])
        ->addText('price', ['label'=>'price', 'wrapper'=>['width'=>'33%']])
    ->addTab('Zdjęcia', ['placement' => 'side'])
        ->addImage('hover', ['label'=>'Zdjęcia po najechaniu myszką'])
    ->addFields(get_field_partial('partials.builder'));
return $rooms;