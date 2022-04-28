import React from 'react';
import './Banner.css';
import { Fade, Zoom } from 'react-reveal';
import banner from '../../Assets/banner.jpeg';

const Banner = () => {
    return (
        <div>
            <div className='bg-black w-full h-screen bg-cover bg-center relative overflow-hidden'>
                <Zoom>
                    <img className='w-full h-full object-cover' src={banner} alt="" />
                </Zoom>

                <div className='mx-auto w-full div-for-responsive'>
                    <div className='relative'>
                        <div>
                            <Fade left big cascade>
                                <h1 className='text-center text-white text-5xl font-bold uppercase text-to-responsive mb-8'>" A photograph is a secret about a secret</h1>
                            </Fade>
                            <Fade right big cascade>
                                <h1 className='text-center text-white text-5xl font-bold uppercase text-to-responsive2'>The more it tells you the less you know. "</h1>
                            </Fade>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;