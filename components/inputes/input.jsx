import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import Invisible from "../../../../../images/icon/invisible.svg";
import Visible from "../../../../../images/icon/eye-regular.svg";
import PhoneInput from "react-phone-input-2";
import ModelGallaryImage from "./modelimages";


export function InputText(props) {
  const { Error, valueInput, Label, Name, Type } = props;

  return (
    <div className={Error ? "form-group position-relative" : "form-group"}>
      <label>{Label}</label>

      <Field type={Type} component="input" placeholder={Label} value={valueInput}
        className={Error ? "form-control is-invalid" : "form-control"} name={Name} />

      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  )
};
export function InputPassword(props) {
  const { Error, valueInput, Label, Name, Type } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className={Error ? "form-group position-relative" : "form-group"}>
      <label className="form-label">{Label}</label>

      <div className="position-relative">

        <Field type={toggle === false ? Type : "text"} name={Name}
          className={Error ? "form-control is-invalid" : "form-control"} placeholder={Label} valie={valueInput} />


        <span className='toggoleimg' onClick={() => setToggle(!toggle)}>
          {toggle === false ?
            <img src={Invisible} alt="Invisible" className={Error ? "hide invisible_img" : "invisible_img"} />
            :
            <img src={Visible} alt="Visible" className={Error ? "hide invisible_img" : "invisible_img"} />
          }
        </span>

      </div>

      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>

  )
};
export const PhoneInputField = ({ field, form, ...props }) => {
  return (
    <div className="input-field">
      <PhoneInput
        placeholder="Enter phone number"
        name={field.name}
        country={'sa'}
        value={field.value}
        onChange={value => {
          if (!form.touched[field.name]) form.setFieldTouched(field.name);
          form.setFieldValue(field.name, value);
        }}
      />
    </div>
  );
};
export function InputPhonecountry(props) {
  const { Error, valueInput, Name, Label, Type } = props;
  return (
    <div className={Error ? "form-group position-relative" : "form-group"}>
      <label>{Label}</label>
      <Field placeholder={Label} type={Type} name={Name} value={valueInput} component={PhoneInputField}
        className={Error ? "form-control is-invalid form-phone" : "form-control form-phone"} />
      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  )
};
export function InputTextArea(props) {
  const { Error, valueInput, Label, Name, Type } = props;
  return (
    <div className={Error ? "form-group position-relative" : "form-group"}>
      <label>{Label}</label>

      <Field type={Type} component="textarea" placeholder={Label} value={valueInput} rows="3"
        className={Error ? "form-control is-invalid" : "form-control"} name={Name} />

      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  );
}
export function InputCities(props) {
  const { Error, valueInput, Label, Name, Type, Data, handleBlur, setFieldValue
    , setGetSubCaty } = props;

  const handleChange = (e, Name) => {
    const selected = e.target.value;
    setFieldValue(Name, selected)


    var aquaticCreatures = Data.filter(function (creature) {
      return creature.id == selected;
    });

    setGetSubCaty(aquaticCreatures[0].regions)
  }



  return (

    <div className={Error ? "form-group selectbox position-relative" : "form-group selectbox"}>
      <label>{Label}</label>
      <Field as={Type} name={Name} className={Error ? "form-control is-invalid" : "form-control"}
        value={valueInput} onChange={(e) => handleChange(e, Name)} onBlur={handleBlur}>

        <option value={""}></option>
        {Data.map((item, index) =>
          <option value={item.id} key={index} >{item.name}</option>
        )}

      </Field>
      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  );

}
export function InputSelect(props) {
  const { Error, valueInput, Label, Name, Type, Data, handleBlur, setFieldValue } = props;

  const handleChange = (e, Name) => {
    const selected = e.target.value;
    setFieldValue(Name, selected)
  }

  return (

    <div className={Error ? "form-group selectbox position-relative" : "form-group selectbox"}>
      <label>{Label}</label>
      <Field as={Type} name={Name} className={Error ? "form-control is-invalid" : "form-control"}
        value={valueInput} onChange={(e) => handleChange(e, Name)} onBlur={handleBlur}
        disabled={Data.length === 0 ? true : false}>

        <option value={""}></option>
        {Data.map((item, index) =>
          <option value={item.id} key={index} >{item.name}</option>
        )}

      </Field>
      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  );

}
export function InputRegistrationNumber(props) {
  const { handleChange, validation, value, language } = props;

  return (
    <div className={validation === false && value === "" ? "form-group position-relative" : "form-group"} >
      <label>
        {language === "en" ? "Tax registration number" : "رقم التسجيل الضريبي"}
      </label>
      <input
        type="number"
        required value={value}
        className={validation === false && value === "" ? "form-control is-invalid" : "form-control"}
        placeholder={language === "en" ? "Tax registration number" : "رقم التسجيل الضريبي"}
        name="registrationnumber"
        onChange={handleChange} />
      <div className="invalid-feedback">
        {language === "en" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
      </div>
    </div>
  );
}
export function InputFile(props) {
  const { validation, language, setFile, file, Title, Id } = props;

  const UpdateFile = (e) => {
    setFile(e.files[0])
    console.log(e.files[0]);
  }
  return (
    <div className={validation === false && file === null ? "companydata position-relative" : "companydata"}>

      <button type='button' className='btn btn-upload'>
        <input type="file" className="input-file" name="cr_files"
          accept="application/pdf"
          onChange={e => { UpdateFile(e.target) }} />
        <span className="title">
          <img src="/assets/icons/icon-plus.svg" alt="IconPluse" />
          {Title}
        </span>
      </button>

      {file === null ? "" :
        <>
          <button className='btn open-modal' data-bs-toggle="modal"
            data-bs-target={`#modelgallaryimage${Id}`}>
            {language === "ar" ? "استعراض الملفات" : "Browse files"}
          </button>
          <ModelGallaryImage Data={file} Id={Id} />
        </>
      }

      <div className="invalid-feedback">
        {language === "en" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
      </div>
    </div>
  );

}

export function InputPrice(props) {
  const { Error, valueInput, Label, Name, Type, Placeholder, Datapricespan, ShippingText } = props;

  return (
    <div className={Error ? "form-group position-relative" : "form-group"}>
      <label>{Label}</label>

      <div className="price-relative">
        <Field type={Type} component="input" placeholder={Placeholder} value={valueInput}
          className={Error ? "form-control is-invalid" : "form-control"} name={Name} />
        <span className="dataprice">{Datapricespan}</span>
      </div>

      <span className="shipping-span">{ShippingText}</span>


      <ErrorMessage name={Name} component="div" className='errorfiled' />
    </div>
  )
};

