
import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../Shared/Navbar';
import { useQuery } from '@tanstack/react-query';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const { data: singleUser = [], refetch, isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`https://social-media-server-tauhidul-ir.vercel.app/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(singleUser);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-blue-800 font-bold">


                        {
                            singleUser?.roll === "admin" ? <>
                                <li><Link to={'/dashboard/allPosts'}>All Post</Link></li>
                                <li><Link to={'/dashboard/myPosts'}>My Post</Link></li>
                            </> : <li><Link to={'/dashboard/myPosts'}>My Post</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;