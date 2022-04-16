import React from 'react';
import errorPage from '../../Assets/error-page.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-96 mx-auto my-auto mt-16' src={errorPage} alt="" />
            <h1 className='text-center text-5xl font-bold mb-16'>Sorry, Page not found !!</h1>
        </div>
    );
};

export default NotFound;