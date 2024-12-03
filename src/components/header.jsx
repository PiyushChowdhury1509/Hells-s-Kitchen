import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    let cartItemNumber = useSelector(store => store.cart.items);

    return (
        <>
            <ul className="flex justify-center space-x-10 p-7 m-7 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg text-white">
                <li className="hover:underline"><Link to="/home">Home</Link></li>
                <li className="hover:underline"><Link to="aboutus">About Us</Link></li>
                <li className="hover:underline"><Link to="contactus">Contact Us</Link></li>
                <li className="hover:underline"><Link to="cart">Cart: {cartItemNumber.length}</Link></li>
            </ul>
        </>
    )
}

export default Header;
