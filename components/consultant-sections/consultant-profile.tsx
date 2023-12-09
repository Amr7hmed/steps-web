import { i18n } from "next-i18next";
import React from "react";

type PropsProfile = {
  DataHeadProfile: {
    ImageProfile: string;
    NameProfile: string;
    NameOfSpecialtyHere: string | undefined;
    Rating: number;
    ConsultationPeriod: string | undefined;
    ConsultationPrice: string | undefined;
    ConsultationsAnswered: number;
    NumberOfReviews: number;
    OverallAssessment: number;
  };
};

const ConsultantProfile = (props: PropsProfile) => {
  const { DataHeadProfile } = props;
  return (
    <section className="consultant__information__profile">
      <div className="head">
        <div className="image">
          <img src={DataHeadProfile.ImageProfile} alt="profile" />
        </div>
        <div className="title d-flex justify-content-center align-items-center">
          <h2>{DataHeadProfile.NameProfile}</h2>
          <p>
            <span className="text">({DataHeadProfile.Rating})</span>
            <span className="icon">
              <img src="/assets/icons/star.png" alt="" />
            </span>
          </p>
        </div>

        <div className="description">
          <p>{DataHeadProfile.NameOfSpecialtyHere}</p>
          <ul>
            <li>
              <span className="title">
                {i18n?.t("common:ConsultationPeriod")}
              </span>
              <span className="data">{DataHeadProfile.ConsultationPeriod}</span>
            </li>
            <li>
              <span className="title">
                {i18n?.t("common:ConsultationPrice")}
              </span>
              <span className="data">{DataHeadProfile.ConsultationPrice}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="list-contner">
        <div className="item item-one">
          <div className="image">
            <img src="/assets/icons/icon-consultation.png" alt="" />
          </div>
          <ul className="list">
            <li>{i18n?.t("common:ConsultationsAnswered")}</li>
            <li>{DataHeadProfile.ConsultationsAnswered}</li>
          </ul>
        </div>
        <div className="item item-two">
          <div className="image">
            <img src="/assets/icons/icon-consultation.png" alt="" />
          </div>
          <ul className="list">
            <li>{i18n?.t("common:NumberOfReviews")}</li>
            <li>{DataHeadProfile.NumberOfReviews}</li>
          </ul>
        </div>
        <div className="item item-three">
          <div className="image">
            <img src="/assets/icons/icon-consultation.png" alt="" />
          </div>
          <ul className="list">
            <li>{i18n?.t("common:OverallAssessment")}</li>
            <li>{DataHeadProfile.OverallAssessment}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConsultantProfile;
