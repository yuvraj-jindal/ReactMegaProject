/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import configService from "../appwrite/config"


const PostCard = ({
    $id,
    Title,
    FeaturedImage,
    ...props
}) => {



    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-[#eeeef1] rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={configService.showPrev(FeaturedImage)} alt={Title}
                    className='rounded-xl bg-auto'/>

                </div>
                <h2
                className='text-xl font-bold'
                >{Title}</h2>
            </div>
        </Link>
    )
}

export default PostCard