import { dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "@/data/constants";
import queryClient from "@/lib/query-client";
import CustomHead from "@/components/custom-head";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link.js";
import ConsultantProfile from "@/components/consultant-sections/consultant-profile";
import ConsultantInformation from "@/components/consultant-sections/consultant-information";
import ConsultantAcademic from "@/components/consultant-sections/consultant-academic";
import ConsultantRatings from "@/components/consultant-sections/consultant-ratings";

export default function Consultant() {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;
  console.log(id);

  const DataHeadProfile = {
    ImageProfile: "/assets/images/profile-image-one.png",
    NameProfile: "على فهد",
    Rating: 4,
    NameOfSpecialtyHere: "اسم التخصص هنا",
    ConsultationPeriod: "45 د",
    ConsultationPrice: "100 ر.س",
    ConsultationsAnswered: 35,
    NumberOfReviews: 17,
    OverallAssessment: 4.5,
  };
  const DataPersonalInformation = {
    QuadName: "على فهد",
    Specialization: "تربية",
    Gender: "ذكر",
    OfficialJobTitle: "مشرف تربوي",
    Experience: "ثلاث سنوات",
  };

  const DataPersonaAcademic = {
    AcademicQualificationsAndCourses:
      "1- دكتوراه 1436- تقدير ممتاز مع الشرف الأولى، الجامعة الاسلامية، قسم التربية. 2- ماجستير 1432– تقدير ممتاز مع الشرف الأولى، الجامعة الاسلامية، قسم التربية.",
  };

  const DataPersonaRatings = {
    Ratings: [
      {
        id: 1,
        Name: "على فهد",
        Image: "/assets/images/user-one.png",
        revew: 4.5,
        Content:
          "التقييم يكتب هنا التقييم يكتب هنا يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم التقييم يكتب هنا",
      },
      {
        id: 2,
        Name: "على فهد",
        Image: "/assets/images/user-two.png",
        revew: 4.5,
        Content:
          "التقييم يكتب هنا التقييم يكتب هنا يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم التقييم يكتب هنا",
      },
      {
        id: 3,
        Name: "على فهد",
        Image: "/assets/images/user-three.png",
        revew: 4.5,
        Content:
          "التقييم يكتب هنا التقييم يكتب هنا يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم التقييم يكتب هنا",
      },
      {
        id: 4,
        Name: "على فهد",
        Image: "/assets/images/user-four.png",
        revew: 4.5,
        Content:
          "التقييم يكتب هنا التقييم يكتب هنا يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم يكتب هنا التقييم التقييم يكتب هنا",
      },
    ],
  };

  return (
    <>
      <CustomHead />

      <section className="consultant__information">
        <div className="container">
          <ConsultantProfile DataHeadProfile={DataHeadProfile} />
          <ConsultantInformation
            DataPersonalInformation={DataPersonalInformation}
          />
          <ConsultantAcademic DataPersonaAcademic={DataPersonaAcademic} />
          <ConsultantRatings DataPersonaRatings={DataPersonaRatings.Ratings} />
          {/* Buttons Action  */}
          <div className="consultant__information__buttons d-flex justify-content-between align-items-center">
            <Link
              href={
                "/all-consultant/1?filterspecialization=0&filterratings=0&filterprice=0"
              }
              className="btn-send btn-light"
              scroll={true}
            >
              <span className="text">{i18n?.t("common:Back")}</span>
            </Link>

            <Link href={"/"} className="btn-send btn-dark" scroll={true}>
              {i18n?.t("common:BookAConsultation")}
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
