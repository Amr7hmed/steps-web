import CustomHead from "@/components/custom-head";
import HeroOtherPages from "@/components/hero-other-pages";
import MyPastRequestsCard from "@/components/myprofile-sections/my-past-requests/card";
import MyRequestsNavlist from "@/components/myprofile-sections/my-requests/navlist";
import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

type Props = {};

const MyPastRequests = (props: Props) => {
  const DataHeader = {
    Title: i18n?.t("common:PreviousConsultations"),
    Path: "/myprofile/my-requests/my-past-requests",
    List: [
      {
        Name: i18n?.t("common:navbarhome"),
        Path: "/",
      },
      {
        Name: i18n?.t("common:PreviousConsultations"),
        Path: "/myprofile/my-requests/my-past-requests",
      },
    ],
  };

  const Request = {
    List: [
      {
        title: "عنوان الاستشارة هنا",
        id: "1",
        staterequest: "confirmation",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        title: "عنوان الاستشارة هنا",
        id: "2",
        staterequest: "appointment",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
      {
        title: "عنوان الاستشارة هنا",
        id: "3",
        staterequest: "appointment",
        specialization: "استشارات أسرية",
        NameOfAdvisor: "على فهد على",
        DateAndTime: "7 مارس 2024  |  am 10:00 - 10:45 am",
      },
    ],
  };
  return (
    <>
      <CustomHead />
      <HeroOtherPages DataHeader={DataHeader} />

      <section className="my-requests">
        <div className="container">
          <MyRequestsNavlist
            ArrayLength={Request.List.length}
            Title={i18n?.t("common:AllPreviousConsultations")}
          />

          {Request.List.length < 0 ? (
            ""
          ) : (
            <>
              {Request.List.map((item: any, index: number) => (
                <MyPastRequestsCard
                  Item={item}
                  key={index}
                  Consultation={false}
                />
              ))}
            </>
          )}

          <div className="my-account__buttons d-flex justify-content-between align-items-center">
            <Link href={"/"} className={`btn btn-send btn-light`} scroll={true}>
              <span className="text">{i18n?.t("common:Back")}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPastRequests;
