import CardFeasibilityStudy from "./card-feasibility-study";

type TypeProps = {
  Data: {
    List: {
      id: number;
      image: string;
      title: string;
      days: string;
      price: string;
    }[];
  };
};

function BuyStudyRows(props: TypeProps) {
  const { Data } = props;

  return (
    <div className="study__all">
      <div className="row">
        {Data.List.map((item) => (
          <div className="col-12 col-md-6" key={item.id}>
            <CardFeasibilityStudy Item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyStudyRows;
