import React from "react";
import { useState } from "react";

export const SearchBar = () => {

    const [search , SetSearch] = useState("");
   
    return (
    <div>
        <input 
        type="text" 
        placeholder="busque por nombre aqui" 
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
        ></input>
    </div>
    )
};