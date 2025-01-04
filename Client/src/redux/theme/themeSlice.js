import { createSlice } from '@reduxjs/toolkit';

// the initalstate of your theme slice
const initialState = {
  theme: 'light',
};

// create a theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
