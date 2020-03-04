import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

import image from "../../resources/assets/images/wiz-mwo-01.png";

const fullWidthImage = `
    <section class="full-img">
      <img class="full-img__bg" src="${image}" alt="background">
    </section>
`

storiesOf("Layouts", module).add(
  "Full width image",
  () => `
    ${fullWidthImage}
    <br>
    <br>
    <xmp>
        ${fullWidthImage}
    </xmp>

  `
);
