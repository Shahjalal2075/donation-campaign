import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className=" relative">
            <img className='banner-img' src="https://i.ibb.co/tJvpFgT/Rectangle-4281.png" alt="" />
            <div className='absolute transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <h2 className='text-center text-[#0B0B0B] font-bold lg:text-4xl md:text-4xl text-xl lg:my-10 md:my-10 my-6'>I Grow By Helping People In Need</h2>
                <div className="flex justify-center">
                    <input type="text" placeholder="Search here...." class=" text-sm font-normal input border-[#DEDEDE] lg:w-80 md:w-80 w-52 bg-white rounded-l-lg" />
                    <button className='bg-[#FF444A] rounded-r-lg text-[#fff] px-6'>Search</button>
                </div>

            </div>
            
        </div>


    );
};

export default Banner;