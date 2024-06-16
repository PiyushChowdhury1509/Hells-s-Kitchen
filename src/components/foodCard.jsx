import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import db from "../constants/db";

const Itemcard=({img,name,price,rate,country})=>{
    return (
        <div className="h-80 w-60 mx-7 my-7">
        <img src={img} alt={name} className="h-50 w-60 px-5 py-5"/>
        <h1>{name}</h1>
        <h1>$ {price}</h1>
        <div className="flex items-center">
        <h1>{rate}</h1>
        <FaStar className="ml-1" />
        </div>
        <h1>location: {country}</h1>
        </div>
    )
}

const FoodCard=()=>{
    console.log(useParams())
    const {name}=useParams();
    const items=db[name];
    return (
        <div className="flex flex-wrap justify-center">
        {items.map((food,index)=>(
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
    )
}

export default FoodCard;