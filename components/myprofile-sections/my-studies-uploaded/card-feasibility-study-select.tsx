import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

type TypeProps = {
  Item: {
    id: number;
    image: string;
    title: string;
    days: string;
    price: string;
  };
};

const CardFeasibilityStudySelect = (props: TypeProps) => {
  const { Item } = props;
  return (
    <div
      className="my-studies__card"
      style={{ backgroundImage: `url('${Item.image}')` }}
    >
      <div className="my-studies__card__edite">
        <button
          className="btn  my-studies__card__remove__icon"
          type="button"
          onClick={() => console.log("remove")}
        >
          <img src="/assets/icons/icon-remove.png" alt="remove" />
        </button>
        <button type="button" className="btn my-studies__card__edite__icon">
          <img src="/assets/icons/icon-downlod.png" alt="edite" />
        </button>
      </div>

      <div className="my-studies__card__content">
        <Link
          className="my-studies__card__content__title"
          href={`/myprofile/my-studies-uploaded/study/${Item.id}`}
        >
          {Item.title}
        </Link>
        <p className="my-studies__card__content__days">{Item.days}</p>
        <p className="my-studies__card__content__price">{Item.price}</p>
      </div>
    </div>
  );
};

export default CardFeasibilityStudySelect;
