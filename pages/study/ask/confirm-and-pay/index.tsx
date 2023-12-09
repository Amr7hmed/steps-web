import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import AskStepFive from "@/components/study-sections/ask-sections/ask-step-five";

export default function AskConfirmAndPayFeasibilityStudy() {
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
        active: true,
      },
    ],
  };

  const Request = {
    header: {
      list: [
        {
          title: i18n?.t("common:Specialization"),
          data: "استشارات أسرية",
          details: false,
        },
        {
          title: i18n?.t("common:StudyTitle"),
          data: "دراسة مشروع متجر إلكتروني",
          details: false,
        },
        {
          title: i18n?.t("common:StudyPrice"),
          data: "2,500 ر.س",
          details: false,
        },
        {
          title: i18n?.t("common:DateAndTime"),
          data: "7 مارس 2024  |  am 10:00 - 10:45 am",
          details: false,
        },
        {
          title: i18n?.t("common:ConsultationPrice"),
          data: "100 ر.س",
          details: false,
        },
        {
          title: i18n?.t("common:ConsultationDetails"),
          data: i18n?.t("common:LegalInfoDescriptionTest"),
          details: true,
        },
      ],
    },
    body: {
      listone: [
        {
          id: 1,
          title: i18n?.t("common:TheTotal"),
          data: "100 ر.س",
          line: false,
          totle: false,
        },
        {
          id: 2,
          title: i18n?.t("common:ValueAddedTax"),
          data: "50 ر.س",
          line: true,
          totle: false,
        },
      ],
      listtwo: [
        {
          id: 3,
          title: i18n?.t("common:CouponDiscount"),
          data: "0 ر.س",
          line: false,
          totle: false,
        },
        {
          id: 4,
          title: i18n?.t("common:RequiredTotal"),
          data: "150 ر.س",
          line: false,
          totle: true,
        },
      ],
    },
  };
  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="study__ask">
        <div className="container">
          <GlobalsBoulettesList DataList={DataBoulettesList.List} />
        </div>
        <AskStepFive Request={Request} />
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
