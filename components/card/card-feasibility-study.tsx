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
  EditeBoolen?: boolean;
};

const CardFeasibilityStudy = (props: TypeProps) => {
  const { Item, EditeBoolen } = props;
  return (
    <Link
      href={`/study/buy/study-details/${Item.id}`}
      className="card-feasibility-study"
      style={{ backgroundImage: `url('${Item.image}')` }}
    >
      {EditeBoolen === true ? (
        <div className="card-feasibility-study__edite">
          <button
            className="btn  card-feasibility-study__remove__icon"
            type="button"
            onClick={() => console.log("remove")}
          >
            <img src="/assets/icons/icon-remove.png" alt="remove" />
          </button>
          <Link href={"/"} className="btn card-feasibility-study__edite__icon">
            <img src="/assets/icons/icon-edite.png" alt="edite" />
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="card-feasibility-study__content">
        <h3 className="card-feasibility-study__content__title">{Item.title}</h3>
        <p className="card-feasibility-study__content__days">{Item.days}</p>
        <p className="card-feasibility-study__content__price">{Item.price}</p>
      </div>
    </Link>
  );
};

export default CardFeasibilityStudy;
