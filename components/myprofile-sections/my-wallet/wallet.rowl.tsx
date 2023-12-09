import { i18n } from "next-i18next";
import React from "react";

type TypeProps = {
  Data: {
    TotalAvailableBalance: string;
    TotalConsulting: string;
    TotalStudiesSold: string;
  };
};

function WalletRowl(props: TypeProps) {
  const { Data } = props;
  return (
    <>
      <div className="my-account__content__wallet__header">
        <div className="my-account__content__wallet__header__item d-flex flex-column">
          <div className="image">
            <img src="/assets/icons/icon-wallet-light.png" alt="" />
          </div>
          <div className="data">
            <h3>{Data.TotalAvailableBalance}</h3>
            <p>{i18n?.t("common:TotalAvailableBalance")}</p>
          </div>
        </div>
      </div>

      <div className="my-account__content__wallet__body d-flex justify-content-center">
        <div className="my-account__content__wallet__body__item">
          <div className="image">
            <img src="/assets/icons/icon-consultation.png" alt="" />
          </div>
          <div className="data">
            <h3>{i18n?.t("common:TotalConsulting")}</h3>
            <p>{Data.TotalConsulting}</p>
          </div>
        </div>

        <div className="my-account__content__wallet__body__item">
          <div className="image">
            <img src="/assets/icons/icon-study-light.png" alt="" />
          </div>
          <div className="data">
            <h3>{i18n?.t("common:TotalStudiesSold")}</h3>
            <p>{Data.TotalStudiesSold}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletRowl;
