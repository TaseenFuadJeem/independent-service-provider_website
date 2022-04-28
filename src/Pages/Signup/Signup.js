import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
    }

    let errorElement;

    if (error || googleError) {
        errorElement = <p className='text-center text-red-600'>Something went wrong</p>
    }

    if (user || googleUser) {
        navigate('/Services');
        alert('Your account successfully created')
    }

    return (
        <div>

            {
                loading || googleLoading ?

                    <Loading></Loading>

                    :

                    <div className="h-screen bg-gradient-to-br from-blue-300 to-indigo-600 flex justify-center items-center w-full">

                        <form>
                            <div onSubmit={handleSignUp} className="bg-white sign-up-form px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                                <div className="space-y-4">
                                    <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
                                    {errorElement}
                                    <div>
                                        <label htmlFor="username" className="block mb-1 text-gray-600 font-semibold">Username</label>
                                        <input type="text" required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                                        <input required onChange={(e) => setEmail(e.target.value)} type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                        <input required onChange={(e) => setPassword(e.target.value)} type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                </div>
                                <button onClick={() => createUserWithEmailAndPassword(email, password)} className="mt-4 w-full bg-gradient-to-tr bg-indigo-500 text-white py-2 rounded-md text-lg tracking-wide">Register</button>

                                <p className='text-center my-2'>Or</p>

                                <button onClick={() => signInWithGoogle()} className="w-full bg-gradient-to-tr bg-indigo-500  text-white py-2 rounded-md text-lg tracking-wide">Continue with Google</button>

                                <p className='text-center mt-3'>Already have an account? <Link className='text-indigo-700 font-bold' to="/login">Log in</Link></p>

                            </div>
                        </form>

                    </div>
            }

        </div>
    );
};

export default Signup;