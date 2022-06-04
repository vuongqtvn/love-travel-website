import { useEffect } from "react";
import { refreshToken } from "../../pages/Auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Authentication = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(refreshToken(token));
    }
  }, [dispatch]);

  return null;
};

export default Authentication;
