import React, { useState, useEffect } from "react";
import db from "../constants/db";
import { Link } from "react-router-dom";

const FoodCard = ({ name, image, count }) => {
  return (
    <div className="bg-red-400 h-80 w-60 mx-6 my-6">
      <img src={image} alt={name} className="h-50 w-60 p-3" />
      <h1 className="font-bold text-center">{name}</h1>
      <h3 className="font-bold text-center">Number of items: {count}</h3>
    </div>
  );
};

const Body = () => {
  const [foodItems, setFoodItems] = useState([]);
  let [selectedFoodItems,setSelectedFoodItems]=useState(foodItems);
  let [search,setSearch]=useState("");

  useEffect(()=>{
    let filteredArray=foodItems.filter((item)=>(
      item.name.includes(search)
    ))
    setSelectedFoodItems(filteredArray);
  },[search])

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
    <>
    <div id="searchBar">
      <input
      type="text"
      placeholder="search"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button>search</button>
      <button onClick={()=>setSearch("")}>clear</button>
    </div>

    <div className="flex flex-wrap justify-center">
      {selectedFoodItems.map((food, index) => (
        <Link key={index} to={`/home/${food.name}`}>
          <FoodCard name={food.name} image={food.image} count={food.count} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default Body;
