import axios from "axios"
import {baseUrl} from "./baseUrls.js"
import reducer from "./reducer.js"

const {getPokes} = reducer.actions;

export const getPokemon =  () => {

    return async (dispatch) => {

        try {
            const {data} = await axios.get(`${baseUrl}pokemon`);
            
            
            if(data) {
                dispatch(getPokes(data))
            }
        } catch (error) {
            console.log({"error" : error});
            
        }
    }
} ;