import { Formik } from "formik";
import * as Yup from "yup";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import {
  InputFileImage,
  InputOuter,
  InputPhonecountry,
} from "@/components/inputes";
import { useState } from "react";
import Link from "next/link";
import { StepsToken } from "@/api/variables";
import axios from "axios";

export default function MyAccountContent(props: any) {
  const { DataApi } = props;
  const router = useRouter();
  const ImageError =
    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";

  const [file, setFile] = useState(null);
  const [srcFile, setSrcFile] = useState(DataApi.image);

  const state = {
    name: DataApi.name,
    phone: DataApi.phone,
    email: DataApi.email,
  };

  const SendData = async (values: any) => {
    var data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append(
      "phone",
      DataApi.phone === values.phone ? DataApi.phone : `+${values.phone}`
    );
    if (file !== null) {
      data.append("image", file);
    }
    const options = {
      method: "post",
      url: `${process.env.BACKEND_URL}update-profile`,
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
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const form = (props: any) => {
    const Chingefile = (e: any) => {
      const imagefile = e.target.files[0];
      const blob = new Blob([imagefile], { type: "image/png" });
      const imgsrc = URL.createObjectURL(blob);
      setSrcFile(imgsrc);
      setFile(imagefile);
    };
    return (
      <form onSubmit={props.handleSubmit}>
        <div className="form-item">
          <InputFileImage
            Label={DataApi.name}
            handleFileSelect={Chingefile}
            SrcFile={srcFile}
            ImageError={ImageError}
          />
        </div>

        <div className="form-item">
          <InputOuter
            Error={props.errors.name}
            valueInput={props.values.name}
            Type={"text"}
            Label={i18n?.t("auth:userName")}
            Name={"name"}
            Placeholder={undefined}
          />
        </div>

        <div className="form-item">
          <InputPhonecountry
            Error={props.errors.phone}
            valueInput={props.values.phone}
            Type={"tel"}
            Label={i18n?.t("auth:phone")}
            Name={"phone"}
            Placeholder={undefined}
          />
        </div>
        <div className="form-item">
          <InputOuter
            Error={props.errors.email}
            valueInput={props.values.email}
            Type={"email"}
            Label={i18n?.t("auth:email")}
            Name={"email"}
            Placeholder={undefined}
          />
        </div>

        <div className="my-account__buttons d-flex justify-content-between align-items-center">
          <Link href={"/"} className={`btn btn-send btn-light`} scroll={true}>
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>
          <button className={`btn btn-send btn-green`} type="submit">
            <span className="text">{i18n?.t("common:save")}</span>
          </button>
        </div>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name Is Required"),
      email: Yup.string().required("Email Is Required"),
      phone: Yup.string()
        .min(9, "The Contact Number must be at least 9 Digits !")
        .max(13, "Contact Number Must Be No More Than 9 !")
        .required("Contact Number Is Required"),
    });
    return schema;
  };

  return (
    <section className="my-account__content">
      <div className="container">
        <Formik
          initialValues={state}
          onSubmit={SendData}
          render={form}
          validationSchema={schema()}
          validateOnChange={false}
          enableReinitialize={true}
          validateOnBlur={false}
        />
      </div>
    </section>
  );
}
