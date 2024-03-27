import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',         
   
    initialState:{           
      items: []                     
    } ,
    
    reducers : {      
    /*creating reducers functions corresponding to each action
      actions can be thought of different APIs to communicate with redux store .
    eg: Adding an item, removing, clearing the cart
     */


    /** over here
     * {
     * payload: "pizza"
     * }
     */
     
        addItem: (state,action) => {     
            state.items.push(action.payload); //we will get this payload when we will call this funciton
      },
      
      removeItem: (state,action)=> {
        state.items.pop();
      },

      clearCart: (state)=> {
        //because we are clearing the cart by making the array empty
        state.items.length = 0; // []
      },
    }

});



export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;