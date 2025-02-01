import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
    name : "pokemon",

    initialState : {
        pokemon : []
    },
    
    reducers : {
        getPokes : (state, action) => {

            
            state.pokemon = action
        }
    }
 /*no son acciones , son reducer que cambian el estado global(store); 
    se puede hace la accion diretamentente , pero es preferible crear thunks. */

});

export default reducer;