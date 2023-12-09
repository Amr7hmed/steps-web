import React from "react";
import CardConsultantSelect from "./card-consultant-select";

const AskRows = (props: any) => {
  const { ArrayData, consultant, setConsultant } = props;
  return (
    <div className="row">
      {ArrayData.map((item: any) => (
        <div className="col-12 col-md-4" key={item.id}>
          <CardConsultantSelect
            Data={item}
            setConsultant={setConsultant}
            consultant={consultant}
          />
        </div>
      ))}
    </div>
  );
};

export default AskRows;
