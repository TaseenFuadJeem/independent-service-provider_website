import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='lg:px-32 blog-container'>

            <div className='p-10 border-2 rounded-lg border-gray-300 my-20'>

                <h1 className='text-3xl font-semibold'>What is the difference between authentication and authorization?</h1>
                <p className='mt-10'>
                    Authentication is the process or it's a way of knowing who those people really are and what is their identity. Whereas authorization is the method what specific apps, data, service, and files a user has to access to. In example, you can see facebook. Facebook is a social platform. It has many users around the world. Every user has a specific identity. When you first go to visit facebook.com you must resister there with your email and with many personal stuffs. You have to register once, then facebook keep your information so that if you come back after sometimes os some days, they can verify you and let you in. The resister method is authorization and the login method is authentication.
                </p>

            </div>

            <div className='p-10 border-2 rounded-lg border-gray-300 my-20'>

                <h1 className='text-3xl font-semibold'>What other Services does firebase provide other than authentication?</h1>
                <p className='mt-10'>
                    Firebase is originally developed by Firebase inc and later owned by Google. It provides a lots of Services that really helps you to your developments. You can develop high-quality mobile and web apps to grow your business and skills. It is compatible with all plat forms, like iOS, Android, Websites. With the help of Firebase, developers don't need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the Services which every developers wants and Firebase give them with very efficient and fast performance.
                </p>

            </div>

        </div>
    );
};

export default Blogs;