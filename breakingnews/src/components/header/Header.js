import React from "react";
import style from "./header.module.css";
import { useState, useEffect } from "react";
import { FaLightbulb, FaRegMoon } from "react-icons/fa";
const Header = ({ modeSwitch, lightMode }) => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function widthDynamic() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", widthDynamic);

    widthDynamic();
    console.log(width);
  }, [width]);
  // console.log(modeSwitch,lightMode)
  return (
    <div className={style.mainBackground} style={{ width: `${width}px` }}>
      <div className={style.logoContainer}>
        <p>Breaking News</p>
      </div>
      <div className={style.buttonContainer}>
        <button>{lightMode ? <FaLightbulb /> : <FaRegMoon />}</button>
      </div>
    </div>
  );
};

export default Header;
