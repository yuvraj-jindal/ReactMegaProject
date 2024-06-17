/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConfigService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaPen } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    // console.log(userData)
    // console.log(post)

    const isAuthor = post && userData ? post.UserID === userData.$id : false;
    // console.log(isAuthor)

    useEffect(() => {
        if (slug) {
            ConfigService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        ConfigService.deletePost(post.$id).then((status) => {
            if (status) {
                ConfigService.deleteFile(post.FeaturedImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={ConfigService.showPrev(post.FeaturedImage)}
                        alt={post.Title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <button className="px-4 py-2 rounded-lg mr-3 text-white text-lg font-medium  bg-[#232325] hover:scale-125 hover:duration-200 ">
                                    <FaPen />
                                </button>
                            </Link>
                            <Button bgColor="bg-red-600" className="hover:scale-125 hover:duration-200 hover:bg-red-600" onClick={deletePost}>
                                <ImCross />
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-[#fd356e]">
                    <h1 className="text-2xl font-bold">{post.Title}</h1>
                </div>
                <div className="browser-css text-white">
                    {parse(post.Content)}
                    </div>
            </Container>
        </div>
    ) : null;
}