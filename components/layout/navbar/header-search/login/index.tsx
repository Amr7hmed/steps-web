import { i18n } from "next-i18next";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { StepsToken } from "@/api/variables";
import DropdownLogin from "./dropdownlogin";
import IconNotification from "./icon_notification";

const HeaderLogin = () => {
  const [isLogin, setLogin] = useState(0);
  useEffect(() => {
    if (StepsToken !== "") {
      setLogin(1);
    } else {
      setLogin(0);
    }
  }, []);

  return (
    <div className="header__search__data__login">
      {isLogin === 1 ? (
        <>
          <DropdownLogin />
          <IconNotification />
        </>
      ) : (
        <Link
          href="/auth/sign-up"
          className="btn btn-createaccount btn-green btn-meda-mobile"
        >
          {i18n?.t("common:createAccount")}
        </Link>
      )}
    </div>
  );
};

export default HeaderLogin;
