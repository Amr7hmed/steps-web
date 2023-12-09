import FilterList from "./filter-list";
import { i18n } from "next-i18next";

type TypeProps = {
  Specialization: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
  Ratings: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
  Price: {
    Title: string | undefined;
    Name: string;
    List: {
      Id: string;
      Text: string | undefined;
    }[];
  };
};

const OurConsultantFilters = (props: TypeProps) => {
  const { Specialization, Ratings, Price } = props;
  return (
    <>
      <div className="our-consultant__info__filters__list">
        <h3 className="fillter_title">{Specialization.Title}</h3>
        <ul>
          {Specialization.List.map((item, index) => (
            <li key={index}>
              <FilterList Item={item} Star={false} Name={Specialization.Name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="our-consultant__info__filters__list">
        <h3 className="fillter_title">{Ratings.Title}</h3>
        <ul>
          {Ratings.List.map((item, index) => (
            <li key={index}>
              <FilterList Item={item} Star={true} Name={Ratings.Name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="our-consultant__info__filters__list">
        <h3 className="fillter_title">{Price.Title}</h3>
        <ul>
          {Price.List.map((item, index) => (
            <li key={index}>
              <FilterList Item={item} Star={false} Name={Price.Name} />
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="btn btn-remove">
        {i18n?.t("common:DeleteAll")}
      </button>
    </>
  );
};

export default OurConsultantFilters;
