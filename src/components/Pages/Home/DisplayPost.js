import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';

const DisplayPost = () => {



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">

                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {
                            <p>Commet part will come</p>
                        }
                        <div className="card-actions items-center">
                            <Link><FaHeart className='text-red-500'></FaHeart></Link>
                            <button className="btn btn-primary btn-sm"><Link>Details</Link></button>
                            <button className="btn btn-primary btn-sm"><Link>Add comment</Link></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DisplayPost;