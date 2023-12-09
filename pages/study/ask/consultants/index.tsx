import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import GlobalsBoulettesList from "@/components/globals/globals__boulettes-list";
import { FakedataAPi } from "./fakedata.js";
import AskStepTwo from "@/components/study-sections/ask-sections/ask-step-two/ask-step-two";

export default function AskConsultantsFeasibilityStudy() {
  const DataHeader = {
    Title: i18n?.t("common:SliderFourButton"),
    Path: "/feasibility-study/ask/consultants",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderFourButton"),
        Path: "/feasibility-study/ask/consultants",
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

  const Price = {
    Title: i18n?.t("common:Price"),
    Name: "Price",
    List: [
      {
        Id: "11",
        Text: i18n?.t("common:FromHighestPriceToLowestPrice"),
      },
      {
        Id: "12",
        Text: i18n?.t("common:FromLowestPriceToHighestPrice"),
      },
    ],
  };

  const Ratings = {
    Title: i18n?.t("common:Ratings"),
    Name: "Ratings",
    List: [
      {
        Id: "6",
        Text: "(5)",
      },
      {
        Id: "7",
        Text: "(4)",
      },
      {
        Id: "8",
        Text: "(3)",
      },
      {
        Id: "9",
        Text: "(2)",
      },
      {
        Id: "10",
        Text: "(1)",
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
        <div className="container">
          <AskStepTwo
            ArrayData={FakedataAPi.OurConsultants}
            Price={Price}
            Ratings={Ratings}
          />
        </div>
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
