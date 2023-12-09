import CardConsultant from "@/components/card/card-consultant";
import Paginate from "@/components/paginate";
import { useEffect, useState } from "react";

type TypeProps = {
  OurConsultants: {
    id: number;
    Title: string;
    revew: number;
    Specialization: string;
    linkImage: string;
    time: string;
    price: string;
  }[];
};

const OurConsultantAll = (props: TypeProps) => {
  const { OurConsultants } = props;

  return (
    <div className="our-consultant__info__all">
      <div className="row">
        {OurConsultants.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item.id}>
            <CardConsultant Data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurConsultantAll;
