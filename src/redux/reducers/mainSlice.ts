import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersType } from "../../../models/mainfetchtypes";

interface InitialStateType {
  users: UsersType;
}

const initialState: InitialStateType = {
  users: {
    success: false,
    page: 0,
    total_pages: 0,
    total_users: 0,
    count: 0,
    links: {
      next_url: "",
      prev_url: null,
    },
    users: [],
  },
};

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UsersType>) {
      state.users = action.payload;
    },
  },
});

export default cardSlice.reducer;
