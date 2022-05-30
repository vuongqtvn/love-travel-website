import { useEffect } from "react";
import { setToken } from "../../api";
import { refreshToken } from "../../pages/Auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Authentication = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(refreshToken(token))
        .unwrap()
        .then((res: any) => {
          setToken(res.accessToken);
        });
    }
  }, [dispatch]);

  return null;
};

export default Authentication;
