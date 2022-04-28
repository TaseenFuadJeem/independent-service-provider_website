import React from 'react';
import './Services.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import course1 from '../../Assets/course1.jpg';
import course2 from '../../Assets/course2.jpg';
import course3 from '../../Assets/course3.jpg';
import userPhoto from '../../Assets/profile-user.png';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Services = () => {

    const [user] = useAuthState(auth);



    return (
        <div className='mb-32'>

            <h1 className='text-center text-4xl font-bold mt-5'>Free Photography Courses</h1>

            {
                user ?
                    <div className='border-2 p-4 w-80 mx-auto flex justify-center rounded-xl mt-5'>
                        <div>
                            <p className='text-center mb-2 font-bold underline  underline-offset-4'>USER INFO</p>
                            <div className="flex items-center mx-auto space-x-4">
                                <img className="w-10 h-10 rounded-full" src={user?.photoURL ? user.photoURL : userPhoto} alt="" />
                                <div className="space-y-1 font-medium">
                                    <div>{user?.displayName ? user.displayName : "Unknown User"}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="flex mx-auto mt-5 lg:w-4/12 sm:w-3/4 bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                        <div className='flex mx-auto'>
                            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div>
                                <span className="font-medium">Warning alert!</span> You have to login for access these courses.
                            </div>
                        </div>
                    </div>
            }


            <div className='grid lg:grid-cols-3  lg:px-32'>


                <div className=" my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course1} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Lighting for your shoot.</h1>
                                    <p className="text-gray-700 tracking-wide">Using a flash softbox or taking the flash off camera and putting it on a stand with an umbrella allows photographers to take a small, hard light source and create soft lighting. Used together, the direction and softness of the light can be used to....</p>
                                    <Link to='/lighting-for-your-shoot'>
                                        <button className="mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course2} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">How to edit your photos</h1>
                                    <p className="text-gray-700 tracking-wide">As smartphone cameras have got better, the market share for point-n-shoot cameras is nose-diving. This shouldn’t be a surprise, given the convenience of carrying a quality camera which can also make calls and browse the internet, offers....</p>
                                    <Link to='/how-to-edit-your-photos'>
                                        <button className="mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course3} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Professional Gears you need</h1>
                                    <p className="text-gray-700 tracking-wide">Every professional photographer needs a high-performing camera. In fact, I recommend you have two cameras: a main body and a backup.You never know when your main body will fail.And a client won’t be happy with....</p>
                                    <Link to='/professional-gears-you-need'>
                                        <button className="mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;