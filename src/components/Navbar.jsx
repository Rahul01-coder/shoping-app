import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar(){



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
                            <p>Home</p>
                        </div>
                    </NavLink>

                    <NavLink to='/cart'>
                        <div>
                            <FaShoppingCart />
                        </div>
                    </NavLink>
                </div>

            </nav>

        </div>
    )
}