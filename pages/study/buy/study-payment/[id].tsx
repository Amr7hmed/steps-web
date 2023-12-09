import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import PaymentHeader from "@/components/study-sections/buy-sections/payment/payment-header";
import PaymentList from "@/components/study-sections/buy-sections/payment/payment-list";
import PaymentButtons from "@/components/study-sections/buy-sections/payment/payment-buttons";

export default function FeasibilityStudyPayment() {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const DataHeader = {
    Title: "دراسة مشروع متجر إلكتروني",
    Path: `/study/buy/study-payment/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderOneTitle"),
        Path: "/study/buy",
      },
      {
        Name: "دراسة مشروع متجر إلكتروني",
        Path: `/study/buy/study-details/${id}`,
      },
      {
        Name: i18n?.t("common:PurchaseTheStudy"),
        Path: `/study/buy/study-payment/${id}`,
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
          title: i18n?.t("common:RequiredTotal"),
          data: "150 ر.س",
          line: false,
          totle: true,
        },
      ],
    },
  };

  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="study__payment">
        <div className="container">
          <PaymentHeader ListData={Request.header} />
          <PaymentList List={Request.body.listone} />
          <PaymentList List={Request.body.listtwo} />
          <PaymentButtons />
        </div>
      </section>
    </section>
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
