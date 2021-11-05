import React from "react";
import style from "./Heading.module.css";

export default function Heading({ text }) {
  return <h2 className={style["section-heading"]}>{text}</h2>;
}
