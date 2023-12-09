import Hero from "./hero";
import HomeInfo from "./info";

type TypeProps = {
  DataApi: any;
};
const HomeUser = (props: TypeProps) => {
  const { DataApi } = props;
  return (
    <section className="home__user">
      <Hero />
      <HomeInfo DataApi={DataApi} />
    </section>
  );
};

export default HomeUser;
