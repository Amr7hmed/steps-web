"use client";
import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import NotificationsList from "@/components/notifications-sections/notifications-list";
import { StepsToken } from "@/api/variables";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NotificationLoading from "@/components/notifications-sections/notifications-loading";
import Skeleton from "react-loading-skeleton";

export default function Notifications() {
  const router = useRouter();

  const DataHeader = {
    Title: i18n?.t("common:notifications"),
    Path: "/legal/notifications",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:notifications"),
        Path: "/legal/notifications",
      },
    ],
  };

  const DataList = {
    List: [
      {
        Text: i18n?.t("common:notificationsdesctrion"),
        Image: "/assets/icons/icon-notifications.png",
      },
      {
        Text: i18n?.t("common:notificationsdesctrion"),
        Image: "/assets/icons/icon-notifications.png",
      },
      {
        Text: i18n?.t("common:notificationsdesctrion"),
        Image: "/assets/icons/icon-notifications.png",
      },
    ],
  };

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const res = fetch(`${process.env.BACKEND_URL}notifications`, {
      method: "GET",
      // Headr Request Api
      headers: JSON.parse(
        JSON.stringify({
          Accept: "application/json",
          "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
        })
      ),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.data.notifications);
        setData(data.data.notifications);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      {isLoading ? (
        <NotificationLoading ClassName={"notifications__loding"} />
      ) : (
        <NotificationsList DataList={DataList} Data={data} />
      )}
    </>
  );
}

export async function getStaticProps(context: any) {
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
/*

        <section className="notifications__list">
          <div className="container">
            <Skeleton
              count={3}
              containerClassName={"notifications__list__card__empty"}
            />

          </div>
        </section>

        
          <Suspense
            fallback={
              <NotificationLoading ClassName={"notifications__loding"} />
            }
          >

          </Suspense>
*/
