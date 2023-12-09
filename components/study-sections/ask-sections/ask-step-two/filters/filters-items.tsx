import React, { useState } from "react";
import FilterList from "./filter-list";
import { i18n } from "next-i18next";

type TypeProps = {
  Ratings: {
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

const FiltersItems = (props: TypeProps) => {
  const { Ratings, Price } = props;
  return (
    <div>
      <div className="study__filters__list">
        <h3 className="fillter_title">{Ratings.Title}</h3>
        <ul>
          {Ratings.List.map((item, index) => (
            <li key={index}>
              <FilterList Item={item} Star={true} Name={Ratings.Name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="study__filters__list">
        <h3 className="fillter_title">{Price.Title}</h3>
        <ul>
          {Price.List.map((item, index) => (
            <li key={index}>
              <FilterList Item={item} Star={false} Name={Price.Name} />
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="btn btn-remove">
        {i18n?.t("common:DeleteAll")}
      </button>
    </div>
  );
};

export default FiltersItems;
