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
import {
  InputOuter,
  InputPhonecountry,
  InputRadio,
} from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  //console.log(getCookie);
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const [massegeerror, setMassegeError] = useState("");
  const state = {
    name: "",
    phone: "",
    email: "",
    termsAndConditionsAuth: false,
  };

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <InputOuter
          Error={props.errors.name}
          valueInput={props.values.name}
          Type={"text"}
          Label={i18n?.t("auth:userName")}
          Name={"name"}
          Placeholder={undefined}
        />

        <InputPhonecountry
          Error={props.errors.phone}
          valueInput={props.values.phone}
          Type={"tel"}
          Label={i18n?.t("auth:phone")}
          Name={"phone"}
          Placeholder={undefined}
        />
        <InputOuter
          Error={props.errors.email}
          valueInput={props.values.email}
          Type={"email"}
          Label={i18n?.t("auth:email")}
          Name={"email"}
          Placeholder={undefined}
        />
        <InputRadio
          Error={props.errors.termsAndConditionsAuth}
          valueInput={props.values.termsAndConditionsAuth}
          Type={"checkbox"}
          Label={i18n?.t("auth:termsAndConditionsAuth")}
          Name={"termsAndConditionsAuth"}
          Placeholder={undefined}
        />
        {massegeerror && (
          <div className="errorfiled">
            <p>{massegeerror}</p>
          </div>
        )}
        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("auth:createNewAccountButton")}
        </button>
        <AuthFooter
          FooterText={i18n?.t("auth:createNewAccountfooterText")}
          FooterTextLink={i18n?.t("auth:createNewAccountfooterLink")}
          FooterLink={"/auth/login"}
          SendCode={""}
        />
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
      termsAndConditionsAuth: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    });
    return schema;
  };

  const CratAccount = (values: any) => {
    // Headr Request Api
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Accept-Language", "ar");
    // Body Request Api
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("phone", `+${values.phone}`);
    formdata.append("email", values.email);
    formdata.append("agree_terms", values.termsAndConditionsAuth);
    formdata.append("device_id", "granted");
    formdata.append("device_type", "web");

    fetch(`${process.env.BACKEND_URL}register`, {
      method: "POST",
      headers: requestHeaders,
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === false) {
          setMassegeError(result.message);
        } else {
          setCookie("steps_email_phone", result.data.user.phone);
          router.push("/auth/otp-verification");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__content">
        <AuthHeader
          Title={i18n?.t("auth:createNewAccountTitle")}
          SubTitle={""}
        />
        <Formik
          initialValues={state}
          onSubmit={CratAccount}
          render={form}
          validationSchema={schema()}
          validateOnChange={false}
          enableReinitialize={true}
          validateOnBlur={false}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
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
