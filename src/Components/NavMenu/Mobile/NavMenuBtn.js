import React, { useState } from "react";
import NavMenu from "./NavMenu";
import style from "./NavMenuBtn.module.css";

export default function NavMenuBtn() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className={style.navMenuBtnContainer}>
      <input
        type="checkbox"
        id="navMenuCheckBox"
        className={style.navMenuCheckBox}
      />
      <label
        htmlFor="navMenuCheckBox"
        className={style.menuBtn}
        onClick={() => {
          toggleNav();
        }}
      >
        <span className={style.navigationIcon}></span>
      </label>
      <div className={style.navBackground}></div>
      <NavMenu isNavOpen={isNavOpen} />
    </div>
  );
}
