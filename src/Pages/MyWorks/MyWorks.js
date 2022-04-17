import React from 'react';
import './MyWorks.css';

const MyWorks = () => {
    return (
        <div className='lg:px-32'>

            <h1 className='text-center text-4xl font-semibold mt-5'>My Captures</h1>

            <div className='grid lg:grid-cols-4 lg:gap-5 mb-10 mt-16 photo-gallery'>

                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2021/08/08/20/37/mountains-6531903__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2021/08/08/10/34/ocean-6530523__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266__340.jpg" alt="" />
                <img className='rounded-lg mt-5 mx-auto' src="https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072__340.jpg" alt="" />

            </div>


            <div className=" mt-16 mb-32 container flex justify-center mx-auto">
                <div className="flex flex-row mx-auto">
                    <button type="button" className="bg-indigo-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-indigo-600 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                            </svg>
                            <p className="ml-2">Prev</p>
                        </div>
                    </button>
                    <button type="button" className="bg-indigo-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-indigo-600 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Next</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MyWorks;