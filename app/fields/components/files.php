<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$files = new FieldsBuilder('files');

$files
    ->addText('files_title', ['label'=>'Nazwa'])
    ->addRepeater('files')
        ->addFile('file')
        ->addImage('thumb');
    ;

return $files;                                        