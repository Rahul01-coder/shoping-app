import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from '../redux/Slices/CartSlice'

export default function Product({post}){

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    } 

    const removeFromCart = ()=>{
        dispatch(remove(post.id));
        toast.error("Item remove from cart")
    }

    return(
        <div className=" w-[15.5rem] h-[27rem] flex flex-col items-center justify-between hover:scale-110 transition-all duration-200 ease-in
         p-4 mt-10 ml-2 rounded-xl outline hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
            <div>
                <p
                className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
                >{post.title}</p>
            </div>
            <div>
                <p
                className="w-40 text-gray-400 font-normal text-left text-[.8rem]"
                >{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div  className="h-[180px]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex justify-between gap-12 items-center w-full mt-5">

                <div>
                    <p className="font-semibold text-green-600">${post.price}</p>
                </div>
                {
                    cart.some(((item=>item.id === post.id))) ?(
                        <button
                        onClick={removeFromCart}
                        className="text-gray-700 border-2 font-bold border-gray-700 rounded-full text-[.629rem] p-1 px-3 uppercase
                        hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
                        >
                            Remove Item
                        </button>
                    ):(
                        <button
                        className="text-gray-700 border-2 font-bold border-gray-700 rounded-full text-[.629rem] p-1 px-3 uppercase
                        hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
                        onClick={addToCart}
                        >
                            Add To Cart
                        </button>
                    )
                }

            </div>
        </div>
    )
}