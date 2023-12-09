import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import { InputTextAreaFeasibilityStudy } from "../inputs";

type TypeProps = {
  DataList: {
    ValuOne: string | undefined;
    ValuTwo: string | undefined;
    ValuThree: string | undefined;
    ValuFour: string | undefined;
  };
};

const StepFour = (props: TypeProps) => {
  const { DataList } = props;
  const router = useRouter();
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    questionone: DataList.ValuOne,
    questiontwo: DataList.ValuTwo,
    questionthree: DataList.ValuThree,
    questionfour: DataList.ValuFour,
  });

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
        if (
          state.questionone === "" ||
          state.questiontwo === "" ||
          state.questionthree === "" ||
          state.questionfour === ""
        ) {
          setError(true);
          return;
        } else {
          setError(false);
          router.push("/");
        }
      }}
    >
      <div className="study__form">
        <InputTextAreaFeasibilityStudy
          valueInput={state.questionone}
          Label={i18n?.t("common:TheQuestionIsWrittenHere")}
          Name={"questionone"}
          HandleChange={handleChange}
          Description={i18n?.t("common:SliderDescription")}
          Placeholder={i18n?.t("common:TheQuestionIsWrittenHere")}
          error={error === true && state.questionone === "" ? true : false}
        />
        <InputTextAreaFeasibilityStudy
          valueInput={state.questiontwo}
          Label={i18n?.t("common:TheQuestionIsWrittenHere")}
          Name={"questiontwo"}
          HandleChange={handleChange}
          Description={i18n?.t("common:SliderDescription")}
          Placeholder={i18n?.t("common:TheQuestionIsWrittenHere")}
          error={error === true && state.questiontwo === "" ? true : false}
        />
        <InputTextAreaFeasibilityStudy
          valueInput={state.questionthree}
          Label={i18n?.t("common:TheQuestionIsWrittenHere")}
          Name={"questionthree"}
          HandleChange={handleChange}
          Description={i18n?.t("common:SliderDescription")}
          Placeholder={i18n?.t("common:TheQuestionIsWrittenHere")}
          error={error === true && state.questionthree === "" ? true : false}
        />
        <InputTextAreaFeasibilityStudy
          valueInput={state.questionfour}
          Label={i18n?.t("common:TheQuestionIsWrittenHere")}
          Name={"questionfour"}
          HandleChange={handleChange}
          Description={i18n?.t("common:SliderDescription")}
          Placeholder={i18n?.t("common:TheQuestionIsWrittenHere")}
          error={error === true && state.questionfour === "" ? true : false}
        />

        <button className="btn btn-send btn-green btn-send-50 " type="submit">
          {i18n?.t("common:SaveTheModification")}
        </button>
      </div>
    </form>
  );
};

export default StepFour;
