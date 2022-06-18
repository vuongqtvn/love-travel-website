import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messageApi } from "../../api";
import { RootState } from "../../redux/store";
import { DeleteData, EditData } from "../../utils/helper";

interface MessageState {
  users: any;
  totalUsers: any;
  data: any;
}

const initialState: MessageState = {
  users: [],
  totalUsers: 0,
  data: [],
};

export const createMessage = createAsyncThunk(
  "message/createMessage",
  async (
    { message, socket }: { message: any; socket: any },
    { rejectWithValue, getState }
  ) => {
    const state = getState() as RootState;
    try {
      const res: any = await messageApi.addMessage(message);

      if (socket) {
        socket.emit("addMessage", {
          ...message,
          _id: res.newMessage._id,
          user: state.auth.user,
        });
      }

      return { ...message, _id: res.newMessage._id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMessages = createAsyncThunk(
  "message/getMessages",
  async ({ id }: { id: any }, { rejectWithValue }) => {
    try {
      const res: any = await messageApi.getMessages(id, { page: 1, limit: 12 });

      const newData = {
        ...res,
        messages: res.messages.reverse(),
      };

      const data = { ...newData, _id: id, page: 1 };

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loadMoreMessages = createAsyncThunk(
  "message/loadMoreMessages",
  async ({ id, page = 1 }: { id: any; page: any }, { rejectWithValue }) => {
    try {
      const res: any = await messageApi.getMessages(id, {
        page: page,
        limit: 12,
      });

      const newData = {
        ...res,
        messages: res.messages.reverse(),
      };
      console.log(newData);

      const data = { ...newData, _id: id, page };

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getConversations = createAsyncThunk(
  "message/getConversations",
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    try {
      const res: any = await messageApi.getConversations();
      const newArray: any = [];
      res.conversations.forEach((item: any) => {
        item.recipients.forEach((cv: any) => {
          if (cv._id !== state.auth.user?._id) {
            newArray.push({
              ...cv,
              text: item.text,
              media: item.media,
              call: item.call,
            });
          }
        });
      });

      return { users: newArray, total: res.total };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteConversation = createAsyncThunk(
  "message/deleteConversation",
  async ({ id }: { id: any }, { rejectWithValue }) => {
    try {
      await messageApi.deleteConversation(id);

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMessages = createAsyncThunk(
  "message/deleteMessages",
  async (
    { data, message }: { data: any; message: any },
    { rejectWithValue }
  ) => {
    const newData = DeleteData(data, message._id);
    try {
      await messageApi.deleteMessage(message._id);

      return { newData, _id: message.recipient };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addUserMessage(state: any, action: any) {
      if (state.users.every((item: any) => item._id !== action.payload._id)) {
        state.users = [action.payload, ...state.users];
      }
    },
    addMessage(state: any, action: any) {
      const data = state.data.map((item: any) =>
        item._id === action.payload.recipient ||
        item._id === action.payload.sender
          ? {
              ...item,
              messages: [...item.messages, action.payload],
              total: item.total + 1,
            }
          : item
      );
      const users = state.users.map((user: any) =>
        user._id === action.payload.recipient ||
        user._id === action.payload.sender
          ? {
              ...user,
              text: action.payload.text,
              media: action.payload.media,
              call: action.payload.call,
            }
          : user
      );
      state.data = data;
      state.users = users;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversations.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.totalUsers = action.payload.total;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        const data = state.data.map((item: any) =>
          item._id === action.payload.recipient ||
          item._id === action.payload.sender
            ? {
                ...item,
                messages: [...item.messages, action.payload],
                total: item.total + 1,
              }
            : item
        );
        const users = state.users.map((user: any) =>
          user._id === action.payload.recipient ||
          user._id === action.payload.sender
            ? {
                ...user,
                text: action.payload.text,
                media: action.payload.media,
                call: action.payload.call,
              }
            : user
        );
        state.data = data;
        state.users = users;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(loadMoreMessages.fulfilled, (state, action) => {
        const item = state.data.find(
          (mes: any) => mes._id === action.payload._id
        );
        state.data = EditData(state.data, action.payload._id, {
          ...item,
          ...action.payload,
          messages: [...action.payload.messages, ...item.messages],
        });
      })
      .addCase(deleteConversation.fulfilled, (state, action) => {
        const data = DeleteData(state.data, action.payload);
        const users = DeleteData(state.users, action.payload);
        state.data = data;
        state.users = users;
      })
      .addCase(deleteMessages.fulfilled, (state, action) => {
        const data = state.data.map((item: any) =>
          item._id === action.payload._id
            ? { ...item, messages: action.payload.newData }
            : item
        );

        state.data = data;
      });
  },
});

export const { addUserMessage, addMessage } = messageSlice.actions;

export default messageSlice.reducer;
