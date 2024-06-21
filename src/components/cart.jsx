import { useSelector,useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartCard=({img,name,price,rate,country,id})=>{
    const dispatch=useDispatch();

    const handleRemoveCart=()=>{
        dispatch(removeItem(id));
    }

    return(
        <div className="h-56 w-56 bg-yellow-400">
            <img src={img} className="h-28 w-28 px-5 py-5 mx-5 my-5"/>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h2>{rate}</h2>
            <h2>{country}</h2>
            <button onClick={()=>handleRemoveCart(id)}>Remove</button>
        </div>
    )
}

const Cart=()=>{
    const data=useSelector(state=>state.cart.items);

    return(
        <>
        <h1>number of items: {data.length}</h1>
        <div className="flex flex-wrap">
        {data.map((food,index)=>(
            <CartCard 
            key={index}
            img={food.img}
            name={food.name}
            price={food.price}
            rate={food.rate}
            country={food.country}
            id={food.id}
            />
        ))}
        </div>
        </>
    )
}

export default Cart;