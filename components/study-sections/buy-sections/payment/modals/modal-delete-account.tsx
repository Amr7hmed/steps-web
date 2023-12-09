import { i18n } from "next-i18next";
import React from "react";

type Props = {};

function ModalDeleteAccount({}: Props) {
  {
    /* Function Remove Account */
  }
  const RemoveAccount = (e: any) => {
    const ButtonCloseModal: any = document.getElementById(
      "close-modal-delete-account"
    );
    ButtonCloseModal.click();
  };

  return (
    <div
      className="modal__delete  modal fade"
      id={`modal-add-favourite-1`}
      aria-labelledby="delete-accountLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="image">
              <img src={"/assets/icons/icon-modal-remove.png"} alt="" />
            </div>

            <div className="content">
              <h4>{i18n?.t("common:DeleteMyAccountModalTitle")}</h4>
              <p>{i18n?.t("common:DeleteMyAccountModalDescription")}</p>
              <div className="d-flex justify-content-between align-items-center modal-buttons w-100">
                <button
                  className="button btn btn-send btn-delete"
                  type="button"
                  onClick={RemoveAccount}
                >
                  {i18n?.t("auth:Delete")}
                </button>
                <button
                  className="button btn btn-back btn-Close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="close-modal-delete-account"
                >
                  {i18n?.t("auth:Cancel")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteAccount;
