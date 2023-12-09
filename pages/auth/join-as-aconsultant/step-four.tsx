import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthHeader from "@/components/auth/auth-header";
import { i18n } from "next-i18next";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import { useRouter } from "next/router";
import { useState } from "react";

export default function StepTwo() {
  const { push } = useRouter();

  // State Data Time Of The Work
  const [state, setState] = useState({ from: "", to: "" });
  // Array Day Of The Week
  let selectvalueday: any[] = [];
  // Validation Data Time Of The Work
  const [validationOuther, setValidationOuther] = useState(true);
  // Data Boulettes List
  const DataBoulettesList = {
    List: [
      {
        id: 1,
        text: i18n?.t("auth:RegistrationData"),
        active: true,
      },
      {
        id: 2,
        text: i18n?.t("auth:ConsultantData"),
        active: true,
      },
      {
        id: 3,
        text: i18n?.t("auth:Certificates"),
        active: true,
      },
      {
        id: 4,
        text: i18n?.t("auth:WorkHours"),
        active: true,
      },
    ],
  };
  // Handle Change Input Time Of The Work
  function handleChange(evt: { target: { value: any; name: any } }) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  // Array Time Hour
  const SelectValueTime = [
    { value: "01", label: "01:00" },
    { value: "02", label: "02:00" },
    { value: "03", label: "03:00" },
    { value: "04", label: "04:00" },
    { value: "05", label: "05:00" },
    { value: "06", label: "06:00" },
    { value: "07", label: "07:00" },
    { value: "08", label: "08:00" },
    { value: "09", label: "09:00" },
    { value: "10", label: "10:00" },
    { value: "11", label: "11:00" },
    { value: "12", label: "12:00" },
  ];
  // Array Day Of The Week
  const SelectValueTDay = [
    { value: "sat", label: i18n?.t("auth:Saturday") },
    { value: "sun", label: i18n?.t("auth:Sunday") },
    { value: "mon", label: i18n?.t("auth:Monday") },
    { value: "tue", label: i18n?.t("auth:Tuesday") },
    { value: "wed", label: i18n?.t("auth:Wednesday") },
    { value: "thu", label: i18n?.t("auth:Thursday") },
    { value: "fri", label: i18n?.t("auth:Friday") },
  ];
  // Push Data To Array Day Of The Week
  const handleCheck = (event: any) => {
    const value = event.target.value;

    if (event.target.checked === true) {
      // If Check Input Push Value To Array
      selectvalueday.push(value);
      setValidationOuther(true);
    } else {
      // If Not Check Input Remove Value To Array
      selectvalueday = selectvalueday.filter((item) => item != value);
    }
    return selectvalueday;
  };
  // Submit Form
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (state.from === "" || state.to === "" || selectvalueday.length === 0) {
      setValidationOuther(false);
      console.log("state", state);
      console.log("selectvalueday", selectvalueday);
    } else {
      push("/");
      setValidationOuther(true);
      console.log("state", state);
      console.log("selectvalueday", selectvalueday);
    }
  };
  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__content">
        <AuthHeader
          Title={i18n?.t("auth:RegisterANewConsultant")}
          SubTitle={""}
        />
      </div>
      <div className="container">
        <GlobalsBoulettesList DataList={DataBoulettesList.List} />
      </div>
      <div className="auth__content">
        <form onSubmit={handleSubmit}>
          {/* Select Time Hour */}
          <div
            className={
              validationOuther === false && state.from === "" && state.to === ""
                ? "form-group position-relative "
                : "form-group "
            }
          >
            <label>{i18n?.t("auth:AvailableTimes")}</label>

            <div className="row">
              <div className="col-6">
                <select
                  name="from"
                  value={state.from}
                  onChange={handleChange}
                  className={
                    validationOuther === false && state.from === ""
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  {SelectValueTime.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-6">
                <div className="form-group ">
                  <select
                    name="to"
                    value={state.to}
                    onChange={handleChange}
                    disabled={state.from === "" ? true : false}
                    className={
                      validationOuther === false && state.to === ""
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  >
                    {SelectValueTime.map((item, index) => (
                      <option
                        value={item.value}
                        key={index}
                        disabled={item.value <= state.from ? true : false}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Validation Error Div */}
            {validationOuther === false &&
            state.from === "" &&
            state.to === "" ? (
              <div className="errorfiled">
                {i18n?.t("errors:ThisFieldIsRequired")}
              </div>
            ) : null}
          </div>
          {/* Select Day Of The Week */}
          <div
            className={
              validationOuther === false && selectvalueday.length === 0
                ? "form-group position-relative "
                : "form-group "
            }
          >
            <label>{i18n?.t("auth:AvailableDays")}</label>
            <div
              className={
                validationOuther === false && selectvalueday.length === 0
                  ? "input-group-check-box is-invalid"
                  : "input-group-check-box"
              }
            >
              {SelectValueTDay.map((item, index) => (
                <label
                  className="input-item-check-box"
                  key={index}
                  htmlFor={item.value}
                >
                  <input
                    type="checkbox"
                    value={item.value}
                    id={item.value}
                    name="selectvalueday"
                    onChange={handleCheck}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
            {/* Validation Error Div */}
            {validationOuther === false && selectvalueday.length === 0 ? (
              <div className="errorfiled">
                {i18n?.t("errors:ThisFieldIsRequired")}
              </div>
            ) : null}
          </div>
          <div className="join-as-aconsultant-step-four">
            {i18n?.t("auth:YouCanChangeTheseDatesLater")}
          </div>

          {/* Submit Button */}
          <button type="submit" className={"btn button-submit-auth btn-green"}>
            {i18n?.t("auth:RegisterAConsultantAccount")}
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const currentLocale = context.locale ?? defaultLocale;
  // await queryClient.prefetchQuery(rootCategoriesQuery());
  const i18nServer = await serverSideTranslations(currentLocale, [
    "common",
    "auth",
    "errors",
  ]);
  return {
    props: {
      ...i18nServer,
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 2,
    },
  };
}
