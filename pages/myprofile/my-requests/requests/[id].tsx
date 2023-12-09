import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import DetailsContent from "@/components/myprofile-sections/my-requests/requests-details";
import Link from "next/link";

export default function RequestsDetails() {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const DataHeader = {
    Title: "عنوان الاستشارة هنا",
    Path: `/account-user/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:ConsultationRequests"),
        Path: "/my-account/my-requests",
      },
      {
        Name: "عنوان الاستشارة هنا",
        Path: `/account-user/${id}`,
      },
    ],
  };

  const Request = {
    header: {
      list: [
        {
          title: i18n?.t("common:Specialization"),
          data: "استشارات أسرية",
          details: false,
        },
        {
          title: i18n?.t("common:StudyTitle"),
          data: "دراسة مشروع متجر إلكتروني",
          details: false,
        },
        {
          title: i18n?.t("common:StudyPrice"),
          data: "2,500 ر.س",
          details: false,
        },
        {
          title: i18n?.t("common:DateAndTime"),
          data: "7 مارس 2024  |  am 10:00 - 10:45 am",
          details: false,
        },
        {
          title: i18n?.t("common:ConsultationPrice"),
          data: "100 ر.س",
          details: false,
        },
        {
          title: i18n?.t("common:ConsultationDetails"),
          data: i18n?.t("common:LegalInfoDescriptionTest"),
          details: true,
        },
      ],
    },
    body: {
      listone: [
        {
          id: 1,
          title: i18n?.t("common:TheTotal"),
          data: "100 ر.س",
          line: false,
          totle: false,
        },
        {
          id: 2,
          title: i18n?.t("common:ValueAddedTax"),
          data: "50 ر.س",
          line: true,
          totle: false,
        },
      ],
      listtwo: [
        {
          id: 3,
          title: i18n?.t("common:CouponDiscount"),
          data: "0 ر.س",
          line: false,
          totle: false,
        },
        {
          id: 4,
          title: i18n?.t("common:RequiredTotal"),
          data: "150 ر.س",
          line: false,
          totle: true,
        },
      ],
    },
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="request-details">
        <div className="container">
          <DetailsContent
            RequestHeader={Request.header}
            RequestBody={Request.body}
          />

          <div className="my-account__buttons d-flex justify-content-between align-items-center">
            <Link
              href={"/myprofile/my-requests/1"}
              className={`btn btn-send btn-light`}
              scroll={true}
            >
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
