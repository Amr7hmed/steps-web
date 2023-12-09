import { i18n } from "next-i18next";
import Link from "next/link";
import ModalConfirmedSuccessfully from "./modals/modal-confirmed-successfully";

const MyPastRequestsCard = (props: any) => {
  const { Item, key, Consultation } = props;
  return (
    <div className="my-requests__card" key={key}>
      <div className="my-requests__card__head">
        <div className="title">
          <Link
            href={`/myprofile/my-past-requests/requests/${Item.id}`}
            className="text"
          >
            {Item.title}
          </Link>
        </div>
        <span className="link btn-dark">{i18n?.t("common:Finished")}</span>
      </div>

      <div className="my-requests__card__row row">
        <div className={`col-12 col-md-4`}>
          <div className="my-requests__card__content">
            <span className="text">{`${i18n?.t(
              "common:Specialization"
            )} :`}</span>
            <span className="data">{Item.specialization}</span>
          </div>
        </div>

        <div className={`col-12 col-md-4`}>
          <div className="my-requests__card__content">
            <span className="text">{`${i18n?.t(
              "common:NameOfAdvisor"
            )} :`}</span>
            <span className="data">{Item.NameOfAdvisor}</span>
          </div>
        </div>

        <div className={`col-12 col-md-4`}>
          <div className="my-requests__card__content">
            <span className="text">{`${i18n?.t(
              "common:ConsultationAppointment"
            )} :`}</span>
            <span className="data">{Item.DateAndTime}</span>
          </div>
        </div>
      </div>
      {Consultation === true ? (
        <div className="my-requests__card__footer">
          <button
            className="btn btn-conform"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#past-request-revew-${Item.id}`}
          >
            {i18n?.t("common:AdvisorEvaluation")}
          </button>
          <ModalConfirmedSuccessfully Id={Item.id} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyPastRequestsCard;
