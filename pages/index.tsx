import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HomeSections from "@/components/home-sections";

export default function Home(props: any) {
  const dataApi = props.RequestData.data;

  return (
    <>
      <CustomHead />
      <HomeSections Consultant={false} DataApi={dataApi} />
    </>
  );
}

export async function getStaticProps(context: any) {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json;charset=UTF-8");
  requestHeaders.set("Accept", "application/json");
  requestHeaders.set("Accept", "application/json, text/plain, */*");
  requestHeaders.set("Retry-After", "3600");
  requestHeaders.set("Accept-Language", context.locale);
  requestHeaders.set("Access-Control-Allow-Origin", "*");
  requestHeaders.set("Access-Control-Allow-Headers", "*");

  const res = await fetch(`${process.env.BACKEND_URL}home`, {
    method: "get",
    headers: requestHeaders,
  });
  const RequestData = await res.json();
  const currentLocale = context.locale ?? defaultLocale;
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
