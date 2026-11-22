import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectCategory } from '@/types/project';

interface ShowcaseState {
  selectedCategory: ProjectCategory;
  activeProjectId: string | null;
}

const initialState: ShowcaseState = {
  selectedCategory: 'ALL',
  activeProjectId: null,
};

export const showcaseSlice = createSlice({
  name: 'showcase',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProjectCategory>) => {
      state.selectedCategory = action.payload;
    },
    setActiveProject: (state, action: PayloadAction<string | null>) => {
      state.activeProjectId = action.payload;
    },
  },
});

export const { setCategory, setActiveProject } = showcaseSlice.actions;
export default showcaseSlice.reducer;
