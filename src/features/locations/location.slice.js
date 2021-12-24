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

      console.log(updatedLocations);

      state.locations = updatedLocations;
    },

    editLocation: (state, action) => {
      const { id, formState } = action.payload;
    },
  },
});

export const { addLocation } = locationSlice.actions;

export const locationSelector = (state) => state.location.locations;

export default locationSlice.reducer;
