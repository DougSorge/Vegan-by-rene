import React from "react";
import style from "./About.module.css";

import image from "../../images/rene.jpg";

import Heading from "../Reusables/Heading";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <div className={style["about-description"]}>
        <Heading text="About our Company" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
          fusce ut placerat orci nulla pellentesque. Aliquam vestibulum morbi
          blandit cursus risus. Nisi vitae suscipit tellus mauris a diam
          maecenas. Porttitor leo a diam sollicitudin. Scelerisque fermentum dui
          faucibus in ornare. Netus et malesuada fames ac turpis egestas sed
          tempus urna. Mauris ultrices eros in cursus turpis massa tincidunt dui
          ut.
        </p>
        <p>
          Lectus mauris ultrices eros in cursus turpis. Odio ut enim blandit
          volutpat maecenas volutpat blandit. Porta nibh venenatis cras sed
          felis eget velit. Sapien eget mi proin sed libero enim sed. Ac
          tincidunt vitae semper quis lectus nulla. Id venenatis a condimentum
          vitae sapien. Blandit cursus risus at ultrices mi tempus imperdiet
          nulla. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus et. Eu volutpat odio facilisis mauris sit amet
          massa.
        </p>
        <p>
          Tellus rutrum tellus pellentesque eu. Quis ipsum suspendisse ultrices
          gravida dictum. Eget nunc lobortis mattis aliquam faucibus purus in
          massa. Vel risus commodo viverra maecenas accumsan lacus vel. Quis
          imperdiet massa tincidunt nunc pulvinar sapien et. Mollis aliquam ut
          porttitor leo a diam sollicitudin. Nisi porta lorem mollis aliquam ut
          porttitor leo a. Non pulvinar neque laoreet suspendisse interdum
          consectetur libero id faucibus. Nec nam aliquam sem et tortor
          consequat id porta nibh. Et malesuada fames ac turpis egestas integer.
          Risus in hendrerit gravida rutrum. Risus ultricies tristique nulla
          aliquet enim.
        </p>
      </div>
      <div className={style["about-image"]}>
        <figure>
          <img src={image} alt="Trulli" />
          <figcaption>Founder of the Company</figcaption>
        </figure>
      </div>
    </section>
  );
}
