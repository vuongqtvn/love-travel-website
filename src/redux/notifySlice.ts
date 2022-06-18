import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyApi } from "../api";

interface NotifyState {
  data: any;
  loading: boolean;
  sound: boolean;
}

const initialState: NotifyState = {
  loading: false,
  data: [],
  sound: true,
};

export const createNotify = createAsyncThunk(
  "notify/createNotify",
  async (
    { message, user, socket }: { message: any; user: any; socket: any },
    { rejectWithValue }
  ) => {
    try {
      const res: any = await notifyApi.createNotify(message);

      if (socket) {
        socket.emit("createNotify", {
          ...res.notify,
          user: {
            email: user.email,
            avatar: user.avatar,
            name: user.name,
          },
        });
      }
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeNotify = createAsyncThunk(
  "notify/removeNotify",
  async (
    { message, socket }: { message: any; socket: any },
    { rejectWithValue }
  ) => {
    try {
      const res: any = await notifyApi.deleteNotify(message);
      if (socket) {
        socket.emit("removeNotify", message);
      }
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getNotifies = createAsyncThunk(
  "notify/getNotifies",
  async (_, { rejectWithValue }) => {
    try {
      const res: any = await notifyApi.getAllNotifies();

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const isReadNotify = createAsyncThunk(
  "notify/isReadNotify",
  async ({ message }: { message: any }, { rejectWithValue }) => {
    try {
      const res: any = await notifyApi.readNotify(message._id);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAllNotifies = createAsyncThunk(
  "notify/deleteAllNotifies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await notifyApi.deleteAllNotify();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    addNotify(state: any, action: any) {
      state.data = [action.payload, ...state.data];
    },
    setSound(state: any, action: any) {
      state.sound = action.payload;
    },
    deleteNotify(state: any, action: any) {
      const notifies = [...state.data];
      const idx = notifies.findIndex((item) => {
        return item.id === action.payload.id && item.url === action.payload.url;
      });
      notifies.splice(idx, 1);
      state.data = notifies;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifies.fulfilled, (state, action: any) => {
        state.data = action.payload.notifies;
      })
      .addCase(deleteAllNotifies.fulfilled, (state) => {
        state.data = [];
      });
  },
});

export const { addNotify, deleteNotify, setSound } = notifySlice.actions;

export default notifySlice.reducer;
