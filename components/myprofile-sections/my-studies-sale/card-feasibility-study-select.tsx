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
    approval: boolean;
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
        <Link
          href={`/myprofile/my-studies-sale/edite/${Item.id}`}
          className="btn my-studies__card__edite__icon"
        >
          <img src="/assets/icons/icon-edite.png" alt="edite" />
        </Link>
      </div>

      <div className="my-studies__card__content">
        <h3 className="my-studies__card__content__title">{Item.title}</h3>
        <p className="my-studies__card__content__days">{Item.days}</p>
        <p className="my-studies__card__content__price">{Item.price}</p>
      </div>

      {Item.approval === true ? (
        ""
      ) : (
        <div className="overload">
          <span className="text">{i18n?.t("common:WaitingForApproval")}</span>
        </div>
      )}
    </div>
  );
};

export default CardFeasibilityStudySelect;
