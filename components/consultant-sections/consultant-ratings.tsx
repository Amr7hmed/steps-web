import { i18n } from "next-i18next";
import React from "react";
import RatingsList from "./ratingslist";

type TypeProps = {
  DataPersonaRatings: {
    id: number;
    Name: string;
    Image: string;
    revew: number;
    Content: string;
  }[];
};

const ConsultantRatings = (props: TypeProps) => {
  const { DataPersonaRatings } = props;
  return (
    <div className="consultant__information__control">
      <div className="consultant__information__head">
        <h2>
          <span className="image">
            <img src="/assets/icons/icon-rating-all.png" alt="" />
          </span>
          <span className="text">{i18n?.t("common:Ratings")}</span>
        </h2>
      </div>

      <div className="consultant__information__ratingslist">
        <RatingsList DataPersonaRatings={DataPersonaRatings} />
      </div>
    </div>
  );
};

export default ConsultantRatings;
