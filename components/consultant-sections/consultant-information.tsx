import { i18n } from "next-i18next";
import React from "react";

type TypeProps = {
  DataPersonalInformation: {
    QuadName: string;
    Specialization: string;
    Gender: string;
    OfficialJobTitle: string;
    Experience: string;
  };
};

const ConsultantInformation = (props: TypeProps) => {
  const { DataPersonalInformation } = props;
  return (
    <div className="consultant__information__control">
      <div className="consultant__information__head">
        <h2>
          <span className="image">
            <img src="/assets/icons/icon-personal-info.png" alt="" />
          </span>
          <span className="text">{i18n?.t("common:PersonalInformation")}</span>
        </h2>
      </div>

      <div className="consultant__information__list">
        <div className="row">
          <div className="col-12 col-md-4">
            <ul className="item">
              <li>
                <span className="title">{i18n?.t("common:QuadName")}</span>
                <span className="data">{DataPersonalInformation.QuadName}</span>
              </li>
              <li>
                <span className="title">
                  {i18n?.t("common:Specialization")} :
                </span>
                <span className="data">
                  {DataPersonalInformation.Specialization}
                </span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <ul className="item">
              <li>
                <span className="title">{i18n?.t("common:Gender")}</span>
                <span className="data">{DataPersonalInformation.Gender}</span>
              </li>
              <li>
                <span className="title">{i18n?.t("common:Experience")}</span>
                <span className="data">
                  {DataPersonalInformation.Experience}
                </span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <ul className="item">
              <li>
                <span className="title">
                  {i18n?.t("common:OfficialJobTitle")}
                </span>
                <span className="data">
                  {DataPersonalInformation.OfficialJobTitle}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantInformation;
