import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import MyAccountContent from "@/components/myprofile-sections/my-account";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StepsToken } from "@/api/variables";
import axios from "axios";
import MyAccountLoadding from "@/components/myprofile-sections/my-account/my-account-loading";

export default function MyAccount() {
  const router = useRouter();
  const DataHeader = {
    Title: i18n?.t("common:ProfilePersonly"),
    Path: "/account-user/my-profile",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:ProfilePersonly"),
        Path: "/account-user/my-profile",
      },
    ],
  };

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const GetData = async () => {
    const options = {
      method: "get",
      url: `${process.env.BACKEND_URL}get-profile`,
      headers: {
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
      },
    };
    await axios(options)
      .then(function (response) {
        setLoading(true);
        console.log("response", response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      {isLoading === true ? (
        <MyAccountLoadding ClassName={"my-account__loding"} />
      ) : (
        <MyAccountContent DataApi={data} />
      )}
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
function GetDataCategories() {
  throw new Error("Function not implemented.");
}
