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
  InputPassword,
  InputRadio,
  SelectOuter,
} from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import { useRouter } from "next/router";

export default function StepOne() {
  const { push } = useRouter();
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
        active: false,
      },
      {
        id: 3,
        text: i18n?.t("auth:Certificates"),
        active: false,
      },
      {
        id: 4,
        text: i18n?.t("auth:WorkHours"),
        active: false,
      },
    ],
  };

  const state = {
    name: "",
    type: "",
    email: "",
    password: "",
    password_confirmation: "",
    termsAndConditionsAuth: false,
  };
  const SelectType = [
    { value: "", label: i18n?.t("auth:MaleOrFemale") },
    { value: "male", label: i18n?.t("auth:Male") },
    { value: "female", label: i18n?.t("auth:Female") },
  ];
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
        <SelectOuter
          Error={props.errors.type}
          Label={i18n?.t("auth:Type")}
          Name={"type"}
          Type={"select"}
          SelectArray={SelectType}
        />

        <InputOuter
          Error={props.errors.email}
          valueInput={props.values.email}
          Type={"email"}
          Label={i18n?.t("auth:email")}
          Name={"email"}
          Placeholder={undefined}
        />
        <InputPassword
          Error={props.errors.password}
          valueInput={props.values.password}
          Type={"password"}
          Label={i18n?.t("auth:password")}
          Name={"password"}
          ForgetPassword={""}
        />
        <InputPassword
          Error={props.errors.password_confirmation}
          valueInput={props.values.password_confirmation}
          Type={"password"}
          Label={i18n?.t("auth:repeatPassword")}
          Name={"password_confirmation"}
          ForgetPassword={""}
        />
        <InputRadio
          Error={props.errors.termsAndConditionsAuth}
          valueInput={props.values.termsAndConditionsAuth}
          Type={"checkbox"}
          Label={i18n?.t("auth:termsAndConditionsAuth")}
          Name={"termsAndConditionsAuth"}
          Placeholder={undefined}
        />
        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("common:Next")}
        </button>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name Is Required"),
      type: Yup.string().required("Type Is Required"),
      email: Yup.string().required("Email Is Required"),
      password: Yup.string()
        .min(6, "Password Must Not Be Less Than 6 Characters")
        .max(10, "Password Must Not Be More Than 10 Characters")
        .required("Password Is Required"),

      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Password confirmation Is Required"),
      termsAndConditionsAuth: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    });
    return schema;
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
        <Formik
          initialValues={state}
          onSubmit={(values) => {
            console.log(values);
            push("/auth/join-as-aconsultant/step-two");
          }}
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
