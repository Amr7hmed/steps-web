// Note: This is the page for the about us page
import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import AboutThePlatform from "@/components/about-the-platform";
import { i18n } from "next-i18next";
import OurService from "@/components/home-sections/home-user/info/our-service";
export default function OurServices() {
  const DataHeader = {
    Title: i18n?.t("common:ourService"),
    Path: "/legal/our-services",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:ourService"),
        Path: "/legal/our-services",
      },
    ],
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <div className="mr-b-section-420">
        <OurService />
      </div>
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
