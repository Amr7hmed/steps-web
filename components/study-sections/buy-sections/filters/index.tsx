import React, { useState } from "react";
import FiltersItems from "./filters-items";
import { i18n } from "next-i18next";
import Link from "next/link";

type TypeProps = {
  Specialization: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
  Price: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
};

const BuyStudyFilters = (props: TypeProps) => {
  const { Specialization, Price } = props;
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
        <FiltersItems Specialization={Specialization} Price={Price} />

        <div className="study__filters__btn">
          <button className="btn" type="button" onClick={() => setShow(!show)}>
            <img src="/assets/icons/icon-angles-left-solid.svg" alt="" />
          </button>
        </div>

        <div className="study__filters__btn-back">
          <Link className="btn btn-send btn-light" href={"/"}>
            {i18n?.t("common:Back")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyStudyFilters;
