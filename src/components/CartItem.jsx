import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"


export default function CartItem({item, itemIndex}){

    const dispatch = useDispatch();


    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }
    return(
        <div>
            <div>
                <div>
                    <img src={item.image}/>
                </div>

                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div
                        onClick={removeFromCart}
                        >
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}