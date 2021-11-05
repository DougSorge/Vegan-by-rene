import React from "react";
import style from "./HeroHeading.module.css";

export default function HeroHeading(props) {
  return (
    <div>
      <h1 className={style["hero-heading"]}>{props.headingText}</h1>
      <h2 className={style["sub-heading"]}>{props.subHeadingText}</h2>
    </div>
  );
}
