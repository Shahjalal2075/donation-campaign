import React from 'react';
import { getStoredList } from '../../utilities/localstorage';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Statistics.css';

const Statistics = () => {

    const storedDonateList = getStoredList();
    const data = storedDonateList.length;
    const percent = ((data / 12) * 100).toFixed(2);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div style={{ width: 500, height: 500 }}>
                <CircularProgressbar
                    value={percent}
                    strokeWidth={50}
                    styles={buildStyles({
                        pathColor: `#00C49F`,
                        trailColor: `#FF444A`,
                        strokeLinecap: 'butt',
                    })}
                />
            </div>
            <div className="flex gap-12 m-12">
                <div className="flex justify-center items-center">
                    <h2 className='text-[#0B0B0B] text-lg font-normal mr-4'>Your Donation</h2>
                    <div className="w-28 h-2 bg-[#00C49F]"></div>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className='text-[#0B0B0B] text-lg font-normal mr-4'>Total Donation</h2>
                    <div className="w-28 h-2 bg-[#FF444A]"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;