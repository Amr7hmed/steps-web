import React, { useState } from "react";
import { DatePickerValue } from "../../inputes";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import DataListTimeSection from "./tools/data-list-time";
import Link from "next/link";

type TypeProps = {
  DataListtime: {
    id: number;
    Title: string;
  }[];
};

function AskStepThree(props: TypeProps) {
  const { DataListtime } = props;
  const { push } = useRouter();

  const [consultant, setConsultant] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(consultant);
        push("/study/ask/personal-data");
      }}
    >
      <>
        <div className="row">
          <div className="col-12 col-lg-6">
            <DatePickerValue
              startDate={startDate}
              setStartDate={setStartDate}
              Label={i18n?.t("common:orderDate")}
            />
          </div>
          <div className="col-12 col-lg-6">
            <DataListTimeSection DataListtime={DataListtime} />
          </div>
        </div>
      </>
      <div className="study__payment__buttons d-flex justify-content-between align-items-center">
        <Link
          href={"/study/ask/consultants"}
          className={`btn btn-send btn-light`}
          scroll={true}
        >
          <span className="text">{i18n?.t("common:Back")}</span>
        </Link>
        <button className={`btn btn-send btn-green`} type="submit">
          <span className="text">{i18n?.t("common:Next")}</span>
        </button>
      </div>
    </form>
  );
}

export default AskStepThree;
