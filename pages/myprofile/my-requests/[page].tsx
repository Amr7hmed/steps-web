import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import Link from "next/link";
import MyRequestsCard from "@/components/myprofile-sections/my-requests/myrequestscard";
import MyRequestsNavlist from "@/components/myprofile-sections/my-requests/navlist";

export default function MyRequests() {
  const DataHeader = {
    Title: i18n?.t("common:ConsultationRequests"),
    Path: "/account-user/my-requests",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:ConsultationRequests"),
        Path: "/account-user/my-requests",
      },
    ],
  };

  const Request = {
    List: [
      {
        title: "عنوان الاستشارة هنا",
        id: "1",
        staterequest: "confirmation",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        title: "عنوان الاستشارة هنا",
        id: "2",
        staterequest: "appointment",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        title: "عنوان الاستشارة هنا",
        id: "3",
        staterequest: "appointment",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
    ],
  };

  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <section className="my-requests">
        <div className="container">
          <MyRequestsNavlist
            ArrayLength={Request.List.length}
            Title={i18n?.t("common:AllConsultationRequests")}
          />
          {Request.List.length < 0 ? (
            ""
          ) : (
            <>
              {Request.List.map((item: any, index: number) => (
                <MyRequestsCard Item={item} key={index} Consultation={false} />
              ))}
            </>
          )}

          <div className="my-account__buttons d-flex justify-content-between align-items-center">
            <Link href={"/"} className={`btn btn-send btn-light`} scroll={true}>
              <span className="text">{i18n?.t("common:Back")}</span>
            </Link>
          </div>
        </div>
      </section>
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
