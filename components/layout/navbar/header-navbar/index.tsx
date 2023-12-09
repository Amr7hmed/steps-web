import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNavbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg header__navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={
                router.pathname == "/" ? "active nav-item" : "nav-item"
              }
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
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
