import React, { useState, useEffect } from 'react';
import '../css/categoryV1.css';
// Mock categories data
const mockCategories = [
  {
    "id": "sales",
    "name": "Sale Thả Ga",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-coffee.svg"
  },
  {
    "id": "meats",
    "name": "Thịt",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-matcha.svg"
  },
  {
    "id": "fruits",
    "name": "Trái cây tươi",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-food.svg"
  },
  {
    "id": "vegetables",
    "name": "Rau củ sạch",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-milktea.svg"
  },
  {
    "id": "drinks",
    "name": "Giải khát",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-drinks.svg"
  },
  {
    "id": "cake",
    "name": "Bánh kẹo",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-bread.svg"
  },
  {
    "id": "juice",
    "name": "Nước ép",
    "icon": "https://zalo-miniapp.github.io/zaui-coffee/dummy/category-juice.svg"
  }
  // Add more mock categories as needed
];

// Category component
const Categoryv = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching categories from API
    // In a real application, you will fetch data using fetch or axios
    setCategories(mockCategories);
  }, []);

  return (
    <div className='category'>
      {categories.map(category => (
        <div className="item" key={category.id}>
          <div className='info'>
            <img className="category-icon" src={category.icon} alt={category.name} />
            <p className="category-name">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categoryv;