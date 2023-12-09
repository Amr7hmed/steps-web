import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import LegalInfo from "@/components/legal-info";

export default function PrivacyPolicy(props: any) {
  // const router = useRouter();
  //console.log("router", router);

  const dataApi = props.RequestData.data;

  const DataHeader = {
    Title: i18n?.t("common:privacyPolicy"),
    Path: "/legal/privacy-policy",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:privacyPolicy"),
        Path: "/legal/privacy-policy",
      },
    ],
  };

  const DataDescription = {
    Title: i18n?.t("common:privacyPolicy"),
    Description: i18n?.t("common:LegalInfoDescriptionTest"),
  };

  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <LegalInfo
        Title={i18n?.t("common:privacyPolicy")}
        Decription={dataApi.policy}
      />
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
