<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$media = new FieldsBuilder('media');

$media
    ->setLocation('attachment', '==', 'all');
  
$media
    ->addText('test');
return $media;