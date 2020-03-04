@php    
  $phone = get_field('phone','options');
  $mail = get_field('mail','options'); 

  $sm = get_field('icons');
  $header_img = option('header_img')['id'];
@endphp

<header class="header" data-menu>
  <div class="container container--fluid">
    <div class="header__wrapper">
      <a class="header__brand-wrapper" href="{{ home_url('/') }}">
        <h1 class="header__brand">
          @include('svg.logo')
        </h1>
      </a>
      @include('blocks.hamburger')
      @include('blocks.hamburger', ['class'=>'header__hamburger--close hamburger--close'])
      <nav class="header__nav nav">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'menu']) !!}
        @endif
      </nav>
    </div>
  </div>
</header>
