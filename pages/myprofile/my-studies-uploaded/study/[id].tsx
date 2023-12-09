import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import StudyDetails from "@/components/myprofile-sections/my-studies-uploaded/details";

export default function FeasibilityStudyDetails() {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const DataHeader = {
    Title: "دراسة مشروع متجر إلكتروني",
    Path: `/myprofile/my-studies-uploaded/study/${id}`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:PurchasedStudies"),
        Path: "/myprofile/my-studies-uploaded/1",
      },
      {
        Name: "دراسة مشروع متجر إلكتروني",
        Path: `/myprofile/my-studies-uploaded/study/${id}`,
      },
    ],
  };
  const DataPage = {
    id: id,
    title: "دراسة مشروع متجر إلكتروني",
    image: "/assets/images/2.png",
    days: "فبراير 27 , 2022",
    price: "2,500 ر.س",
    discription: i18n?.t("common:LegalInfoDescriptionTest"),
  };

  return (
    <section className="study">
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <StudyDetails DataPage={DataPage} />
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
