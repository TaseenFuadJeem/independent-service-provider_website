import React from 'react';
import photographer from '../../Assets/photographer.jpg';

const Home = () => {
    return (
        <div className='lg:px-32'>
            <div className='grid lg:grid-cols-2 my-16'>

                <div className='flex items-center'>
                    <div>
                        <h1 className='text-5xl font-bold text-indigo-500'>IF YOU KNOW ME,</h1>
                        <h1 className='text-5xl font-bold text-indigo-500'>YOU KNOW MY STORY.</h1>
                        <p className='my-10'>
                            My name is Steve Rogers, and I am a beautiful mosaic of lived-experience and culture. Everyday I wake up in search of courage and authentic expression. And on this journey, I've been met with opportunities to create impact in ways I'd never imagine. January 2018 I became the best youngest photographer of the year. I got the global media platform that empowers creativity with tools to experience the beauty of the world. From 2014, i have learned a lot about photography. I studied about photography and also i researched a lot about photography.  I believed, everyone came with great gifts. People should find their own and I come with a great gift, and I will continue carry forward with the photography craft.
                        </p>

                        <button className=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                            HIRE ME
                        </button>

                    </div>
                </div>

                <div>
                    <img className='w-3/5 rounded-lg shadow-2xl mx-auto lg:mr-5' src={photographer} alt="Photographer" />
                </div>

            </div>

            <div>
                <h1 className='text-center text-2xl'>Explore my works</h1>
            </div>

        </div>
    );
};

export default Home;