<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$option_page = new FieldsBuilder('option');

$option_page
    ->setLocation('options_page', '==', 'acf-options-ustawienia-strony');
  
$option_page
    ->addTab('Footer', ['label' => 'Ustawienia główne', 'placement' => 'left'])
        ->addText('copy', ['wrapper'=>['width'=>'33%']])
        ->addImage('madeby', ['wrapper'=>['width'=>'33%']])
    ;
        
return $option_page;