import React from "react";
import OurService from "./our-service";
import OurConsultants from "./our-consultants";
import { FakedataAPi } from "./fakedata.js";
import { i18n } from "next-i18next";
import AboutThePlatform from "@/components/about-the-platform";

type TypeProps = {
  DataApi: any;
};
const HomeInfo = (props: TypeProps) => {
  const { DataApi } = props;

  return (
    <>
      <div className="home__user__info ">
        <div className="roundcube-green-glossy"></div>
      </div>

      <div className="about_the_platform position-relative">
        <div className="decorativeLine-top"></div>

        <AboutThePlatform
          Title={i18n?.t("common:aboutThePlatformTitle")}
          Decription={DataApi.about}
        />

        <div className="cylinder-green-glossy"></div>
      </div>
      <OurService />
      {DataApi.consultants.length === 0 ? (
        <div className="mr-b-section-120"></div>
      ) : (
        <OurConsultants OurConsultants={FakedataAPi.OurConsultants} />
      )}
    </>
  );
};

export default HomeInfo;
