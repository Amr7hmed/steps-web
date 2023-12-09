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
import { InputFileDocument, InputPrice } from "@/components/inputes";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import { useRouter } from "next/router";
import { useState } from "react";

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
        active: true,
      },
      {
        id: 4,
        text: i18n?.t("auth:WorkHours"),
        active: false,
      },
    ],
  };

  const [profilepicture, setProfilepicture] = useState(null);
  const [scientificcertificate, setScientificCertificate] = useState(null);
  const [proofOfpracticing, setProofOfpracticing] = useState(null);
  const [validationOuther, setValidationOuther] = useState(true);

  const state = {
    consultationprice: "",
  };
  const imageFormats = "image/*";
  const fileFormats = "application/pdf";

  const form = (props: any) => {
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
          <form onSubmit={props.handleSubmit}>
            {/* Input Consultation Price  */}
            <InputPrice
              Error={props.errors.consultationprice}
              valueInput={props.values.consultationprice}
              Type={"number"}
              Label={i18n?.t("auth:ConsultationPrice")}
              Name={"consultationprice"}
              Placeholder={i18n?.t("auth:Example-120")}
            />
            {/* Input Profile Picture  */}
            <InputFileDocument
              Type={"file"}
              Label={i18n?.t("auth:ProfilePicture")}
              Name={"profilepicture"}
              Placeholder={i18n?.t("auth:UploadAPersonalPhoto")}
              FileFormats={imageFormats}
              setFileState={setProfilepicture}
              fileState={profilepicture}
              Error={validationOuther}
              ErrorMessage={i18n?.t("errors:ThisFieldIsRequired")}
            />
            {/* Input Scientific Certificate  */}
            <InputFileDocument
              Type={"file"}
              Label={i18n?.t("auth:ScientificCertificate")}
              Name={"scientificcertificate"}
              Placeholder={i18n?.t("auth:DownloadTheAcademicCertificate")}
              FileFormats={fileFormats}
              setFileState={setScientificCertificate}
              fileState={scientificcertificate}
              Error={validationOuther}
              ErrorMessage={i18n?.t("errors:ThisFieldIsRequired")}
            />
            {/* Input Proof Of practicing */}
            <InputFileDocument
              Type={"file"}
              Label={i18n?.t("auth:ProofOfPracticingTheProfession")}
              Name={"proofOfpracticing"}
              Placeholder={i18n?.t(
                "auth:DownloadProofOfPracticingTheProfession"
              )}
              FileFormats={fileFormats}
              setFileState={setProofOfpracticing}
              fileState={proofOfpracticing}
              Error={validationOuther}
              ErrorMessage={i18n?.t("errors:ThisFieldIsRequired")}
            />

            <button
              type="submit"
              className={"btn button-submit-auth btn-green"}
            >
              {i18n?.t("common:Next")}
            </button>
          </form>
        </div>
      </div>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      consultationprice: Yup.string().required(
        "Consultation Price Is Required"
      ),

      /*
      
      consultationprice: Yup.number().required(
        i18n?.t("errors:ThisFieldIsRequired")
      ),
       */
    });
    return schema;
  };

  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={(values) => {
          if (
            profilepicture === null ||
            scientificcertificate === null ||
            proofOfpracticing === null
          ) {
            setValidationOuther(false);
          } else {
            console.log(values.consultationprice);
            console.log(profilepicture);
            console.log(scientificcertificate);
            console.log(proofOfpracticing);
            push("/auth/join-as-aconsultant/step-four");
          }
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
