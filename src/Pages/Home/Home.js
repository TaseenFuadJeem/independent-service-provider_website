import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import photographer from '../../Assets/photographer.jpg';
import pic1 from '../../Assets/pic1.jpg';
import pic2 from '../../Assets/pic2.jpg';
import pic3 from '../../Assets/pic3.jpg';
import pic4 from '../../Assets/pic4.jpg';
import pic5 from '../../Assets/pic5.jpg';
import pic6 from '../../Assets/pic6.jpg';
import logo1 from '../../Assets/logo1.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.png';
import './Home.css';

const Home = () => {
    return (
        <div className='lg:px-32'>
            <div className='grid lg:grid-cols-2 mt-16 mb-32'>

                <div className='flex items-center'>
                    <div className='description'>
                        <h1 className='text-5xl font-bold text-indigo-500'>IF YOU KNOW ME,</h1>
                        <h1 className='text-5xl font-bold text-indigo-500'>YOU KNOW MY STORY.</h1>
                        <p className='my-10'>
                            My name is <strong>Steve Rogers</strong>, and I am a beautiful mosaic of lived-experience and culture. Everyday I wake up in search of courage and authentic expression. And on this journey, I've been met with opportunities to create impact in ways I'd never imagine. January 2018 I became the best youngest photographer of the year. I got the global media platform that empowers creativity with tools to experience the beauty of the world. From 2014, i have learned a lot about photography. I studied about photography and also i researched a lot about photography.  I believed, everyone came with great gifts. People should find their own and I come with a great gift, and I will continue carry forward with the photography craft.
                        </p>

                        <button className=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                            CONTACT ME
                        </button>

                    </div>
                </div>

                <div>
                    <img className='description-img w-3/5 rounded-lg shadow-2xl mx-auto lg:mr-5' src={photographer} alt="Photographer" />
                </div>

            </div>

            <div>
                <h1 className='text-center text-4xl font-semibold mb-10'>Explore my works</h1>

                <div className="container mx-auto p-8">
                    <div className="flex flex-row flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
                            <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic1} alt='' />


                        </div>
                        <div className="w-full md:w-1/2 mb-4 px-2">
                            <div className="flex flex-col sm:flex-row md:flex-col -mx-2">

                                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">

                                    <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic2} alt='' />

                                </div>

                                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">

                                    <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic3} alt="" />

                                </div>

                            </div>
                        </div>

                        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">

                            <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic4} alt="" />

                        </div>

                        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">

                            <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic5} alt="" />

                        </div>

                        <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">

                            <img className="rounded-lg block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={pic6} alt="" />

                        </div>
                    </div>
                </div>

                <Link to="/my-works">

                    <button className=" block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                        Explore More <FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon>
                    </button>

                </Link>

            </div>

            <div className='my-16'>

                <h1 className='text-center text-4xl font-semibold '>Worked with top companies</h1>

                <div className='lg:flex lg:items-center'>
                    <img className='w-32 my-16 mx-auto' src={logo1} alt="" />
                    <img className='w-32 my-16 mx-auto' src={logo2} alt="" />
                    <img className='w-32 my-16 mx-auto' src={logo3} alt="" />
                    <img className='w-32 my-16 mx-auto' src={logo4} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Home;