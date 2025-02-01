import React from "react";



export const Card = ({name,img,type,type2,id}) => {
    return (
        <div >
            <h3>{name}</h3>
            <img src={img}></img>
            <p>{type}</p>
            {type2?<p>{type2} </p>:null}
             <p>{id}</p>
        </div>
    )
};