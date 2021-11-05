import React from "react";
import style from "./NavMenu.module.css";

export default function NavMenu({ isNavOpen }) {
  return (
    <nav className={`${style.navBar} ${!isNavOpen ? style.navClosed : ""}`}>
      <ul className={style.navList}>
        <li className={`${style.navListItem} ${style.linkOne}`}>Home</li>
        <li className={`${style.navListItem} ${style.linkTwo}`}>Meals</li>
        <li className={`${style.navListItem} ${style.linkThree}`}>
          <a href="#about">About</a>
        </li>
        <li className={`${style.navListItem} ${style.linkFour}`}>Blog</li>
        <li className={`${style.navListItem} ${style.linkFive}`}>Contact</li>
      </ul>
    </nav>
  );
}
