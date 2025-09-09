import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

export default function Home(){

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([])

    const API_URL = "https://fakestoreapi.com/products";

    async function fetchProductData() {

        setIsLoading(true);
        try{
            const response =await axios.get(API_URL);
            // console.log(response);
            setPosts(response.data)

        }catch(error){
            toast.error('there is something wrong, "Data is not fetch" !!!!');
            setPosts([]);
        }

        setIsLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    return(
        <div>

            {isLoading && <Spinner />}
            {!isLoading && posts.length > 0 ? (
            <div>
                {posts.map((post) => {
                    {/* console.log("inside home")
                    console.log(post) */}
                return <Product key={post.id} post={post} />
                })}
            </div>
            ) : !isLoading && posts.length === 0 ? (
            <div>No Product Available</div>
            ) : null}

        </div>
    )
}