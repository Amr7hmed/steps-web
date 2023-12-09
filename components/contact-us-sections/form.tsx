import { Formik } from "formik";
import * as Yup from "yup";
import { i18n } from "next-i18next";
import swal from "sweetalert";
import {
  InputOuter,
  InputPhonecountry,
  InputTextArea,
} from "@/components/inputes";
import { StepsToken } from "@/api/variables";
import { useRouter } from "next/router";

type TypeProps = {
  DataForm: {
    Title: string | undefined;
    UserName: string | undefined;
    MobileNumber: string | undefined;
    E_mail: string | undefined;
    TheMessage: string | undefined;
    connectUsButton: string | undefined;
  };
};

const ContactUsForm = (props: TypeProps) => {
  const router = useRouter();

  const DataForm = props.DataForm;
  const state = {
    username: "",
    email: "",
    phone: "",
    message: "",
  };

  const SendContactUs = (values: any) => {
    fetch(`${process.env.BACKEND_URL}send-contact`, {
      method: "POST",
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
      // Body Request Api
      body: JSON.stringify({
        name: values.username,
        email: values.email,
        phone: values.phone,
        message: values.message,
        device_id: "granted",
        device_type: "web",
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === false) {
          swal({
            title: result.message,
            icon: "error",
            timer: 2000,
            className: "swal-contact-us",
          });
        } else {
          swal({
            title: result.message,
            icon: "success",
            timer: 2000,
            className: "swal-contact-us",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };
  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <InputOuter
          Error={props.errors.username}
          valueInput={props.values.username}
          Type={"text"}
          Label={DataForm.UserName}
          Name={"username"}
          Placeholder={undefined}
        />
        <InputPhonecountry
          Error={props.errors.phone}
          valueInput={props.values.phone}
          Type={"tel"}
          Label={DataForm.MobileNumber}
          Name={"phone"}
          Placeholder={undefined}
        />

        <InputOuter
          Error={props.errors.email}
          valueInput={props.values.email}
          Type={"email"}
          Label={DataForm.E_mail}
          Name={"email"}
          Placeholder={undefined}
        />

        <InputTextArea
          Error={props.errors.message}
          valueInput={props.values.message}
          Type={"text"}
          Label={DataForm.TheMessage}
          Name={"message"}
          Placeholder={undefined}
        />
        <button type="submit" className={"btn button-submit-auth btn-green"}>
          {DataForm.connectUsButton}
        </button>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      username: Yup.string().required("UserName Is Required"),
      email: Yup.string().required("Email Is Required"),
      phone: Yup.string()
        .min(9, "The Contact Number must be at least 9 Digits !")
        .max(13, "Contact Number Must Be No More Than 9 !")
        .required("Contact Number Is Required"),
    });
    return schema;
  };

  return (
    <div className="contact-us__form">
      <h3>{DataForm.Title}</h3>
      <Formik
        initialValues={state}
        onSubmit={SendContactUs}
        render={form}
        validationSchema={schema()}
        validateOnChange={false}
        enableReinitialize={true}
        validateOnBlur={false}
      />
    </div>
  );
};
export default ContactUsForm;
