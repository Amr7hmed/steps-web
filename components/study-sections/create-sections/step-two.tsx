import React, { useEffect, useState } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import {
  InputFileFeasibilityStudy,
  InputText,
  InputTextAreaFeasibilityStudy,
  TextAreaQuestion,
} from "../inputs";
import { StepsToken } from "@/api/variables";
import axios from "axios";
import swal from "sweetalert";
import MyAccountLoadding from "@/components/myprofile-sections/my-account/my-account-loading";

const StepTwo = () => {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;

  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [fileone, setfileone] = useState(null);
  const [dataQuestion, setDataQuestion] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let arrayAnswer: any[] = [];

  const GetData = async () => {
    const options = {
      method: "get",
      url: `${process.env.BACKEND_URL}category-question/${id}`,
      headers: {
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
      },
    };
    await axios(options)
      .then(function (response) {
        setLoading(false);
        setDataQuestion(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  // Handle Change Input Text Title
  const handleChangeTitle = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setTitle(value);
  };
  // Handle Change Input Text Title
  const handleChangeComments = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setComments(value);
  };
  // Handle Change Input File Image
  const handleChangefileone = (e: { target: { files: any[] } }) => {
    const files = e.target.files[0];
    console.log(files);
    setfileone(files);
  };
  // Fetch Api Create Sale Feasibility Study
  const CreateStudy = async () => {
    const ArrayAllAnswer = document.querySelectorAll(
      "#study__form__two textarea"
    ) as any;
    for (let i = 0; i < ArrayAllAnswer.length; i++) {
      arrayAnswer[i] = ArrayAllAnswer[i].value;
    }

    var data = new FormData();
    data.append("category_id", id);
    data.append("title", title);
    data.append("details", comments);
    if (fileone !== null) {
      data.append("image", fileone);
    }

    for (let i = 0; i < dataQuestion.length; i++) {
      data.append(`questions_ids[${i}]`, dataQuestion[i].id);
    }
    for (let i = 0; i < arrayAnswer.length; i++) {
      data.append(`answers[${i}]`, arrayAnswer[i]);
    }
    const options = {
      method: "post",
      url: `${process.env.BACKEND_URL}create-feasibility-study`,
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
        console.log(response);
        if (response.data.status === false) {
          swal({
            title: response.data.message,
            icon: "error",
            timer: 2000,
            className: "swal-contact-us",
          });
        } else {
          swal({
            title: { i18n }.i18n?.t("common:EndScreenTwo"),
            icon: "/assets/icons/icon-check_circle.png",
            className: "study-modal-create",
            buttons: ["", `${i18n?.t("common:navbarhome")}`],
          }).then((willDelete) => {
            router.push("/");
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (isLoading) return <MyAccountLoadding ClassName={"my-account__loding"} />;

  return (
    <form>
      <div className="study__form" id="study__form__two">
        <InputText
          valueInput={title}
          Label={i18n?.t("common:StudyTitle")}
          Name={"title"}
          Type={"text"}
          HandleChange={handleChangeTitle}
        />
        <InputFileFeasibilityStudy
          Label={i18n?.t("common:AttachStudyFilesOne")}
          Type={"file"}
          Name={"fileone"}
          handleChangefile={handleChangefileone}
          AcceptFile={"image/*"}
        />
        {dataQuestion.map((item: any, index: any) => (
          <div className={`form-group`} key={item.id}>
            <TextAreaQuestion
              Item={item}
              Index={index}
              values={dataQuestion}
              arrayAnswer={arrayAnswer}
            />
          </div>
        ))}
        <InputTextAreaFeasibilityStudy
          valueInput={comments}
          Label={i18n?.t("common:Comments")}
          Name={"comments"}
          Description={""}
          Placeholder={i18n?.t("common:Comments")}
          HandleChange={handleChangeComments}
        />
        <button
          className="btn btn-send btn-green btn-send-100 "
          type="button"
          onClick={CreateStudy}
        >
          {i18n?.t("common:BeenCompleted")}
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
