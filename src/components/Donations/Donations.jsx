import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';

const Donations = () => {
    const [donate, setDonate] = useState([]);

    useEffect(() => {
        fetch('donationList.json')
            .then(res => res.json())
            .then(data => setDonate(data));
    }, [])


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4  md:grid-cols-2 md:gap-4 my-16'>
            {
                donate.map(donate => <Donation
                    key={donate.id}
                    donate={donate}
                ></Donation>)
            }
        </div>
    );
};

export default Donations;