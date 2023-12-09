import React from "react";

type Props = {
  Title: string | undefined;
  SubTitle: string | undefined;
};

const AuthHeader = (props: Props) => {
  return (
    <div className="auth__header">
      <h4>{props.Title}</h4>
      <p className="subtitle">{props.SubTitle}</p>
    </div>
  );
};

export default AuthHeader;
