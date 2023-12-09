import { ErrorMessage, Field } from "formik";
import { PhoneInputField } from "@/components/inputes/PhoneInput";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import OTPInput from "react-otp-input";
import DatePicker from "react-datepicker";
import { i18n } from "next-i18next";

type PropsInputOuter = {
  Error: any | undefined;
  valueInput: any | undefined;
  Type: string | undefined;
  Label: string | undefined;
  Placeholder: string | undefined;
  Name: string;
  StyleClassRequired?: string | undefined;
};
type PropsInputPassword = {
  Error: any | undefined;
  valueInput: any | undefined;
  Type: string | undefined;
  Label: string | undefined;
  Name: string;
  ForgetPassword: string | undefined;
};

type PropsInputCode = {
  ValueOtp: string;
  SetvalueOtp: any;
  Disabledinput: any;
};

type TextAreaFeasibilityStudyTypeProps = {
  valueInput: string;
  Label: string | undefined;
  Placeholder: string | undefined;
  Name: string;
  HandleChange: any;
  Description: string | undefined;
};

type PropsInputText = {
  valueInput: string;
  Label: string | undefined;
  Name: string;
  Type: string;
  HandleChange: (e: { target: { value: any; name: any } }) => void;
};
type TypeDatePicker = {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  Label: string | undefined;
};
type TypeSelectBox = {
  Error: any | undefined;
  Type: string | undefined;
  Label: string | undefined;
  Name: string;
  SelectArray: { value: string; label: string | undefined }[];
  StyleClassRequired?: string | undefined;
};
// Field

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
export function InputPhonecountry(props: PropsInputOuter) {
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
export function InputPassword(props: PropsInputPassword) {
  const { Error, valueInput, Label, Name, Type, ForgetPassword } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <div className={Error ? "form-group position-relative " : "form-group "}>
      <label className="form-label">
        <label>{Label}</label>
      </label>

      <div className="position-relative">
        <Field
          type={toggle === false ? Type : "text"}
          name={Name}
          placeholder={Label}
          className={
            Error
              ? "form-control is-invalid form-control-password"
              : "form-control form-control-password"
          }
          value={valueInput}
        />
        <span className="toggoleimg" onClick={() => setToggle(!toggle)}>
          {toggle === false ? (
            <img
              src={"/assets/icons/icon-eye-invisible.svg"}
              alt="Invisible"
              className={Error ? "hide invisible_img" : "invisible_img"}
            />
          ) : (
            <img
              src={"/assets/icons/icon-eye-visible.svg"}
              alt="Visible"
              className={Error ? "hide invisible_img" : "invisible_img"}
            />
          )}
        </span>
      </div>

      {ForgetPassword !== "" ? (
        <Link href={"/auth/forgot-password"} className="btn-forgetPassword">
          {ForgetPassword}
        </Link>
      ) : (
        ""
      )}

      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
}
export const InputRadio = (props: PropsInputOuter) => {
  const { Error, valueInput, Label, Name, Type } = props;

  return (
    <div className={Error ? "form-group  position-relative" : "form-group"}>
      <div className="form-check">
        <Field
          type={Type}
          name={Name}
          checked={valueInput}
          id={Name}
          className={Error ? "form-check-input is-invalid " : "form-group"}
        />
        <label
          htmlFor={Name}
          className={valueInput === true ? "checklabel" : ""}
        >
          {Label}
        </label>
      </div>

      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
};
export const InputOtpCode = (props: PropsInputCode) => {
  const { ValueOtp, SetvalueOtp, Disabledinput } = props;

  return (
    <div className={"form-group"}>
      <div className="auth__code__otp">
        <OTPInput
          value={ValueOtp}
          onChange={SetvalueOtp}
          numInputs={4}
          renderSeparator={<span></span>}
          renderInput={(props) => (
            <input
              {...props}
              className={
                Disabledinput === false
                  ? "auth__code__otp__input"
                  : "auth__code__otp__input auth__code__otp__input__disabled"
              }
            />
          )}
        />
      </div>
      {/*

      <ErrorMessage name={Name} component="div" className="errorfiled" />
       */}
    </div>
  );
};
export function InputTextArea(props: PropsInputOuter) {
  const { Error, valueInput, Label, Name, Type, Placeholder } = props;
  return (
    <div className={Error ? "form-group position-relative " : "form-group "}>
      <label>{Label}</label>

      <Field
        type={Type}
        component="textarea"
        placeholder={Placeholder === undefined ? Label : Placeholder}
        value={valueInput}
        className={Error ? "form-control is-invalid" : "form-control"}
        name={Name}
        rows="3"
      />
      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
}
export const SelectOuter = (props: TypeSelectBox) => {
  const { Error, Label, Name, Type, SelectArray, StyleClassRequired } = props;

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
        as={Type}
        name={Name}
        className={Error ? "form-control is-invalid" : "form-control"}
      >
        {SelectArray.map((item: any, index: number) => (
          <option key={index} value={item.value} label={item.label}>
            {item.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
};
export const InputPrice = (props: PropsInputOuter) => {
  const { Error, valueInput, Label, Name, Type, Placeholder } = props;

  return (
    <div className={Error ? "form-group position-relative " : "form-group "}>
      <label>{Label}</label>

      <div className="position-relative">
        <Field
          type={Type}
          component="input"
          placeholder={Placeholder === undefined ? Label : Placeholder}
          value={valueInput}
          className={Error ? "form-control is-invalid" : "form-control"}
          name={Name}
        />
        <span className="pricespan">{i18n?.t("auth:SAR")}</span>
      </div>

      <ErrorMessage name={Name} component="div" className="errorfiled" />
    </div>
  );
};
export const InputFileDocument = (props: any) => {
  const {
    Error,
    Label,
    Name,
    Type,
    Placeholder,
    FileFormats,
    setFileState,
    fileState,
    ErrorMessage,
  } = props;
  const [outhername, setOuthername] = useState("");

  const handleFileChange = (e: any) => {
    const fileObj = e.target.files[0];
    setOuthername(fileObj.name);
    setFileState(fileObj);
  };

  return (
    <div
      className={
        Error === false && fileState === null
          ? "form-group position-relative "
          : "form-group "
      }
    >
      <label>{Label}</label>

      <div
        className={
          Error === false && fileState === null
            ? "position-relative file-type-document is-invalid"
            : "position-relative file-type-document"
        }
      >
        <span className="placeholder-text">
          {outhername === "" ? Placeholder : outhername}
        </span>
        <Field
          type={Type}
          component="input"
          placeholder={Placeholder === undefined ? Label : Placeholder}
          className={"form-control"}
          name={Name}
          accept={FileFormats}
          onChange={handleFileChange}
        />
        <span className="file-document-span">
          <img src="/assets/icons/icon-file-documentupload-light.png" alt="" />
        </span>
      </div>
      {Error === false && fileState === null ? (
        <div className="errorfiled">{ErrorMessage}</div>
      ) : null}
    </div>
  );
};

// Input
export const InputText = (props: PropsInputText) => {
  const { valueInput, Label, Name, Type, HandleChange } = props;

  return (
    <div className={"form-group "}>
      <label>{Label}</label>

      <input
        type={Type}
        placeholder={Label}
        value={valueInput}
        className={"form-control"}
        name={Name}
        onChange={HandleChange}
      />
    </div>
  );
};
export const DatePickerValue = (props: TypeDatePicker) => {
  const { startDate, setStartDate, Label } = props;
  const startRef = useRef<DatePicker<never, undefined>>(null);

  const handelChinge = (e: any) => {
    setStartDate(e);
  };
  return (
    <div className={"form-group  input-group-datapicker"}>
      <label>{Label}</label>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(e) => handelChinge(e)}
      />
    </div>
  );
};
export const InputCoupon = (props: any) => {
  const { valueInput, Label, Name, Type, HandleChange, PlaceHolder } = props;

  return (
    <div className={"form-group "}>
      <label>{Label}</label>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn" type="submit">
            {i18n?.t("common:Verification")}
          </button>
        </div>
        <input
          type={Type}
          placeholder={Label}
          value={valueInput}
          className={"form-control"}
          name={Name}
          onChange={HandleChange}
        />
      </div>
    </div>
  );
};
export const InputFileImage = (props: any) => {
  const { Label, handleFileSelect, SrcFile, ImageError } = props;

  return (
    <div className={"input-group-image"}>
      <div className="image">
        <img
          src={SrcFile === "" ? ImageError : SrcFile}
          alt=""
          className="cover-image"
        />

        <span className="img-upload">
          <img src="/assets/icons/icon-upload-image.png" alt="" />
          <input
            type="file"
            accept="image/*"
            className="input-file"
            onChange={(e) => handleFileSelect(e)}
          />
        </span>
      </div>
      <label>{Label}</label>
    </div>
  );
};
