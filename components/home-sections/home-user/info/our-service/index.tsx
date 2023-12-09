import { i18n } from "next-i18next";
import ServiceSlider from "./service-slider";
import TitleInfo from "@/components/globals/title_info";

const OurService = () => {
  return (
    <div className="home__user__service mr-t-section-120 position-relative">
      <h6 className="home__title-info">
        <div className="text">{i18n?.t("common:ourService")}</div>
        <span className="line"></span>
      </h6>
      <ServiceSlider />
      <div className="SuperToroid-1"></div>
    </div>
  );
};

export default OurService;
