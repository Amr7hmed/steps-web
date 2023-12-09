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
import { InputPassword } from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";

export default function NewPassword() {
  interface Values {
    password: string;
    password_confirmation: string;
  }

  const state = {
    password: "",
    password_confirmation: "",
  };

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <InputPassword
          Error={props.errors.password}
          valueInput={props.values.password}
          Type={"password"}
          Label={i18n?.t("auth:newPasswordTitleInput")}
          Name={"password"}
          ForgetPassword={""}
        />
        <InputPassword
          Error={props.errors.password_confirmation}
          valueInput={props.values.password_confirmation}
          Type={"password"}
          Label={i18n?.t("auth:newConfirmPasswordTitleInput")}
          Name={"password_confirmation"}
          ForgetPassword={""}
        />

        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("auth:save")}
        </button>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6, "Password Must Not Be Less Than 6 Characters")
        .max(10, "Password Must Not Be More Than 10 Characters")
        .required("Password Is Required"),

      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Password confirmation Is Required"),
    });
    return schema;
  };

  return (
    <div className="auth">
      <CustomHead />
      <div className="auth__content">
        <AuthHeader Title={i18n?.t("auth:newPasswordTitle")} SubTitle={""} />
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
