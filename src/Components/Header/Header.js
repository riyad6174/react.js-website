import React from "react";
import classes from "./header.module.css";
function Header() {
  return (
    <>
      <div className={classes.container}>
        <d className={classes.headerBody}>
          <h1 className={classes.react}>React</h1>
          <p className={classes.paragraph}>
            A JavaScript library for building user interfaces
          </p>
          <div className={classes.inputs}>
            <input type="button" value="Set Started" />
            <input type="button" value="Take the Tutorial &times;" />
          </div>
        </d>
      </div>
    </>
  );
}

export default Header;
