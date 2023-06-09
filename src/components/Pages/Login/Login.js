import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)

            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("login Successfully")
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h4>user:admin@admin.com</h4>
                <h4>pass:admin@admin.com</h4>

                {/* -----------------Start Form------------------ */}
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* --------------email---------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Email</span></label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            type="email" className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    {/* --------------email---------------------------------- */}




                    {/* --------------password---------------------------------- */}
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"><span className="label-text font-bold">Password</span></label>
                        <input
                            {...register("password", {
                                required: "Password Required",
                                minLength: { value: 6, message: 'Password must be 6 characters or more.!!!' }
                            })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}


                    </div>

                    {/* --------------password---------------------------------- */}


                    {/* --------------Login Btn---------------------------------- */}
                    <input className='btn btn-neutral w-full' type="submit" value={'Login'} />
                </form>

                {/* error display------------------------- */}
                <div>
                    {
                        // loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </div>
                {/* -------------End Form-------------- */}


                <p className='font-semibold my-5'> <Link to={'/signUp'} className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                {/* -------------Google Login-------------- */}
                <button onClick={handleGoogle} className='btn btn-outline w-full my-4'>CONTINUE WITH GOOGLE</button>
                {/* -------------Google Login-------------- */}
            </div>
        </div>
    );
};

export default Login;