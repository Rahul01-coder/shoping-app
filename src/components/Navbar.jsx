import { FaShoppingCart } from "react-icons/fa";

export default function Navbar(){
    return (
        <div>
        <img src='./assets/logo.png'/>
            <div>
                <p>Home</p>
                <FaShoppingCart />
            </div>
        </div>
    )
}