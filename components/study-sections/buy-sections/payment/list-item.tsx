import Link from "next/link";
import React from "react";

type TypeProps = {
  Title: string | undefined;
  Data: string;
  Line: boolean;
  Totle: boolean;
};

const ListItem = (props: TypeProps) => {
  const { Title, Data, Line, Totle } = props;
  return (
    <>
      <div className="list-item ">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text">{Title}</span>
          <span className={`data ${Totle === true ? "active" : ""}`}>
            {Data}
          </span>
        </div>
      </div>
      {Line === true ? <div className="line"></div> : ""}
    </>
  );
};

export default ListItem;
