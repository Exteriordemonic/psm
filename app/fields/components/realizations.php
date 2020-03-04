<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$realizations = new FieldsBuilder('realizations');

$realizations
    ->addRelationship('realizations', ['post_type'=>'realizacje']);

return $realizations;