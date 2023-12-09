import { i18n } from "next-i18next";
import React from "react";

type Props = {
  ListData: {
    list: {
      title: string | undefined;
      data: string | undefined;
      details: boolean;
    }[];
  };
};

const PaymentHeader = (props: Props) => {
  const { ListData } = props;
  return (
    <div className="study__payment__header">
      <div className="study__payment__header__head">
        <div className="title">
          <img src="/assets/icons/icon-study-payment-order.png" alt="" />
          <h2 className="text">{i18n?.t("common:YourOrder")}</h2>
        </div>
      </div>
      <div className="study__payment__header__body">
        <div className="row">
          {ListData.list.map((item, index) => (
            <div
              className={`col-12 ${item.details === false ? "col-md-4" : ""}`}
              key={index}
            >
              <div className="study__payment__header__content">
                <span className="text">{`${item.title} :`}</span>
                <span className="data">{item.data}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
