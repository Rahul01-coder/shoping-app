import { useState } from "react"

export default function Product({post}){

    const [selected, setSelected] = useState(false);

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
            <button>
                {
                    selected ? <p>Remove Items</p> : <p>Add to Cart</p>
                }
            </button>
        </div>
    )
}