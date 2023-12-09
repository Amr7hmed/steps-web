import { useRouter } from "next/router";
import { useCallback, useState } from "react";

type TypeProps = {
  Item: {
    Id: string;
    Text: string | undefined;
  };
  Star: boolean;
  Name: string;
};

const handleChange = (e: any) => {
  console.log(e);
};
const FilterList = (props: TypeProps) => {
  const { Item, Star, Name } = props;

  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState(
    router.query.filter ? +router.query.filter : undefined
  );

  const changeFilter = useCallback(
    (id: string) => {
      setSelectedFilter(+id);
      router.push(
        {
          pathname: "/explore",
          query: { filter: id, q: id },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const handleClick = (categoryId: string) => {
    changeFilter(categoryId);
  };

  return (
    <>
      <input
        type="radio"
        value={Item.Id}
        name={Name}
        id={Item.Id}
        onChange={() => handleClick(Item.Id)}
      />

      <label htmlFor={Item.Id} className={Item.Id === "1" ? "active" : ""}>
        {Item.Text}
        {Star === true ? <img src="/assets/icons/star.png" alt="" /> : ""}
      </label>
    </>
  );
};

export default FilterList;
/*
checked={item.Id === "1"}
*/
