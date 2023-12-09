import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const NavLastTop = (props: Props) => {
  // 21-25 parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  console.log("query", router.pathname);

  return (
    <ul className="my-study-requests__navlist">
      <li
        className={
          router.pathname == "/myprofile/my-study-requests/current/[page]"
            ? "active item-nav"
            : "item-nav"
        }
      >
        <Link href={"/myprofile/my-study-requests/current/1"}>
          {i18n?.t("common:current")}
        </Link>
        <span className="line"></span>
      </li>
      <li
        className={
          router.pathname == "/myprofile/my-study-requests/previous/[page]"
            ? "active item-nav"
            : "item-nav"
        }
      >
        <Link href={"/myprofile/my-study-requests/previous/1"}>
          {i18n?.t("common:previous")}
        </Link>
        <span className="line"></span>
      </li>
    </ul>
  );
};

export default NavLastTop;
