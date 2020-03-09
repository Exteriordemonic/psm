@php
    $hero = $data['hero'];
    $title = $hero['content']['title'];
    $img = $hero['bg']['img']['id'];
    $text = $hero['content']['text'];
@endphp

<section class="hero">
    @if($movie) 
        
    @else
        {!! image($img, 'full', 'hero__bg') !!}
    @endif
    <div class="container">
        <div class="hero__wrapper">
            <h2 class="hero__title title">
                {!! $title !!}
            </h2>
            <p class="hero__text text">
                {!! $text !!}
            </p>
        </div>
    </div>
</section>
