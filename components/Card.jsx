import React from "react";

const Card = (props) => {
 return(
   <div className="Card">
    <img className ="image" src = {props.image}/>
   <h1>{props.organization}</h1>
   <h2>{props.type}</h2>
   <button><a href={props.link} target="_blank">VIEW ORG</a></button>
   </div>
 )



}  

export default Card;