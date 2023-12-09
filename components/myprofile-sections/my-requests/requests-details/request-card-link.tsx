import { i18n } from "next-i18next";
import React, { useState } from "react";

type TypeProps = {
  Text: string | undefined;
  LinkStyle: undefined;
  linkBooln: Boolean;
};

const RequestCardLink = (props: TypeProps) => {
  const { Text, LinkStyle, linkBooln } = props;
  const [textInput, setTextInput] = useState(Text);
  return (
    <div className="request-details__card">
      <div className="request-details__card__head">
        <div className="title">
          <img src={"/assets/icons/icon-consultation-link.png"} alt="" />
          <h2 className="text">{i18n?.t("common:ConsultationLink")}</h2>
        </div>
      </div>
      <div className={"request-details__card__link-body"}>
        <img
          src={"/assets/icons/icon-arrow-profile.png"}
          alt=""
          className="image"
        />
        <input
          type="text"
          className={`text ${LinkStyle === "appointment" ? "active" : ""}`}
          value={textInput}
          disabled={linkBooln === true ? true : false}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RequestCardLink;
