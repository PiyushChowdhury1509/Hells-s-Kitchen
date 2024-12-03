import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName, changeEmail } from "../utils/userSlice";

const Login = () => {
    let [user, setUser] = useState();
    let [email, setEmail] = useState();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin = () => {
        dispatch(changeName(user));
        dispatch(changeEmail(email));
        navigate("/home");
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.GQqW9JvGbj0BAkbkIiIeHQAAAA?rs=1&pid=ImgDetMain')" }}>
            <div className="border-2 border-gray-300 shadow-lg rounded-lg px-8 py-10 w-96 bg-white bg-opacity-90">
                <h1 className="text-xl font-bold mb-4 text-gray-700">Login</h1>
                <label className="block text-sm font-medium text-gray-600">Name:</label>
                <input 
                    type="text" 
                    onChange={(e) => setUser(e.target.value)} 
                    placeholder="Full name" 
                    className="w-full h-10 px-3 mt-1 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
                />
                <label className="block text-sm font-medium text-gray-600">Email:</label>
                <input 
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="xyz@gmail.com" 
                    className="w-full h-10 px-3 mt-1 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
                />
                <button 
                    onClick={handleLogin} 
                    className="w-full bg-yellow-500 text-white font-semibold py-2 rounded shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
