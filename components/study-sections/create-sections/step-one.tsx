import React, { useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { SelectFeasibilityStudy } from "../inputs";

function StepOne() {
  const router = useRouter();
  const [specialty, setSpecialty] = useState("");
  const [error, setError] = useState(false);

  return (
    <form
      className="form "
      onSubmit={(e) => {
        e.preventDefault();
        if (specialty === "") {
          setError(true);
          return;
        } else {
          setError(false);
          router.push(`/study/create/form-two/${specialty}`);
        }
      }}
    >
      <section className="study__form">
        {/* Study Form Descriphn  */}
        <div className="study__form__descriphn">
          <h2 className="study__form__descriphn__title">
            {i18n?.t("common:chooseYourSpecialty")}
          </h2>
          <p className="study__form__descriphn__text">
            {i18n?.t("common:chooseYourSpecialtyDescripthn")}
          </p>
        </div>

        {/* Study Form Select Box:Start*/}
        <SelectFeasibilityStudy
          Value={specialty}
          setValue={setSpecialty}
          Label={i18n?.t("common:ChooseSpecialty")}
          StyleClassRequired={"required"}
          ErrorVildechin={error === true && specialty === "" ? true : false}
        />
        {/* Study Form Select Box:End*/}
      </section>

      <section className="study__form__buttons">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={"/"} className={`btn-send btn-light`} scroll={true}>
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>

          <button type="submit" className="btn btn-send btn-green">
            {i18n?.t("common:Next")}
          </button>
        </div>
      </section>
    </form>
  );
}

export default StepOne;
