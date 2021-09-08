import useTitle from "../../hooks/useTitle";
import Todo from '../../components/Todo';

const Todos = () => {
  useTitle({
    title: "Todos",
  });
  return (
    <div className="columns">
      <div className="column"></div>
    </div>
  );
};

export default Todos;
