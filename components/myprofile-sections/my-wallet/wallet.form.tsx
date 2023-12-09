import { Formik } from "formik";
import * as Yup from "yup";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import { InputOuter, InputPhonecountry } from "@/components/inputes";
import Link from "next/link";

export default function WalletForm() {
  const { push } = useRouter();

  const state = {
    accountname: "",
    accountnumber: "",
    accountiban: "",
    price: "",
  };

  const form = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        {/* Input Account Holder's Name*/}

        <div className="form-item">
          <InputOuter
            Error={props.errors.accountname}
            valueInput={props.values.accountname}
            Type={"text"}
            Label={i18n?.t("auth:AccountHolder'sName")}
            Name={"accountname"}
            Placeholder={undefined}
          />
        </div>

        {/* Input Account Number*/}

        <div className="form-item">
          <InputOuter
            Error={props.errors.accountnumber}
            valueInput={props.values.accountnumber}
            Type={"number"}
            Label={i18n?.t("auth:AccountNumber")}
            Name={"accountnamber"}
            Placeholder={undefined}
          />
        </div>

        {/* Input Account IBAN*/}

        <div className="form-item">
          <InputOuter
            Error={props.errors.accountiban}
            valueInput={props.values.accountiban}
            Type={"number"}
            Label={i18n?.t("auth:IBAN")}
            Name={"accountiban"}
            Placeholder={undefined}
          />
        </div>

        {/* Input The Amount*/}

        <div className="form-item">
          <InputOuter
            Error={props.errors.price}
            valueInput={props.values.price}
            Type={"number"}
            Label={i18n?.t("auth:TheAmount")}
            Name={"price"}
            Placeholder={undefined}
          />
        </div>

        {/* Button's Back And Action */}

        <div className="mb-button-top">
          <div className="globals__buttons d-flex justify-content-between align-items-center">
            {/* Button Back */}
            <Link href={"/"} className={`btn-back btn-light`} scroll={true}>
              <span className="image">
                <img src="/assets/icons/icon_arrow_right.png" alt="" />
              </span>
              <span className="text">{i18n?.t("common:Back")}</span>
            </Link>

            {/* Button Action */}
            <button type="submit" className="btn-send btn-green">
              {i18n?.t("common:SubmitARequest")}
            </button>
          </div>
        </div>
      </form>
    );
  };
  const schema = () => {
    const schema = Yup.object().shape({
      accountname: Yup.string().required("Account Holder's Name Is Required"),
      accountnumber: Yup.string().required("Account Number Is Required"),
      accountiban: Yup.string().required("IBAN Is Required"),
      price: Yup.string().required("The Amount Is Required"),
    });
    return schema;
  };

  return (
    <div className="my-account__content__wallet__form">
      <Formik
        initialValues={state}
        onSubmit={(values) => {
          console.log(values);
          //push("/feasibility-study/ask/consultants");
        }}
        render={form}
        validationSchema={schema()}
        validateOnChange={false}
        enableReinitialize={true}
        validateOnBlur={false}
      />
    </div>
  );
}
