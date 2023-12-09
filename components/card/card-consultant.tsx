import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

type TypeProps = {
  Data: {
    id: number;
    Title: string;
    revew: number;
    Specialization: string;
    linkImage: string;
    time: string;
    price: string;
  };
};

const CardConsultant = (props: TypeProps) => {
  const { Data } = props;
  return (
    <div className="card-consultant">
      <div className="card-consultant__img">
        <img src={Data.linkImage} alt="" />
      </div>
      <div className="card-consultant__contenet">
        <h6>
          <span className="title">{Data.Title}</span>

          <span className="revew">
            <span className="number">{Data.revew}</span>
            <img src="/assets/icons/star.png" alt="" />
          </span>
        </h6>

        <p className="specialization">{Data.Specialization}</p>

        <div className="outer">
          <span className="dataouter">
            <span className="datatitle">
              {i18n?.t("common:ConsultationPeriod")}
            </span>{" "}
            <span className="number">{Data.time}</span>
          </span>

          <span className="dataouter">
            <span className="datatitle">
              {i18n?.t("common:ConsultationPrice")}
            </span>{" "}
            <span className="number">{Data.price}</span>
          </span>
        </div>

        <Link href={`/all-consultant/consultant/${23}`}>
          {i18n?.t("common:BookAConsultation")}
        </Link>
      </div>
    </div>
  );
};

export default CardConsultant;
