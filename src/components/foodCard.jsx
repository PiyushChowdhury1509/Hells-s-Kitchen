import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import db from "../constants/db";
import { useEffect, useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Itemcard = ({ img, name, price, rate, country }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60 mx-7 my-7">
      <img src={img} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="text-gray-700">$ {price}</h1>
        <div className="flex items-center mt-2">
          <h1 className="text-yellow-500">{rate}</h1>
          <FaStar className="ml-1 text-yellow-500" />
        </div>
        <h1 className="text-gray-600 mt-1">Location: {country}</h1>
      </div>
    </div>
  );
};

const FoodCard = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const { name } = useParams();
  const allItems = db[name];
  const numberOfItems = db.pagination[name];
  const itemsPerPage = 20;

  useEffect(() => {
    let filteredItems = allItems;
    if (searchText) {
      filteredItems = allItems.filter((food) =>
        food.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    const startIndex = page * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredItems.length);
    setItems(filteredItems.slice(startIndex, endIndex));
  }, [page, searchText, allItems]);

  const dispatch = useDispatch();
  const handleAddToCart = (food) => {
    dispatch(addItem(food));
  };

  return (
    <>
      <div id="searchBar" className="flex justify-center mt-8 mb-4">
        <input
          type="text"
          placeholder="Search an item"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setPage(0);
          }}
          className="border border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">Search</button>
        <button 
          onClick={() => setSearchText("")}
          className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">Clear</button>
      </div>

      <div className="flex flex-wrap justify-center">
        {items.map((food, index) => (
          <div key={index} className="flex flex-col items-center">
            <Itemcard
              img={food.img}
              name={food.name}
              price={food.price}
              rate={food.rate}
              country={food.country}
            />
            <button 
              onClick={() => handleAddToCart(food)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        {page > 0 && (
          <button 
            onClick={() => setPage((prev) => prev - 1)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Previous
          </button>
        )}
        <button 
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Next
        </button>
      </div>
    </>
  );
};

export default FoodCard;
