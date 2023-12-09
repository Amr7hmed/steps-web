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
import { InputOuter } from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();
  const [massegeerror, setMassegeError] = useState("");
  const state = {
    email: "",
  };

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <InputOuter
          Error={props.errors.email}
          valueInput={props.values.email}
          Type={"text"}
          Label={i18n?.t("auth:loginInputEmail")}
          Name={"email"}
          Placeholder={undefined}
        />
        {massegeerror && (
          <div className="errorfiled">
            <p>{massegeerror}</p>
          </div>
        )}

        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("auth:loginButton")}
        </button>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      email: Yup.string().required("Email Is Required"),
    });
    return schema;
  };

  const SignIn = (values: any) => {
    setCookie("steps_email_phone", values.email);
    fetch(`${process.env.BACKEND_URL}send-code`, {
      method: "POST",
      // Headr Request Api
      headers: JSON.parse(
        JSON.stringify({
          Accept: "application/json",
          "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        })
      ),
      // Body Request Api
      body: JSON.stringify({
        email_phone: values.email,
        device_id: "granted",
        device_type: "web",
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === false) {
          setMassegeError(result.message);
        } else {
          router.push("/auth/otp-verification");
          setCookie("steps_email_phone", values.email);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__content">
        <AuthHeader Title={i18n?.t("auth:loginTitle")} SubTitle={""} />
        <Formik
          initialValues={state}
          onSubmit={SignIn}
          render={form}
          validationSchema={schema()}
          validateOnChange={false}
          enableReinitialize={true}
          validateOnBlur={false}
        />
        <AuthFooter
          FooterText={i18n?.t("auth:loginfooterText")}
          FooterTextLink={i18n?.t("auth:loginfooterLink")}
          FooterLink={"/auth/sign-up"}
          SendCode={""}
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
