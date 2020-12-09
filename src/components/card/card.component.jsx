import React from "react";

import "./card.styles.css.css"
// props are passed as functions arguemtsn
 export  const Card=(props)=> {

    // props children

    return( <div className="card-container"  key={props.monster.id}>
        <img src={`https://robohash.org/${props.monster.id}*2?size=200x200` } class="robot-img" alt=""/>
        <h2>{props.monster.name}</h2>
        <h2>{props.monster.email}</h2>
    </div>)
}

// so components have to be defaultely exported
export default Card;