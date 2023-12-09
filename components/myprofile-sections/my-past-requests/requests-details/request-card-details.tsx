import { i18n } from "next-i18next";
import React from "react";

type TypeProps = {
  ArrayList: {
    title: string | undefined;
    data: string | undefined;
    details: boolean;
  }[];
};

const RequestCardDetails = (props: TypeProps) => {
  const { ArrayList } = props;
  return (
    <div className="request-details__card">
      <div className="request-details__card__head">
        <div className="title">
          <img src={"/assets/icons/icon-study-payment-order.png"} alt="" />
          <h2 className="text">{i18n?.t("common:ConsultationDetails")}</h2>
        </div>
      </div>

      <div className="row">
        {ArrayList.map((item, index) => (
          <div
            className={`col-12 ${item.details === false ? "col-md-4" : ""}`}
            key={index}
          >
            <div className="request-details__card__content">
              <span className="text">{item.title}</span>
              <span className="data">{item.data}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestCardDetails;
