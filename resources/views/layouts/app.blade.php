<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp style="overflow-x: hidden">
    <!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7T8LV7"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
    <div class="preloader" preloader ></div>

    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap" role="document" id="skrollr-body">
      <div class="content">
        <main class="main">
          @yield('content')
        </main>
        @php do_action('get_footer') @endphp
        @include('partials.footer')
        @php wp_footer() @endphp
        </div>
      </div>
    </body>
</html>
		