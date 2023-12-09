import React from "react";

type Props = {
  Title: string | undefined;
};

const TitleInfo = (props: Props) => {
  const { Title } = props;
  return (
    <>
      <div className="container">
        <h6 className="globals__title-info">
          <div className="text">{Title}</div>
          <span className="line"></span>
        </h6>
      </div>
    </>
  );
};

export default TitleInfo;
