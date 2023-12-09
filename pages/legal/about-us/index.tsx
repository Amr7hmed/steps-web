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
import { useRouter } from "next/router";

export default function AboutUs(props: any) {
  // const router = useRouter();
  //console.log("router", router);

  const dataApi = props.RequestData.data;

  const DataHeader = {
    Title: i18n?.t("common:aboutUs"),
    Path: "/legal/about-us",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:aboutUs"),
        Path: "/legal/about-us",
      },
    ],
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <div className="about_the_platform mr-t-section-120 mr-b-section-420">
        <AboutThePlatform
          Title={i18n?.t("common:aboutThePlatformTitle")}
          //Decription={i18n?.t("common:aboutThePlatformDec")}
          Decription={dataApi.about}
        />
      </div>
    </>
  );
}

export async function getStaticProps(context: any) {
  const res = await fetch(`${process.env.BACKEND_URL}settings`, {
    method: "get",
    // Headr Request Api
    headers: JSON.parse(
      JSON.stringify({
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(context.locale)),
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      })
    ),
  });
  const RequestData = await res.json();
  const currentLocale = context.locale ?? defaultLocale;
  // await queryClient.prefetchQuery(rootCategoriesQuery());
  const i18nServer = await serverSideTranslations(currentLocale, [
    "common",
    "auth",
    "errors",
  ]);
  return {
    props: {
      RequestData,
      ...i18nServer,
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 2,
    },
  };
}
