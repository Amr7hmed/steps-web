import { i18n } from "next-i18next";
import React from "react";

type TypeProps = { Title: string | undefined; Decription: string | undefined };

const AboutThePlatform = (props: TypeProps) => {
  const { Title, Decription } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="about_the_platform__imagebanar">
            <div className="vector-top-left"></div>
            <div className="image">
              <img src={"/assets/images/home_info_about.png"} alt="" />
            </div>
            <div className="vector-bottom-right"></div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="about_the_platform__decription">
            <div>
              <h6>{Title}</h6>
              <p>{Decription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThePlatform;
