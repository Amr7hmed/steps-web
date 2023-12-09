import Link from "next/link";
import React from "react";

type Props = {
  FooterText: string | undefined;
  FooterTextLink: string | undefined;
  FooterLink: string;
  SendCode: string | undefined;
};

const AuthFooter = (props: Props) => {
  const { FooterText, FooterLink, FooterTextLink, SendCode } = props;
  const ReSendCodeApi = () => {};
  return (
    <div className="auth__footer">
      {SendCode !== "" ? (
        <button
          type="button"
          className="btn btn-sendcode"
          onClick={ReSendCodeApi}
        >
          {SendCode}
        </button>
      ) : (
        <>
          <span className="text">{FooterText}</span>
          <Link href={FooterLink}>{FooterTextLink}</Link>
        </>
      )}
    </div>
  );
};

export default AuthFooter;
