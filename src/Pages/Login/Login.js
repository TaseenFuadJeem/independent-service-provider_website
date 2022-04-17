import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    let errorElement;

    if (error?.message === "Firebase: Error (auth/popup-closed-by-user).") {
        errorElement = <p className='text-center text-red-600'>You closed the popup</p>
    }

    if (user) {
        navigate('/courses')
    }

    return (
        <div>

            {
                loading ?

                    <Loading></Loading>

                    :

                    <div className="h-screen bg-gradient-to-br from-blue-400 to-indigo-500 flex justify-center items-center w-full">
                        <form>
                            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                                <div className="space-y-4">
                                    <h1 className="text-center text-2xl font-semibold text-gray-600">LOG IN</h1>
                                    {errorElement}
                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                                        <input type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                        <input type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                </div>
                                <button className="mt-4 w-full bg-gradient-to-tr bg-indigo-500  text-white py-2 rounded-md text-lg tracking-wide">Log in</button>

                                <p className='text-center my-2'>Or</p>

                                <button onClick={() => signInWithGoogle()} className="w-full bg-gradient-to-tr bg-indigo-500  text-white py-2 rounded-md text-lg tracking-wide">Continue with Google</button>

                                <p className='text-center mt-3'>Don't have an account? <Link className='text-indigo-700 font-bold' to="/signup">Register</Link></p>

                            </div>
                        </form>
                    </div>
            }

        </div>
    );
};

export default Login;