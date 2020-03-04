<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$gallery = new FieldsBuilder('gallery');

$gallery
    ->addGallery('gallery');

return $gallery;                                            