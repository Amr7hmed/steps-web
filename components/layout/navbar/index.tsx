import { i18n } from "next-i18next";
import Link from "next/link";
import HeaderContactUs from "./header-contactus";
import HeaderSearch from "./header-search";
import HeaderNavbar from "./header-navbar";
import { Modal } from "bootstrap";
import ModalMenuBar from "./header-search/menu-bar/modal";
import { useState } from "react";

const Fakedata = {
  ContactUs: {
    phone: "0555617651",
    Email: "Info@steps.net",
    FaceBook: "https://www.facebook.com/",
    Twitter: "https://twitter.com/",
    SnapChat: "https://www.snapchat.com/",
    Instagram: "https://www.instagram.com/",
    Linkedin: "https://www.linkedin.com/",
  },
};
export default function Navbar() {
  return (
    <header className={"header"}>
      <HeaderContactUs ContactUs={Fakedata.ContactUs} />
      <HeaderSearch />
      <HeaderNavbar />
      <ModalMenuBar ContactUs={Fakedata.ContactUs} />
    </header>
  );
}
