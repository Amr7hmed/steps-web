import { StepsToken } from "@/api/variables";
import useChangeLocale from "@/hooks/use-change-locale";
import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import swal from "sweetalert";

type TypesProps = {
  ContactUs: {
    phone: string;
    Email: string;
    FaceBook: string;
    Twitter: string;
    SnapChat: string;
    Instagram: string;
    Linkedin: string;
  };
};

function HeaderContactUs(props: TypesProps) {
  const router = useRouter();
  const ContactUs = props.ContactUs;
  const { locale } = useRouter();
  const { changeLocale } = useChangeLocale();

  const ChingeLangToAPi = (Langchinge: any) => {
    fetch(`${process.env.BACKEND_URL}change-lang`, {
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
        lang: Langchinge,
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
          changeLocale(Langchinge);
          router.reload();
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handlechangeLocale = async () => {
    const Langchinge = locale === "en" ? "ar" : "en";
    ChingeLangToAPi(Langchinge);
  };
  return (
    <div className="header__contactus">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="d-flex left">
            <li className="chingelang">
              <button className="btn" onClick={handlechangeLocale}>
                {i18n?.t("common:changelang")}
              </button>
            </li>
            <li className="navlink d-flex align-items-center">
              <Link href="/auth/join-as-aconsultant/step-one">
                {i18n?.t("common:JoinAsAConsultant")}
              </Link>
            </li>
            <li className="social_media d-flex align-items-center">
              <a href={ContactUs.FaceBook} target="_blank">
                <img
                  src="/assets/social_media/icon-navbar-facebook.png"
                  alt="facebook Logo"
                />
              </a>

              <a href={ContactUs.Twitter} target="_blank">
                <img
                  src="/assets/social_media/icon-navbar-twitter.png"
                  alt="twitter Logo"
                />
              </a>

              <a href={ContactUs.SnapChat} target="_blank">
                <img
                  src="/assets/social_media/icon-navbar-snapchat.png"
                  alt="snapchat Logo"
                />
              </a>

              <a href={ContactUs.Instagram} target="_blank">
                <img
                  src="/assets/social_media/icon-navbar-instagram.png"
                  alt="instagram Logo"
                />
              </a>
              <a href={ContactUs.Linkedin} target="_blank">
                <img
                  src="/assets/social_media/icon-navbar-linkedin.png"
                  alt="linkedin Logo"
                />
              </a>
            </li>
          </ul>
          <ul className="d-flex right">
            <li className="phone d-flex align-items-center">
              <span className="text">{ContactUs.phone}</span>
              <img
                src="/assets/social_media/icon-navbar-whatsapp.png"
                alt="facebook Logo"
              />
            </li>
            <li className="email d-flex align-items-center">
              <span className="text">{ContactUs.Email}</span>
              <img
                src="/assets/social_media/icon-navbar-email.png"
                alt="facebook Logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactUs;
