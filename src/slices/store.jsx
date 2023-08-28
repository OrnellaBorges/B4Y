import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import beerReducer from "./beerSlice"
import basketReducer from "./basketSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        beers: beerReducer,
        basket: basketReducer
    }
})

export default store