import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import {
  InputTextAreaFeasibilityStudy,
  SelectFeasibilityStudy,
  InputText,
} from "../inputs";
import Link from "next/link";

type TypeProps = {
  DataList: {
    Id: number;
    Text: string | undefined;
    value: number;
  }[];
};

function AskStepOne(props: TypeProps) {
  const { DataList } = props;
  const { push } = useRouter();
  const [state, setState] = useState({
    comments: "",
  });

  const [title, setTitle] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleChangeTitle = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleChangeTextArea = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state.comments, title, specialty);
        push("/study/ask/consultants");
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <SelectFeasibilityStudy
              Value={specialty}
              setValue={setSpecialty}
              List={DataList}
              Label={i18n?.t("common:ChooseSpecialty")}
              StyleClassRequired={"required"}
            />
          </div>
          <div className="col-12 col-md-6">
            <InputText
              valueInput={title}
              Label={i18n?.t("common:ConsultationAddress")}
              Name={"price"}
              Type={"text"}
              HandleChange={handleChangeTitle}
              StyleClassRequired={"required"}
            />
          </div>
          <div className="col-12">
            <InputTextAreaFeasibilityStudy
              valueInput={state.comments}
              Label={i18n?.t("common:ConsultationDetails")}
              Name={"comments"}
              HandleChange={handleChangeTextArea}
              Description={""}
              Placeholder={i18n?.t("common:ConsultationDetails")}
              StyleClassRequired={"required"}
            />
          </div>
        </div>
        <div className="study__payment__buttons d-flex justify-content-between align-items-center">
          <Link href={"/"} className={`btn btn-send btn-light`} scroll={true}>
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

export default AskStepOne;
