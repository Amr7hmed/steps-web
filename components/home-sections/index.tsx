import HomeConsultant from "./home-consultant";
import HomeUser from "./home-user";

type TypeProps = {
  Consultant: boolean;
  DataApi: any;
};
const HomeSections = (props: TypeProps) => {
  const { Consultant, DataApi } = props;
  return (
    <main className="home">
      {Consultant === true ? (
        <HomeConsultant />
      ) : (
        <HomeUser DataApi={DataApi} />
      )}
    </main>
  );
};

export default HomeSections;
