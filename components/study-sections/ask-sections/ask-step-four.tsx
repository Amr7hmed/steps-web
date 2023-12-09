import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputOuter, InputPhonecountry } from "../inputs";
import Link from "next/link";

export default function AskStepFour() {
  const { push } = useRouter();
  const state = {
    name: "",
    phone: "",
    email: "",
  };

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <InputOuter
                Error={props.errors.name}
                valueInput={props.values.name}
                Type={"text"}
                Label={i18n?.t("auth:userName")}
                Name={"name"}
                Placeholder={undefined}
              />
            </div>

            <div className="col-12 col-md-6">
              <InputPhonecountry
                Error={props.errors.phone}
                valueInput={props.values.phone}
                Type={"tel"}
                Label={i18n?.t("auth:phone")}
                Name={"phone"}
                Placeholder={undefined}
              />
            </div>

            <div className="col-12 col-md-6">
              <InputOuter
                Error={props.errors.email}
                valueInput={props.values.email}
                Type={"email"}
                Label={i18n?.t("auth:email")}
                Name={"email"}
                Placeholder={undefined}
              />
            </div>
          </div>
          <div className="study__payment__buttons d-flex justify-content-between align-items-center">
            <Link
              href={"/study/ask/dateandtime"}
              className={`btn btn-send btn-light`}
              scroll={true}
            >
              <span className="text">{i18n?.t("common:Back")}</span>
            </Link>
            <button className={`btn btn-send btn-green`} type="submit">
              <span className="text">{i18n?.t("common:Next")}</span>
            </button>
          </div>
        </div>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name Is Required"),
      email: Yup.string().required("Email Is Required"),
      phone: Yup.string()
        .min(9, "The Contact Number must be at least 9 Digits !")
        .max(13, "Contact Number Must Be No More Than 9 !")
        .required("Contact Number Is Required"),
    });
    return schema;
  };

  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={(values) => {
          console.log(values);
          push("/study/ask/confirm-and-pay");
        }}
        render={form}
        validationSchema={schema()}
        validateOnChange={false}
        enableReinitialize={true}
        validateOnBlur={false}
      />
    </>
  );
}
