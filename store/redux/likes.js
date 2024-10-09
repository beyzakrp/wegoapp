import { createSlice } from "@reduxjs/toolkit";

const likedEvent = createSlice({
  name: "liked",
  initialState: {
    ids: [],
  },
  reducers: {
    addLike: (state, action) => {
        state.ids.push( action.payload.id);
    },
    removeLike: (state, action) => {
        state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  }
});

export const addLike = likedEvent.actions.addLike;
export const removeLike = likedEvent.actions.removeLike;

export default likedEvent.reducer;
