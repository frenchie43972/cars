import { createSlice, nanoid } from "@reduxjs/toolkit";

// Creates a new slice using cars for the name of the slice and 
// searchTerm and cars as properties for deafult state
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    // This will update the search term state with the action payload  
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // Pushes a new name and cost object to the cars array and uses
    // the nanoid labrary to assign a URL friendly unique ID for the car
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // The removeCar reducer function filters the cars array removing
    // any car entry with an equal ID to the payload of the action
    // effectivly deleting an entry
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

// Exports the actions from the reducer and slices
export const {
  changeSearchTerm, addCar, removeCar
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;