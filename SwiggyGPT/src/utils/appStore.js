import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({

    //the main store also has a reducer -> app reducer ->
        //and this combines reducers of its slices
    //which is basically responsible to modify the app store 

    //each slice will have its own reducer

    reducer: {
        cart: cartReducer,         
    } 
});


export default appStore;

//configure Store- will give us the store of our react application