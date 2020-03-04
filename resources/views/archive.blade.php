@extends('layouts.app')

  @section('content')

  @php
    $current = get_queried_object();
    
    if ($current->name == 'produkty') {
      $cats = get_categories();
      $hero = option('produkty');
    } else {
      $cats = get_categories();
      $products = get_posts( array(
        'post_type' => 'produkty',
        'category' => $current -> term_id,
      ) );

      $img = get_field('hero', $current->taxonomy.'_'.$current->term_id);

      if(!$img)  $img = option('produkty')['img'];
      $hero = [
        'img' => $img,
        'content' => ['title'=>$current->name],
      ];
    }
    
  @endphp

  @include('layouts.components.small-hero', ['data'=>$hero])

  @if ($current->name == 'produkty')
    @include('layouts.components.cats', ['data'=>$cats])
  @else
    @include('layouts.components.products', ['data'=>$products, 'cats'=>$cats ])
  @endif

  {{-- @dump($products)
  @dump($current -> term_id) --}}

@endsection