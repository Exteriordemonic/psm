import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

import image from "../../resources/assets/images/sofa-bg.jpg";

const Avatar = `
<div class="avatar text">
    <img class="avatar__image" src="${image}">
    <p class="avatar__name text--bold">
      Pani kanapa
    </p>
    <p class="small-text text--thin">
      tel:
      <a href="#" class="avatar__link text small-text ">
        +48 500 526 600
      </a>
      <br/>
      mail:
      <a href="#"  class="avatar__link text small-text ">
        biuro@apartamentyjuno.pl
      </a>
    </p>
</div>`;

export const avatarsection = `
<section class="avatar-section">
  <div class="container">
    <div class="avatar-section__content">
      <div class="avatar-section__boxes">
      </div>
      <div class="avatar-section__desc">

          <h2 class="section-header card-block__title">
            <span class="avatar-section__coltext--primary section-header__sub--left subtitle">
              Biuro sprzedaży
            </span>
          </h2>
          <p class="text card-block__text avatar-section__coltext--dark">
            Osiedle Juno to nowoczesne 13-rodzinne bloki, które osadzone zostały w pięknym mazurskim krajobrazie, nad brzegiem jeziora Juno w Mrągowie.
          </p>
		  <div class="avatar-section__boxes">
		  <!-- Avatar -->
			${Avatar}
			${Avatar}
		  <!--/ Avatar -->

        </div>
      </div>
    </div>
    </div>
  </section>
`;

storiesOf("Layouts", module).add(
  "Avatar-section",
  () => `
    <h2 class="subtitle bold">Avatar-section</h2>
    <hr>
      ${avatarsection}
    <br>
    <br>
    <xmp>
      ${avatarsection}
    </xmp>
  `
);
