import React, { useState } from "react";
import {
  InputText,
  InputFileFeasibilityStudy,
  SelectFeasibilityStudy,
  InputTextAreaFeasibilityStudy,
  InputPriceDiscount,
} from "../inputs";
import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { StepsToken } from "@/api/variables";
import axios from "axios";
import swal from "sweetalert";

const FormResale = () => {
  const router = useRouter();
  const [state, setState] = useState({
    comments: "",
  });
  const [price, setPrice] = useState("");
  const [priceDiscount, setPriceDiscount] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [fileone, setfileone] = useState(null);
  const [filetwo, setfiletwo] = useState(null);
  const [error, setError] = useState(false);

  // Handle Change Input Text Area Notes
  const handleChangeTextArea = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  // Handle Change Input Text Title
  const handleChangeTitle = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setTitle(value);
  };
  // Handle Change Input Text Price
  const handleChangePrice = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setPrice(value);
    const price = parseInt(value);
    const NewpriceDiscount = price * 0.15;
    setPriceDiscount(NewpriceDiscount);
  };
  // Handle Change Input File Image
  const handleChangefileone = (e: { target: { files: any[] } }) => {
    const files = e.target.files[0];
    console.log(files);

    setfileone(files);
  };
  // Handle Change Input File PDF
  const handleChangefiletwo = (e: { target: { files: any[] } }) => {
    const files = e.target.files[0];
    setfiletwo(files);
  };
  // Create Sale Feasibility Study
  const CreateSale = () => {
    if (
      category === "" ||
      title === "" ||
      price === "" ||
      fileone === null ||
      filetwo === null
    ) {
      setError(true);
    } else {
      FechApi();
    }
  };
  // Fetch Api Create Sale Feasibility Study
  const FechApi = async () => {
    var data = new FormData();
    data.append("category_id", category);
    data.append("title", title);
    data.append("price", price);
    data.append("notes", state.comments);
    if (fileone !== null) {
      data.append("attachments[0]", fileone);
    }
    if (filetwo !== null) {
      data.append("file", filetwo);
    }
    const options = {
      method: "post",
      url: `${process.env.BACKEND_URL}create-feasibility-study-sale`,
      headers: {
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
      },
      data,
    };
    await axios(options)
      .then(function (response) {
        if (response.data.status === false) {
          swal({
            title: response.data.message,
            icon: "error",
            timer: 2000,
            className: "swal-contact-us",
          });
        } else {
          swal({
            title: response.data.message,
            icon: "success",
            timer: 2000,
            className: "swal-contact-us",
          });
          router.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="form">
      <section className="study__form">
        <SelectFeasibilityStudy
          Value={category}
          setValue={setCategory}
          Label={i18n?.t("common:SelectCategory")}
          StyleClassRequired={""}
          ErrorVildechin={error === true && category === "" ? true : false}
        />
        <InputText
          valueInput={title}
          Label={i18n?.t("common:StudyTitle")}
          Name={"title"}
          Type={"text"}
          HandleChange={handleChangeTitle}
          ErrorVildechin={error === true && title === "" ? true : false}
        />
        <InputFileFeasibilityStudy
          Label={i18n?.t("common:AttachStudyFilesOne")}
          Type={"file"}
          Name={"fileone"}
          handleChangefile={handleChangefileone}
          AcceptFile={"image/*"}
          ErrorVildechin={error === true && fileone === null ? true : false}
        />
        <InputFileFeasibilityStudy
          Label={i18n?.t("common:AttachStudyFilesTwo")}
          Type={"file"}
          Name={"filetwo"}
          handleChangefile={handleChangefiletwo}
          AcceptFile={"application/pdf"}
          ErrorVildechin={error === true && filetwo === null ? true : false}
        />
        <InputText
          valueInput={price}
          Label={i18n?.t("common:SellingPrice")}
          Name={"price"}
          Type={"text"}
          HandleChange={handleChangePrice}
          StyleClassRequired={"mb-2"}
          ErrorVildechin={error === true && price === "" ? true : false}
        />
        <span className="text-price-discount">
          {i18n?.t("common:StepsDiscount")}
        </span>
        <InputPriceDiscount
          valueInput={
            priceDiscount === 0 || price === ""
              ? i18n?.t("common:DeservedAmount")
              : priceDiscount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }
          Label={i18n?.t("common:YouWillGet")}
          Name={"price"}
          Type={"text"}
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
          ErrorVildechin={
            error === true && state.comments === "" ? true : false
          }
        />
      </section>
      <section className="study__form__buttons">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={"/"} className={`btn-send btn-light`} scroll={true}>
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>

          <button
            type="button"
            className="btn btn-send btn-green"
            onClick={CreateSale}
          >
            {i18n?.t("common:Publishing")}
          </button>
        </div>
      </section>
    </form>
  );
};

export default FormResale;
