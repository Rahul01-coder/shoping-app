import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex flex-row justify-around">
        <NavLink to="/">
            <div>
                <img src='public/logo.png' className="w-20 h-10"/>
            </div>
        </NavLink>

        <NavLink to='/'>
            <div>
                <p>Home</p>
            </div>
        </NavLink>

        <NavLink to='/cart'>
            <div>
                <FaShoppingCart />
            </div>
        </NavLink>
        </div>
    )
}