import { Link } from "react-router-dom";

const Login=()=>{
    return (
        <div className="border-2 border-black px-6 py-6 w-96 h-80 mx-8 my-8">
            <h1>Name:</h1>
            <input type="text" placeholder="full-name" className="w-72 h-10 focus:bg-yellow-100"/>
            <h1>Email:</h1>
            <input type="text" placeholder="xyz@gmail.com" className="w-72 h-10 focus:bg-yellow-100"/>
            <button className="bg-yellow-500 text-black rounded-xl w-26 px-3 py-3 h-8 text-center my-5">
                <Link to="/home">Login</Link></button>
        </div>
    )
}

export default Login;