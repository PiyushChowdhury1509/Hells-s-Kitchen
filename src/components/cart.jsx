import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartCard = ({ img, name, price, rate, country, id }) => {
    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-60 mx-4 my-4">
            <img src={img} className="h-40 w-full object-cover" alt={name} />
            <div className="p-4">
                <h1 className="text-lg font-bold">{name}</h1>
                <h1 className="text-gray-700">$ {price}</h1>
                <h2 className="text-yellow-500">Rating: {rate}</h2>
                <h2 className="text-gray-600">Location: {country}</h2>
                <button 
                    onClick={handleRemoveCart} 
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Remove
                </button>
            </div>
        </div>
    );
};

const Cart = () => {
    const data = useSelector(state => state.cart.items);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">Number of items: {data.length}</h1>
                <div className="flex flex-wrap justify-center">
                    {data.map((food, index) => (
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
            </div>
        </div>
    );
};

export default Cart;
