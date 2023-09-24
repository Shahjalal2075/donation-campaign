import React from 'react';

const Donation = ({ donate }) => {
    const { title,picture,category,card_bg,category_bg,text_color } = donate
    return (
        <div className="card">
            <figure><img className='w-full' src={picture} alt={title} /></figure>
            <div className='p-4 rounded-b-lg' style={{backgroundColor: card_bg,color: text_color}} >
                <p className='w-1/3 text-center text-sm font-medium py-1 rounded-md ' style={{backgroundColor: category_bg}}>{category}</p>
                <h2 className=" text-xl font-semibold mt-3 ">{title}</h2>
            </div>
        </div>
    );
};

export default Donation;