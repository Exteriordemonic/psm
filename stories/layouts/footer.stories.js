import { storiesOf } from '@storybook/html';

import '../../resources/assets/styles/main.scss';
import bg from '../../resources/assets/images/footer.png';
import logo from '../../resources/assets/images/footer-logo.png';
import iq from '../../resources/assets/images/iq.png';

const footer = `
<footer class="footer">
  <img class="footer__bg" src="${bg}" alt="background">
  <div class="container">
    <div class="footer__content">
      <div class="footer__left">
        <img class="footer__logo" src="${logo}" alt="logo">
        <nav class="footer__nav-wrapper">
          <ul class="footer__nav">
            <li>
              <a href="#" class="small-text footer__link">
                O inwestycji
              </a>
            </li>
            <li>
              <a href="#" class="small-text footer__link">
                Znajdź mieszkanie
              </a>
            </li>
            <li>
              <a href="#" class="small-text footer__link">
                Wizualizacje
              </a>
            </li>
            <li>
              <a href="#" class="small-text footer__link">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" class="small-text footer__link">
                Znajdź mieszkanie
              </a>
            </li>
            <li>
              <a href="#" class="small-text footer__link">
                Wizualizacje
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="http://iqconnect.pl/">
        <img class="footer__by" src="${iq}" alt="logo">
      </a>
    </div>
  </div>
</footer>
`;

storiesOf('Layouts', module)
    .add('Footer', () => `
    <h2 class="subtitle bold">Footer</h2>
    <hr>
    <br>
    <br>
    ${footer}
    <br>
    <br>
    <xmp>
    ${footer}
    </xmp>
  `);
