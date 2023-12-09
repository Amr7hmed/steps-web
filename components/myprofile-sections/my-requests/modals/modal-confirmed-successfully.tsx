import { i18n } from "next-i18next";
import React from "react";

function ModalConfirmedSuccessfully(props: any) {
  const { Id } = props;

  return (
    <div
      className="modal-confirmed-successfully modal fade"
      id={`appointment-confirmed-successfully-${Id}`}
      aria-labelledby="appointment-confirmed-successfully"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="close d-flex flex-row-reverse">
              <button
                type="button"
                className="btn btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close-modal-delete-account"
              >
                <img
                  src={"/assets/icons/icon-close-notifications.png"}
                  alt=""
                />
              </button>
            </div>
            <div className="image">
              <img src={"/assets/icons/icon-modal-success.png"} alt="" />
            </div>

            <div className="content">
              <p>
                {i18n?.t("common:TheAppointmentHasBeenConfirmedSuccessfully")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmedSuccessfully;
