import { configureStore } from '@reduxjs/toolkit';
import isStickySlice from './slices/isSticky.slice';

export default configureStore({
  reducer: {
    isSticky: isStickySlice,
  },
});
