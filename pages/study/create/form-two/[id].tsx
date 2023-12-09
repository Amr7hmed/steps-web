import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import StepTwo from "@/components/study-sections/create-sections/step-two";
import { useRouter } from "next/router";

export default function CreateStudyTwo() {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const DataHeader = {
    Title: i18n?.t("common:SliderThreeTitle"),
    Path: `/study/create/form-two/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderThreeTitle"),
        Path: `/study/create/form-two/${id}`,
      },
    ],
  };

  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <StepTwo />
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
