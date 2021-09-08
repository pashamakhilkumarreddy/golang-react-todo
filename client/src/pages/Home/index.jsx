import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle({
    title: "Home",
  });
  return (
    <div className="columns">
      <div className="column"></div>
    </div>
  );
};

export default Home;
