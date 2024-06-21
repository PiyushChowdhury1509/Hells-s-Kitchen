import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    let cartItemNumber=useSelector(Store=>Store.cart.items)

    return (
        <>
        <ul class="flex space-x-10 p-7 m-7">
            <li><Link to="">Home</Link></li>
            <li><Link to="aboutus">About Us</Link></li>
            <li><Link to="contactus">Contact Us</Link></li>
            <li><Link to="cart">Cart: {cartItemNumber.length}</Link></li>
        </ul>
        </>
    )
}

export default Header;