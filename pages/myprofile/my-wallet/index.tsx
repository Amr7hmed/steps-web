import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import WalletRowl from "@/components/myprofile-sections/my-wallet/wallet.rowl";
import WalletForm from "@/components/myprofile-sections/my-wallet/wallet.form";

export default function Wallet() {
  const DataHeader = {
    Title: i18n?.t("common:Wallet"),
    Path: `/account-consultant/wallet`,
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:Wallet"),
        Path: `/account-consultant/wallet`,
      },
    ],
  };

  const Data = {
    TotalAvailableBalance: "3.5000",
    TotalConsulting: "17",
    TotalStudiesSold: "17",
  };
  const ActionClick = () => {
    console.log("gg");
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="my-account__content">
        {/* Wallet Row List */}
        <div className="container">
          <div className="my-account__content__wallet">
            <WalletRowl Data={Data} />

            <WalletForm />
          </div>
        </div>

        {/* Wallet Form */}
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
