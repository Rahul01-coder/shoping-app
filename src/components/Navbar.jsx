import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar(){

    const cart = useSelector(state => state.cart)

    return (
        <div>
            <nav className="flex justify-between items-center max-w-6xl mx-auto h-20">
                
                <NavLink to="/">
                    <div className="ml-5">
                        <img src='public/logo.png' className="w-20 h-10"/>
                    </div>
                </NavLink>

                
                <div className="flex items-center text-slate-100 font-medium mr-5 space-x-6">
                    <NavLink to='/'>
                        <div>
                            <p className="text-xm">Home</p>
                        </div>
                    </NavLink>

                    <NavLink to='/cart'>
                        <div className="relative">
                            <FaShoppingCart className="text-2xl"/>
                            {
                                cart.length > 0 && 
                                <span
                                className="absolute -top-2 -right-2 bg-green-600 flex justify-center items-center animate-bounce
                                text-sm rounded-full text-white w-5 h-5"
                                >{cart.length}</span>
                            }
                        </div>
                    </NavLink>
                </div>

            </nav>

        </div>
    )
}