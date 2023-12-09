import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import AskStepFour from "@/components/study-sections/ask-sections/ask-step-four";

export default function AskPersonalDataFeasibilityStudy() {
  const DataHeader = {
    Title: i18n?.t("common:SliderFourButton"),
    Path: "/feasibility-study/ask/personal-data",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderFourButton"),
        Path: "/feasibility-study/ask/personal-data",
      },
    ],
  };

  const DataBoulettesList = {
    List: [
      {
        id: 1,
        text: i18n?.t("common:Specialties"),
        active: true,
      },
      {
        id: 2,
        text: i18n?.t("common:Consultants"),
        active: true,
      },
      {
        id: 3,
        text: i18n?.t("common:DateAndTime"),
        active: true,
      },
      {
        id: 4,
        text: i18n?.t("common:PersonalData"),
        active: true,
      },
      {
        id: 5,
        text: i18n?.t("common:ConfirmAndPay"),
        active: false,
      },
    ],
  };

  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="study__ask">
        <div className="container">
          <GlobalsBoulettesList DataList={DataBoulettesList.List} />
        </div>
        <AskStepFour />
      </section>
    </section>
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
