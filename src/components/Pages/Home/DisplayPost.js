import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';

const DisplayPost = () => {

    const { data: allPosts = [], refetch, isLoading } = useQuery({
        queryKey: ["topPost"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/topPost`);
            const data = await res.json();
            return data;
        }
    });
    console.log(allPosts);


    return (
        <div>
            <h1 className='text-5xl font-bold my-10 text-center'>Display Post</h1>
            <div className='grid grid-cols-1  gap-3'>
                {
                    allPosts.map(posts => <SinglePost key={posts._id} posts={posts}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default DisplayPost;