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
  InputTextArea,
  SelectOuter,
} from "@/components/inputes";
import AuthFooter from "@/components/auth/auth-footer";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import { useRouter } from "next/router";

export default function StepTwo() {
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
        active: true,
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
    thenameisquadrilateral: "",
    officialjobtitle: "",
    specialization: "",
    yearsofexperience: "",
    academicqualificationsandcourses: "",
  };
  const SelectSpecialization = [
    { value: "", label: i18n?.t("auth:ChooseYourSpecialty") },
    { value: "1", label: i18n?.t("auth:Specialization") },
    { value: "2", label: i18n?.t("auth:Specialization") },
  ];

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <InputOuter
          Error={props.errors.thenameisquadrilateral}
          valueInput={props.values.thenameisquadrilateral}
          Type={"text"}
          Label={i18n?.t("auth:TheNameIsQuadrilateral")}
          Name={"thenameisquadrilateral"}
          Placeholder={i18n?.t("auth:userName")}
        />
        <InputOuter
          Error={props.errors.officialjobtitle}
          valueInput={props.values.officialjobtitle}
          Type={"text"}
          Label={i18n?.t("auth:OfficialJobTitle")}
          Name={"officialjobtitle"}
          Placeholder={i18n?.t("auth:OfficialJobTitle")}
        />
        <SelectOuter
          Error={props.errors.specialization}
          Label={i18n?.t("auth:Specialization")}
          Name={"specialization"}
          Type={"select"}
          SelectArray={SelectSpecialization}
        />
        <InputOuter
          Error={props.errors.yearsofexperience}
          valueInput={props.values.yearsofexperience}
          Type={"text"}
          Label={i18n?.t("auth:YearsOfExperience")}
          Name={"yearsofexperience"}
          Placeholder={i18n?.t("auth:Example-Three-years")}
        />
        <InputTextArea
          Error={props.errors.academicqualificationsandcourses}
          valueInput={props.values.academicqualificationsandcourses}
          Type={"text"}
          Label={i18n?.t("auth:AcademicQualificationsAndCourses")}
          Name={"academicqualificationsandcourses"}
          Placeholder={i18n?.t(
            "auth:PleaseWriteYourAcademicQualificationsAndCoursesInPointForm"
          )}
        />

        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {i18n?.t("common:Next")}
        </button>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      thenameisquadrilateral: Yup.string().required(
        "The Name Is Quadrilateral Is Required"
      ),
      officialjobtitle: Yup.string().required("Official Job Title Is Required"),
      specialization: Yup.string().required("Specialization Is Required"),
      yearsofexperience: Yup.string().required(
        "Years Of Experience Is Required"
      ),
      academicqualificationsandcourses: Yup.string().required(
        "Academic Qualifications And Courses Is Required"
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
            push("/auth/join-as-aconsultant/step-three");
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
