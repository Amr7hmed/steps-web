import { i18n } from "next-i18next";
import React, { useState } from "react";
import RequestCardDetails from "./request-card-details";
import RequestCardLink from "./request-card-link";

type TypeProps = {
  RequestHeader: {
    list: {
      title: string | undefined;
      data: string | undefined;
      details: boolean;
    }[];
  };
  RequestBody: {
    listone: {
      id: number;
      title: string | undefined;
      data: string;
      line: boolean;
      totle: boolean;
    }[];
    listtwo: {
      id: number;
      title: string | undefined;
      data: string;
      line: boolean;
      totle: boolean;
    }[];
  };
};

const DetailsContent = (props: TypeProps) => {
  const { RequestHeader, RequestBody } = props;
  const consultant = false;
  const [linkBooln, setLinkBooln] = useState(true);
  return (
    <>
      <div
        className="request-details__navlist d-flex justify-content-between 
       align-items-center"
      >
        <h2>
          <span className="text">
            {i18n?.t("common:DetailsConsultationAndLink")}
          </span>
        </h2>

        {consultant === false ? (
          <div className="link btn btn-dark">{i18n?.t("common:Finished")}</div>
        ) : (
          <button
            type="button"
            onClick={() => setLinkBooln(!linkBooln)}
            className={`link btn ${
              linkBooln === true ? "btn-yellow" : "btn-green"
            }`}
          >
            {linkBooln === true ? (
              <>{i18n?.t("common:ConfirmAppointment")}</>
            ) : (
              <>
                {i18n?.t("common:TheAppointmentHasBeenConfirmedSuccessfully")}
              </>
            )}
          </button>
        )}
      </div>
      <RequestCardDetails ArrayList={RequestHeader.list} />
      <RequestCardLink
        Text={i18n?.t("common:WaitingForConfirmationAndLink")}
        LinkStyle={undefined}
        linkBooln={linkBooln}
      />
    </>
  );
};

export default DetailsContent;
