import React from 'react';
import course1 from '../../Assets/course1.jpg'
import course2 from '../../Assets/course2.jpg'
import course3 from '../../Assets/course3.jpg'

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 bg-gray-100'>

            <div className="lg:min-h-screen my-10 bg-gray-100 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="max-w-sm ">
                        <div className="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            <img className="rounded-t-lg" src={course1} alt="" />
                            <div className="py-6 px-8 rounded-lg bg-white">
                                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Lighting for your shoot.</h1>
                                <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:min-h-screen my-10 bg-gray-100 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="max-w-sm ">
                        <div className="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            <img className="rounded-t-lg" src={course2} alt="" />
                            <div className="py-6 px-8 rounded-lg bg-white">
                                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">How to edit your photos</h1>
                                <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:min-h-screen my-10 bg-gray-100 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="max-w-sm ">
                        <div className="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            <img className="rounded-t-lg" src={course3} alt="" />
                            <div className="py-6 px-8 rounded-lg bg-white">
                                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Professional Gears you need</h1>
                                <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;