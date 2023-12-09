import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import Link from "next/link";
import Paginate from "@/components/paginate";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavLastTop from "@/components/myprofile-sections/my-study-requests/navlasttop";
import MyStudyRequestsCard from "@/components/myprofile-sections/my-study-requests/card";

export default function MyStudyRequests() {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const page = (query.page as string) ?? 1;
  const perPage = (query.perPage as string) ?? "12";
  const itemPerpage = +perPage;
  const [pageCount, setPageCount] = useState(1);

  const DataHeader = {
    Title: i18n?.t("common:RequestsToCreateAFeasibilityStudy"),
    Path: "/myprofile/my-study-requests/1",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:RequestsToCreateAStudy"),
        Path: "/myprofile/my-study-requests/1",
      },
    ],
  };

  const Request = {
    List: [
      {
        id: "1",
        OrderNumber: "1234#",
        staterequest: false,
        specialization: "استشارات أسرية",
        StudyTitle: "دراسة جدوى لمتجر الكتروني",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        id: "2",
        OrderNumber: "1234#",
        staterequest: false,
        specialization: "استشارات أسرية",
        StudyTitle: "دراسة جدوى لمتجر الكتروني",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        id: "3",
        OrderNumber: "1234#",
        staterequest: false,
        specialization: "استشارات أسرية",
        StudyTitle: "دراسة جدوى لمتجر الكتروني",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
    ],
  };
  useEffect(() => {
    setPageCount(Math.ceil(Request.List.length / itemPerpage));
  });

  const handlePageClick = (e: { selected: number }) => {
    const newOffest = (e.selected * itemPerpage) % Request.List.length;
    /*
    router.push(
      `/recent-ads/${newOffest}?sortstatus=${query.sortstatus}&sortprice=${query.sortprice}&category=${query.category}&subcategory=${query.subcategory}&city=${query.city}&status=${query.status}&minprice=${query.minprice}&maxprice=${query.maxprice}`
    );
    */
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <section className="my-study-requests">
        <div className="container">
          <NavLastTop />
          {Request.List.map((item) => (
            <MyStudyRequestsCard Item={item} />
          ))}
          <div className="my-account__buttons d-flex justify-content-center align-items-center">
            {Request.List.length <= 4 ? (
              ""
            ) : (
              <Paginate
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                pagenumber={page}
              />
            )}
          </div>

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
