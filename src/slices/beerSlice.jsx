import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    beers: []
}

export const beerSlice = createSlice({
    name: "beers",
    initialState,
    reducers: {
        loadBeers: (state, action) =>{
            state.beers = action.payload
        }
    }
})

export const {loadBeers} = beerSlice.actions
export const selectBeers = (state) => state.beers
export default beerSlice.reducer