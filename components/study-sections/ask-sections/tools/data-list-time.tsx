import React from "react";

type TypeProps = {
  DataListtime: {
    id: number;
    Title: string;
  }[];
};

const DataListTimeSection = (props: TypeProps) => {
  const { DataListtime } = props;
  return (
    <div className="study__datalisttime">
      <div className="row">
        {DataListtime.map((item) => (
          <div className="col-4" key={item.id}>
            <div className="datalisttime-day" key={item.id}>
              {item.Title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataListTimeSection;
