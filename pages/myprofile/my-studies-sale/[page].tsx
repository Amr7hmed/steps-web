import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import MyRequestsNavlist from "@/components/myprofile-sections/my-requests/navlist";
import Link from "next/link";
import CardFeasibilityStudySelect from "@/components/myprofile-sections/my-studies-sale/card-feasibility-study-select";
import { useRouter } from "next/router";
import Paginate from "@/components/paginate";
import { useEffect, useState } from "react";

export default function MyStudiesSale() {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const page = (query.page as string) ?? 1;
  const perPage = (query.perPage as string) ?? "12";
  const itemPerpage = +perPage;
  const [pageCount, setPageCount] = useState(1);

  const DataHeader = {
    Title: i18n?.t("common:StudiesForSale"),
    Path: "/myprofile/my-studies-sale",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:StudiesForSale"),
        Path: "/myprofile/my-studies-sale",
      },
    ],
  };

  const Request = {
    List: [
      {
        id: 1,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: true,
      },
      {
        id: 2,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: true,
      },
      {
        id: 3,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: true,
      },
      {
        id: 4,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: true,
      },
      {
        id: 5,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: true,
      },
      {
        id: 6,
        image: "/assets/images/2.png",
        title: "دراسة مشروع متجر إلكتروني",
        days: "فبراير 27 , 2022",
        price: "2,500 ر.س",
        approval: false,
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

      <section className="my-studies">
        <div className="container">
          <MyRequestsNavlist
            ArrayLength={Request.List.length}
            Title={i18n?.t("common:AllStudies")}
          />

          <div className="row">
            {Request.List.map((item) => (
              <div className="col-12 col-sm-6 col-md-4" key={item.id}>
                <CardFeasibilityStudySelect Item={item} />
              </div>
            ))}
          </div>

          {Request.List.length <= 6 ? (
            ""
          ) : (
            <Paginate
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              pagenumber={page}
            />
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
