import React, { useState, useEffect } from "react";
import db from "../constants/db";
import { Link } from "react-router-dom";

const FoodCard = ({ name, image, count }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60 mx-4 my-4">
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h1 className="font-bold text-center text-lg">{name}</h1>
        <h3 className="font-bold text-center text-gray-600">Number of items: {count}</h3>
      </div>
    </div>
  );
};

const Body = () => {
  const [foodItems, setFoodItems] = useState([]);
  let [selectedFoodItems, setSelectedFoodItems] = useState(foodItems);
  let [search, setSearch] = useState("");

  useEffect(() => {
    let filteredArray = foodItems.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSelectedFoodItems(filteredArray);
  }, [search, foodItems]);

  useEffect(() => {
    setTimeout(() => {
      const { pagination, ...rest } = db;
      const foods = Object.keys(rest).map((key) => ({
        name: key,
        image: rest[key][0]?.img ?? '',
        count: pagination[key],
      }));
      setFoodItems(foods);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div id="searchBar" className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Search
          </button>
          <button 
            onClick={() => setSearch("")}
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Clear
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          {selectedFoodItems.map((food, index) => (
            <Link key={index} to={`/home/${food.name}`} className="block">
              <FoodCard name={food.name} image={food.image} count={food.count} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
