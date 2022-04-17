import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-32'>

            <div className='p-10 border-2 rounded-lg border-gray-300 my-20'>

                <h1 className='text-3xl font-semibold'>What is the difference between authentication and authorization?</h1>
                <p className='mt-10'>
                    Authentication is the process or it's a way of knowing who those people really are and what is their identity. Whereas authorization is the method what specific apps, data, service, and files a user has to access to. In example, you can see facebook. Facebook is a social platform. It has many users around the world. Every user has a specific identity. When you first go to visit facebook.com you must resister there with your email and with many personal stuffs. You have to register once, then facebook keep your information so that if you come back after sometimes os some days, they can verify you and let you in. The resister method is authorization and the login method is authentication.
                </p>

            </div>

        </div>
    );
};

export default Blogs;