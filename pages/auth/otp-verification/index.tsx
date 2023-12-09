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
import { InputOtpCode, InputPassword } from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";
import { useState } from "react";
import TimerCode from "@/components/inputes/timercode";
import {
  CookieValueTypes,
  deleteCookie,
  getCookie,
  setCookie,
} from "cookies-next";
import { useRouter } from "next/router";

export default function OtpVerification() {
  const router = useRouter();
  const [massegeerror, setMassegeError] = useState("");

  const [otp, setOtp] = useState("");
  const [disabledinput, setDisabledinput] = useState(false);
  const emailphone: CookieValueTypes = getCookie("steps_email_phone");

  const HandleSubmit = async () => {
    // Headr Request Api
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Accept-Language", "ar");
    requestHeaders.append("Content-Type", "application/json;charset=UTF-8");
    requestHeaders.append("Access-Control-Allow-Origin", "*");
    requestHeaders.append("Access-Control-Allow-Credentials", "true");
    await fetch(`${process.env.BACKEND_URL}activate-account`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        code: otp,
        email_phone: JSON.parse(JSON.stringify(emailphone)),
        device_id: "granted",
        device_type: "web",
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === false) {
          setMassegeError(result.message);
        } else {
          deleteCookie("steps_email_phone");
          setCookie("steps_token", result.data.user.token);
          setCookie("steps_user_type_id", result.data.user.user_type.id);
          setCookie("steps_user_type_name", result.data.user.user_type.name);
          window.location.assign("/");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const ReSendCode = async () => {
    // Headr Request Api
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Accept-Language", "ar");
    requestHeaders.append("Content-Type", "application/json;charset=UTF-8");
    requestHeaders.append("Access-Control-Allow-Origin", "*");
    requestHeaders.append("Access-Control-Allow-Credentials", "true");
    await fetch(`${process.env.BACKEND_URL}send-code`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        email_phone: JSON.parse(JSON.stringify(emailphone)),
        device_id: "granted",
        device_type: "web",
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === false) {
          console.log(result);
        } else {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__code">
        <AuthHeader
          Title={i18n?.t("auth:verficationCodeTitle")}
          SubTitle={i18n?.t("auth:verficationCodeSubTitle")}
        />

        <form>
          <InputOtpCode
            ValueOtp={otp}
            SetvalueOtp={setOtp}
            Disabledinput={disabledinput}
          />
          <TimerCode
            setDisabledinput={setDisabledinput}
            ReSendCode={ReSendCode}
          />

          {massegeerror && (
            <div className="errorfiled">
              <p>{massegeerror}</p>
            </div>
          )}
          <button
            type="button"
            className={"btn button-submit-auth btn-green"}
            onClick={HandleSubmit}
            disabled={otp.length < 4 ? true : false}
          >
            {i18n?.t("auth:confirmed")}
          </button>
        </form>
        <AuthFooter
          FooterText={""}
          FooterTextLink={""}
          FooterLink={""}
          SendCode={i18n?.t("auth:reSendCodeButton")}
        />
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
