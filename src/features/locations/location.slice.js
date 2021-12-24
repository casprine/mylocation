import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: {},
};

export const locationSlice = createSlice({
  name: 'locations',
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
  },
});

export const { addLocation, editLocation, deleteLocation } = locationSlice.actions;

export const locationsSelector = (state) => state.location.locations;

export const getLocationById = (state, id) => state.location.locations[id];

export default locationSlice.reducer;
