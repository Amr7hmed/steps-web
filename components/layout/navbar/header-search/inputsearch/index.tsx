import { i18n } from "next-i18next";
import React, { Dispatch, SetStateAction, useState } from "react";

const SearchInput = () => {
  const [showInputSearch, setShowInputSearch] = useState(false);
  return (
    <>
      <div
        className={`header__search__data__input input-group ${
          showInputSearch === false ? "hide-input-search" : "show-input-search"
        }`}
      >
        <input
          type="text"
          className="form-control"
          placeholder={i18n?.t("common:inputsearch")}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowInputSearch(!showInputSearch)}
          >
            <img src="/assets/icons/icon-search.png" alt="steps Logo" />
          </button>
        </div>
      </div>

      <button
        className={`btn btn-open-search ${
          showInputSearch === true ? "hide" : "show"
        }}`}
        type="button"
        onClick={() => setShowInputSearch(!showInputSearch)}
      >
        <img src="/assets/icons/icon-search.png" alt="steps Logo" />
      </button>
    </>
  );
};

export default SearchInput;
