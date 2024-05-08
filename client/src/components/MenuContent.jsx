import React from 'react';

export default function MenuContent(props) {

    const hide =()=>{
        props.hideContent();
    }
    return (
        <div id='menuContent'>
            <h1>------{props.categoryTitle}-------</h1>
            {props.items.map((item, index) => {
                if(item.category ===props.categoryTitle){
                    return(
                        <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.category} | {item.description} | ${item.price}</p>
                        </div>
                    );
                } return null;
            })}
            <button id='h_btn' onClick={hide}>Hide Menu</button>
        </div>
    );
}
