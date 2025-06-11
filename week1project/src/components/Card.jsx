    import React from "react";


    const Card = (props) => {
        
        
        return (
            <div className={'Card ' + props.color}> 
            <img src={props.image} style={{ width: "64px", height: "64px" }} />
            <h5>{props.weapon}</h5>
            <button onClick={props.onViewAttacks}>View Attacks</button>
            </div>

            );
    }
    export default Card;