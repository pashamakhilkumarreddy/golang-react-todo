import { useEffect } from "react";

const useTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | React Golang Todo`;
    return () => {};
  }, [title]);
};

export default useTitle;
