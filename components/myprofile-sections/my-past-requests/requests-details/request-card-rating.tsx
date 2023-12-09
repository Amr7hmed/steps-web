import RatingControle from "@/components/card/rating-controle";
import { i18n } from "next-i18next";
import React from "react";

type Props = {
  Ratings: {
    id: number;
    Name: string;
    Image: string;
    revew: number;
    Content: string;
  };
};

const RequestCardRating = (props: Props) => {
  const { Ratings } = props;
  return (
    <div className="request-details__card">
      <div className="request-details__card__head">
        <div className="title">
          <img src={"/assets/icons/icon-rating-all.png"} alt="" />
          <h2 className="text">{i18n?.t("common:UserRating")}</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="request-details__card__rating">
          <div className="request-details__card__rating__img">
            <img src={Ratings.Image} alt={Ratings.Name} />
          </div>
          <h4 className="request-details__card__rating__name">
            {Ratings.Name}
          </h4>

          <div className="request-details__card__rating__stars">
            <RatingControle />
          </div>

          <div className="request-details__card__rating__content">
            {Ratings.Content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCardRating;
