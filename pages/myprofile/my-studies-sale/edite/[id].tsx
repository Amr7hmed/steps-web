import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import FormResale from "@/components/myprofile-sections/my-studies-sale/form-resale";
import { useRouter } from "next/router";

export default function EditeFeasibilityStudy() {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;
  console.log(id);

  const DataHeader = {
    Title: "تعديل دراسة جدوى مشروع إلكتروني للبيع",
    Path: `/myprofile/my-studies-sale/edite/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderTwoTitle"),
        Path: "/myprofile/my-studies-sale/",
      },
      {
        Name: i18n?.t("common:ModifyTheStudy"),
        Path: `/myprofile/my-studies-sale/edite/${id}`,
      },
    ],
  };

  const DataType = {
    List: [
      {
        Id: 1,
        Text: i18n?.t("common:TestCategory"),
        value: 1,
      },
      {
        Id: 2,
        Text: i18n?.t("common:TestCategory"),
        value: 2,
      },
      {
        Id: 3,
        Text: i18n?.t("common:TestCategory"),
        value: 3,
      },
      {
        Id: 4,
        Text: i18n?.t("common:TestCategory"),
        value: 4,
      },
    ],
  };
  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <FormResale DataList={DataType.List} />
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
