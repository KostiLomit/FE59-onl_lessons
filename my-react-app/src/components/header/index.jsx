import { useState } from "react";
import { DropdownBtn } from "../dropdown/dropdownBtn";
import styles from "./index.scss";

export const Header = ({ setPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="hader__container">
          <div className="header__log">
            <img src="../" alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__el">
                <button
                  className="header__link"
                  onClick={() => setPage("home")}
                >
                  Home
                </button>
              </li>
              <li className="header__el">
                {/* <button
                  className="header__link"
                  onClick={() => setPage("Homework")}
                >
                  Homework
                </button> */}
                <DropdownBtn openDropdown={false} setPage={setPage}></DropdownBtn>
              </li>
              <li className="header__el">
                <button
                  className="header__link"
                  onClick={() => setPage("ToDo")}
                >
                  ToDo-list
                </button>
              </li>
              <li className="header__el">
                <button
                  className="header__link"
                  onClick={() => setPage("Test")}
                >
                  Test
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
