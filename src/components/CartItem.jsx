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
        <div >
            <div className="flex gap-x-4 mt-10 border-b-2 pb-2">
                <div className="h-[12rem] w-[12rem] m-2 py-2 px-4">
                    <img src={item.image} className="w-full h-full "/>
                </div>

                <div>
                    <h1
                    className="text-gray-700 font-semibold text-lg text-left mt-1"
                    >{item.title}</h1>
                    <h1
                    className="text-gray-400 font-normal text-left text-[.8rem]"
                    >{item.description.split(" ").slice(0,10).join(" ") + "..."}

                    </h1>


                    <div className="flex justify-around items-center mt-10">
                        <p className="font-bold text-green-600 text-xl">${item.price}</p>
                        <div
                        className="font-bold text-2xl bg-red-300 rounded-full p-1 cursor-pointer"
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