import React from "react";
import styles from "./appBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
function Navbar(props) {
  const menuBar = props.appBar.menu;

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <img
          class={`navbar-brand ${styles.w_20} ${styles.logo_width}`}
          href="#"
          src={props.appBar.logoUrl}
        />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class={`${styles.header} navbar-nav `}>
            <li class="nav-item">
              <div className="d-flex align-items-center">
                {menuBar.map((item) => (
                  <a class="nav-link active" aria-current="page" href="#">
                    {item}
                  </a>
                ))}
                <SearchIcon />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
