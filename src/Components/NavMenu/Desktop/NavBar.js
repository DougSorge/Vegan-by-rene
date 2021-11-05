import React from "react";
// import Link from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={style["header"]}>
      <nav>
        <ul className={style["navbar"]}>
          <li className={style["nav-item"]}>
            <a href="https://">Home</a>
          </li>

          <li className={style["nav-item"]}>
            <a href="https://">Menu</a>
          </li>

          <li className={style["nav-item"]}>
            <a href="https://">Services</a>
          </li>

          <li className={style["nav-item"]}>
            <a href="#about">About</a>
          </li>

          <li className={style["nav-item"]}>
            <a href="https://">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
