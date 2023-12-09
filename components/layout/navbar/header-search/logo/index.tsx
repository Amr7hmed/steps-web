import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" className="header__search__data__logo">
      <img src="/assets/images/logo-dark.png" alt="steps Logo" />
    </Link>
  );
};

export default Logo;
