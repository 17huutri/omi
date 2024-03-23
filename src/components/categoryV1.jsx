import React, { useState, useEffect } from "react";
import categoriesApi from "../api/categoriesApi";
import { Link } from "react-router-dom";
const Icons = {
  1: "https://cdn-www.vinid.net/2019/09/Nen-chon-loai-hoa-qua-bieu-Tet-2019-nao.jpg",

  2: "https://th.bing.com/th/id/OIP.dDm4b5VSi5s4dQLGw2EqAAEsC7?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

  3: "https://tapchinhabep.net/wp-content/uploads/2020/04/MBP1frame2ok.jpg",

  4: "https://th.bing.com/th/id/R.423efeaa95aa88c33bb669d6bde7adf9?rik=yTTC5v17COqgCA&pid=ImgRaw&r=0",

  5: "https://vietmartjp.com/wp-content/uploads/2021/05/gia-vi-viet-pham-viet-o-nhat-vietmart.jpg",

  6: "https://th.bing.com/th/id/R.ce927c037e7a8fc94712be8f2bf77227?rik=JVFg%2fCwqJEyVoQ&riu=http%3a%2f%2ftuvangiayphep24h.com%2fimg_data%2fimages%2ffood303517555180.jpg&ehk=9B%2bOEjyY9UypKdAoXrYLwNMfLnpTiJGIOQ0WZNq72W0%3d&risl=&pid=ImgRaw&r=0",
  7: "https://cdn-icons-png.flaticon.com/512/5318/5318688.png",
  8: "https://thumbs.dreamstime.com/z/frozen-food-icon-supermarket-shopping-mall-related-vector-illustration-216865371.jpg",
  9: "https://th.bing.com/th/id/OIP.g9qpvwIvDTOE6jiskOz8XwHaHa?rs=1&pid=ImgDetMain",
};


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
              <p className=" text-center">{category.CategoryName}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categoryv;
