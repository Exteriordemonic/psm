import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import phone from "../../resources/assets/images/phone-icon.png";

const buttonprimary = `
    <button href="#" class="button button--primary text  main text--thin">
        Lorem ipsum
    </button>
`;
const buttonlight = `
    <button href="#" class="button button--textchange button--light text  main text--thin">
        Lorem ipsum
    </button>
`;

const buttonsecondary = `
    <button href="#" class="button button--secondary text  main text--thin">
        Lorem ipsum
    </button>
`;

const buttonicon = `
    <button href="#" class="button button--primary text main text--thin">
        <img class="button__icon"src="${phone}" alt="icon">
        Lorem ipsum
    </button>
`;

storiesOf("Elementy", module).add(
  "przyciski",
  () => `
    <h2 class="subtitle bold">Button-primary</h2>
    <hr>
    <br>
    <br>
    ${buttonprimary}
    <br>
    <br>
    <xmp>
        ${buttonprimary}
    </xmp>
    <h2 class="subtitle bold">Button-light</h2>
    <hr>
    <br>
    <br>
    ${buttonlight}
    <br>
    <br>
    <xmp>
     ${buttonlight}
    </xmp>
    <h2 class="subtitle bold">Button-white</h2>
    <hr>
    <br>
    <br>
    ${buttonsecondary}
    <br>
    <br>
    <xmp>
    ${buttonsecondary}
    </xmp>
    <h2 class="subtitle bold">Button-icon</h2>
    <hr>
    <br>
    <br>
    ${buttonicon}
    <br>
    <br>
    <xmp>
    ${buttonicon}
    </xmp>


  `
);

export default buttonprimary;
