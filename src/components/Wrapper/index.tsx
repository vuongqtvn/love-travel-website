import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: any;
};

const Wrapper = ({ children }: Props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);
  return children;
};

export default Wrapper;
