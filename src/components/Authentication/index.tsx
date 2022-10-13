import { useEffect } from "react";
import { io } from "socket.io-client";

import { refreshToken } from "../../pages/Auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { setSocket } from "../SocketClient/socketSlice";

const Authentication = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(refreshToken(token));
      const socket = io("https://love-travel-api.vercel.app");
      console.log({ socket });
      dispatch(setSocket(socket));

      return () => {
        socket.close();
      };
    }
  }, [dispatch]);

  return null;
};

export default Authentication;
