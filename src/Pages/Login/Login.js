import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        backgroundColor: '#1F2937',
        padding: "35px",

    },
};

Modal.setAppElement('#root');


const Login = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    console.log(email);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();


    let errorElement;

    if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
        errorElement = <p className='text-center text-red-600'>You closed the popup</p>
    }

    if (error?.message === "Firebase: Error (auth/wrong-password).") {
        errorElement = <p className='text-center text-red-600'>You entered a wrong password</p>
    }

    if (error?.message === "Firebase: Error (auth/invalid-email).") {
        errorElement = <p className='text-center text-red-600'>Invalid Email</p>
    }

    if (error?.message === "Firebase: Error (auth/user-not-found).") {
        errorElement = <p className='text-center text-red-600'>No user found. Please check your E-mail</p>
    }

    if (resetError?.message === "Firebase: Error (auth/missing-email).") {
        errorElement = <p className='text-center text-red-600'>Please enter your E-mail then reset your password</p>
    }


    if (googleUser || user) {
        navigate('/courses')
    }

    const handleLogin = event => {
        event.preventDefault();
    }


    return (
        <div>

            {
                googleLoading || loading || sending ?

                    <Loading></Loading>

                    :

                    <div className="h-screen bg-gradient-to-br from-blue-300 to-indigo-600 flex justify-center items-center w-full">
                        <form className='login-form' onSubmit={handleLogin}>
                            <div className="bg-white px-10 login-form py-8 rounded-xl w-screen shadow-md max-w-sm">
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

                                        <button onClick={openModal}
                                            className='text-sm my-1 btn-disable text-gray-400 hover:text-gray-600'>Reset password</button>

                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                            contentLabel="Example Modal"
                                        >

                                            <h1 className='text-center text-white text-xl font-bold'>🤔 Are you sure for reset your password?</h1>

                                            <div className='flex justify-evenly mt-10'>

                                                <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={async () => {
                                                    if (email === "") {
                                                        toast('Please enter your E-mail then reset your password')
                                                    }
                                                    else {
                                                        await sendPasswordResetEmail(email);
                                                        toast('Sent reset link. Check your E-mail');
                                                    }
                                                }} >Yes!!</button>

                                                <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={closeModal}>cancel</button>

                                            </div>

                                        </Modal>

                                        <ToastContainer></ToastContainer>
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