import {
  storiesOf
} from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import {
  avatarsection
} from "./avatar-section.stories";
import {
  formbox
} from "../blocks/form-box.stories";

const contactsection = `
<section class="contact-section">

		<div class="contact-section__boxes">

	${avatarsection}
	${formbox}
	</div>
	</div>
</section>
`;

storiesOf("Layouts", module).add(
  "Contact-section",
  () => `
	  <h2 class="subtitle bold">Contact-section</h2>
	  <hr>
		${contactsection}
	  <br>
	  <br>
	  <xmp>
		${contactsection}
	  </xmp>
	`
);
