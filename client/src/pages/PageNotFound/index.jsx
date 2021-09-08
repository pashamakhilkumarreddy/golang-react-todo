import useTitle from "../../hooks/useTitle";

const PageNotFound = () => {
  useTitle({
    title: "PageNotFound",
  });
  return (
    <div className="columns">
    <div className="column"></div>
  </div>
  );
};

export default PageNotFound;
