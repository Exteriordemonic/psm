@php
    $projects = $data['projects']['posts'];
@endphp

@if($projects)
<section class="section projects section--half-p">
    <div class="container">
        <ul class="projects__list">
            @foreach ($projects as $item)
            @php
                $image = get_post_thumbnail_id($item);
                $link = get_permalink($item);
                $title =  $item->post_title;
            @endphp
            <li class="projects__elem">
                <a href="{{ $link }}" data-ajax-link>
                    {!! image($image, 'medium', 'projects__image') !!}
                    <h4 class="projects__title major-text">
                        {{ $title }}
                    </h4>
                </a>
            </li>
            @endforeach
        </ul>
    </div>
</section>
@endif