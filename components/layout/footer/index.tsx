import { i18n } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content d-flex justify-content-between align-items-center">
          <ul className="footer__content__nav d-flex  align-items-center">
            <li className="footer__content__nav__item">
              <Link href="/legal/contact-us">
                {i18n?.t("common:connectWithUs")}
              </Link>
            </li>

            <li className="footer__content__nav__item">
              <Link href="/legal/privacy-policy">
                {i18n?.t("common:privacyPolicy")}
              </Link>
            </li>

            <li className="footer__content__nav__item">
              <Link href="/legal/terms-and-conditions">
                {i18n?.t("common:termsConditions")}
              </Link>
            </li>

            <li className="footer__content__nav__item">
              <Link href="/legal/about-us">{i18n?.t("common:aboutUs")}</Link>
            </li>
          </ul>

          <span className="footer__content__logo">
            <Link href="/">
              <img src="/assets/images/logo-wheat.png" alt="steps Logo" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
