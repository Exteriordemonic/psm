@extends('layouts.app')

  @section('content')

  @php
    $current = get_queried_object();
  
    $cats = get_categories();
    $projects = get_posts( array(
      'post_type' => 'realizacje',
      'category' => $current -> term_id,
    ) );

    $img = get_field('hero', $current->taxonomy.'_'.$current->term_id);

    if(!$img)  $img = option('realizacje')['img'];
    $hero = [
      'img' => $img,
      'content' => ['title'=>$current->name],
    ];
    
    
  @endphp


@endsection