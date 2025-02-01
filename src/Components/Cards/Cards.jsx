import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const Cards = () => {

    const pokemons = useSelector((state) => state.pokemon.payload);

    const cards = pokemons?.map((ele,key) => {
        return (<Card 
         key={ele.id}
         name={ele.name}
         img={ele.img} 
         type={ele.type} 
         type2={ele.type2} 
         id={ele.id} 
         />)
    });

    return (
        <div>
            {cards}
        </div>
    )
};