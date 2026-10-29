import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  navOpen: boolean;
  /** Selected menu category id; null means the first category. */
  activeCategory: string | null;
}

const initialState: UiState = {
  navOpen: false,
  activeCategory: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
    closeNav(state) {
      state.navOpen = false;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
  },
});

export const { toggleNav, closeNav, setActiveCategory } = uiSlice.actions;
export default uiSlice.reducer;
