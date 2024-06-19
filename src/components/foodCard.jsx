import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import db from "../constants/db";
import { useEffect, useState } from "react";

const Itemcard = ({ img, name, price, rate, country }) => {
  return (
    <div className="h-80 w-60 mx-7 my-7">
      <img src={img} alt={name} className="h-50 w-60 px-5 py-5" />
      <h1>{name}</h1>
      <h1>$ {price}</h1>
      <div className="flex items-center">
        <h1>{rate}</h1>
        <FaStar className="ml-1" />
      </div>
      <h1>location: {country}</h1>
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

  return (
    <>
      <div id="searchBar">
        <input
          type="text"
          placeholder="search an item"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setPage(0);
          }}
        />
        <button>search</button>
        <button onClick={() => setSearchText("")}>clear</button>
      </div>

      <div className="flex flex-wrap justify-center">
        {items.map((food, index) => (
          <Itemcard
            key={index}
            img={food.img}
            name={food.name}
            price={food.price}
            rate={food.rate}
            country={food.country}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {page > 0 && (
          <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        )}
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
};

export default FoodCard;
