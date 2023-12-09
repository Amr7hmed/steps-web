import { i18n } from "next-i18next";
import React from "react";

type TypeProps = {
  DataPersonaAcademic: {
    AcademicQualificationsAndCourses: string;
  };
};

function ConsultantAcademic(props: TypeProps) {
  const { DataPersonaAcademic } = props;
  return (
    <div className="consultant__information__control">
      <div className="consultant__information__head">
        <h2>
          <span className="image">
            <img src="/assets/icons/icon-qualification.png" alt="" />
          </span>
          <span className="text">
            {i18n?.t("common:AcademicQualificationsAndCourses")}
          </span>
        </h2>
      </div>

      <div className="consultant__information__body">
        <img
          src="/assets/icons/icon-arrow-profile.png"
          alt=""
          className="image"
        />
        <span className="text">
          {DataPersonaAcademic.AcademicQualificationsAndCourses}
        </span>
      </div>
    </div>
  );
}

export default ConsultantAcademic;
