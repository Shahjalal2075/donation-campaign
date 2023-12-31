import React from 'react';
import { Link } from 'react-router-dom';

const DonationListCard = ({ donate }) => {

    const { id, picture, text_color, category_bg, category, title, price, card_bg } = donate;

    return (
        <div className="card card-side bg-base-100">
            <figure><img className='w-full rounded-l-lg' src={picture} alt="" /></figure>
            <div className="card-body lg:px-8 md:px-8 px-4 py-4 rounded-r-lg" style={{ backgroundColor: card_bg }}>
                <p className='w-2/3 lg:w-1/3 md:w-1/3 text-center text-sm font-medium py-1 rounded-md ' style={{ backgroundColor: category_bg, color: text_color }}>{category}</p>
                <h2 className="card-title text-xs lg:text-xl md:text-xl font-semibold">{title}</h2>
                <p className='text-sm font-semibold my-1' style={{ color: text_color }}>${price}.00</p>
                <div className="card-actions ">
                    <Link to={`/donate/${id}`} className='px-2 py-1 lg:py-2 lg:px-3 md:py-2 md:px-3 text-[#fff] rounded-lg text-xs lg:text-base md:text-base font-semibold' style={{ backgroundColor: text_color }}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DonationListCard;