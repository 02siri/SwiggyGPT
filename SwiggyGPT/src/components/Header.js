import { LOGO_URL } from "../utils/constants";

import {useState,useContext} from "react";

import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import Cart from "./Cart";

const Header = () =>
{   
    const onlineStatus = useOnlineStatus();

    const [btnNameReact,setBtnNameReact] = useState("Login");

    //why are we passing?
    //Because in React, we can create multiple contexts and pass them anywhere
    //so specifying 
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    
    //SELECTOR is a HOOK inside React 
    //subscribing to the store using our selector
                                        //tell them what part of the store you want access to/read
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems); 
    //if device size is greater than sm, use yellow
return (
    <div className = "flex justify-between bg-teal-200 shadow-lg m-2 sm:bg-yellow-50 lg:bg-pink-200">
        <div className = "w-56">    
            <img src = {LOGO_URL} >
            </img>
        </div>
        <div className = "flex items-center">
            <ul className = "flex p-4 m-4">
                <li className = "px-4">
                    Online Status : {onlineStatus ? "🟢" : "🔴"} 
                </li>
                <li className = "px-4">
                    <Link to ="/">Home</Link>
                </li>
                <li className = "px-4">
                   <Link to = "/about">About Us</Link>
                </li>
                <li className = "px-4">
                    <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className = "px-4">
                    <Link to ="/grocery">Grocery</Link>
                </li>
                <li className = "px-4 font-bold">
                    <Link to ="/cart">Cart({cartItems.length})</Link>
                </li>
                <button 
                className = "login" 
                onClick={()=>{
                    btnNameReact === "Login"
                    ?setBtnNameReact("Logout")
                    :setBtnNameReact("Login")}
                    }> 
                 {btnNameReact}
                </button>

                <li className="px-4 font-bold">
                    {loggedInUser}
                </li>
            </ul>
        </div>

    </div>
);
};

export default Header; 
