import React from 'react';
import { getStoredList } from '../../utilities/localstorage';

const Statistics = () => {

    const storedDonateList = getStoredList();
    console.log(storedDonateList);

    return (
        <div>
            <h2>Statistics: </h2>
        </div>
    );
};

export default Statistics;