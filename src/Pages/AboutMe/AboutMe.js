import { faLaptopCode, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import developer from '../../Assets/developer.jpeg';
import './AboutMe.css';
import githubLogo from '../../Assets/github.png';
import linkedinLogo from '../../Assets/linkedin.png';

const AboutMe = () => {
    return (
        <div className='py-12'>

            <div className=" h-screen w-full flex flex-row justify-center items-center">
                <div className="card w-2/5 mx-auto bg-gray-300 shadow-xl hover:shadow rounded-lg profile-card">
                    <img className="w-64 profile-photo mx-auto rounded-full -mt-20 border-8 border-gray-300" src={developer} alt="" />
                    <div className="text-center mt-2 text-3xl font-medium">Md. Ta-Seen Fuad Jeem</div>
                    <div className="text-center my-2 font-light text-sm"><FontAwesomeIcon className='mr-2' icon={faLaptopCode}></FontAwesomeIcon>Junior Web-Developer</div>
                    <div className="text-center  font-light text-sm"><FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon>Dhaka, Bangladesh</div>
                    <div className="px-6 text-center mt-2 font-light text-sm">
                        <p className='font-semibold'>
                            " My name is Jeem. I have been very interested in technology since childhood. Now i want to be a developer. To me web-developing is not only a career option. It is also an emotion to me. I have found the right path for me. I want to walk on this path as far as I can. And I will not stop until i become a successful Web-Developer. "
                        </p>
                    </div>
                    <hr className="mt-8" />
                    <div className="flex p-4">
                        <a href='https://github.com/TaseenFuadJeem' className="w-1/2 text-center">
                            <img className='inline-block w-9' src={githubLogo} alt="" /> Github
                        </a>
                        <div className="w-0 border border-gray-300">

                        </div>
                        <a href='https://www.linkedin.com/in/taseen-fuad-jeem/' className="w-1/2 text-center">
                            <img className='inline-block w-9' src={linkedinLogo} alt="" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;