import React from "react";
import styles from "./NavBar.module.css";
import logoImg from "../assets/img/logo-purple-transparent-bg.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles["navbar-brand"]} href="/">
        <img
          className={styles["navbar-brand__logo"]}
          src={logoImg}
          alt="Pushana logo"
        />
        <span className={styles["navbar-brand__name"]}>Pushana</span>
      </a>
    </div>
  );
};

export default NavBar;
