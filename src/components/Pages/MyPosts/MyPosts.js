import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyPosts = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`https://social-media-server-tauhidul-ir.vercel.app/posts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(posts);

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
            <h1>All my post</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    posts.map(post => <div key={post?._id} className="card w-full bg-base-100 shadow-xl">

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
    );
};

export default MyPosts;