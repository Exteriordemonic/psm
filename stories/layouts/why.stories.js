import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';
import sectionbg from '../../resources/assets/images/info-section-bg.jpg';
import icon from '../../resources/assets/images/icon-box.png';

const iconBox = `
  <div class="icon-box">
    <h3 class="text text--light">
      Rodzinnie i komfortowo
    </h3>
    <div>
      <img class="icon-box__icon" src="${icon}" alt="icon">
    </div>
    <hr class="icon-box__line">
    <h3 class="text text--light">
      Rodzina, komfort, <br>
      bezpieczeństwo
    </h3>
    <p class="small-text icon-box__desc">
      Nasze apartamenty na Osiedlu Juno są doskonałą propozycją dla rodzin, turystów marzących o mieszkaniu na Mazurach, a także dla ludzi, którzy cenią sobie komfort. 
    </p>  
  </div>
`

const why = `
<section class="info-section">
    <img class="info-section__bg" src="${sectionbg}" alt="background">

    <div class="info-section__content">
      <div class="info-section__boxes">
        <!-- Icon Box -->
          ${iconBox}
          ${iconBox}
          ${iconBox}
        <!--/ Icon Box -->
      </div>
      <div class="info-section__desc">
        <div class="card-block">
          <h2 class="section-header card-block__title">
            <span class="title section-header__title--left">
              Dlaczego warto
            </span>
            <span class="section-header__sub--left subtitle">
              tu zamieszkać?
            </span>
          </h2>
          <p class="text card-block__text">
            Osiedle Juno to nowoczesne 13-rodzinne bloki, które osadzone zostały w pięknym mazurskim krajobrazie, nad brzegiem jeziora Juno w Mrągowie.
          </p>

          <button href="#" class="button button--secondary text  main text--thin">
            Znajdź swoje mieszkanie
          </button>
        </div>
      </div>
    </div>
  </section>
`

storiesOf('Layouts', module)
  .add('Why', () => `
    <h2 class="subtitle bold">Why section</h2>
    <hr>
      ${why}
    <br>
    <br>
    <xmp>
      ${why}
    </xmp>

  `);
