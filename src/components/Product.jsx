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
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt={post.title} className="w-40 h-40 object-cover" />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {
                cart.some(((item=>item.id === post.id))) ?(
                    <button
                    onClick={removeFromCart}
                    >
                        Remove Item
                    </button>
                ):(
                    <button
                    onClick={addToCart}
                    >
                        Add To Cart
                    </button>
                )
            }
        </div>
    )
}