import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';

const textSection = `
    <section class="section text-section">
        <div class="container">
            <div class="row"> 
                <!-- Header -->
                <header class="section__header section-header">
                    <img class="section-header__img" src="static/media/boat.09b109ec.png">
                    <h2 class="section-header__title title text--center">
                        Doskonała lokalizacja
                    </h2>
                </header>
                <!-- /Header -->

                <!-- Content -->
                <p class="text-section__content text text--center">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit,
                    eget tincidunt nibh pulvinar a.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar 
                    a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget 
                    malesuada.Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, 
                    convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
                <!-- /Content -->

                <!-- Footer -->
                <footer class="section__footer">
                <a href="#" class="button button--primary text  main text--thin">
                    Lorem ipsum
                </a>
                </footer>
                <!-- /Footer -->
            </div>
        </div>
    </section>
`;

storiesOf('Layouts', module)
    .add('Text section', () => `
    <h2 class="subtitle bold">Text section</h2>
    <hr>
    <br>
    <br>
    ${textSection}
    <br>
    <br>
    <xmp>
    ${textSection}
    </xmp>
  `);
