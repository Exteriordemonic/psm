@php 
$copy = option('copy');
$made = option('madeby');
@endphp

<footer class="section section--dark section--half-p footer">
    <div class="container container--fluid ">
        <div class="footer__wrapper">
            <p class="footer__copy text">
                {{ $copy }}
            </p>
            <a href="http://iqconnect.pl/">
                {!! image($made['id'], 'full', 'footer__madeby') !!}
            </a>
        </div>
    </div>
</footer>