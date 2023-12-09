import Head from "next/head";
import { CustomHeadProps } from "./custom-head.model";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

export default function CustomHead({
  title = "common:websiteName",
  name = {
    "twitter:card": "common:twitterCard",
    "twitter:data1": "common:twitterData",
    description: "common:description",
    "twitter:label1": "common:twitterLabel",
  },
  property = {
    "og:description": "common:ogDescription",
    "og:image": "common:ogImage",
    "og:image:height": "common:ogImageHeight",
    "og:image:type": "common:ogImageType",
    "og:image:width": "common:ogImageWidth",
    "og:site_name": "common:ogSiteName",
    "og:title": "common:ogTitle",
    "og:type": "common:ogType",
    "og:url": "common:ogURL",
  },
}: CustomHeadProps) {
  const { locale } = useRouter();
  return (
    <Head>
      <title>{i18n?.t(title!)}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content={locale} />

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {name &&
        Object.keys(name).length > 0 &&
        Object.keys(name).map((key) => (
          <meta key={key} name={key} content={i18n?.t(name![key])} />
        ))}
      {property &&
        Object.keys(property).length > 0 &&
        Object.keys(property).map((key) => (
          <meta key={key} property={key} content={i18n?.t(property![key])} />
        ))}
    </Head>
  );
}
