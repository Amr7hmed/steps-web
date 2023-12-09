import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import { i18n } from "next-i18next";
import ContactUsInfo from "@/components/contact-us-sections/contact-us-info";
import ContactUsForm from "@/components/contact-us-sections/form";

export default function ContactUs(props: any) {
  // const router = useRouter();
  //console.log("router", router);

  const dataApi = props.RequestData.data;

  const DataHeader = {
    Title: i18n?.t("common:connectWithUs"),
    Path: "/legal/contact-us",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:connectWithUs"),
        Path: "/legal/contact-us",
      },
    ],
  };

  const DataDescriptionInfo = {
    Title: i18n?.t("common:connectUsNextTitle"),
    Description: dataApi.about,
    List: [
      {
        Title: i18n?.t("common:OurAddress"),
        Description: dataApi.address,
        Image: "/assets/icons/icon-map.png",
        Id: "address",
      },
      {
        Title: i18n?.t("common:E-mail"),
        Description: dataApi.email,
        Image: "/assets/icons/icon-email.png",
        Id: "email",
      },
      {
        Title: i18n?.t("common:Phone"),
        Description: dataApi.phone,
        Image: "/assets/icons/icon-phone.png",
        Id: "phone",
      },
    ],
  };

  const DataForm = {
    Title: i18n?.t("common:SendUsYourRequests"),
    UserName: i18n?.t("common:UserName"),
    MobileNumber: i18n?.t("common:MobileNumber"),
    E_mail: i18n?.t("common:E-mail"),
    TheMessage: i18n?.t("common:TheMessage"),
    connectUsButton: i18n?.t("common:connectUsButton"),
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <ContactUsInfo DataDescriptionInfo={DataDescriptionInfo} />
            </div>
            <div className="col-12 col-lg-6">
              <ContactUsForm DataForm={DataForm} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context: any) {
  const res = await fetch(`${process.env.BACKEND_URL}settings`, {
    method: "get",
    // Headr Request Api
    headers: JSON.parse(
      JSON.stringify({
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(context.locale)),
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      })
    ),
  });
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
      RequestData,
      ...i18nServer,
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 2,
    },
  };
}
