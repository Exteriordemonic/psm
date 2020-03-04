<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$Realization = new FieldsBuilder('Realization');

$Realization
    ->setLocation('post_type', '==', 'realizacje');

$Realization
    ->addGallery('gallery');
return $Realization;
