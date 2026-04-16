import React from 'react';

const StaticCard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 w-10/12 mx-auto'>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7'>
                <h2 className='font-semibold'>10</h2>
                <p className='text-[#64748B]'>Total Friends</p>
             </div>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7'>
                <h2 className='font-semibold'>4</h2>
                <p className='text-[#64748B]'>On Track</p>
             </div>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7'>
                <h2 className='font-semibold'>6</h2>
                <p className='text-[#64748B]'>Need Attention</p>
             </div>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7'>
                <h2 className='font-semibold'>12</h2>
                <p className='text-[#64748B]'>Interactions This Months</p>
             </div>
        </div>
    );
};

export default StaticCard;