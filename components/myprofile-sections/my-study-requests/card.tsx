import { i18n } from "next-i18next";
import Link from "next/link";

const MyStudyRequestsCard = (props: any) => {
  const { Item } = props;
  return (
    <div className="my-study-requests__card" key={Item.id}>
      <div className="my-study-requests__card__head">
        <Link
          href={`/myprofile/my-study-requests/study/${Item.id}`}
          className="title d-flex  align-items-center"
        >
          <span className="text">{i18n?.t("common:orderId")}</span>
          <span className="number">{Item.OrderNumber}</span>
        </Link>
        {Item.staterequest === true ? (
          <span className="link btn-yellow">
            {i18n?.t("common:WaitingForReview")}
          </span>
        ) : (
          <span className="link btn-dark">{i18n?.t("common:Finished")}</span>
        )}
      </div>
      <div className="my-study-requests__card__row row">
        <div className={`col-12 col-md-4`}>
          <div className="my-study-requests__card__content">
            <span className="text">{`${i18n?.t(
              "common:Specialization"
            )} :`}</span>
            <span className="data">{Item.specialization}</span>
          </div>
        </div>

        <div className={`col-12 col-md-4`}>
          <div className="my-study-requests__card__content">
            <span className="text">{`${i18n?.t("common:StudyTitle")} :`}</span>
            <span className="data">{Item.StudyTitle}</span>
          </div>
        </div>

        <div className={`col-12 col-md-4`}>
          <div className="my-study-requests__card__content">
            <span className="text">{`${i18n?.t(
              "common:ConsultationAppointment"
            )} :`}</span>
            <span className="data">{Item.DateAndTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStudyRequestsCard;
