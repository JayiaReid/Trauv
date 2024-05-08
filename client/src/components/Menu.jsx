import React, { useState } from 'react';
import Category from './Category.jsx';
import MenuContent from './MenuContent.js';
import Intro from './Intro.jsx';

export default function Menu(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryToggle = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const resetSelected = ()=>{
        setSelectedCategory(null);
    }

    return (
        <div>
            <Intro/>
            {props.categories.map((category, index) => (
                <div key={index}>
                    <Category
                        category={category}
                        selectedCategory={selectedCategory}
                        onToggleCategory={handleCategoryToggle}
                    />
                    {selectedCategory === category.name && (
                        <MenuContent categoryTitle={category.name} items={props.menuItems} hideContent={resetSelected}/>
                    )}
                </div>
            ))}
        </div>
    );
}
