import { createBrowserRouter } from "react-router-dom";
import AllPosts from "../components/AllPosts/AllPosts";
import DashBoard from "../components/Pages/DashBoard/DashBoard";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import SingUp from "../components/Pages/Login/SingUp";
import MyPosts from "../components/Pages/MyPosts/MyPosts";
import PostDetails from "../components/Pages/Posts/PostDetails";
import Posts from "../components/Pages/Posts/Posts";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/posts',
                element: <Posts></Posts>
            },
            {
                path: '/posts/:id',
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://social-media-server-tauhidul-ir.vercel.app/posts/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/myPosts',
                element: <MyPosts></MyPosts>
            },
            {
                path: '/dashboard/allPosts',
                element: <AllPosts></AllPosts>
            },

        ]
    },

])
export default router;