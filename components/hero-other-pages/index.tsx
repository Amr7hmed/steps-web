import Link from "next/link";
import React from "react";

type TypeProps = {
  DataHeader: {
    Title: string | undefined;
    Path: string;
    List: {
      Name: string | undefined;
      Path: string;
    }[];
  };
};

const HeroOtherPages = (props: TypeProps) => {
  const { DataHeader } = props;
  return (
    <section className="header-other ">
      <div className="content">
        <h1 className="title">
          <Link rel="stylesheet" href={DataHeader.Path}>
            {DataHeader.Title}
          </Link>
        </h1>
        <ul>
          {DataHeader.List.map((item, index) => (
            <li key={index}>
              <span className="line">
                <span className="bultes"></span>
              </span>
              <Link rel="stylesheet" href={item.Path}>
                {item.Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroOtherPages;
