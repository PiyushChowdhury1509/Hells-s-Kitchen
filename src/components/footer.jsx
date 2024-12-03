import { useSelector } from "react-redux";

const Footer=()=>{
    let userInfo=useSelector(state=>state.user);

    return (
        <>
        <h1>{userInfo.userName}</h1>
        <h1>{userInfo.userEmail}</h1>
        </>
    )
}

export default Footer;