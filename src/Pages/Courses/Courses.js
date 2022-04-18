import React from 'react';
import './Courses.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import course1 from '../../Assets/course1.jpg';
import course2 from '../../Assets/course2.jpg';
import course3 from '../../Assets/course3.jpg';
import auth from '../../firebase.init';

const Courses = () => {

    const [user] = useAuthState(auth);

    let userEmail;

    if (user) {
        userEmail = user?.email;
    }


    return (
        <>

            <p className='text-center mt-5'>user : {userEmail}</p>


            <div className='grid lg:grid-cols-3  lg:px-32'>


                <div className="lg:min-h-screen my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course1} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Lighting for your shoot.</h1>
                                    <p className="text-gray-700 tracking-wide">Using a flash softbox or taking the flash off camera and putting it on a stand with an umbrella allows photographers to take a small, hard light source and create soft lighting. Used together, the direction and softness of the light can be used to....</p>
                                    <button className="mt-6 py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:min-h-screen my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course2} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">How to edit your photos</h1>
                                    <p className="text-gray-700 tracking-wide">As smartphone cameras have got better, the market share for point-n-shoot cameras is nose-diving. This shouldn’t be a surprise, given the convenience of carrying a quality camera which can also make calls and browse the internet, offers....</p>
                                    <button className="mt-6 py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:min-h-screen my-10  flex justify-center items-center">
                    <div className="container flex justify-center">
                        <div className="max-w-sm course-container">
                            <div className="bg-white shadow-2xl rounded-lg">
                                <img className="rounded-t-lg" src={course3} alt="" />
                                <div className="py-6 px-8 rounded-lg bg-white">
                                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Professional Gears you need</h1>
                                    <p className="text-gray-700 tracking-wide">Every professional photographer needs a high-performing camera. In fact, I recommend you have two cameras: a main body and a backup.You never know when your main body will fail.And a client won’t be happy with....</p>
                                    <button className="mt-6 py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Courses;