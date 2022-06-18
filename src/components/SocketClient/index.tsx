import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNotify, deleteNotify } from "../../redux/notifySlice";
import audioSound from "../../assets/audio/iphone_notification.mp3";
import { addMessage, addUserMessage } from "../../pages/Message/messageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { GLOBAL_TYPES } from "./redux/actions/globalTypes";
// import { NOTIFY_TYPE } from "./redux/actions/notifyAction";
// import { POST_TYPES } from "./redux/actions/postAction";
// import audioNotify from "./audio/notifysound.mp3";
// import { MESSAGE_TYPE } from "./redux/actions/messageAction";

const spawnNotification = (
  body: string,
  icon: string,
  url: string,
  title: string
) => {
  let options = {
    body,
    icon,
  };

  let n = new Notification(title, options);

  n.onclick = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
};

const SocketClient = () => {
  // const { auth, socket, notify, online, call } = useSelector((state) => state);
  const {
    auth,
    notify,
    socket: { socket },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const audioRef = useRef<any>();

  // Join user connect socket
  useEffect(() => {
    if (auth.user && socket) {
      socket.emit("joinUser", auth.user);
    }
  }, [socket, auth.user]);

  //   // Likes
  //   useEffect(() => {
  //     socket.on("likeToClient", (newPost) => {
  //       dispatch({
  //         type: POST_TYPES.UPDATE_POST,
  //         payload: newPost,
  //       });
  //     });

  //     return () => socket.off("likeToClient");
  //   }, [socket, dispatch]);

  //   // unLikes
  //   useEffect(() => {
  //     socket.on("unlikeToClient", (newPost) => {
  //       dispatch({
  //         type: POST_TYPES.UPDATE_POST,
  //         payload: newPost,
  //       });
  //     });

  //     return () => socket.off("unlikeToClient");
  //   }, [socket, dispatch]);

  //   // create comments
  //   useEffect(() => {
  //     socket.on("createCommentToClient", (newPost) => {
  //       dispatch({
  //         type: POST_TYPES.UPDATE_POST,
  //         payload: newPost,
  //       });
  //     });

  //     return () => socket.off("createCommentToClient");
  //   }, [socket, dispatch]);

  //   // delete comments
  //   useEffect(() => {
  //     socket.on("deleteCommentToClient", (newPost) => {
  //       dispatch({
  //         type: POST_TYPES.UPDATE_POST,
  //         payload: newPost,
  //       });
  //     });

  //     return () => socket.off("deleteCommentToClient");
  //   }, [socket, dispatch]);

  //   // follow user
  //   useEffect(() => {
  //     socket.on("followToClient", (newUser) => {
  //       dispatch({
  //         type: GLOBAL_TYPES.AUTH,
  //         payload: {
  //           ...auth,
  //           user: newUser,
  //         },
  //       });
  //     });

  //     return () => socket.off("followToClient");
  //   }, [socket, dispatch, auth]);

  //   // unFollow user
  //   useEffect(() => {
  //     socket.on("unFollowToClient", (newUser) => {
  //       dispatch({
  //         type: GLOBAL_TYPES.AUTH,
  //         payload: {
  //           ...auth,
  //           user: newUser,
  //         },
  //       });
  //     });

  //     return () => socket.off("unFollowToClient");
  //   }, [socket, dispatch, auth]);

  // createNotify
  useEffect(() => {
    if (socket) {
      socket.on("createNotifyToClient", (message: any) => {
        // dispatch({
        //   type: NOTIFY_TYPE.CREATE_NOTIFY,
        //   payload: message,
        // });
        dispatch(addNotify(message));
        if (notify.sound && audioRef.current) {
          audioRef.current.play();
        }
        spawnNotification(
          `${message.user.name} ${message.text}`,
          message.user.avatar,
          message.url,
          "Love Travel Da Nang"
        );
      });

      return () => socket.off("createNotifyToClient");
    }
  }, [socket, dispatch, notify.sound]);

  // removeNotify
  useEffect(() => {
    if (socket) {
      socket.on("removeNotifyToClient", (message: any) => {
        // dispatch({
        //   type: NOTIFY_TYPE.REMOVE_NOTIFY,
        //   payload: message,
        // });
        dispatch(deleteNotify(message));
      });

      return () => socket.off("removeNotifyToClient");
    }
  }, [socket, dispatch]);

  // add Message Client
  useEffect(() => {
    if (socket) {
      socket.on("addMessageClient", (message: any) => {
        dispatch(addMessage(message));
        dispatch(
          addUserMessage({
            ...message.user,
            text: message.text,
            media: message.media,
          })
        );
      });

      return () => socket.off("addMessageClient");
    }
  }, [socket, dispatch]);

  //   // Check user online/offline
  //   useEffect(() => {
  //     socket.emit("checkUserOnline", auth.user);
  //   }, [socket, auth.user]);

  //   useEffect(() => {
  //     socket.on("checkUserOnlineToMe", (data) => {
  //       data.forEach((item) => {
  //         if (!online.includes(item.id)) {
  //           dispatch({
  //             type: GLOBAL_TYPES.ONLINE,
  //             payload: item.id,
  //           });
  //         }
  //       });
  //     });

  //     return () => socket.off("checkUserOnlineToMe");
  //   }, [socket, dispatch, online]);

  //   useEffect(() => {
  //     socket.on("checkUserOnlineToClient", (id) => {
  //       if (!online.includes(id)) {
  //         dispatch({
  //           type: GLOBAL_TYPES.ONLINE,
  //           payload: id,
  //         });
  //       }
  //     });

  //     return () => socket.off("checkUserOnlineToClient");
  //   }, [socket, dispatch, online]);

  //   useEffect(() => {
  //     socket.on("checkUserOffline", (id) => {
  //       dispatch({
  //         type: GLOBAL_TYPES.OFFLINE,
  //         payload: id,
  //       });
  //     });

  //     return () => socket.off("checkUserOffline");
  //   }, [socket, dispatch, online]);

  //   // Call User

  //   useEffect(() => {
  //     socket.on("callUserToClient", (message) => {
  //       dispatch({
  //         type: GLOBAL_TYPES.CALL,
  //         payload: message,
  //       });
  //     });

  //     return () => socket.off("callUserToClient");
  //   }, [socket, dispatch]);

  //   // User Busy

  //   useEffect(() => {
  //     socket.on("userBusy", (message) => {
  //       dispatch({
  //         type: GLOBAL_TYPES.ALERT,
  //         payload: {
  //           error: `${call.username} đang bận, hoặc không thể trả lời điện thoại!`,
  //         },
  //       });
  //       dispatch({
  //         type: GLOBAL_TYPES.CALL,
  //         payload: null,
  //       });
  //     });

  //     return () => socket.off("userBusy");
  //   }, [socket, dispatch, call]);

  return (
    <>
      <audio
        controls
        ref={audioRef}
        style={{
          display: "none",
        }}
      >
        <source src={audioSound} type="audio/mp3" />
      </audio>
    </>
  );
};

export default SocketClient;
