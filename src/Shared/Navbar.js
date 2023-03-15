import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser, FaUserTimes } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const name = user?.displayName;

    const handlelogout = () => {
        logOutUser()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.error(error))
    }


    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>

        <li><Link to={'/posts'}>Media</Link></li>

        {
            user?.uid ? <>
                <li><Link to={'/dashboard'}>DashBoard</Link></li>
                <li><Link onClick={handlelogout} to={'/Login'}>SignOut</Link></li>
            </> : <li><Link to={'/Login'}>Login</Link></li>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-indigo-800 text-3xl font-bold">RJ-Media</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="w-5 rounded-full">

                        {/* <div className="tooltip tooltip-open tooltip-bottom" data-tip="name">
                            <button className="">
                                
                            </button>
                        </div> */}
                        <div className="tooltip tooltip-bottom" data-tip={user?.uid ? name : "No user"}>
                            <button className="">{
                                user?.uid ? <FaUser></FaUser> : <FaUserTimes></FaUserTimes>
                            }</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;