import { i18n } from "next-i18next";
import React from "react";

type Props = {
  ArrayLength: number;
  Title: string | undefined;
};

const MyRequestsNavlist = (props: Props) => {
  const { ArrayLength, Title } = props;
  return (
    <div className="my-requests__navlist">
      <h2>
        <span className="text">{Title}</span>
        <span className="numbr">({ArrayLength})</span>
      </h2>
    </div>
  );
};

export default MyRequestsNavlist;
