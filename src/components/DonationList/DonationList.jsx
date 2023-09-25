import React, { useEffect, useState } from 'react';
import { getStoredList } from '../../utilities/localstorage';
import DonationListCard from '../DonationListCard/DonationListCard';

const DonationList = () => {


    const [donates, setDonates] = useState([]);
    const [donateList,setDonateList]=useState([]);

    useEffect(() => {
        fetch('donationList.json')
            .then(res => res.json())
            .then(data => setDonates(data));
    }, [])

    useEffect(() => {
        if (donates.length) {
            const saveDonateList = [];
            const storedDonateList = getStoredList();
            
            for (const id of storedDonateList) {
                const idInt = parseInt(id);
                const donate = donates.find(donate => donate.id === idInt);
                if (donate) {
                    saveDonateList.push(donate);
                }
            }
            setDonateList(saveDonateList);
        }
    }, [donates])

    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-16'>
            {
                donateList.map(donate => <DonationListCard
                    key={donate.id}
                    donate={donate}
                ></DonationListCard>)
            }
        </div>
    );
};

export default DonationList;