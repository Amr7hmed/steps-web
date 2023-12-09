import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

type Props = {
  Image: string;
  Text: string | undefined;
};

const PageEmpty = (props: Props) => {
  const { Image, Text } = props;
  return (
    <div className="empty-page">
      <img src={Image} alt="" className="empty-page__image" />
      <p className="empty-page__title">{Text}</p>
      <Link href={"/"} className="btn empty-page__button">
        {i18n?.t("common:backToHome")}
      </Link>
    </div>
  );
};

export default PageEmpty;
