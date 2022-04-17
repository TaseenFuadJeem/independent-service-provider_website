import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='sticky top-0'>

            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

                    <Link to="/home">
                        <div className="text-indigo-500 md:order-1">
                            <h1 className='text-3xl font-bold'>Steve's Lenses</h1>
                        </div>
                    </Link>

                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">

                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><NavLink to="/home">Home</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><NavLink to="/my-works">My Works</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><NavLink to="/blogs">Blogs</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><NavLink to="/courses">Courses</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><NavLink to="/about-me">About</NavLink></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">

                        <Link to="/login">

                            {
                                user ?
                                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Log Out</span>
                                    </button>

                                    :

                                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Log In</span>
                                    </button>
                            }

                        </Link>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;