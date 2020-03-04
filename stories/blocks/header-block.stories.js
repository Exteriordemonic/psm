import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';
import boat from '../../resources/assets/images/boat.png';

export const sectionHeader = `
  <h2 class="section-header">
    <span class="section-header__title title text--center">
      Doskonała lokalizacja
    </span>
    <span class="section-header__sub subtitle text--center">
      Wysoki standard
    </span>
  </h2>
`;

export const HeaderSpecial = `
  <div class="section-header">
    <img class="section-header__img" src="${boat}">
    <h2 class="section-header__title title text--center">
      Doskonała lokalizacja
    </h2>
  </div>
`;

export const HeaderLeft = `
  <h2 class="section-header">
    <span class="title section-header__title--left">
      Dlaczego warto
    </span>
    <span class="section-header__sub--left subtitle">
      tu zamieszkać?
    </span>
  </h2>
`;

storiesOf('Elementy', module)
  .add('Nagłówki', () => `
    <h2 class="subtitle">
      Header
    </h2>
    <hr />
    ${sectionHeader}
    <xmp>
      ${sectionHeader}
    </xmp>
    <br><br>
    <h2 class="subtitle">
      Header Special
    </h2>
    <hr />
      ${HeaderSpecial}
    <xmp>
      ${HeaderSpecial}
    </xmp>
    <br><br>
    <h2 class="subtitle">
      Header Left
    </h2>
    <hr />
    <div style="background-color: #364ea2; padding: 20px;">
      ${HeaderLeft}
    </div>
    <xmp>
      ${HeaderLeft}
    </xmp>
    <br><br>
    `);