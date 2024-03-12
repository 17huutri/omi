import React, { useState, useEffect } from "react";
import categoriesApi from "../api/categoriesApi";
import { Link } from "react-router-dom";
// import "../css/categoryV1.css";
// Mock categories data
const Icons = {
  3: "https://static.vecteezy.com/system/resources/previews/001/889/602/large_2x/fresh-vegetables-flat-style-icon-free-vector.jpg",

  4: "https://nicktrition.netlify.app/images/fruits.svg",

  5: "https://thumbs.dreamstime.com/b/spices-coffee-tea-solid-icon-time-concept-seasoning-sign-white-background-beans-anise-cinnamon-lemon-glyph-style-192649218.jpg",

  6: "https://th.bing.com/th/id/OIP.yTiifKN7yZ0KUL4g1Z4R0QHaHa?rs=1&pid=ImgDetMain",

  7: "https://th.bing.com/th/id/R.a7885169aa46dac79fc2a907f1703991?rik=d1RjfIRl90XM4Q&pid=ImgRaw&r=0",

  8: "https://i.pinimg.com/736x/b2/c4/b4/b2c4b4b5b3541120ec3b53187ecbcb1a.jpg",
  9: "https://cdn-icons-png.flaticon.com/512/5318/5318688.png",
  10: "https://thumbs.dreamstime.com/z/frozen-food-icon-supermarket-shopping-mall-related-vector-illustration-216865371.jpg",
  11: "https://th.bing.com/th/id/OIP.g9qpvwIvDTOE6jiskOz8XwHaHa?rs=1&pid=ImgDetMain",
};

// Add more mock categories as needed

// Category component
const Categoryv = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const Categories = async () => {
      try {
        const response = await categoriesApi.getCategories();
        const limitedCategories = response.data.slice(0, 9);
        setCategories(limitedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    Categories();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-white rounded-lg mb-7">
      {categories.map((category) => (
        <div className="w-1/3 p-4 " key={category.CategoryId}>
          <Link to={`/detail-category/${category.CategoryId}`}>
            <div className="flex flex-col items-center overflow-hidden">
              <img
                className="w-[70%] h-[80%] rounded-full"
                src={Icons[category.CategoryId]}
                alt={category.CategoryName}
              />
              <p className=" text-center truncate">{category.CategoryName}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categoryv;
