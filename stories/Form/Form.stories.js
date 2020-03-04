import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

const Input = `

  <p>
  <label class="form__label text text--thin" for="name">
  Imie i Nazwisko</label></p>
  <input class="form__input" type="text" name="name" id="name" placeholder="" />

`;
const Message = `
  <p>
  <label class="form__label text text--thin" for="name">
 Wiadomość</label>
  </p>
  <textarea class="form__textarea" cols="40" rows="8" name="textarea" ></textarea>
`;

const Checkbox = `
<div class="form__checkcontainer">
  <input class="form__check" type="checkbox" name="checkbox">
  <label class="form__labelcheck small-text" for="name">
    Zapoznałem się z Polityką prywatności serwisu apartamentyjuno.pl oraz wyrażam zgodę na przetwarzanie przez ...Nazwa firmy,  ...adres, udostępnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem  biuro@apartamentyjuno.pl, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny.
  </label>
</div>
`;

storiesOf("Elementy/Form", module).add(
    "Input",
    () => `
    <h2 class="subtitle bold">Input</h2>
    <hr>
    <br>
    <br >
    ${Input}
    </div>
    <br>
    <br>
    <xmp>
    ${Input}
    </xmp>
    <h2 class="subtitle bold">Message</h2>
    <hr>
    <br>
    <br>
    ${Message}
    <br>
    <br>
    <xmp>
    ${Message}
    </xmp>
    <h2 class="subtitle bold">Checkbox</h2>
    <hr>
    <br>
    <br>
    ${Checkbox}
    <br>
    <br>
    <xmp>
    ${Checkbox}
    </xmp>
  `
);

export default Input;