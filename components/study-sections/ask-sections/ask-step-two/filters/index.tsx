import React, { useState } from "react";
import FiltersItems from "./filters-items";
import { i18n } from "next-i18next";
import Link from "next/link";

type TypeProps = {
  Price: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
  Ratings: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
};

const AskStudyFilters = (props: TypeProps) => {
  const { Price, Ratings } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="position-relative">
      <div
        className={
          show === false
            ? "study__filters hide-filter"
            : "study__filters show-filter"
        }
      >
        <FiltersItems Ratings={Ratings} Price={Price} />

        <div className="study__filters__btn">
          <button className="btn" type="button" onClick={() => setShow(!show)}>
            <img src="/assets/icons/icon-angles-left-solid.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskStudyFilters;
