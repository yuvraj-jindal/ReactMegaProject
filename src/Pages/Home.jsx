/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import ConfigService from "../appwrite/config"
import {Container,PostCard, PostForm} from "../components"
import { useSelector } from "react-redux";


export default function Home(){
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    

    useEffect(() => {
        ConfigService.getPosts().then((response) => {
            if(response){
                setPosts(response.documents)
            }
        })
    },[])

    if (posts.length==0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                { userData ? "No Post available":"Login to read posts" }
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // posts.map((post) => {    
    //     console.log(post)
    // })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}