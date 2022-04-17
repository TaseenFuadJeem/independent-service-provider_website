import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (resetError) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }


    let errorElement;

    if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
        errorElement = <p className='text-center text-red-600'>You closed the popup</p>
    }

    if (error?.message === "Firebase: Error (auth/wrong-password).") {
        errorElement = <p className='text-center text-red-600'>You entered a wrong password</p>
    }

    if (error?.message === "Firebase: Error (auth/user-not-found).") {
        errorElement = <p className='text-center text-red-600'>You entered a wrong E-mail</p>
    }

    if (googleUser || user) {
        navigate('/courses')
    }


    return (
        <div>

            {
                googleLoading || loading || sending ?

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
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                        <button onClick={async () => {
                                            await sendPasswordResetEmail(email);
                                            alert('Sent email');
                                        }}
                                            className='text-sm my-1 btn-disable text-gray-400 hover:text-gray-600'>Reset password</button>
                                    </div>
                                </div>
                                <button onClick={() => signInWithEmailAndPassword(email, password)} className="mt-4 w-full bg-gradient-to-tr bg-indigo-500  text-white py-2 rounded-md text-lg tracking-wide">Log in</button>

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