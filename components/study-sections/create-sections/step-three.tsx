import { i18n } from "next-i18next";
import Link from "next/link";
import React from "react";

type Props = {};

const StepThree = (props: Props) => {
  return (
    <div className="study__download">
      <div className="download-contner">
        <h4>{i18n?.t("common:DownloadTheStudyNow")}</h4>
        <ul>
          <li>
            <button type="button" className="btn btn-downold">
              <span className="icon">
                <img src="/assets/icons/icon-download.png" alt="" />
              </span>
              <span className="text">{i18n?.t("common:DownloadTheStudy")}</span>
            </button>
          </li>
          <li>
            <Link href={"/study/create/form-four/1"}>
              <span className="icon">
                <img src="/assets/icons/icon-edit.png" alt="" />
              </span>
              <span className="text">{i18n?.t("common:ModifyTheStudy")}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepThree;
