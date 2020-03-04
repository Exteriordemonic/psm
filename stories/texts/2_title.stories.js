import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';

storiesOf('Texts', module)
  .add('Title', () => `
  <h2 class="subtitle">
    Title
  </h2>
  <hr />
  <h2 class="title">
    Lorem ipsum
  </h2>
  <xmp> 
    <h2 class="title">
      Lorem ipsum
    </h2> 
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Title Light
  </h2>
  <hr />
  <h2 class="title title--light" style="background: #364ea2">
    Lorem ipsum
  </h2>

  <xmp> 
    <h2 class="title title--light">
      Lorem ipsum
    </h2> 
  </xmp>
  <br><br>

  `);
