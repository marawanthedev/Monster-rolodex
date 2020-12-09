import React from "react";

import Card from "../card/card.component"
import "./card-list.styles.css.css"
// props are passed as functions arguemtsn
export const CardList=(props)=> {

    // props children

    return( <div className="card-list">
        
{props.monsters.map((monster)=> <Card monster={monster} key={Math.random()*10}></Card>)}
    </div>)
}
