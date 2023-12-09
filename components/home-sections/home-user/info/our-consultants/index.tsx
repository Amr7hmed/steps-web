import { i18n } from "next-i18next";
import React from "react";
import OurConsultantsSlider from "./our-consultants-slider";
import Link from "next/link";
import TitleInfo from "@/components/globals/title_info";

type TypeProps = {
  OurConsultants: {
    id: number;
    Title: string;
    revew: number;
    Specialization: string;
    linkImage: string;
    time: string;
    price: string;
  }[];
};

const OurConsultants = (props: TypeProps) => {
  const { OurConsultants } = props;

  return (
    <div className="home__user__ourconsultants mr-t-section-120 position-relative">
      <div className="decorativeLine-top"></div>

      <div className="container">
        <h6 className="home__title-info">
          <div className="text">{i18n?.t("common:OurConsultants")}</div>
          <span className="line"></span>
        </h6>
      </div>

      <OurConsultantsSlider OurConsultants={OurConsultants} />

      <div className="seemore">
        <Link
          href={`/all-consultant/${1}?filterspecialization=&filterratings=&filterprice=`}
        >
          {i18n?.t("common:SeeMore")}
        </Link>
      </div>
    </div>
  );
};

export default OurConsultants;
