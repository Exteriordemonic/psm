@php
    $title = $data['gallery']['title'];
    $gallery = $data['gallery']['images'];
@endphp

@if($gallery)
<section class="section section--dark section--half-p gallery">
    <div class="container">
        <h3 class="gallery__title subtitle subtitle--light">
            {!! $title !!}
        </h3>
    </div>
    <ul class="gallery__slider">
        @foreach ($gallery as $item)
        <li class="gallery__elem">
            <div class="gallery__img-wrapper">
                {!! image($item['ID'], 'full', 'gallery__image') !!}
            </div>
        </li>
        @endforeach
    </ul>
    <div class="gallery__buttons">
        <button class="gallery__button gallery__button--prev" data-gallery-button="prev">
            @include('svg.slider-arrow-left')
        </button>
        <button class="gallery__button gallery__button--next" data-gallery-button="next">
            @include('svg.slider-arrow-right')
        </button>
    </div>
</section>
@endif