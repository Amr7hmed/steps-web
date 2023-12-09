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
import { InputOuter, InputPassword } from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";

export default function ForgotPassword() {
  interface Values {
    email: string;
  }

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

        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("auth:sendVerificationCodeButton")}
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

  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__content">
        <AuthHeader
          Title={i18n?.t("auth:forgetPasswordTitle")}
          SubTitle={i18n?.t("auth:forgetPasswordDesc")}
        />
        <Formik
          initialValues={state}
          onSubmit={(values) => {
            console.log(values);
          }}
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
