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
            <div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-8 space-y-3  min-h-[80vh]">
                {posts.map((post) => {
                    {/* console.log("inside home")
                    console.log(post) */}
                return <Product key={post.id} post={post} />
                })}
            </div> 
            ) : !isLoading && posts.length === 0 ? (
            <div className="flex justify-center items-center">No Product Available</div>
            ) : null}

        </div>
    )
}