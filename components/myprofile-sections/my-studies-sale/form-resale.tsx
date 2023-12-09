import React, { useState } from "react";
import {
  InputText,
  InputFileFeasibilityStudy,
  SelectFeasibilityStudy,
  InputTextAreaFeasibilityStudy,
} from "@/components/study-sections/inputs";
import { i18n } from "next-i18next";
import Link from "next/link";

type TypeProps = {
  DataList: (
    | {
        Id: number;
        Text: string | undefined;
        value: number;
        Name?: undefined;
      }
    | {
        Id: number;
        Name: string | undefined;
        value: number;
        Text?: undefined;
      }
  )[];
};
const FormResale = (props: TypeProps) => {
  const { DataList } = props;

  const [state, setState] = useState({
    comments: "test",
  });

  const [price, setPrice] = useState("100");
  const [category, setCategory] = useState("3");
  const [fileone, setfileone] = useState(null);
  const [filetwo, setfiletwo] = useState(null);

  const handleChangeTextArea = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleChangePrice = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setPrice(value);
  };
  const handleChangefileone = (e: { target: { files: any[] } }) => {
    const files = e.target.files[0];
    setfileone(files);
  };
  const handleChangefiletwo = (e: { target: { files: any[] } }) => {
    const files = e.target.files[0];
    setfiletwo(files);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state.comments, price, category, fileone, filetwo);
      }}
    >
      <section className="study__form">
        <SelectFeasibilityStudy
          Value={category}
          setValue={setCategory}
          List={DataList}
          Label={i18n?.t("common:SelectCategory")}
        />
        <InputFileFeasibilityStudy
          Label={i18n?.t("common:AttachStudyFilesOne")}
          Type={"file"}
          Name={"fileone"}
          handleChangefile={handleChangefileone}
        />
        <InputFileFeasibilityStudy
          Label={i18n?.t("common:AttachStudyFilesTwo")}
          Type={"file"}
          Name={"filetwo"}
          handleChangefile={handleChangefiletwo}
        />
        <InputText
          valueInput={price}
          Label={i18n?.t("common:SellingPrice")}
          Name={"price"}
          Type={"text"}
          HandleChange={handleChangePrice}
        />
        <InputTextAreaFeasibilityStudy
          valueInput={state.comments}
          Label={i18n?.t("common:Comments")}
          Name={"comments"}
          HandleChange={handleChangeTextArea}
          Description={""}
          Placeholder={i18n?.t(
            "common:WriteHereAnyAdditionalNotesRelatedToTheStudy"
          )}
        />
      </section>
      <section className="study__form__buttons">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={"/"} className={`btn-send btn-light`} scroll={true}>
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>

          <button type="submit" className="btn btn-send btn-green">
            {i18n?.t("common:Publishing")}
          </button>
        </div>
      </section>
    </form>
  );
};

export default FormResale;
