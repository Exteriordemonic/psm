<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$projects = new FieldsBuilder('projects');

$projects
    ->addGroup('projects', ['label'=>''])
        ->addRelationship('posts', ['post_type'=>'page'])

        ;
return $projects;