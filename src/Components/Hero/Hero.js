import React from "react";
import style from "./Hero.module.css";

import HeroHeading from "./HeroHeading";

export default function Hero(props) {
  return (
    <section className={style["hero-container"]}>
      <HeroHeading
        headingText="Vegan By Rene"
        subHeadingText="Health Focused Catering for your perfect event"
      />
    </section>
  );
}
