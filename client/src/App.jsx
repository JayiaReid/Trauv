import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro'
import Category from './components/Category';
import MenuContent from './components/MenuContent';
import axios from 'axios'

//category images
import WineImg from './images/Wine.jpg'
import CocktailsImg from './images/cocktails.jpg'
import AppetizerImg from './images/Appetizer.jpeg'

export default function App() {
  const [menuItems, setMenuItems]=useState([])
  const [categories, setCategories]=useState([]);
  const [searchInput, setSearchInput]=useState('');
    const [filterType, setFilterType]=useState(0);
  const [catImgs, setImgs] = useState([
    {"index": 0, "url" : WineImg},
    {"index": 1, "url" : CocktailsImg},
    {"index": 2, "url" : AppetizerImg}])

  const fetchItems = async () =>{
    const response = await axios.get("http://127.0.0.1:8080/api/items");
    setMenuItems(response.data.Items)
  }

  const fetchCats = async () =>{
    const response = await axios.get("http://127.0.0.1:8080/api/categories");
    setCategories(response.data.categories)
  }

  useEffect(()=>{
    fetchCats();
    fetchItems();
  },[])

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
        {categories.map((category, index) => (
            <div key={index} className='menu'>
                <Category
                  img={catImgs[index].url}
                  index={index}
                    category={category}
                    selectedCategory={selectedCategory}
                    onToggleCategory={handleCategoryToggle}
                />
                {selectedCategory === category.name && (
                    <MenuContent categoryTitle={category.name} items={menuItems} hideContent={resetSelected}/>
                )}
            </div>
        ))}
    </div>
  );
}

