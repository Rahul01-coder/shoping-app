import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import CartItem from 'src/components/CartItem.jsx'
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react"


export default function Cart(){

    const cart = useSelector(state => state.cart)
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price,0));
    },[cart])

    return( 
        <div>
            {
                cart.length > 0 ? 
                (
                    <div className="flex max-w-6xl mx-auto">
                        <div className="w-[50%]">
                            {cart.map((item, index) => {
                                return <CartItem key={item.id} item={item} itemIndex={index}/>
                            })}
                        </div>

                        <div className="ml-20 h-[80vh] flex flex-col justify-between">

                            <div className="mt-20 text-left">
                                <div className="text-green-700 font-semibold text-lg uppercase">Your Cart</div>
                                <div className="text-green-700 font-semibold text-4xl uppercase">Summary</div>
                                <p className="font-semibold text-gray-700 mt-4">
                                    <span>Total Items: {cart.length}</span>
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Total Amount: <span 
                                className="font-bold text-black">${totalAmount}</span>
                                 </p>
                                <button
                                className="bg-green-700 w-xs py-2 mt-4 rounded-md font-bold text-white cursor-pointer"
                                >
                                    Checkout Now
                                </button>
                            </div>

                        </div>
                    </div>
                ):(
                    <div className="flex justify-center items-center flex-col h-[80vh] gap-y-5">
                        <h1 
                        className="text-lg font-bold"
                        >cart is Empty</h1>
                        <Link to='/'>
                            <button
                            className="bg-green-600 px-4 py-2 rounded-xl hover:cursor-progress"
                            >
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}