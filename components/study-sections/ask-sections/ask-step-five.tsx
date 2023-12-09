import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import { InputCoupon } from "@/components/inputes";
import Link from "next/link";
import PaymentHeader from "../buy-sections/payment/payment-header";
import PaymentList from "../buy-sections/payment/payment-list";

type TypeProps = {
  Request: {
    header: {
      list: {
        title: string | undefined;
        data: string | undefined;
        details: boolean;
      }[];
    };
    body: {
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
};
export default function AskStepFive(props: TypeProps) {
  const { Request } = props;
  const { push } = useRouter();
  const handelAction = () => {
    push("/");
  };

  const [coupon, setCoupon] = useState("");

  const handleChangeCoupon = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setCoupon(value);
  };

  return (
    <div className="container">
      <PaymentHeader ListData={Request.header} />

      <PaymentList List={Request.body.listone} />
      <form
        className="form mt-0 mb-0"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(coupon);
          setCoupon("");
        }}
      >
        <InputCoupon
          valueInput={coupon}
          Label={i18n?.t("common:EnterTheDiscountCode")}
          PlaceHolder={i18n?.t("common:EnterTheDiscountCodeHere")}
          Name={"coupon"}
          Type={"text"}
          HandleChange={handleChangeCoupon}
        />
      </form>
      <PaymentList List={Request.body.listtwo} />

      <div className="study__payment__buttons d-flex justify-content-between align-items-center">
        <Link
          href={"/study/ask/personal-data"}
          className={`btn btn-send btn-light`}
          scroll={true}
        >
          <span className="text">{i18n?.t("common:Back")}</span>
        </Link>
        <button
          className={`btn btn-send btn-green`}
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#modal-add-favourite`}
        >
          <span className="text">{i18n?.t("common:Push")}</span>
        </button>
      </div>
    </div>
  );
}
