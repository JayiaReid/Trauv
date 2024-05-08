import React from 'react';

export default function Category(props) {
    const handleToggle = () => {
        props.onToggleCategory(props.category.name);
    };

    return (
        <div className={`c_over ${props.selectedCategory === props.category.name ? 'hidden' : ''}`} style={{ backgroundImage: `url(${props.img})` }}>
            <h1 style={{background: 'none'}}>{props.category.name}</h1>
            {/* <div style={{height: "20%", color: "white", background: "White"}}>
                |
            </div> */}
            <button onClick={handleToggle}>
                {props.selectedCategory === props.category.name ? 'Hide Content' : 'Show Content'}
            </button>
        </div>
    );
}
