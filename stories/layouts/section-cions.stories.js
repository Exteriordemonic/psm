import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';
import icon from '../../resources/assets/images/wiz-mwo-01.png';

const textSection = `
    <section class="section icons-section">
        <div class="container">
            <div class="row"> 
                <!-- Header -->
                <header class="section__header section-header">
                    <h2 class="section-header__title title text--center">
                        Doskonała lokalizacja
                    </h2>
                    <span class="section-header__sub subtitle text--center">
                      Wysoki standard
                    </span>
                </header>
                <!-- /Header -->

                <!-- Content -->
                <div class="icons-section__content">
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                  <div class="icon-text">
                    <img class="icon-text__icon"src="${icon}" alt="icon">
                    <p class="text icon-text__text">
                      Ścieżka rowerowa<br>
                      do miasta
                    </p>
                  </div>
                </div>
                <!-- /Content -->

                <!-- Footer -->
                <footer class="section__footer">
                <a href="#" class="button button--primary text  main text--thin">
                    Dowiedz się więcej 
                </a>
                </footer>
                <!-- /Footer -->
            </div>
        </div>
    </section>
`;

storiesOf('Layouts', module)
    .add('Icons section', () => `
    <h2 class="subtitle bold">Icons Section</h2>
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
