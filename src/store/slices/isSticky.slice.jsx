import { createSlice } from '@reduxjs/toolkit';

export const isStickySlice = createSlice({
  name: 'isSticky',
  initialState: false,
  reducers: {
    setIsSticky: (state, action) => {
      const isSticky = action.payload;
      return isSticky;
    },
  },
});

export const { setIsSticky } = isStickySlice.actions;

export default isStickySlice.reducer;
