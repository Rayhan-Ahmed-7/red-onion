import React from 'react';
import service1 from '../../images/adult-blur-blurred-background-687824.png';
import service2 from '../../images/chef-cook-food-33614.png';
import service3 from '../../images/architecture-building-city-2047397.png';
import {BiBus} from 'react-icons/bi';
import {BsBell} from 'react-icons/bs';
import {GrDeliver} from 'react-icons/gr';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const Services = () => {
    return (
        <div className='w-10/12 mx-auto my-6'>
            <h2 className='text-4xl font-semibold text-gray-700'>Why you choose us</h2>
            <p className='text-gray-600 py-4'>Barton waited twenty always repair in within we do. An delighted offending curiosity<br></br> my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div>
                    <img src={service1} alt="" />
                    <div className='flex mt-4 p-2'>
                        <div className='w-30'>
                        <BiBus className='p-2 text-4xl rounded-full text-white bg-rose-600'></BiBus>
                        </div>
                        <div className='pl-2'>
                            <h2 className='text-xl font-medium text-gray-800'>Fast Delevery</h2>
                            <p className='text-justify my-2 text-gray-600 tracking-tight leading-5'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <button className='flex items-center'>
                                <span className='text-teal-500'>see more</span> <BsFillArrowRightCircleFill className='text-green-500 ml-2 mt-1'></BsFillArrowRightCircleFill>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={service2} alt="" />
                    <div className='flex mt-4 p-2'>
                        <div className='w-30'>
                        <BsBell className='p-2 text-4xl rounded-full text-white bg-rose-600'></BsBell>
                        </div>
                        <div className='pl-2'>
                            <h2 className='text-xl font-medium text-gray-800'>A Good Auto Responder</h2>
                            <p className='text-justify my-2 text-gray-600 tracking-tight leading-5'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <button className='flex items-center'>
                                <span className='text-teal-500'>see more</span> <BsFillArrowRightCircleFill className='text-green-500 ml-2 mt-1'></BsFillArrowRightCircleFill>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={service3} alt="" />
                    <div className='flex mt-4 v'>
                        <div className='w-30'>
                        <GrDeliver className='p-2 text-4xl rounded-full text-white bg-rose-600'></GrDeliver>
                        </div>
                        <div className='pl-2'>
                            <h2 className='text-xl font-medium text-gray-800'>Home Delevery</h2>
                            <p className='text-justify my-2 text-gray-600 tracking-tight leading-5'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <button className='flex items-center'>
                                <span className='text-teal-500'>see more</span> <BsFillArrowRightCircleFill className='text-green-500 ml-2 mt-1'></BsFillArrowRightCircleFill>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;