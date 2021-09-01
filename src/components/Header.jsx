import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div className={"heading"}>
          <div>
            <h1 className={"headingText"} style={{ color: "gold" }}>
              SEAMAN BY CHOICE
            </h1>
            <h1 className={"headingText"} style={{ color: "red" }}>
              HINDI BY NO CHOICE
            </h1>
          </div>
          <h3 className={"smaller-txt"}>Marino na may Pangarap</h3>
          <img
            className={"mainLogo"}
            src="/images/MMlogo.jpg"
            height="120px"
            alt="Modern Marino"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
