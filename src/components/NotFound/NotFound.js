import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[70vh]'>
            <h2 className='text-4xl uppercase text-gray-800 font-extrabold pt-20 text-center'>Sorry..! The Page You Looking For Is Not Found..!</h2>
            <button onClick={()=> navigate('/')} className='bg-rose-500 text-white p-3 rounded-md active:ring uppercase font-bold tracking-tight block mt-6 mx-auto'>Go Back</button>
        </div>
    );
};

export default NotFound;