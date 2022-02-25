import { createSlice } from "@reduxjs/toolkit";

export const favorisSlice = createSlice({
    name: 'favori',
    initialState: {
        listOfCity: []
    },
    reducers:{
        addFavori: (state, action) => {
            state.listOfCity.push(action.payload)
        },

        removeFavori: (state, action) => {
            //state.listOfCity.splice(action.payload, 1)
            state.listOfCity = state.listOfCity.filter(city => city.id !== action.payload)
        }
    }
});

export const { addFavori, removeFavori } = favorisSlice.actions

export default favorisSlice.reducer