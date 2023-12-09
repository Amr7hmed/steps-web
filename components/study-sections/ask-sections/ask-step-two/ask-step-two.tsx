import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import CardConsultantSelect from "./card-consultant-select";
import Link from "next/link";
import AskRows from "./askrows";
import AskStudyFilters from "./filters";

type TypeProps = {
  ArrayData: {
    id: number;
    Title: string;
    revew: number;
    Specialization: string;
    linkImage: string;
    time: string;
    price: string;
  }[];
  Price: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
  Ratings: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
};

function AskStepTwo(props: TypeProps) {
  const { ArrayData, Price, Ratings } = props;
  const { push } = useRouter();

  const [consultant, setConsultant] = useState("");
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(consultant);
        push("/study/ask/dateandtime");
      }}
    >
      <div className="study">
        <div className="d-flex">
          <AskStudyFilters Ratings={Ratings} Price={Price} />

          <AskRows
            ArrayData={ArrayData}
            consultant={consultant}
            setConsultant={setConsultant}
          />
        </div>

        <div className="study__payment__buttons d-flex justify-content-between align-items-center">
          <Link
            href={"/study/ask/specialties"}
            className={`btn btn-send btn-light`}
            scroll={true}
          >
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>
          <button className={`btn btn-send btn-green`} type="submit">
            <span className="text">{i18n?.t("common:Next")}</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default AskStepTwo;
