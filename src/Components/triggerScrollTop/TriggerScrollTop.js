import React from "react";

const BtnScrollUp = () => (
  <button
    type="button"
    className="trigger-scrollTop"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    <span className="icon-arrow-up"></span>
    <span>ПОЧЕТОК</span>
  </button>
);

export default BtnScrollUp;
