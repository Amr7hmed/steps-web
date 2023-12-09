import { dehydrate, useInfiniteQuery } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import { FakedataAPi } from "./fakedata.js";
import OurConsultantAll from "@/components/all-consultant-sections/all-data-consultant/index";
import OurConsultantFilters from "@/components/all-consultant-sections/filter-consultant/index";
import { useEffect, useState } from "react";
import Paginate from "@/components/paginate/index";
import Link from "next/link.js";
import PageEmpty from "@/components/empty/index";

export default function ConsultantProfile(props: any) {
  const { RequestData } = props;
  console.log("ccontext", RequestData);

  const ArrayData = FakedataAPi.OurConsultants;

  const consultants = RequestData.data.consultants;

  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const page = (query.page as string) ?? 1;
  const perPage = (query.perPage as string) ?? "12";
  const itemPerpage = +perPage;
  const [pageCount, setPageCount] = useState(1);

  const [show, setShow] = useState(false);

  const DataHeader = {
    Title: i18n?.t("common:OurConsultants"),
    Path: `/our-consultant/page:${1}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:OurConsultants"),
        Path: `/our-consultant/page:${1}`,
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
  useEffect(() => {
    setPageCount(Math.ceil(ArrayData.length / itemPerpage));
  });

  const handlePageClick = (e: { selected: number }) => {
    const newOffest = e.selected + 1;
    router.push(
      `/all-consultant/${newOffest}?filterspecialization=${query.filterspecialization}&filterratings=${query.filterratings}&filterprice=${query.filterprice}`
    );
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <div className="our-consultant">
        <div className="container">
          <div className="our-consultant__info">
            <div
              className={
                show === false
                  ? "our-consultant__info__filters hide-filter"
                  : "our-consultant__info__filters show-filter"
              }
            >
              <div className="position-relative">
                <OurConsultantFilters
                  Specialization={Specialization}
                  Ratings={Ratings}
                  Price={Price}
                />

                <div className="our-consultant__info__filters__btn">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setShow(!show)}
                  >
                    <img
                      src="/assets/icons/icon-angles-left-solid.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            {consultants.length <= 0 ? (
              <PageEmpty
                Image={"/assets/icons/icon-empty.png"}
                Text={i18n?.t("common:emptyproudect")}
              />
            ) : (
              <OurConsultantAll OurConsultants={consultants} />
            )}
          </div>

          <div className=" our-consultant__info__buttons">
            <Link href={"/"} className="btn-back">
              {i18n?.t("common:Back")}
            </Link>
            <>
              {consultants.length <= 12 ? (
                ""
              ) : (
                <Paginate
                  pageCount={pageCount}
                  handlePageClick={handlePageClick}
                  pagenumber={page}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params, query } = context;
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json;charset=UTF-8");
  // requestHeaders.set('Accept', 'application/json');
  requestHeaders.set("Accept", "application/json, text/plain, */*");
  //requestHeaders.set('Retry-After', "3600");
  requestHeaders.set("Accept-Language", context.locale);
  requestHeaders.set("Access-Control-Allow-Origin", "*");
  requestHeaders.set("Access-Control-Allow-Headers", "*");

  const res = await fetch(
    `${process.env.BACKEND_URL}consultants/${query.page}?category_id=${query.filterspecialization}&rate=${query.filterratings}&price=${query.filterprice}`,
    {
      method: "get",
      headers: requestHeaders,
    }
  );
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
      queryid: query,
      params,
      RequestData,
      ...i18nServer,
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 2,
    },
  };
}
