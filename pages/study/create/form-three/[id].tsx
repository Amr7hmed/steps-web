import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import StepThree from "@/components/study-sections/create-sections/step-three";
import { useRouter } from "next/router";

export default function CreateStudyThree() {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const DataHeader = {
    Title: i18n?.t("common:SliderThreeTitle"),
    Path: `/study/create/form-three/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:SliderThreeTitle"),
        Path: `/study/create/form-three/${id}`,
      },
    ],
  };
  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <StepThree />
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
