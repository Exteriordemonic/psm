
  import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';

storiesOf('Texts', module)
  .add('Large text', () => `
  <h2 class="subtitle">
    Large text
  </h2>
  <hr />
  <p class="large-text">
    Lorem ipsum
  </p>
  <xmp> 
    <p class="large-text">
      Lorem ipsum
    </p> 
  </xmp>
  <br><br>
  `);
