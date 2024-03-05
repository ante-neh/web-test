import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  search: string | undefined;
}

const initialState: PostsState = {
  search: undefined,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    setSearch: (state, action: PayloadAction<string | undefined>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = postsSlice.actions;

export default postsSlice.reducer;