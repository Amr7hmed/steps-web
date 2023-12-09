import { i18n } from "next-i18next";
import { ErrorMessage, Field } from "formik";
import { PhoneInputField } from "@/components/inputes/PhoneInput";
import { useEffect, useState } from "react";
import { StepsToken } from "@/api/variables";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

export function InputTextAreaFeasibilityStudy(props: any) {
  const {
    valueInput,
    Label,
    Name,
    HandleChange,
    Description,
    Placeholder,
    StyleClassRequired,
    ErrorVildechin,
  } = props;
  return (
    <div className={`form-group  ${StyleClassRequired}  position-relative`}>
      <label>{Label}</label>

      {Description === "" ? (
        ""
      ) : (
        <span className="description">{Description}</span>
      )}

      <textarea
        placeholder={Placeholder}
        value={valueInput}
        className={
          ErrorVildechin === true ? "form-control is-invalid" : "form-control"
        }
        name={Name}
        onChange={HandleChange}
      />

      {/* Error Div */}
      {ErrorVildechin === true ? (
        <div className="errorfiled mt-3">
          {i18n?.t("errors:ThisFieldIsRequired")}
        </div>
      ) : null}
    </div>
  );
}

export function SelectFeasibilityStudy(props: any) {
  const { Value, setValue, Label, StyleClassRequired, ErrorVildechin } = props;
  const router = useRouter();

  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const res = fetch(`${process.env.BACKEND_URL}categories`, {
      method: "GET",
      // Headr Request Api
      headers: JSON.parse(
        JSON.stringify({
          Accept: "application/json",
          "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
        })
      ),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        setDataArray(data.data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={`form-group  ${StyleClassRequired}`}>
      <label>{Label}</label>

      {isLoading ? (
        <div className="study__form__loding">
          <Skeleton />
        </div>
      ) : (
        <select
          className={ErrorVildechin === true ? "is-invalid" : ""}
          defaultValue={Value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option className="first" disabled={true} value={""}>
            {Label}
          </option>
          {dataArray.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      {/* Error Div */}
      {ErrorVildechin === true ? (
        <div className="errorfiled mt-3">
          {i18n?.t("errors:ThisFieldIsRequired")}
        </div>
      ) : null}
    </div>
  );
}

export const InputFileFeasibilityStudy = (props: any) => {
  const { Label, Name, Type, handleChangefile, AcceptFile, ErrorVildechin } =
    props;

  return (
    <div className={"form-group"}>
      <span
        className={
          ErrorVildechin === true
            ? "is-invalid file-add position-relative"
            : " file-add position-relative"
        }
      >
        <img src="/assets/icons/icon-file-documentupload.png" alt="" />
        <span className="text">{Label}</span>
        <input
          type={Type}
          placeholder={Label}
          className={" form-control"}
          name={Name}
          onChange={handleChangefile}
          accept={AcceptFile}
        />
      </span>
      {/* Error Div */}
      {ErrorVildechin === true ? (
        <div className="errorfiled mt-3">
          {i18n?.t("errors:ThisFieldIsRequired")}
        </div>
      ) : null}
    </div>
  );
};
export const InputText = (props: any) => {
  const {
    valueInput,
    Label,
    Name,
    Type,
    HandleChange,
    StyleClassRequired,
    ErrorVildechin,
  } = props;

  return (
    <div className={`form-group  ${StyleClassRequired} position-relative`}>
      <label>{Label}</label>

      <input
        type={Type}
        placeholder={Label}
        value={valueInput}
        className={
          ErrorVildechin === true ? "is-invalid form-control" : " form-control"
        }
        name={Name}
        onChange={HandleChange}
      />
      {/* Error Div */}
      {ErrorVildechin === true ? (
        <div className="errorfiled mt-3">
          {i18n?.t("errors:ThisFieldIsRequired")}
        </div>
      ) : null}
    </div>
  );
};

export const InputPriceDiscount = (props: any) => {
  const { valueInput, Label, Name, Type, ErrorVildechin } = props;

  return (
    <div className={`form-group input-price-discount position-relative`}>
      <label>{Label}</label>

      <input
        type={Type}
        placeholder={Label}
        value={valueInput}
        className={
          ErrorVildechin === true ? "is-invalid form-control" : " form-control"
        }
        name={Name}
        disabled={true}
      />
      {/* Error Div */}
      {ErrorVildechin === true ? (
        <div className="errorfiled mt-3">
          {i18n?.t("errors:ThisFieldIsRequired")}
        </div>
      ) : null}
    </div>
  );
};
export function InputPhonecountry(props: any) {
  const { Error, valueInput, Name, Label, Type } = props;
  return (
    <div className={Error ? "form-group position-relative " : "form-group "}>
      <label>{Label}</label>
      <Field
        placeholder={Label}
        type={Type}
        name={Name}
        value={valueInput}
        component={PhoneInputField}
        className={
          Error
            ? "form-control is-invalid form-phone"
            : "form-control is-invalid"
        }
      />
      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
}

export const InputOuter = (props: any) => {
  const {
    Error,
    valueInput,
    Label,
    Name,
    Type,
    Placeholder,
    StyleClassRequired,
  } = props;

  return (
    <div
      className={
        Error
          ? `form-group position-relative ${StyleClassRequired}`
          : `form-group  ${StyleClassRequired}`
      }
    >
      <label>{Label}</label>

      <Field
        type={Type}
        component="input"
        placeholder={Placeholder === undefined ? Label : Placeholder}
        value={valueInput}
        className={Error ? "form-control is-invalid" : "form-control"}
        name={Name}
      />

      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
};

export const TextAreaQuestion = (props: any) => {
  const { Item, Index, arrayAnswer } = props;
  const [answer, setAnswer] = useState("");

  const handleChange = (e: any) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <label>{Item.question}</label>
      {Item.description === "" ? (
        ""
      ) : (
        <span className="description">{Item.description}</span>
      )}
      <textarea
        placeholder={i18n?.t("common:WriteHereATextAnswerToTheQuestion")}
        className={"form-control"}
        name={Item.id}
        value={answer}
        onInput={handleChange}
      />
    </>
  );
};
/*

          <div className="form-group" key={item.id}>
            <label>{item.question}</label>
            {Item.description === "" ? (
              ""
            ) : (
              <span className="description">{Item.description}</span>
            )}

            <textarea
              placeholder={i18n?.t("common:WriteHereATextAnswerToTheQuestion")}
              className={"form-control"}
              value={arrayAnswer[index]}
              name={"Name"}
              onChange={handleChange}
            />
          </div>
 */
