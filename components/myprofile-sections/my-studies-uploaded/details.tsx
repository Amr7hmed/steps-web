import { i18n } from "next-i18next";
import Link from "next/link";

type TypeProps = {
  DataPage: {
    id: string;
    title: string;
    image: string;
    days: string;
    price: string;
    discription: string | undefined;
  };
};

const StudyDetails = (props: TypeProps) => {
  const { DataPage } = props;
  return (
    <div className="study__details">
      <div className="content">
        <div
          className="image"
          style={{ backgroundImage: `url("${DataPage.image}")` }}
        ></div>

        <div className="d-flex justify-content-between">
          <div className="title">
            <h2>{DataPage.title}</h2>
            <p>{DataPage.days}</p>
          </div>
          <div className="price">{DataPage.price}</div>
        </div>

        <div className="details">
          <h6>{i18n?.t("common:StudyDetails")}</h6>
          <p>{DataPage.discription}</p>
        </div>
      </div>

      <section className="study__form__buttons">
        <div className="d-flex justify-content-between align-items-center">
          <Link
            href={"/myprofile/my-studies-uploaded/1"}
            className={`btn-send btn-light`}
            scroll={true}
          >
            <span className="text">{i18n?.t("common:Back")}</span>
          </Link>

          <button type="button" className="btn btn-send btn-dark">
            {i18n?.t("common:DownloadTheStudy")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudyDetails;
