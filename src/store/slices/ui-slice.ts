import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface UiState {
  mobileMenuOpen: boolean;
  contactModalOpen: boolean;
  toasts: ToastMessage[];
}

const initialState: UiState = {
  mobileMenuOpen: false,
  contactModalOpen: false,
  toasts: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setContactModalOpen: (state, action: PayloadAction<boolean>) => {
      state.contactModalOpen = action.payload;
    },
    addToast: (state, action: PayloadAction<Omit<ToastMessage, 'id'>>) => {
      const id = Math.random().toString(36).substring(2, 9);
      state.toasts.push({ ...action.payload, id });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  setContactModalOpen,
  addToast,
  removeToast,
} = uiSlice.actions;

export default uiSlice.reducer;
