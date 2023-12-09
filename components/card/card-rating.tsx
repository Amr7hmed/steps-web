import RatingControle from "./rating-controle";

type TypeProps = {
  Data: {
    id: number;
    Name: string;
    Image: string;
    revew: number;
    Content: string;
  };
};
const CardRating = (props: TypeProps) => {
  const { Data } = props;
  return (
    <div className="card-rating">
      <div className="card-rating__img">
        <img src={Data.Image} alt={Data.Name} />
      </div>
      <h4 className="card-rating__name">{Data.Name}</h4>

      <div className="card-rating__stars">
        <RatingControle />
      </div>

      <div className="card-rating__content">{Data.Content}</div>
    </div>
  );
};

export default CardRating;
