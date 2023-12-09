import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import BuyStudyRows from "@/components/study-sections/buy-sections/rows";
import BuyStudyFilters from "@/components/study-sections/buy-sections/filters/index";

export default function BuyFeasibilityStudy() {
  const DataHeader = {
    Title: i18n?.t("common:SliderOneTitle"),
    Path: "/feasibility-study/buy",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderOneTitle"),
        Path: "/feasibility-study/buy",
      },
    ],
  };
  const DataStudyList = {
    List: [
      {
        id: 1,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
      {
        id: 2,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
      {
        id: 3,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
      {
        id: 4,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
      {
        id: 5,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
      {
        id: 6,
        image: "/assets/images/1.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
      },
    ],
  };

  const Specialization = {
    Title: i18n?.t("common:Specialization"),
    Name: "Specialization",
    List: [
      {
        Id: "1",
        Text: i18n?.t("common:NameOfSpecialtyHere"),
      },
      {
        Id: "2",
        Text: i18n?.t("common:NameOfSpecialtyHere"),
      },
      {
        Id: "3",
        Text: i18n?.t("common:NameOfSpecialtyHere"),
      },
      {
        Id: "4",
        Text: i18n?.t("common:NameOfSpecialtyHere"),
      },
      {
        Id: "5",
        Text: i18n?.t("common:NameOfSpecialtyHere"),
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
  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="study__navlist">
        <div className="container">
          <h2>
            <span className="text">{i18n?.t("common:AllStudies")}</span>
            <span className="numbr">({DataStudyList.List.length})</span>
          </h2>
        </div>
      </section>

      <div className="container">
        <div className="d-flex">
          <BuyStudyFilters Specialization={Specialization} Price={Price} />

          <BuyStudyRows Data={DataStudyList} />
        </div>
      </div>
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
