import { i18n } from "next-i18next";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

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
  setConsultant: Dispatch<SetStateAction<string>>;
  consultant: string;
};

const CardConsultantSelect = (props: TypeProps) => {
  const { Data, setConsultant, consultant } = props;

  const consultantId = +consultant;

  const handleClick = (id: any) => {
    setConsultant(id);
  };

  return (
    <label
      className={`study__card-consultant ${
        consultantId === Data.id ? "study__card-consultant active" : ""
      }`}
      htmlFor={`${Data.id}`}
    >
      <div className="inputredio">
        <input
          type="radio"
          value={Data.id}
          name={"CardConsultantSelect"}
          id={`${Data.id}`}
          onChange={() => handleClick(Data.id)}
        />
      </div>
      <div className="study__card-consultant__img">
        <img src={Data.linkImage} alt="" />
      </div>
      <div className="study__card-consultant__contenet">
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

        <Link href={`/study/ask/consultants/consultant-profile/${23}`}>
          {i18n?.t("common:ViewProfile")}
        </Link>
      </div>
    </label>
  );
};

export default CardConsultantSelect;
