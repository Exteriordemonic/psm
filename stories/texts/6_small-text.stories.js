
  import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';

storiesOf('Texts', module)
  .add('Small text', () => `
  <h2 class="subtitle">
    Small text
  </h2>
  <hr />
  <p class="small-text">
    Lorem ipsum
  </p>
  <xmp> 
    <p class="small-text">
      Lorem ipsum
    </p> 
  </xmp>
  <br><br>
  `);
