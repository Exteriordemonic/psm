import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';

storiesOf('Texts', module)
  .add('Subtitle', () => `
  <h2 class="subtitle">
    Subtitle
  </h2>
  <hr />
  <h2 class="subtitle">
    Lorem ipsum
  </h2>
  <xmp>
    <h2 class="subtitle">
      Lorem ipsum
    </h2>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Subitle Light
  </h2>
  <hr />
  <h2 class="subtitle subtitle--light" style="background: #364ea2">
    Lorem ipsum
  </h2>

  <xmp>
    <h2 class="subtitle subtitle--light">
      Lorem ipsum
    </h2>
  </xmp>
  <br><br>
  `);

