import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
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

const ModalMenuBar = (props: Props) => {
  const ContactUs = props.ContactUs;
  const router = useRouter();
  return (
    <div
      className="header__modal  modal fade"
      id="openMoudeMenu"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <ul className="navbar-nav">
              <li
                className={
                  router.pathname == "/" ? "active nav-item" : "nav-item"
                }
                data-bs-dismiss="modal"
              >
                <Link className={"nav-link"} href="/" aria-current="page">
                  {i18n?.t("common:navbarhome")}
                </Link>
                <span className="activesapn"></span>
              </li>
              <li
                className={
                  router.pathname == "/legal/about-us"
                    ? "active nav-item"
                    : "nav-item"
                }
                data-bs-dismiss="modal"
              >
                <Link
                  className={"nav-link"}
                  href="/legal/about-us"
                  aria-current="page"
                >
                  {i18n?.t("common:navbarAboutUs")}
                </Link>
                <span className="activesapn"></span>
              </li>

              <li
                className={
                  router.pathname == "/legal/our-services"
                    ? "active nav-item"
                    : "nav-item"
                }
                data-bs-dismiss="modal"
              >
                <Link
                  className={"nav-link"}
                  href="/legal/our-services"
                  aria-current="page"
                >
                  {i18n?.t("common:navbarOurService")}
                </Link>
                <span className="activesapn"></span>
              </li>
              <li
                className={
                  router.pathname == "/legal/contact-us"
                    ? "active nav-item"
                    : "nav-item"
                }
                data-bs-dismiss="modal"
              >
                <Link
                  className={"nav-link"}
                  href="/legal/contact-us"
                  aria-current="page"
                >
                  {i18n?.t("common:navbarConnectWithUs")}
                </Link>
                <span className="activesapn"></span>
              </li>
            </ul>

            <div className="modal-body-end">
              <Link
                href="/auth/sign-up"
                className="btn btn-createaccount btn-green"
              >
                {i18n?.t("common:createAccount")}
              </Link>

              <Link
                href="/auth/join-as-aconsultant/step-one"
                className="join-as-aconsultant"
              >
                {i18n?.t("common:JoinAsAConsultant")}
              </Link>

              <div className="social_media d-flex align-items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenuBar;
