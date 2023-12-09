import React, { Dispatch, SetStateAction } from "react";

const ButtonMenuBar = () => {
  return (
    <div className="header__search__data__menu-bar">
      <button
        className="btn btn-menu-bar"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#openMoudeMenu"
      >
        <img src="/assets/icons/icon-open-menue.png" alt="steps Logo" />
      </button>
    </div>
  );
};

export default ButtonMenuBar;
