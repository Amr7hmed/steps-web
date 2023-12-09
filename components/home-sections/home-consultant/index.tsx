import ConsultantProfile from "@/components/consultant-sections/consultant-profile";
import ConsultantInformation from "@/components/consultant-sections/consultant-information";
import ConsultantAcademic from "@/components/consultant-sections/consultant-academic";
import ConsultantRatings from "@/components/consultant-sections/consultant-ratings";

const HomeConsultant = () => {
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
    <section className="home__consultant">
      <ConsultantProfile DataHeadProfile={DataHeadProfile} />

      <div className="position-relative">
        <div className="decorativeLine-top"></div>
        <div className="roundcube-green-glossy"></div>
        <ConsultantInformation
          DataPersonalInformation={DataPersonalInformation}
        />
      </div>

      <ConsultantAcademic DataPersonaAcademic={DataPersonaAcademic} />

      <div className="position-relative">
        <div className="cylinder-green-glossy"></div>
        <div className="SuperToroid-1"></div>

        <div className="decorativeLine-top"></div>
      </div>
      <ConsultantRatings DataPersonaRatings={DataPersonaRatings.Ratings} />
    </section>
  );
};

export default HomeConsultant;
