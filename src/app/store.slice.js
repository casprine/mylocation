import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: {},
  categories: {},
};

export const AppStore = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const { id, formState } = action.payload;

      const updatedLocations = {
        ...state.locations,
        [id]: formState,
      };

      state.locations = updatedLocations;
    },

    editLocation: (state, action) => {
      const formState = action.payload;

      const updatedLocations = {
        ...state.locations,
        [formState.id]: formState,
      };

      state.locations = updatedLocations;
    },

    deleteLocation: (state, action) => {
      const id = action.payload;
      delete state.locations[id];
    },

    addCategory: (state, action) => {
      const { id, formState } = action.payload;

      const updatedCategories = {
        ...state.categories,
        [id]: formState,
      };

      state.categories = updatedCategories;
    },

    editCategory: (state, action) => {
      const formState = action.payload;

      const updatedCategories = {
        ...state.categories,
        [formState.id]: formState,
      };

      state.categories = updatedCategories;
    },

    deleteCategory: (state, action) => {
      const id = action.payload;
      delete state.locations[id];
    },
  },
});

export const { addLocation, editLocation, deleteLocation, addCategory, editCategory, deleteCategory } =
  AppStore.actions;

export const locationsSelector = (state) => {
  return state.appState.locations;
};

export const getLocationById = (state, id) => state.appState.locations[id];

export const categoriesSelector = (state) => {
  return state.appState.categories;
};

export const getCategoryById = (state, id) => state.appState.categories[id];

export default AppStore.reducer;
