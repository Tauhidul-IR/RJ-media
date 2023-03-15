import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllPosts = () => {

    const { data: allPosts = [], refetch, isLoading } = useQuery({
        queryKey: ['allPost'],
        queryFn: async () => {
            const res = await fetch('https://social-media-server-tauhidul-ir.vercel.app/allPosts');
            const data = await res.json();
            return data;
        }
    });

    // console.log(allPosts);


    const handleDelete = (post) => {
        console.log(post);
        fetch(`http://localhost:5000/post/${post._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`Delete SuccessFully`)
                }
            })
    }


    return (


        <div>
            <h1>All post</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        allPosts.map(post => <div className="card w-full bg-base-100 shadow-xl">

                            <div className="card-body items-center text-center">

                                <h2 className="card-title">Title: {post?.title}</h2>
                                <h5 className="">Post: {post?.post}</h5>
                                <div className="card-actions items-center">
                                    <Link className="btn btn-primary btn-sm" onClick={() => { handleDelete(post) }}>Delete</Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllPosts;