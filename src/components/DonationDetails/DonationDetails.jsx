import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './DonationDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLS } from '../../utilities/localstorage';

const DonationDetails = () => {
    const donates = useLoaderData();

    const { id } = useParams()
    const idInt = parseInt(id);
    const donate = donates.find(donate => donate.id === idInt)

    const { picture, price, text_color, title, des } = donate;

    const handleAddToList = () => {
        toast("You have successfully donated.");
        addToLS(id);
    }

    return (
        <div className='my-10 m-4'>
            <div className="relative">
                <div className="relative">
                    <img className='w-full ' src={picture} alt="" />
                    <div className='w-full absolute transform -translate-y-1/2 left-0 right-0 -bottom-20 py-20 bg-[#0b0b0b] opacity-50'>

                    </div>

                </div>
                <div className="absolute transform -translate-y-1/2 left-10 right-0 bottom-5">
                    <button onClick={handleAddToList} className='p-4 text-[#fff] rounded-lg text-xl font-semibold' style={{ backgroundColor: text_color }}>Donate ${price}</button>
                </div>
            </div>
            <div className="my-10">
                <h2 className='text-[#0B0B0B] text-4xl font-bold'>{title}</h2>
                <p className='text-base text-[#0b0b0bb3] font-normal mt-8 text-justify'>{des}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;