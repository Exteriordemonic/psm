<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$gallery = new FieldsBuilder('gallery');

$gallery
    ->addGroup('gallery', ['label'=>''])
        ->addText('title', ['label'=>'Tytuł'])
        ->addGallery('images', ['label'=>'Zdjęcia']);
        ;
return $gallery;