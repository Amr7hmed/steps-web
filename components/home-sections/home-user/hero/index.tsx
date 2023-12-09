import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="home__user__hero">
      <div className="home__user__hero__image">
        <img src={"/assets/images/hero-screen.png"} alt="" />
      </div>
      <div className="home__user__hero__info">
        <p>
          {i18n?.t("common:heroInfo")}{" "}
          <Link href={"/"}>{i18n?.t("common:heroInfoLink")}</Link>
        </p>

        <Link href={"/study/ask/specialties"} className="btn-green btn-link">
          {i18n?.t("common:heroInfoButton")}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
