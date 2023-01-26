// createSlice is a function from the Redux Toolkit that allows for 
// the creation of a slice of the Redux store.
import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
  // the name property identifies the slice in the store
  name: 'form',
  // the intial state is and object in the slice that sets default
  // properties
  initialState: {
    name: '',
    cost: 0,
  },
  // reducers are functions that handle actions and update the slice of 
  // the store 
  reducers: {
    // The changeName/Cost reducers will change the state's properties
    // with whatever is contained in the action payload
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

// Those actions are then dispatched to the store
export const { changeName, changeCost } = formSlice.actions;
// this reducer will export the slice of the store that the actions
// will affect
export const formReducer = formSlice.reducer;

