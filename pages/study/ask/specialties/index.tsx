import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import AskStepOne from "@/components/study-sections/ask-sections/ask-step-one";

export default function AskSpecialtiesFeasibilityStudy() {
  const DataHeader = {
    Title: i18n?.t("common:SliderFourButton"),
    Path: "/study/ask/specialties",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderFourButton"),
        Path: "/study/ask/specialties",
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
        active: false,
      },
      {
        id: 3,
        text: i18n?.t("common:DateAndTime"),
        active: false,
      },
      {
        id: 4,
        text: i18n?.t("common:PersonalData"),
        active: false,
      },
      {
        id: 5,
        text: i18n?.t("common:ConfirmAndPay"),
        active: false,
      },
    ],
  };

  const DataType = {
    List: [
      {
        Id: 1,
        Text: i18n?.t("common:TestCategory"),
        value: 1,
      },
      {
        Id: 2,
        Text: i18n?.t("common:TestCategory"),
        value: 2,
      },
      {
        Id: 3,
        Text: i18n?.t("common:TestCategory"),
        value: 3,
      },
      {
        Id: 4,
        Text: i18n?.t("common:TestCategory"),
        value: 4,
      },
    ],
  };

  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="study__ask">
        <GlobalsBoulettesList DataList={DataBoulettesList.List} />
        <AskStepOne DataList={DataType.List} />
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
