import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm
} from './slices/carsSlice';
import {
  formReducer,
  changeName,
  changeCost
} from './slices/formSlice';

// Creates the store and the reducer property contains and object that has
// cars and form property that contains the cars/formReducer actions
const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  }
});

// Exports action creators from the slices so all components can use
// them without having to import both slcies each time.
// This is a one-stop-shop
export {
  store,
  changeName,
  changeCost,
  addCar,
  removeCar,
  changeSearchTerm,
};