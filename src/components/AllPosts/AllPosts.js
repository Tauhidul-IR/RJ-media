import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllPosts = () => {

    const { data: allPosts = [], refetch, isLoading } = useQuery({
        queryKey: ['allPost'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/allPosts');
            const data = await res.json();
            return data;
        }
    });

    console.log(allPosts);
    return (


        <div>
            <h1>All post</h1>
        </div>
    );
};

export default AllPosts;